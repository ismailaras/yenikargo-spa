import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const findAdvancedPaymentsReducer = (state = initialState.payments, action) => {
    switch (action.type) {
        case actionTypes.FIND_ADVANCED_PAYMENTS_BEGIN:
            return state;
        case actionTypes.FIND_ADVANCED_PAYMENTS_SUCCESS:
            return action.payload;
        case actionTypes.FIND_ADVANCED_PAYMENTS_ERROR:
            return []
        default:
            return state;
    }
}
