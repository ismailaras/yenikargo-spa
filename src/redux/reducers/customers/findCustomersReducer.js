import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const findCustomersReducer = (state = initialState.customers, action) => {
    switch (action.type) {
        case actionTypes.FIND_CUSTOMERS_BEGIN:
            return state;
        case actionTypes.FIND_CUSTOMERS_SUCCESS:
            return action.payload;
        case actionTypes.FIND_CUSTOMERS_ERROR:
            return []
        default:
            return state;
    }
}
