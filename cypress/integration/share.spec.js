

/*
 * @copyright Copyright (c) 2020 Julius Härtl <jus@bitgrid.net>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import { randHash } from '../utils/'
const randUser = randHash()

describe('Open test.md in viewer', function() {
	before(function () {
		// Init user
		cy.nextcloudCreateUser(randUser, 'password')
		cy.login(randUser, 'password')

		// Upload test files
		cy.uploadFile('test.md', 'text/markdown')
		cy.uploadFile('test.md', 'text/markdown', 'test2.md')
		cy.createFolder('folder')
		cy.uploadFile('test.md', 'text/markdown', 'folder/test.md')
		cy.visit('/apps/files')
		cy.get('#fileList tr[data-file="test.md"]', {timeout: 10000})
			.should('contain', 'test.md')

		// FIXME: files app is thowing the following error for some reason
		// Uncaught TypeError: Cannot read property 'protocol' of undefined
		// Same for appswebroots setting in tests
		cy.on('uncaught:exception', (err, runnable) => {
			return false
		})
	})
	after(function () {
		cy.visit('/apps/files')
		cy.logout()
	})

	it('Shares the file as a public read only link', function () {
		cy.visit('/apps/files', { timeout: 10000 })
		cy.wait(1000)
		cy.get('#fileList tr[data-file="test.md"] a.action-share', {timeout: 10000}).trigger('click')
		cy.get('#app-sidebar')
			.should('be.visible')
		cy.get('#app-sidebar a#sharing').trigger('click')
		cy.get('#app-sidebar button.new-share-link').trigger('click')
		cy.get('#app-sidebar a.sharing-entry__copy')
			.should('have.attr', 'href').and('include', '/s/')
			.then((href) => {
				cy.visit(href)
				cy.window().then(win => {
					win.OC.appswebroots['files_texteditor'] = true
					cy.wait(1000)
					cy.get('#editor', { timeout: 4000 }).should('be.visible')
					cy.get('#editor .ProseMirror').should('contain', 'Hello world')
					cy.get('#editor .ProseMirror h2').should('contain', 'Hello world')
				})
			})
	})

	it('Shares the file as a public link with write permissions', function () {
		cy.visit('/apps/files')
		cy.wait(1000)
		cy.get('#fileList tr[data-file="test2.md"] a.action-share', {timeout: 10000}).trigger('click')
		cy.get('#app-sidebar')
			.should('be.visible')
		cy.get('#app-sidebar a#sharing').trigger('click')
		cy.get('#app-sidebar button.new-share-link').trigger('click')
		cy.get('#app-sidebar .sharing-link-list .action-item__menutoggle').trigger('click')
		cy.get('#app-sidebar .sharing-link-list .action-item__menu input[type=checkbox]').first().check({ force: true })
		cy.get('#app-sidebar .sharing-link-list .action-item__menu input[type=checkbox]', { timeout: 4000 }).first().should('be.checked')
		cy.get('#app-sidebar a.sharing-entry__copy')
			.should('have.attr', 'href').and('include', '/s/')
			.then((href) => {
				cy.visit(href)
				cy.window().then(win => {
					win.OC.appswebroots['files_texteditor'] = true
					cy.wait(1000)
					cy.get('#editor', {timeout: 10000}).should('be.visible')
					cy.get('#editor .ProseMirror').should('contain', 'Hello world')
					cy.get('#editor .ProseMirror h2').should('contain', 'Hello world')
					cy.get('#editor .menubar .menubar-icons .icon-undo').should('be.visible')
					cy.get('#editor .menubar .menubar-icons .icon-redo').should('be.visible')
					cy.get('#editor .menubar .menubar-icons .icon-bold').should('be.visible')
				})
			})
	})

	it('Opens the editor as guest', function () {
		cy.visit('/apps/files')
		cy.wait(1000)
		cy.get('#fileList tr[data-file="test2.md"] a.action-share', {timeout: 10000}).trigger('click')
		cy.get('#app-sidebar')
			.should('be.visible')
		cy.get('#app-sidebar a#sharing').trigger('click')
		cy.get('#app-sidebar a.sharing-entry__copy')
			.should('have.attr', 'href').and('include', '/s/')
			.then((href) => {
				cy.logout()
				cy.visit(href)
				cy.window().then(win => {
					win.OC.appswebroots['files_texteditor'] = true
					cy.wait(1000)
					cy.get('#editor', {timeout: 10000}).should('be.visible')
					cy.get('#editor .ProseMirror').should('contain', 'Hello world')
					cy.get('#editor .ProseMirror h2').should('contain', 'Hello world')
					cy.get('#editor .menubar .menubar-icons .icon-undo').should('be.visible')
					cy.get('#editor .menubar .menubar-icons .icon-redo').should('be.visible')
					cy.get('#editor .menubar .menubar-icons .icon-bold').should('be.visible')
				})
			})
	})

	it('Shares a folder as a public read only link', function () {
		cy.visit('/apps/files', { timeout: 10000 })
		cy.wait(1000)
		cy.get('#fileList tr[data-file="folder"] a.action-share', {timeout: 10000}).trigger('click')
		cy.get('#app-sidebar')
			.should('be.visible')
		cy.get('#app-sidebar a#sharing').trigger('click')
		cy.get('#app-sidebar button.new-share-link').trigger('click')
		cy.get('#app-sidebar a.sharing-entry__copy')
			.should('have.attr', 'href').and('include', '/s/')
			.then((href) => {
				cy.visit(href)
				cy.window().then(win => {
					win.OC.appswebroots['files_texteditor'] = true
					cy.wait(1000)
					cy.openFile('test.md')
					cy.get('#editor-container', { timeout: 4000 }).should('be.visible')
					cy.get('#editor .ProseMirror').should('contain', 'Hello world')
					cy.get('#editor .ProseMirror h2').should('contain', 'Hello world')
				})
			})
	})


})
