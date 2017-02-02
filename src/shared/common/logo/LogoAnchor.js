import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Anchor = styled(Link)`
  padding-top: 12px;
  padding-bottom: 12px;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: #333
`

const LogoAnchor = () => (
  <Anchor to="/">Brand</Anchor>
)

export default LogoAnchor