import { CurrencyActionType, FETCH_CURRENCY_SUCCESS } from '../types/currency';


export function fetchCurrencySuccess(currencies: any): CurrencyActionType {
  return {
    type: FETCH_CURRENCY_SUCCESS,
    payload: currencies,
  }
}
export function fetchCurrencyFailed(error: any): CurrencyActionType {
  return {
    type: FETCH_CURRENCY_SUCCESS,
    payload: error,
  }
}