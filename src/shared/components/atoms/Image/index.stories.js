import React from 'react'
import { storiesOf } from '@kadira/storybook'
import styled from 'styled-components'
import Image from '.'

const ImageDecorator = (story) => {
	const ImageWrapper = styled.div`
		width: 200px;
		height: auto;
	`
	return (
		<ImageWrapper>{story()}</ImageWrapper>
	)
}

storiesOf('Image', module)
	.addDecorator(ImageDecorator)
  .add('default', () => (
    <Image src="http://placehold.it/140x140" />
  ))
	.add('rounded', () => (
    <Image type="rounded" src="http://placehold.it/140x140" />
  ))
	.add('circle', () => (
    <Image type="circle" src="http://placehold.it/140x140" />
  ))
	.add('thumbnail', () => (
    <Image type="thumbnail" src="http://placehold.it/140x140" />
  ))
