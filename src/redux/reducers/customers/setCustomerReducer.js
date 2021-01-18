import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const selectCustomersReducer = (state = initialState.selectedCustomers, action) => {
    switch (action.type) {
        case actionTypes.SELECT_CUSTOMERS:
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}
