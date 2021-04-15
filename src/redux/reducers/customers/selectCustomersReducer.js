import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const selectCustomersReducer = (state = initialState.selectedCustomers, action) => {
    switch (action.type) {
        case actionTypes.SELECT_CUSTOMERS:
            const [lastItem] = action.payload.slice(-1)
            if (action.payload.length === 0) {
                state.toggledClearRows = !state.toggledClearRows
            }
            return {
                allSelectedCustomers: action.payload,
                lastSelectedCustomer: lastItem,
                toggledClearRows: state.toggledClearRows
            }
        case actionTypes.UPDATE_SELECTED_CUSTOMER_DATA:
            state.allSelectedCustomers.forEach(customer => {
                if (customer.id === action.payload.id) {
                    state.lastSelectedCustomer = action.payload;
                }
            })
            return {...state, lastSelectedCustomer: action.payload}
        case actionTypes.DELETE_SELECTED_CUSTOMER_DATA:
            return {...state, lastSelectedCustomer: {}}
        default:
            return state;
    }
}
