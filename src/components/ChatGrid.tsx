import React, { useContext } from 'react'
import styled from 'styled-components';
import { TradeItem } from '../redux/reducers/trades';
import UserAvatar from './UserAvatar';
import { ITradesContext, TradesContext } from '../pages/Trades/TradesProvider';
import { useSelector } from 'react-redux';
import useExchangeRate from '../shared/helpers/useExchangeRate';
import { RootState } from '../redux/reducers';
import ColoredText from '../shared/ui/ColoredText';
import TradeStatus from './TradeStatus';

interface ChatGridProps {
  trade: TradeItem;
}
export default function ChatGrid(props: ChatGridProps) {
  const { trade } = props;
  const { currency } = useContext<ITradesContext>(TradesContext);

  const { amount } = useExchangeRate(trade.btc, currency?.rate_float);
  const trades = useSelector((state: RootState) => state.trades);
  return (
      <Grid>
        <GridItem>
            <div>
              <UserAvatar username={trade.buyer.username} image={trade.buyer.avatart} />
            </div>
            <div>
              <ColoredText success>{trade.buyer.positive}</ColoredText>
              /
              <ColoredText danger>{trade.buyer.negative}</ColoredText>
            </div>
          </GridItem>
          <GridItem>
            <div className="label">
              # of trades
            </div>
            <div>
              {trades.length}
            </div>
          </GridItem>
          <GridItem>
            <div className="label">
              Trade Status
            </div>
            <div>
              <TradeStatus status={trade.status} />
            </div>
          </GridItem>
          <GridItem>
            <div className="label">
              Trade hash
            </div>
            <div>
              {trade.hash}
            </div>
          </GridItem>
          <GridItem>
            <div className="label">
              Amount USD
            </div>
            <div>
              {amount}
            </div>
          </GridItem>
          <GridItem>
            <div className="label">
              Amount BTC
            </div>
            <div>
              {trade.btc}
            </div>
          </GridItem>
        </Grid>
  )
}


const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GridItem = styled.div`
  display: flex;
  flex: 1 1 50%;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  border-bottom: 1px solid ${props => props.theme.lightGrey};
  &:nth-child(odd) {
    border-right: 1px solid ${props => props.theme.lightGrey};
  }
  > div {
    flex: 1 1 100%;
    text-align: center;
    justify-content: center;
    display: flex;
  }
  .label {
    font-weight: bold;
    padding-bottom: 5px;
  }
`;
