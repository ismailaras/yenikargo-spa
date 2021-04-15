import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const selectPaymentsReducer = (state = initialState.selectedPayments, action) => {
    switch (action.type) {
        case actionTypes.SELECT_PAYMENTS:
            const [lastItem] = action.payload.slice(-1)
            if (action.payload.length === 0) {
                state.toggledClearRows = !state.toggledClearRows
            }
            return {
                allSelectedPayments: action.payload,
                lastSelectedPayment: lastItem,
                toggledClearRows: state.toggledClearRows
            }
        default:
            return state;
    }
}
