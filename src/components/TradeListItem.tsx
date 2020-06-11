import React, { useContext } from 'react'
import { TradeItem, TradeStatus } from '../redux/reducers/trades'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { routes, sellBitcoinsRoutes } from '../routes';
import { Indicator } from '../shared/ui/Indicator';
import UserAvatar from './UserAvatar';
import { TradesContext, ITradesContext } from '../pages/Trades/TradesProvider';
import useExchangeRate from '../shared/helpers/useExchangeRate';

interface TradeListItemProps {
  item: TradeItem;
}

export default function TradeListItem(props: TradeListItemProps) {
  const { item } = props;
  const statuses = {
    [TradeStatus.PAID]: 'PAID',
    [TradeStatus.NOT_PAID]: 'NOT PAID'
  };
  const { btc } = item;
  const { currency } = useContext<ITradesContext>(TradesContext);
  const { amount } = useExchangeRate(btc, currency && currency.rate_float);

  return (
    <Content to={`${routes.SELL_BTC + sellBitcoinsRoutes.TRADES}/${item.id}`} activeClassName="selected">
      <Details>
        <p className="header">
          {/* <Indicator unread={true} /> */}
          {item.buyer.name} <strong>is buying</strong>
        </p>
        <p className="desciption">
          <strong>{item.paymentMethod}</strong>
        </p>
        <p>
          <small>{amount} USD({item.btc} BTC)</small>
        </p>
      </Details>
      <TradeInfo>
        <UserAvatar className="avatar" image={item.buyer.avatart} username={item.buyer.name} />
        <Status>
          {statuses[item.status]}
        </Status>
      </TradeInfo>
    </Content>
  )
}

const Content = styled(NavLink)`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  text-decoration: none;
  color: ${props => props.theme.grey};
  border-bottom: 1px solid ${props => props.theme.lightGrey};

  &.selected {
    border-right: 3px solid ${props => props.theme.grey};
  }
`;

const Details = styled.div`
  flex: 1 1 0;
  position: relative;
  @media all and (max-width: 950px) {
    display: none;
    flex: 0;
  }
  p {
    padding-left: 16px;
    margin: 0;
    &.indicator {
      padding-left: 3px;
    }
    &.header {
      margin-bottom: 8px;
    }
    &.desciption {
      color: #000;
    }
  }
`;

const TradeInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
  .avatar {
    margin-bottom: 8px;
    align-self: center;
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }
`;

const Status = styled.div`
  color: ${props => props.theme.green};
  font-weight: bold;
  text-align: center;
`;
