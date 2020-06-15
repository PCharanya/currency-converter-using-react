import { GET_COUNTRY_LIST, CURRENCY_VALUE } from '../actions/types';

const initialState = {
    countryList: [],
    currencyValue: {
        amount: 1,
        base: '',
        date: '',
        rates: []
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRY_LIST:
            return {
                ...state,
                countryList: action.payload
            }
            break;
        case CURRENCY_VALUE:
            return {
                ...state,
                currencyValue: action.payload
            }
        default:
            return state;
    }
}