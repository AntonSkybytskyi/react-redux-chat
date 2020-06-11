import { TradesActionType, DELETE_TRADE, MARK_AS_PAID } from "../types/trades";

export enum TradeStatus {
  PAID = 'paid',
  NOT_PAID = 'notPaid'
}

export interface TradeBuyer {
  name: string;
  positive: number;
  negative: number;
  avatart?: string;
}

export interface TradeItem {
  id: string;
  status: TradeStatus,
  paymentMethod: string;
  buyer: TradeBuyer;
  btc: number;
  hash: string;
  deleted?: boolean;
}

export type TradesState = TradeItem[];

const initialState: TradesState = [
  {
    id: 'some-long-string',
    status: TradeStatus.PAID,
    paymentMethod: 'Amazon Gift Card',
    btc: 0.00542345,
    hash: 'hash',
    buyer: {
      name: 'John Doe',
      positive: 30,
      negative: 2,
      // avatart: 'img-here'
    }
  },
  {
    id: 'some-long-string-2',
    status: TradeStatus.NOT_PAID,
    paymentMethod: 'PayPal',
    btc: 0.30,
    hash: 'hash-2',
    buyer: {
      name: 'Jane Doe',
      positive: 33,
      negative: 0,
    }
  }
];
export default (state: TradesState = initialState, action: TradesActionType) =>  {
  switch (action.type) {
    case MARK_AS_PAID: {
      return state.map((trade: TradeItem) => {
        return trade.id === action.payload.id ? { ...trade, status: TradeStatus.PAID } : trade;
      });
    }
    case DELETE_TRADE:
      return state.map((trade: TradeItem) => {
        return trade.id === action.payload.id ? { ...trade, deleted: true } : trade;
      });
    default:
      return state;
  }
}
