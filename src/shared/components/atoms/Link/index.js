import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Link = styled.a`
	font-family: ${font('primary')};
	text-decoration: none;
	font-weight: 500;
	color: ${palette({ grayscale: 0 }, 1)};
	&:hover {
		text-decoration: underline;
	}
`

Link.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  to: PropTypes.string
}

Link.defaultProps = {
  palette: 'primary'
}

export default Link
