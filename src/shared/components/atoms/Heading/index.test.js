import React from 'react'
import renderer from 'react-test-renderer'
import Heading from '.'

describe('Heading component', () => {
	it('renders children when passed in', () => {
		const tree = renderer.create(
	    <Heading>Test heading</Heading>
	  ).toJSON()
	  expect(tree).toMatchSnapshot()
	})

	it('renders props when passed in', () => {
		const tree = renderer.create(
	    <Heading id="test"> Test heading</Heading>
	  ).toJSON()
	  expect(tree).toMatchSnapshot()
	})

	it('renders h1 by default', () => {
		const tree = renderer.create(
	    <Heading />
	  ).toJSON()
	  expect(tree).toMatchSnapshot()
	})

	it('renders hLevel when level is passed in', () => {
		const tree = renderer.create(
	    <Heading level={2}>Test heading</Heading>
	  ).toJSON()
	  expect(tree).toMatchSnapshot()
	})
})
