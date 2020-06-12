import { TradesActionType, MARK_AS_PAID, DELETE_TRADE, MARK_AS_READ_BUYER, MARK_AS_READ_SELLER } from '../types/trades';

export function markAsPaid(id: string): TradesActionType {
  return {
    type: MARK_AS_PAID,
    payload: { id },
  };
}

export function deleteTrade(id: string): TradesActionType {
  return {
    type: DELETE_TRADE,
    payload: { id },
  };
}

export function markAsReadBuyer(id: string): TradesActionType {
  return {
    type: MARK_AS_READ_BUYER,
    payload: { id },
  }
}

export function markAsReadSeller(id: string): TradesActionType {
  return {
    type: MARK_AS_READ_SELLER,
    payload: { id },
  }
}
