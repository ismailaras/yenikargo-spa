import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const setCustomersFilterKeysReducer = (state = initialState.filteredCustomersKeys, action) => {
    switch (action.type) {
        case actionTypes.SET_CUSTOMERS_FILTER_KEYS:
            return action.payload;
        default:
            return state;
    }
}
