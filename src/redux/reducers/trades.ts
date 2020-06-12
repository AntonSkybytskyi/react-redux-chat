import { 
  TradesActionType, 
  DELETE_TRADE, 
  MARK_AS_PAID, 
  MARK_AS_READ_SELLER, 
  MARK_AS_READ_BUYER, 
  MARK_AS_UNREAD_SELLER, 
  MARK_AS_UNREAD_BUYER 
} from '../types/trades';

export enum TradeStatus {
  PAID = 'paid',
  NOT_PAID = 'notPaid'
}

export interface TradeBuyer {
  username: string;
  positive: number;
  negative: number;
  avatart?: string;
}

export interface TradeItem {
  id: string;
  status: TradeStatus,
  paymentMethod: string;
  buyerId: number;
  buyer: TradeBuyer;
  btc: number;
  hash: string;
  deleted?: boolean;
  unreadBuyer: boolean;
  unreadSeller: boolean;
}

export type TradesState = TradeItem[];

const initialState: TradesState = [
  {
    id: 'some-long-string',
    status: TradeStatus.PAID,
    paymentMethod: 'Amazon Gift Card',
    btc: 0.00542345,
    hash: 'hash',
    buyerId: 1,
    buyer: {
      username: 'John Doe',
      positive: 30,
      negative: 2,
      // avatart: 'img-here'
    },
    unreadBuyer: false,
    unreadSeller: false,
  },
  {
    id: 'some-long-string-2',
    status: TradeStatus.NOT_PAID,
    paymentMethod: 'PayPal',
    btc: 0.30,
    hash: 'hash-2',
    buyerId: 1,
    buyer: {
      username: 'John Doe',
      positive: 33,
      negative: 0,
    },
    unreadBuyer: true,
    unreadSeller: true,
  }
];
export default (state: TradesState = initialState, action: TradesActionType) =>  {
  switch (action.type) {
    case MARK_AS_PAID: {
      return state.map((trade: TradeItem) => {
        return trade.id === action.payload.id ? { ...trade, status: TradeStatus.PAID } : trade;
      });
    }
    case DELETE_TRADE: {
      return state.map((trade: TradeItem) => {
        return trade.id === action.payload.id ? { ...trade, deleted: true } : trade;
      });
    }
    case MARK_AS_READ_SELLER: {
      return state.map((trade: TradeItem) => {
        return trade.id === action.payload.id ? { ...trade, unreadSeller: false } : trade;
      });
    }
    case MARK_AS_READ_BUYER: {
      return state.map((trade: TradeItem) => {
        return trade.id === action.payload.id ? { ...trade, unreadBuyer: false } : trade;
      });
    }
    case MARK_AS_UNREAD_SELLER: {
      return state.map((trade: TradeItem) => {
        return trade.id === action.payload.id ? { ...trade, unreadSeller: true } : trade;
      });
    }
    case MARK_AS_UNREAD_BUYER: {
      return state.map((trade: TradeItem) => {
        return trade.id === action.payload.id ? { ...trade, unreadBuyer: true } : trade;
      });
    }
    default:
      return state;
  }
}
