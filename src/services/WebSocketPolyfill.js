/*
 * @copyright Copyright (c) 2022 Max <max@nextcloud.com>
 *
 * @author Max <max@nextcloud.com>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import { logger } from '../helpers/logger.js'

/**
 *
 * @param {object} syncService - the sync service to build upon
 * @param {number} fileId - id of the file to open
 */
export default function initWebSocketPolyfill(syncService, fileId) {
	return class WebSocketPolyfill {

		#url
		#session
		#document
		binaryType
		onmessage
		onerror
		onclose
		onopen

		constructor(url) {
			this.url = url
			logger.debug(url, fileId)
			this.#registerHandlers({
				opened: ({ document, session }) => {
					this.#document = document
					logger.debug('opened ', document.currentVersion, session)
					this.#session = session
					this.onopen()
				},
				loaded: ({ document, session, content }) => {
					logger.debug('loaded ', document.currentVersion, session)
					this.#document = document
					this.#session = session
				},
				sync: ({ steps, document }) => {
					logger.debug('synced ', document.currentVersion, steps)
					this.#document = document
					if (steps) {
						steps.forEach(s => {
							this.onmessage({ data: s.step })
						})
					}
				},
			})
			syncService.open({
				fileId,
				filePath: syncService.options.filePath,
			})
		}

		#registerHandlers(handlers) {
			this.#handlers = handlers
			Object.entries(this.#handlers)
				.forEach(([key, value]) => syncService.on(key, value))
		}

		send(data) {
			syncService.sendSteps(() => {
				const doc = this.#document
				logger.debug('send steps ', doc.currentVersion, data)
				return {
					version: doc.currentVersion,
					steps: [data],
				}
			})
		}

		close() {
			Object.entries(this.#handlers)
				.forEach(([key, value]) => syncService.off(key, value))
			this.#handlers = []
			syncService.close()
			logger.debug('Websocket closed')
		}

	}
}
