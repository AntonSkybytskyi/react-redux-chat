import { FETCH_CURRENCY_SUCCESS, CurrencyActionType } from "../types/currency";

export interface CurrencyState {
  [currency: string]: Currency;
}

export interface Currency {
  code: string;
  description: string;
  rate: string;
  rate_float: number;
}

const initialState: CurrencyState = {};

export default (state: CurrencyState = initialState, action: CurrencyActionType) => {
  switch (action.type) {
    case FETCH_CURRENCY_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
