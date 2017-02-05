import React from 'react'
import renderer from 'react-test-renderer'
import Block from '.'

describe('Block component', () => {
	it('renders correctly', () => {
	  const tree = renderer.create(
	    <Block />
	  ).toJSON()
	  expect(tree).toMatchSnapshot()
	})

	it('renders children when passed in', () => {
	  const tree = renderer.create(
	    <Block>Test</Block>
	  ).toJSON()
	  expect(tree).toMatchSnapshot()
	})

	it('renders props if passed in', () => {
	  const tree = renderer.create(
	    <Block id="test" palette="primary" reverse />
	  ).toJSON()
	  expect(tree).toMatchSnapshot()
	})
})
