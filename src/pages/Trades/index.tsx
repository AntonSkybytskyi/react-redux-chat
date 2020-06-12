import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Sidebar from '../../shared/ui/Sidebar';
import TradeList from '../../components/TradeList';
import Chat from '../../components/Chat';
import { TradeItem } from '../../redux/reducers/trades';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { RootState } from '../../redux/reducers';
import TradeProvider from './TradesProvider';
import useFetchCurrency from '../../shared/helpers/useFetchCurrency';

interface MathParams {
  id: string;
}

export default function Trades(props: RouteComponentProps<MathParams>) {
  const [selectedTrade, setSelectedTrade] = useState<TradeItem | null>();
  useFetchCurrency();
 
  const { id: tradeId } = props.match.params;
  const list = useSelector(
    (state: RootState) => state.trades.filter((trade: TradeItem) => !trade.deleted),
  );
  useEffect(() => {
    const selected = list.find((i) => i.id === tradeId);
    setSelectedTrade(selected || null);
  }, [tradeId, list]);


  if (tradeId && selectedTrade === null) {
    return <Redirect to="./" />
  }
  return (
    <TradeProvider>
      <Content>
        <Sidebar className="side">
          <TradeList list={list} />
        </Sidebar>
        <MainContent>
          {selectedTrade && <Chat item={selectedTrade} />}
        </MainContent>
      </Content>
    </TradeProvider>

  )
}


const Content = styled.div`
  display: flex;
  height: calc(100vh - 51px - 66px);
  .side {
    border-right: 1px solid #cecece;
  }
`;

const MainContent = styled.div`
  flex: 3;
`;

