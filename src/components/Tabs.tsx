import React from 'react';
import { NavLink } from 'react-router-dom';
import { sellBitcoinsRoutes, routes } from '../routes';
import styled from 'styled-components';


export default function Tabs() {
  const links = [
    { path: sellBitcoinsRoutes.OVERVIEW, viewValue: 'Overview' },
    { path: sellBitcoinsRoutes.TRADES, viewValue: 'Trades' },
    { path: sellBitcoinsRoutes.DISPUTES, viewValue: 'Disputes' },
    { path: sellBitcoinsRoutes.OFFERS, viewValue: 'Your Offers' },
    { path: sellBitcoinsRoutes.MY_TEAM, viewValue: 'My team' },
    { path: sellBitcoinsRoutes.TRADE_HISORY, viewValue: 'Trade history' },
  ]
  return (
    <Content>
      <List>
        {links.map(({ path, viewValue }) => {
          return <ListItem key={path} to={routes.SELL_BTC + path} activeClassName="selected">{viewValue}</ListItem>        
        })}
      </List>
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  padding: 0 2rem;
  border-bottom: 1px solid #cecece;
  @media all and (max-width: 500px) {
    padding: 0;
    overflow-y: scroll;
    min-height: 50px;
  }
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    flex: 1;
    padding: 0;
    margin: 0;
`;

const ListItem = styled(NavLink)`
  display: inline-block;
  color: #000;
  padding: 1rem;
  border-right: 1px solid #cecece;
  text-decoration: none;
  &:first-of-type {
    border-left: 1px solid #cecece;
  }
  &.selected {
    background: #f6f8fa;
    font-weight: bold;
  }
  @media all and (max-width: 500px) {
    min-width: 100px;

    text-align: center;
  }
`;