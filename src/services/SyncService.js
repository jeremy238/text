/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
import axios from '@nextcloud/axios'

import PollingBackend from './PollingBackend'
import { endpointUrl } from './../helpers'
import { getVersion, sendableSteps } from 'prosemirror-collab'

const defaultOptions = {
	shareToken: null,
	forceRecreate: false,
	serialize: (document) => document,
}

const ERROR_TYPE = {
	/**
	 * Failed to save collaborative document due to external change
	 * collission needs to be resolved manually
	 */
	SAVE_COLLISSION: 0,
	/**
	 * Failed to push changes for MAX_REBASE_RETRY times
	 */
	PUSH_FAILURE: 1,

	LOAD_ERROR: 2,

	CONNECTION_FAILED: 3,

	SOURCE_NOT_FOUND: 4,
}

class SyncService {

	constructor(options) {
		this.eventHandlers = {
			/* Document state */
			opened: [],
			loaded: [],
			/* All initial steps fetched */
			fetched: [],
			/* received new steps */
			sync: [],
			/* state changed (dirty) */
			stateChange: [],
			/* error */
			error: [],
			/* Events for session and document meta data */
			change: [],
			/* Emitted after successful save */
			save: [],
		}

		this.backend = new PollingBackend(this)

		this.options = Object.assign({}, defaultOptions, options)

		this.document = null
		this.session = null
		this.sessions = []

		this.steps = []
		this.stepClientIDs = []

		return this
	}

	async open({ fileId, filePath, initialSession }) {
		let connectionData = null
		if (typeof initialSession === 'undefined') {
			try {
				const response = await this._openDocument({ fileId, filePath })
				connectionData = response.data
			} catch (error) {
				if (!error.response || error.code === 'ECONNABORTED') {
					this.emit('error', ERROR_TYPE.CONNECTION_FAILED, {})
				} else {
					this.emit('error', ERROR_TYPE.LOAD_ERROR, error.response.status)
				}
				throw error
			}
		} else {
			connectionData = initialSession
		}

		this.document = connectionData.document
		this.document.readOnly = connectionData.readOnly
		this.session = connectionData.session

		this.emit('opened', {
			document: this.document,
			session: this.session,
		})
		return this._fetchDocument().then(({ data }) => {
			this.emit('loaded', {
				document: this.document,
				session: this.session,
				documentSource: '' + data,
			})
		})
	}

	startSync() {
		this.backend.connect()
	}

	_openDocument({ fileId, filePath }) {
		return axios.get(endpointUrl('session/create', !!this.options.shareToken), {
			params: {
				fileId: fileId,
				filePath,
				token: this.options.shareToken,
				guestName: this.options.guestName,
				forceRecreate: this.options.forceRecreate,
			},
		})
	}

	_fetchDocument() {
		return axios.get(
			endpointUrl('session/fetch', !!this.options.shareToken), {
				transformResponse: [(data) => data],
				params: {
					documentId: this.document.id,
					sessionId: this.session.id,
					sessionToken: this.session.token,
					token: this.options.shareToken,
				},
			}
		)
	}

	updateSession(guestName) {
		if (!this.isPublic()) {
			return
		}
		return axios.post(
			endpointUrl('session', !!this.options.shareToken), {
				documentId: this.document.id,
				sessionId: this.session.id,
				sessionToken: this.session.token,
				token: this.options.shareToken,
				guestName,
			}
		).then(({ data }) => {
			this.session = data
			return data
		}).catch((error) => {
			console.error('Failed to update the session', error)
			return Promise.reject(error)
		})
	}

	sendSteps(_sendable) {
		const sendable = _sendable || sendableSteps(this.state)
		if (!sendable) {
			return
		}
		return this.backend.sendSteps(sendable)
	}

	stepsSince(version) {
		return {
			steps: this.steps.slice(version),
			clientIDs: this.stepClientIDs.slice(version),
		}
	}

	_receiveSteps({ steps, document }) {
		const newSteps = []
		for (let i = 0; i < steps.length; i++) {
			const singleSteps = steps[i].data
			if (!Array.isArray(singleSteps)) {
				console.error('Invalid step data, skipping step', steps[i])
				// TODO: recover
				continue
			}
			singleSteps.forEach(step => {
				this.steps.push(step)
				newSteps.push({
					step,
					clientID: steps[i].sessionId,
				})
			})
		}
		this.emit('sync', { steps: newSteps, document })
		console.debug('receivedSteps', 'newVersion', this._getVersion())
	}

	_getVersion() {
		if (this.state) {
			return getVersion(this.state)
		}
		return 0
	}
	_getDocument() {
		if (this.state) {
			return this.state.doc
		}
	}

	_getContent() {
		return this.options.serialize(this._getDocument())
	}

	save() {
		if (this.backend.save) {
			this.backend.save()
		}
	}

	forceSave() {
		if (this.backend.forceSave) {
			this.backend.forceSave()
		}
	}

	close() {
		let closed = false
		return new Promise((resolve, reject) => {
			this.on('save', () => {
				this._close().then(() => {
					closed = true
					resolve()
				}).catch(() => resolve())
			})
			setTimeout(() => {
				if (!closed) {
					this._close().then(() => {
						resolve()
					}).catch(() => resolve())
				}
			}, 2000)
			this.save()
		})
	}

	_close() {
		if (this.document === null || this.session === null) {
			return Promise.resolve()
		}
		this.backend.disconnect()
		return axios.get(
			endpointUrl('session/close', !!this.options.shareToken), {
				params: {
					documentId: this.document.id,
					sessionId: this.session.id,
					sessionToken: this.session.token,
					token: this.options.shareToken,
				},
			}
		)
	}

	on(event, callback, _this) {
		this.eventHandlers[event].push(callback.bind(_this))
		return this
	}

	emit(event, data, additionalData) {
		if (typeof this.eventHandlers[event] !== 'undefined') {
			this.eventHandlers[event].forEach(function(callback) {
				callback(data, additionalData)
			})
		} else {
			console.error('Event not found', event)
		}
	}

	isPublic() {
		return !!this.options.shareToken
	}

}

export default SyncService
export { SyncService, ERROR_TYPE }
