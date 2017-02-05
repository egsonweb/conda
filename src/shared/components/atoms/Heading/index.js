import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'

export const fontSize = ({ level }) => `${0.75 + (1 * (1 / level))}rem`

const styles = css`
  font-family: ${font('heading')};
  font-weight: ${props => weightMap[props.weight]};
  font-size: ${fontSize};
  margin: 0;
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;
  color: ${palette({ grayscale: 0 }, 1)};
`

const weightMap = {
	'thin': 300,
	'regular': 500,
	'bold': 700
}

const Heading = styled(({ level, children, reverse, palette, theme, ...props }) =>
  React.createElement(`h${level}`, props, children)
)`${styles}`

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
	weight: PropTypes.oneOf([
		'thin',
		'regular',
		'bold'
	])
}

Heading.defaultProps = {
  level: 1,
  palette: 'grayscale',
	weight: 'regular'
}

export default Heading
