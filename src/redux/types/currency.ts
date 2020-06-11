export const FETCH_CURRENCY_SUCCESS = 'FETCH_CURRENCY_SUCCESS';
export const FETCH_CURRENCY_FAILED = 'FETCH_CURRENCY_FAILED';

export interface FetchCurrencySuccess {
  type: typeof FETCH_CURRENCY_SUCCESS;
  payload: any;
}

export interface FetchCurrencyFailed {
  type: typeof FETCH_CURRENCY_FAILED;
  payload: any;
}

export type CurrencyActionType = FetchCurrencySuccess | FetchCurrencyFailed;