import { UserType } from '../reducers/currentUser';
import { CurrentUserActionType, CHANGE_USER } from '../types/currentUser';


export function changeUser(user: UserType): CurrentUserActionType {
  return {
    type: CHANGE_USER,
    payload: { user },
  }
}
