import { TradesActionType, MARK_AS_PAID, DELETE_TRADE } from '../types/trades';

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
