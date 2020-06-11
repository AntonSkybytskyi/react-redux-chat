import React from 'react'
import { TradeItem } from '../redux/reducers/trades';
import TradeListItem from './TradeListItem';

interface TradeListProps {
  list: TradeItem[];
}

export default function TradeList(props: TradeListProps) {
  const { list } = props;
  return (
    <>
      {list.map((item: TradeItem) => {
        return <TradeListItem key={item.id} item={item} />
      })}
    </>
  )
}
