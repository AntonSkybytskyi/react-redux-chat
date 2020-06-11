import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { fetchCurrencySuccess, fetchCurrencyFailed } from '../actions/currency';
import { RootState } from '../reducers';

export const fetchCurrencyData = (): any => fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json').then(resp => resp.json());
const getDelayTime = (min: number, max: number) => {
  const random = Math.random() * (max - min)  + min;
  return Math.floor(random) * 1000;
}
const delay = (ms: number) => new Promise(res => setTimeout(res, ms))


export const fetchCurrencyAction = (): ThunkAction<void, RootState, unknown, Action> => async (dispatch) => {
  try {
    const { bpi } = await fetchCurrencyData();
    dispatch(fetchCurrencySuccess(bpi));

    const delayTime = getDelayTime(10, 60);
    await delay(delayTime);
    
    return dispatch(fetchCurrencyAction());
  } catch (error) {
    return dispatch(fetchCurrencyFailed(error))
  }
}