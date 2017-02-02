import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
  margin: 0;
  padding: 0;
  display: flex;
`

const LogoHeader = ({ children }) => (
  <Header>
    {children}
  </Header>
)

export default LogoHeader