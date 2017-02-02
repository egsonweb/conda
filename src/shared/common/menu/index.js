import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Column } from 'hedron'

import Logo from 'shared/common/logo'
import MenuLink from 'shared/common/menu/MenuLink'
import MenuList from 'shared/common/menu/MenuList'

const MenuNav = styled.nav`
  background-color: #eee
  border-bottom: 1px #ccc solid;
`

const Menu = () => (
  <MenuNav>
    <Row alignItems="center">
      <Column fluid lg={4} className="logo">
        <Logo />
      </Column>
      <Column fluid lg={8} className="links">
        <MenuList>
          <MenuLink activeOnlyWhenExact={true} to="/" label="Home" />
          <MenuLink activeOnlyWhenExact={true} to="/about" label="About" />
          <MenuLink activeOnlyWhenExact={true} to="/contact" label="Contact" />
        </MenuList>
      </Column>
    </Row>
  </MenuNav>
)

export default Menu
