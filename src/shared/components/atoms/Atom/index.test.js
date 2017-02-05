import React from 'react'
import renderer from 'react-test-renderer'
import Atom from '.'

describe('Atom component', () => {
	it('renders correctly', () => {
	  const tree = renderer.create(
	    <Atom />
	  ).toJSON()
	  expect(tree).toMatchSnapshot()
	})

	it('renders children when passed in', () => {
	  const tree = renderer.create(
	    <Atom>Test</Atom>
	  ).toJSON()
	  expect(tree).toMatchSnapshot()
	})

	it('renders props if passed in', () => {
	  const tree = renderer.create(
	    <Atom id="test" />
	  ).toJSON()
	  expect(tree).toMatchSnapshot()
	})
})
