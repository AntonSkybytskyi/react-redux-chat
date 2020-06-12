import React, { useContext } from 'react';
import { TradeItem } from '../redux/reducers/trades';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { routes, sellBitcoinsRoutes } from '../routes';
import Indicator from '../shared/ui/Indicator';
import UserAvatar from './UserAvatar';
import { TradesContext, ITradesContext } from '../pages/Trades/TradesProvider';
import useExchangeRate from '../shared/helpers/useExchangeRate';
import TradeStatus from './TradeStatus';

interface TradeListItemProps {
  item: TradeItem;
}

export default function TradeListItem(props: TradeListItemProps) {
  const { item } = props;
  const { btc } = item;
  const { currency, isSeller, isBuyer } = useContext<ITradesContext>(TradesContext);
  const { amount } = useExchangeRate(btc, currency && currency.rate_float);
  const unread = (isSeller && item.unreadSeller) || (isBuyer && item.unreadBuyer);

  return (
    <Content to={`${routes.SELL_BTC + sellBitcoinsRoutes.TRADES}/${item.id}`} activeClassName="selected">
      <IndicatorWrapper>
        <Indicator unread={unread} />
      </IndicatorWrapper>

      <Details>
        <p className="header">
          {item.buyer.username} <strong>is buying</strong>
        </p>
        <p className="desciption">
          <strong>{item.paymentMethod}</strong>
        </p>
        <p>
          <small>{amount} USD({item.btc} BTC)</small>
        </p>
      </Details>
      <TradeInfo>
        <UserAvatar className="avatar" image={item.buyer.avatart} username={item.buyer.username} />
        <TradeStatus status={item.status} />
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
  position: relative;
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

const IndicatorWrapper = styled.div`
  position: absolute;
  @media all and (max-width: 950px) {
      top: 21px;
  }
`;
