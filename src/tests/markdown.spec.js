import { createEditor } from './../EditorFactory';
import { createMarkdownSerializer } from './../extensions/Markdown'
import spec from "./fixtures/spec"
import markdownit from './../markdownit'
import { typesAvailable } from './../markdownit/callouts'

const markdownThroughEditor = (markdown) => {
	const tiptap = createEditor({
		content: markdownit.render(markdown),
		enableRichEditing: true
	})
	const serializer = createMarkdownSerializer(tiptap.schema)
	return serializer.serialize(tiptap.state.doc)
}

const markdownThroughEditorHtml = (html) => {
	const tiptap = createEditor({
		content: html,
		enableRichEditing: true
	})
	const serializer = createMarkdownSerializer(tiptap.schema)
	return serializer.serialize(tiptap.state.doc)
}

// Goal: Input (commonmark) markdown should result in same output markdown
describe('Commonmark', () => {
	const skippedMarkdownTests = [
		// contain HTML
		21, 31, 344, 474, 475, 476, 642, 643,
		// contain comments
		309, 308,
		// < > are escaped, because HTML is disabled for markdown-it
		//201, 490, 493, 523, 535
	];

	spec.forEach((entry) => {
		// We do not support HTML
		if (entry.section === 'HTML blocks' ||
			entry.section === 'Raw HTML'	||
			skippedMarkdownTests.indexOf(entry.example) !== -1) {
			return
		}

		test('serializing ' + entry.example, () => {
			const expected = markdownit.render(entry.markdown)
			const serialized = markdownThroughEditorHtml(expected)

			try {
				expect(markdownit.render(serialized)).toBe(expected)
			} catch(e) {
				// This is just for debugging, so jest shows also the difference within the two markdown source codes
				expect(markdownit.render(serialized) + '\n\n' + serialized).toBe(expected + '\n\n' + entry.markdown)
			}
		})
	})
})

describe('Commonmark images', () => {
	beforeAll(() => {
		// Make sure html tests pass
		// entry.section === 'HTML blocks' || entry.section === 'Raw HTML'
		markdownit.set({ html: true})
	})
	afterAll(() => {
		markdownit.set({ html: false})
	})

	test('commonmark 513', () => {
		expect(markdownit.render('[![moon](moon.jpg)](/uri)\n')).toBe('<figure><a href=\"/uri\"><img src=\"moon.jpg\" alt=\"moon\" /></a></figure>\n')
	})
})

describe('Markdown though editor', () => {
	test('headlines', () => {
		expect(markdownThroughEditor('# Test')).toBe('# Test')
		expect(markdownThroughEditor('## Test')).toBe('## Test')
		expect(markdownThroughEditor('### Test')).toBe('### Test')
		expect(markdownThroughEditor('#### Test')).toBe('#### Test')
		expect(markdownThroughEditor('##### Test')).toBe('##### Test')
	})
	test('hard breaks', () => {
		expect(markdownThroughEditor('hard  \nbreak')).toBe('hard  \nbreak')
		expect(markdownThroughEditor('hard\\\nbreak')).toBe('hard  \nbreak')
		expect(markdownThroughEditor('soft\nbreak')).toBe('soft\nbreak')
	})
	test('inline format', () => {
		expect(markdownThroughEditor('**Test**')).toBe('**Test**')
		expect(markdownThroughEditor('__Test__')).toBe('__Test__')
		expect(markdownThroughEditor('_Test_')).toBe('*Test*')
		expect(markdownThroughEditor('~~Test~~')).toBe('~~Test~~')
		expect(markdownThroughEditor('Have an `inline code` element')).toBe('Have an `inline code` element')
	})
	test('ul', () => {
		expect(markdownThroughEditor('- foo\n- bar')).toBe('* foo\n* bar')
		expect(markdownThroughEditor('- foo\n\n- bar')).toBe('* foo\n* bar')
		expect(markdownThroughEditor('- foo\n\n\n- bar')).toBe('* foo\n* bar')
	})
	test('ol', () => {
		expect(markdownThroughEditor('1. foo\n2. bar')).toBe('1. foo\n2. bar')
	})
	test('paragraph', () => {
		// Test whitespace characters are untouched
		expect(markdownThroughEditor('foo\nbar\n\nfoobar\nfoo\tbar')).toBe('foo\nbar\n\nfoobar\nfoo\tbar')
	})
	test('links', () => {
		expect(markdownThroughEditor('[test](foo)')).toBe('[test](foo)')
		expect(markdownThroughEditor('[test](foo "bar")')).toBe('[test](foo "bar")')
		// Issue #2703
		expect(markdownThroughEditor('[bar\\\\]: /uri\n\n[bar\\\\]')).toBe('[bar\\\\](/uri)')
	})
	test('images', () => {
		expect(markdownThroughEditor('text ![test](foo) moretext')).toBe('text ![test](foo) moretext')
		// regression introduced in #3282. To be fixed in #3428.
		expect(markdownThroughEditor('![test](foo)')).toBe('![test](foo)\n\n')
	})
	test('special characters', () => {
		expect(markdownThroughEditor('"\';&.-#><')).toBe('"\';&.-#><')
	})
	test('code block', () => {
		expect(markdownThroughEditor('```\n<?php echo "Hello World";\n```')).toBe('```\n<?php echo "Hello World";\n```')
		// Issue #3328
		expect(markdownThroughEditor('```python\nprint("Hello World")\n```')).toBe('```python\nprint("Hello World")\n```')
	})
	test('markdown untouched', () => {
		// Issue #2703
		expect(markdownThroughEditor('[bar\\\\]: /uri\n\n[bar\\\\]')).toBe('[bar\\\\](/uri)')
		expect(markdownThroughEditor('## Test \\')).toBe('## Test \\')
		expect(markdownThroughEditor('- [ [asd](sdf)')).toBe('* [ [asd](sdf)')
	})
	test('checkboxes', () => {
		// Invalid ones but should be syntactical unchanged
		expect(markdownThroughEditor('- [F] asd')).toBe('* [F] asd')
		expect(markdownThroughEditor('- [ [asd](sdf)')).toBe('* [ [asd](sdf)')
		// Valid, whitespace is allowed inside the checkbox
		expect(markdownThroughEditor('- [\t] asd')).toBe('* [ ] asd')
		expect(markdownThroughEditor('- [ ] asd')).toBe('* [ ] asd')
		// Valid ones
		expect(markdownThroughEditor('- [ ] [asd](sdf)')).toBe('* [ ] [asd](sdf)')
		expect(markdownThroughEditor('- [x] [asd](sdf)')).toBe('* [x] [asd](sdf)')
		expect(markdownThroughEditor('- [ ] foo\n- [x] bar')).toBe('* [ ] foo\n* [x] bar')
		expect(markdownThroughEditor('- [x] foo\n' +
			'  - [ ] bar\n' +
			'  - [x] baz\n' +
			'- [ ] bim')).toBe('* [x] foo\n' +
				'  * [ ] bar\n' +
				'  * [x] baz\n' +
				'* [ ] bim')
		expect(markdownThroughEditor('- [X] asd')).toBe('* [x] asd')
		expect(markdownThroughEditor('-   [X] asd')).toBe('* [x] asd')

		expect(markdownThroughEditorHtml('<ul class="contains-task-list"><li><input type="checkbox" checked /><label>foo</label></li></ul>')).toBe('* [x] foo')
		expect(markdownThroughEditorHtml('<ul class="contains-task-list"><li><input type="checkbox" /><label>test</label></li></ul>')).toBe('* [ ] test')
		expect(markdownThroughEditorHtml('<ul class="contains-task-list"><li><input type="checkbox" checked /><div><h2>Test</h2><p><strong>content</strong></p></div></li></ul>')).toBe('* [x] Test\n\n  **content**')
		expect(markdownThroughEditorHtml('<ul class="contains-task-list"><li><input type="checkbox" checked /><p>Test</p><h1>Block level headline</h1></li></ul>')).toBe('* [x] Test\n\n  # Block level headline')
	})

	test('horizontal rule', () => {
		expect(markdownThroughEditor('foo\n\n---\n\nfoobar')).toBe('foo\n\n---\n\nfoobar')
	})

	test('escaping', () => {
		const test = '(Asdf [asdf asdf](asdf asdf) asdf asdf asdf asdf asdf asdf asdf asdf asdf)\n' +
			'\n' +
			'* [asdf asdf asdf/asdf](Asdf Asdf)\n' +
			'* asdf asdf asdf [a--f asdf asdf](a--f Asdf Asdf)\n' +
			'* [Asdf asdf asdf asdf asdf asdf](Asdf asdf)'
		expect(markdownThroughEditor(test)).toBe(test)
		expect(markdownThroughEditor('This is a [test] for escaping')).toBe('This is a [test] for escaping')
		expect(markdownThroughEditor('This is a [test for escaping')).toBe('This is a [test for escaping')
	})

	test('callouts', () => {
		typesAvailable.forEach(type => {
			const entry = `::: ${type}\n!${type}!\n\njust do it\n\n:::`
			expect(markdownThroughEditor(entry)).toBe(entry)
		})
	})

	test('mentions', () => {
		expect(markdownThroughEditor('@[username](mention://user/id)')).toBe(' @[username](mention://user/id) ')
	})
})

describe('Markdown serializer from html', () => {
	test('paragraph', () => {
		expect(markdownThroughEditorHtml('<p>hello</p><p>world</p>')).toBe('hello\n\nworld')
	})
	test('hard line breaks', () => {
		expect(markdownThroughEditorHtml('<p>hard<br />break</p>')).toBe('hard  \nbreak')
		expect(markdownThroughEditorHtml('<p>hard<br>break</p>')).toBe('hard  \nbreak')
		expect(markdownThroughEditorHtml('<p>soft\nbreak</p>')).toBe('soft\nbreak')
	})
	test('links', () => {
		expect(markdownThroughEditorHtml('<a href="foo">test</a>')).toBe('[test](foo)')
	})
	test('images', () => {
		expect(markdownThroughEditorHtml('<img src="image" alt="description" />')).toBe('![description](image)')
		expect(markdownThroughEditorHtml('<p><img src="image" alt="description" /></p>')).toBe('![description](image)')
		expect(markdownThroughEditorHtml('<p>text<img src="image" alt="description" />moretext</p>')).toBe('text![description](image)moretext')
	})
	test('checkboxes', () => {
		expect(markdownThroughEditorHtml('<ul class="contains-task-list"><li><input type="checkbox" checked /><label>foo</label></li></ul>')).toBe('* [x] foo')
		expect(markdownThroughEditorHtml('<ul class="contains-task-list"><li><input type="checkbox" /><label>test</label></li></ul>')).toBe('* [ ] test')
		expect(markdownThroughEditorHtml('<ul class="contains-task-list"><li><input type="checkbox" checked /><div><h2>Test</h2><p><strong>content</strong></p></div></li></ul>')).toBe('* [x] Test\n\n  **content**')
		expect(markdownThroughEditorHtml('<ul class="contains-task-list"><li><input type="checkbox" checked /><p>Test</p><h1>Block level headline</h1></li></ul>')).toBe('* [x] Test\n\n  # Block level headline')
	})

	test('callouts', () => {
		typesAvailable.forEach(type => {
			expect(markdownThroughEditorHtml(
				`<div data-callout="${type}" class="callout callout-${type}"><p>!${type}!</p>just do it<p></p></div>`
			)).toBe(`::: ${type}\n!${type}!\n\njust do it\n\n:::`)
			expect(markdownThroughEditorHtml(
				`<p class="callout ${type}">!${type}!</p>`
			)).toBe(`::: ${type}\n!${type}!\n\n:::`)
		})
	})
	test('callouts with handbook classes', () => {
		expect(markdownThroughEditorHtml(
			`<p class="callout warning">!warning!</p>`
		)).toBe(`::: warn\n!warning!\n\n:::`)
	})

	test('table cell escaping', () => {
		// while '|' has no special meaning in commonmark is has to be escaped for GFM tables
		expect(markdownThroughEditorHtml('<table><tr><th>greetings</th></tr><tr><td>hello | hallo</td></tr></table>')).toBe('| greetings |\n|-----------|\n| hello \\| hallo |\n')
	})

	test('front matter', () => {
		expect(markdownThroughEditorHtml('<pre id="frontmatter"><code>some: value</code></pre><h1>Heading</h1>')).toBe('---\nsome: value\n---\n\n# Heading')
		// Test --- within front matter is allowed
		expect(markdownThroughEditorHtml('<pre id="frontmatter"><code>---</code></pre><h1>Heading</h1>')).toBe('----\n---\n----\n\n# Heading')
	})

	test('mentions', () => {
		expect(markdownThroughEditorHtml('<span class="mention" data-label="username" data-type="user" data-id="id">username</span>')).toBe(' @[username](mention://user/id) ')
	})
})

describe('Trailing nodes', () => {
	test('No extra transaction is added after loading', () => {
		const source = "# My heading\n\n* test\n* test2"
		const tiptap = createEditor({
			content: markdownit.render(source),
			enableRichEditing: true,
		})

		const jsonBefore = tiptap.getJSON()

		// Focus triggers a transaction which is adding the trailing node
		// this pushes a step through the collaboration plugin
		// Resulting markdown will not contain the trailing paragraph so everytime the tiptap instance is created from the html, this transaction gets dispatched
		tiptap.commands.focus()

		const jsonAfter = tiptap.getJSON()
		expect(jsonAfter).toStrictEqual(jsonBefore)

		const serializer = createMarkdownSerializer(tiptap.schema)
		const md = serializer.serialize(tiptap.state.doc)
		expect(md).toBe(source)
	})
})
