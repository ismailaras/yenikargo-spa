import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const deleteCustomerReducer = (state = initialState.selectedCustomers.lastSelectedCustomer, action) => {
    switch (action.type) {
        case actionTypes.DELETE_CUSTOMER_BEGIN:
            return state;
        case actionTypes.DELETE_CUSTOMER_SUCCESS:
            return action.payload;
        case actionTypes.DELETE_CUSTOMER_ERROR:
            return state
        default:
            return state;
    }
}
