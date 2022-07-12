/**
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license AGPL-3.0-or-later
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

import { markInputRule, markPasteRule } from '@tiptap/core'
import { Bold, starInputRegex, starPasteRegex } from '@tiptap/extension-bold'

/**
 * Calculate the nesting level of marks
 * @param {...string} types Uppercase tag names to count nesting for
 */
export function nesting(...types) {
	const fn = (node) => {
		let el = node.parentElement
		let nesting = 0
		while (el !== null) {
			if ([...arguments].includes(el.tagName)) nesting++
			el = el.parentElement
		}
		return nesting
	}
	return fn
}

const Strong = Bold.extend({
	name: 'strong',

	excludes: '',

	addAttributes() {
		return {
			...this.parent?.(),
			nesting: {
				default: null,
				rendered: false,
				parseHTML: nesting('STRONG', 'B'),
			},
		}
	},

	addInputRules() {
		return [
			markInputRule({
				find: starInputRegex,
				type: this.type,
			}),
		]
	},

	addPasteRules() {
		return [
			markPasteRule({
				find: starPasteRegex,
				type: this.type,
			}),
		]
	},
})

export default Strong
