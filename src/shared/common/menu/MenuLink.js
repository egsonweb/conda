import React from 'react'
import styled from 'styled-components'
import { Route, Link } from 'react-router-dom'

const MenuListItem = styled.li`
  font-weight: ${props => props.match ? '500' : '300'}
`

const MenuItemLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 15px;
  color: #333;
`

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
      <MenuListItem match={match}>
        <MenuItemLink to={to}>{label}</MenuItemLink>
      </MenuListItem>
    )}/>
  )
}

export default MenuLink