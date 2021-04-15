import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const showCustomersByNumberReducer = (state = initialState.customersByNumber, action) => {
    switch (action.type) {
        case actionTypes.SHOW_CUSTOMERS_BY_NUMBER_BEGIN:
            return state;
        case actionTypes.SHOW_CUSTOMERS_BY_NUMBER_SUCCESS:
            return action.payload;
        case actionTypes.SHOW_CUSTOMERS_BY_NUMBER_ERROR:
            return []
        default:
            return state;
    }
}
