import { MessagesActionType, ADD_MESSAGE } from '../types/messages';

export function addMessage(text: string, authorId: number | null, tradeId: string): MessagesActionType {
  return {
    type: ADD_MESSAGE,
    payload: {
      text,
      authorId,
      tradeId,
    }
  }
}
