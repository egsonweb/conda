import React from 'react'
import renderer from 'react-test-renderer'
import Image from '.'

describe('Image component', () => {
	it('renders default image correctly', () => {
		const tree = renderer.create(
			<Image src="http://placehold.it/140/140" />
		).toJSON()
		expect(tree).toMatchSnapshot()
	})

	it('renders props when passed in', () => {
		const tree = renderer.create(
			<Image id="test" src="http://placehold.it/140/140" />
		).toJSON()
		expect(tree).toMatchSnapshot()
	})

	it('renders rounded type image', () => {
		const tree = renderer.create(
			<Image type="rounded" src="http://placehold.it/140/140" />
		).toJSON()
		expect(tree).toMatchSnapshot()
	})

	it('renders circle type image', () => {
		const tree = renderer.create(
			<Image type="circle" src="http://placehold.it/140/140" />
		).toJSON()
		expect(tree).toMatchSnapshot()
	})

	it('renders thumbnail type image', () => {
		const tree = renderer.create(
			<Image type="thumbnail" src="http://placehold.it/140/140" />
		).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
