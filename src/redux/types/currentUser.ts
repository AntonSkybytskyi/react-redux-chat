import { UserType } from '../reducers/currentUser';

export const CHANGE_USER = 'CHANGE_USER';

export interface ChangeUser {
  type: typeof CHANGE_USER;
  payload: { 
    user: UserType;
  }
}

export type CurrentUserActionType = ChangeUser;