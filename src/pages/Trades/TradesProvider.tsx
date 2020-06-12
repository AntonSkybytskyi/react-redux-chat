import React, { createContext, ReactNode } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { Currency } from '../../redux/reducers/currency';
import { UserType } from '../../redux/reducers/currentUser';

interface TradesProviderProps {
  children?: ReactNode;
}

export interface ITradesContext {
  currency?: Currency;
  isSeller: boolean;
  isBuyer: boolean;
}

export const TradesContext = createContext<ITradesContext>({
  isSeller: false,
  isBuyer: false,
});

export default function TradesProvider({ children }: TradesProviderProps) {
  const currency: Currency = useSelector(
    (state: RootState) => state.currencies['USD'],
  );
  const user: UserType = useSelector(
    (state: RootState) => state.currentUser.user,
  )
  const context = { 
    currency,
    isSeller: user === UserType.SELLER,
    isBuyer: user === UserType.BUYER,
  };
  return (
    <TradesContext.Provider value={context}>
        {children}
    </TradesContext.Provider>
  )
}