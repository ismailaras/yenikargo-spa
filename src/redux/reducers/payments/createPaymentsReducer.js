import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const createPaymentsReducer = (state = initialState.payments, action) => {
    switch (action.type) {
        case actionTypes.CREATE_PAYMENTS_BEGIN:
            return state;
        case actionTypes.CREATE_PAYMENTS_SUCCESS:
            return [action.payload];
        case actionTypes.CREATE_PAYMENTS_ERROR:
            return state
        default:
            return state;
    }
}
