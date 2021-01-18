import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const updateCustomerReducer = (state = initialState.selectedCustomers.lastSelectedCustomer, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_CUSTOMER_BEGIN:
            return state;
        case actionTypes.UPDATE_CUSTOMER_SUCCESS:
            return action.payload;
        case actionTypes.UPDATE_CUSTOMER_ERROR:
            return state
        default:
            return state;
    }
}
