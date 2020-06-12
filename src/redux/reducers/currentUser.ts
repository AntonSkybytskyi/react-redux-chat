import { CurrentUserActionType, CHANGE_USER } from "../types/currentUser";

export enum UserType {
  SELLER = 'seller',
  BUYER = 'buyer'
}

export interface CurrentUserState {
  user: UserType;
}
export const initialState: CurrentUserState = {
  user: UserType.SELLER,
}; 

export default (state: CurrentUserState = initialState, action: CurrentUserActionType) => {
  switch (action.type) {
    case CHANGE_USER: {
      return {
        ...state,
        user: action.payload.user,
      }
    }
    default:
      return state;
  }
}
