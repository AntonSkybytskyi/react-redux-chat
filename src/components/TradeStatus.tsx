import React from 'react';
import { TradeStatus as StatusType } from '../redux/reducers/trades';
import styled from 'styled-components';
import ColoredText from '../shared/ui/ColoredText';

interface TradeStatusProps {
  status: StatusType;
}

export default function TradeStatus({ status }: TradeStatusProps) {
  const titles = {
    [StatusType.PAID]: 'PAID',
    [StatusType.NOT_PAID]: 'NOT PAID'
  };
  const isPaid = status === StatusType.PAID;
  return (
    <Content>
      <ColoredText success={isPaid}>
        {titles[status]}
      </ColoredText>
    </Content>
  )
}

const Content = styled.span`
  font-weight: bold;
  text-align: center;
`;