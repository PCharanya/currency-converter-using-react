import { GET_COUNTRY_LIST, CURRENCY_VALUE } from './types';
import { getCurrencies, getCurrencyValue } from './apiCalls';

export const currencyList = () => {
    return dispatch => {
        getCurrencies()
            .then(res => {
                dispatch({
                   type: GET_COUNTRY_LIST,
                   payload: res.data
                });
            })
            .catch(err => {
                console.error('error response getting list of currencies', err);
            });
    }
}

export const getConversionValue = (amount, fromCurrency, toCurrency) => {
    return (dispatch) => {
        getCurrencyValue(amount, fromCurrency, toCurrency)
            .then(res => {
                dispatch({
                   type: CURRENCY_VALUE,
                   payload: res.data
                });
            })
            .catch(err => {
                console.error('error response from api call', err);
            });
    };
}