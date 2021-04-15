import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const findReportsReducer = (state = initialState.paymentsReport, action) => {
    switch (action.type) {
        case actionTypes.FIND_PAYMENTS_REPORT_BEGIN:
            return state;
        case actionTypes.FIND_PAYMENTS_REPORT_SUCCESS:
            return action.payload;
        case actionTypes.FIND_PAYMENTS_REPORT_ERROR:
            return []
        default:
            return state;
    }
}
