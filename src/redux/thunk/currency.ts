import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { fetchCurrencySuccess, fetchCurrencyFailed } from '../actions/currency';
import { RootState } from '../reducers';

export const fetchCurrencyData = (): any => fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json').then(resp => resp.json());

export const fetchCurrencyAction = (): ThunkAction<void, RootState, unknown, Action> => async (dispatch) => {
  try {
    const { bpi } = await fetchCurrencyData();
    return dispatch(fetchCurrencySuccess(bpi));
  } catch (error) {
    return dispatch(fetchCurrencyFailed(error))
  }
}