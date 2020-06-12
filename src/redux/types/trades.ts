export const MARK_AS_PAID = 'MARK_AS_PAID';
export const DELETE_TRADE = 'DELETE_TRADE';
export const MARK_AS_READ_BUYER = 'MARK_AS_READ_BUYER';
export const MARK_AS_READ_SELLER = 'MARK_AS_READ_SELLER';
export const MARK_AS_UNREAD_BUYER = 'MARK_AS_READ_BUYER';
export const MARK_AS_UNREAD_SELLER = 'MARK_AS_READ_SELLER';

export interface MarkAsPaid {
  type: typeof MARK_AS_PAID;
  payload: { id: string; }
}

export interface DeleteTrade {
  type: typeof DELETE_TRADE;
  payload: { id: string; }
}

export interface MarkAsReadBuyer {
  type: typeof MARK_AS_READ_BUYER;
  payload: { id: string; }
}
export interface MarkAsReadSeller {
  type: typeof MARK_AS_READ_SELLER;
  payload: { id: string; }
}

export interface MarkAsUnreadBuyer {
  type: typeof MARK_AS_UNREAD_BUYER;
  payload: { id: string; }
}
export interface MarkAsUnreadSeller {
  type: typeof MARK_AS_UNREAD_SELLER;
  payload: { id: string; }
}

export type TradesActionType = MarkAsPaid | DeleteTrade | MarkAsReadBuyer | MarkAsReadSeller | MarkAsUnreadBuyer | MarkAsUnreadSeller;
