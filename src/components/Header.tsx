import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { routes } from '../routes'



export default function Header() {
  const links = [
    { path: routes.BUY_BTC, viewValue: 'Buy bitcoins' },
    { path: routes.SELL_BTC, viewValue: 'Sell bitcoins' },
    { path: routes.WALLET, viewValue: 'Wallet' },
    { path: routes.SUPPORT, viewValue: 'Support' },
    { path: routes.ACCOUNT, viewValue: 'Your account' },
  ]
  return (
    <Content>
      <Title>
        PAXFUL
      </Title>
      <List>
        {links.map(({ path, viewValue }) => {
          return <ListItem key={path} to={path} activeClassName="selected">{viewValue}</ListItem>
        })}
      </List>
    </Content>
  )
}

const Content = styled.header`
  display: flex;
  background: #30364d;
  color: #fff;
  padding: .5rem 1.5rem;
`;

const Title = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  flex: 1;
`
const List = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 500px;

  @media all and (max-width: 500px) {
    display: none;
  }
`;
const ListItem = styled(NavLink)`
  display: inline-block;
  color: #fff;
  text-decoration: none;
  &.selected {
    text-decoration: underline;
  }
`;

