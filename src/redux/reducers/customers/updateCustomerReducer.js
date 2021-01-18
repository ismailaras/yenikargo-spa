import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const createCustomerReducer = (state = initialState.createdCustomer, action) => {
    switch (action.type) {
        case actionTypes.CREATE_CUSTOMER_BEGIN:
            return state;
        case actionTypes.CREATE_CUSTOMER_SUCCESS:
            return action.payload;
        case actionTypes.CREATE_CUSTOMER_ERROR:
            return state
        default:
            return state;
    }
}
