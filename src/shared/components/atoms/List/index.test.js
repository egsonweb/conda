import React from 'react'
import renderer from 'react-test-renderer'
import List from '.'

describe('List component', () => {
	it('renders ul by default', () => {
	  const tree = renderer.create(
			<List>
				<li>Item-1</li>
				<li>Item-2</li>
			</List>
		).toJSON()
		expect(tree).toMatchSnapshot()
	})

	it('renders props when passed in', () => {
		const tree = renderer.create(
			<List id="test" palette="primary">
				<li>Item-1</li>
				<li>Item-2</li>
			</List>
		).toJSON()
		expect(tree).toMatchSnapshot()
	})

	it('renders ol when ordered prop is passed in', () => {
		const tree = renderer.create(
			<List ordered>
				<li>Item-1</li>
				<li>Item-2</li>
			</List>
		).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
