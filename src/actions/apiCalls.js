import axios from 'axios';

export const getCurrencies = () => axios.get('https://api.frankfurter.app/currencies');
export const getCurrencyValue = (amount, fromCurrency, toCurrency) => axios.get(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);