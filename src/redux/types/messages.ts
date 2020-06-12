export const ADD_MESSAGE = 'ADD_MESSAGE';

export interface AddMessage {
  type: typeof ADD_MESSAGE;
  payload: { 
    text: string;
    authorId: number | null;
    tradeId: string;
  }
}

export type MessagesActionType = AddMessage;
