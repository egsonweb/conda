import React from 'react'
import renderer from 'react-test-renderer'
import Paragraph from '.'

describe('Paragraph component', () => {
	it('renders children when passed in', () => {
	  const tree = renderer.create(
			<Paragraph>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, aperiam.
			</Paragraph>
		).toJSON()
		expect(tree).toMatchSnapshot()
	})

	it('renders props when passed in', () => {
		const tree = renderer.create(
			<Paragraph id="test">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, aperiam.
			</Paragraph>
		).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
