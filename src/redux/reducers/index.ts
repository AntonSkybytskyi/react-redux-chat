
import { combineReducers } from 'redux';
import trades, { TradesState } from './trades';
import currencies, { CurrencyState } from './currency';
import currentUser, { CurrentUserState } from './currentUser';
import messages from './messages';

export interface RootState {
  trades: TradesState;
  messages: any[];
  currentUser: CurrentUserState;
  currencies: CurrencyState;
}

export default combineReducers({ 
  trades, 
  currencies, 
  currentUser, 
  messages,
});
