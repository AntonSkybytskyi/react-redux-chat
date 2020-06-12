import React, { useContext } from 'react'
import styled from 'styled-components'
import { TradeItem, TradeStatus } from '../redux/reducers/trades';
import Button from '../shared/ui/Buttons';
import { useDispatch } from 'react-redux';
import { markAsPaid } from '../redux/actions/trades';
import ChatGrid from './ChatGrid';
import { ITradesContext, TradesContext } from '../pages/Trades/TradesProvider';

interface ChatDetailsProps {
  trade: TradeItem;
}

export default function ChatDetails(props: ChatDetailsProps) {
  const { trade } = props;
  const isNotPaid = trade.status === TradeStatus.NOT_PAID;
  const dispatch = useDispatch();

  const { isSeller } = useContext<ITradesContext>(TradesContext);

  const onReleaseButtonClicked = () => {
    dispatch(
      markAsPaid(trade.id)
    );
  };

  return (
    <Content>
      <ContentRow>
        You are trading with <strong>{trade.buyer.username}</strong>
        <br/>
        <small>Started 23 minutes ago</small>
      </ContentRow>
      { isSeller && <ContentRow>
          <Button primary={isNotPaid} onClick={onReleaseButtonClicked}>Release bitcoins</Button>
      </ContentRow> }

      <ContentRow>
        <ChatGrid trade={trade} /> 
      </ContentRow>
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ContentRow = styled.div`
  text-align: center;
  padding-bottom: 15px;
  small {
    color: ${props => props.theme.grey};
  }
`;
