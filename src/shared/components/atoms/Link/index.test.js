import React from 'react'
import renderer from 'react-test-renderer'
import Link from '.'

describe('Link component', () => {
	it('renders children when passed in', () => {
		const tree = renderer.create(
			<Link href="http://google.com">Test Link</Link>
		).toJSON();
		expect(tree).toMatchSnapshot()
	})

	it('renders props when passed in', () => {
		const tree = renderer.create(
			<Link href="http://google.com" id="test">Test Link</Link>
		).toJSON();
		expect(tree).toMatchSnapshot()
	})
})
