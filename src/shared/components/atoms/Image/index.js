import React, { PropTypes } from 'react'
import styled from 'styled-components'

const BaseImage = styled.img`
	width: 100%;
	max-width: 100%;
	height: auto;
	margin-bottom: 2rem;
	outline: none;
	border: none;
`

const RoundedImage = styled(BaseImage)`
	border-radius: 8px;
`

const CircleImage = styled(BaseImage)`
	border-radius: 50%;
`

const ThumbnailImage = styled(RoundedImage)`
	padding: 4px;
	background-color: #fff;
	border: 1px #ddd solid;
	display: inline-block;
`

const Image = ({type, ...props}) => {
	if (type === 'rounded') {
		return <RoundedImage {...props} />
	} else if (type === 'circle') {
		return <CircleImage {...props} />
	} else if (type === 'thumbnail') {
		return <ThumbnailImage {...props} />
	}
	return <BaseImage {...props} />
}

Image.propTypes = {
	type: PropTypes.string,
}

export default Image
