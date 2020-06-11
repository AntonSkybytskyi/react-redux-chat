import React, { createContext, ReactNode } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { Currency } from '../../redux/reducers/currency';

interface TradesProviderProps {
  children?: ReactNode;
}

export interface ITradesContext {
  currency?: Currency;
}

export const TradesContext = createContext<ITradesContext>({});

export default function TradesProvider({ children }: TradesProviderProps) {
  const currency: Currency = useSelector(
    (state: RootState) => state.currencies['USD'],
  );
  const context = { 
    currency, 
  };
  return (
    <TradesContext.Provider value={context}>
        {children}
    </TradesContext.Provider>
  )
}