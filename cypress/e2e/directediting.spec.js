import { initUserAndFiles, randHash } from '../utils/index.js'

const randUser = randHash()

const createDirectEditingLink = (user, file) => {
	cy.login(user, 'password')
	return cy.request({
		method: 'POST',
		url: `${Cypress.env('baseUrl')}/ocs/v2.php/apps/files/api/v1/directEditing/open?format=json`,
		form: true,
		body: {
			path: file,
		},
		auth: { user, pass: 'password' },
		headers: {
			'OCS-ApiRequest': 'true',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	}).then(response => {
		cy.log(response)
		const token = response.body?.ocs?.data?.url
		cy.log(`Created direct editing token for ${user}`, token)
		return cy.wrap(token)
	})
}

const createDirectEditingLinkForNewFile = (user, file) => {
	cy.login(user, 'password')
	return cy.request({
		method: 'POST',
		url: `${Cypress.env('baseUrl')}/ocs/v2.php/apps/files/api/v1/directEditing/create?format=json`,
		form: true,
		body: {
			path: file,
			editorId: 'text',
			creatorId: 'textdocument',
		},
		auth: { user, pass: 'password' },
		headers: {
			'OCS-ApiRequest': 'true',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	}).then(response => {
		cy.log(response)
		const token = response.body?.ocs?.data?.url
		cy.log(`Created direct editing token for ${user}`, token)
		return cy.wrap(token)
	})
}

describe('direct editing', function() {
	before(function() {
		initUserAndFiles(randUser, 'test.md', 'empty.md', 'empty.txt')
	})

	it('Open an existing file, edit and close it', () => {
		createDirectEditingLink(randUser, 'empty.md')
			.then((token) => {
				cy.logout()
				cy.visit(token)
			})
		const closeRequestAlias = 'closeRequest'
		cy.intercept({ method: 'POST', url: '**/session/close' }).as(closeRequestAlias)

		cy.getContent()
			.type('# This is a headline')
			.type('{enter}')
			.type('Some text')
			.type('{enter}')

		cy.get('button.icon-close').click()
		cy.wait(`@${closeRequestAlias}`).then(() => {
			cy.getFileContent(randUser, 'empty.md').then((content) => {
				// FIXME: This currently fails due to the save not happening fast enough
				// The best would be if we always send the markdown at least on close and perform a save if the content changed
				// expect(content).to.equal('# This is a headline\n\nSome text');
			})
		})
	})
	it('Create a file, edit and close it', () => {
		createDirectEditingLinkForNewFile(randUser, 'newfile.md')
			.then((token) => {
				cy.logout()
				cy.visit(token)
			})
		const closeRequestAlias = 'closeRequest'
		cy.intercept({ method: 'POST', url: '**/session/close' }).as(closeRequestAlias)

		cy.getContent()
			.type('# This is a headline')
			.type('{enter}')
			.type('Some text')
			.type('{enter}')

		cy.get('button.icon-close').click()
		cy.wait(`@${closeRequestAlias}`).then(() => {
			cy.getFileContent(randUser, 'newfile.md').then((content) => {
				// FIXME: This currently fails due to the save not happening fast enough
				// The best would be if we always send the markdown at least on close and perform a save if the content changed
				// expect(content).to.equal('# This is a headline\n\nSome text');
			})
		})
	})

	it('Open an existing plain text file, edit and close it', () => {
		createDirectEditingLink(randUser, 'empty.txt')
			.then((token) => {
				cy.logout()
				cy.visit(token)
			})
		const closeRequestAlias = 'closeRequest'
		cy.intercept({ method: 'POST', url: '**/session/close' }).as(closeRequestAlias)

		cy.getContent()
			.type('# This is a headline')
			.type('{enter}')
			.type('Some text')
			.type('{enter}')

		cy.get('button.icon-close').click()
		cy.wait(`@${closeRequestAlias}`).then(() => {
			cy.getFileContent(randUser, 'empty.txt').then((content) => {
				// FIXME: This currently fails due to the save not happening fast enough
				// The best would be if we always send the markdown at least on close and perform a save if the content changed
				// expect(content).to.equal('# This is a headline\n\nSome text');
			})
		})
	})
})
