
export enum UserType {
  ADMIN = 'admin',
  CUSTOMER = 'customer'
}

export interface CurrentUserState {
  user: UserType;
}
export const initialState: CurrentUserState = {
  user: UserType.CUSTOMER,
}; 

export default (state: CurrentUserState = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
}
