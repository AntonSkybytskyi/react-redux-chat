export const MARK_AS_PAID = 'MARK_AS_PAID';
export const DELETE_TRADE = 'DELETE_TRADE';

export interface MarkAsPaid {
  type: typeof MARK_AS_PAID;
  payload: { id: string; }
}

export interface DeleteTrade {
  type: typeof DELETE_TRADE;
  payload: { id: string; }
}

export type TradesActionType = MarkAsPaid | DeleteTrade;
