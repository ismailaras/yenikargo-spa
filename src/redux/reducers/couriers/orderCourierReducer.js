import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const orderCourierReducer = (state = initialState.selectedCouriers.lastSelectedCourier, action) => {
    switch (action.type) {
        case actionTypes.ORDER_COURIER_BEGIN:
            return state;
        case actionTypes.ORDER_COURIER_SUCCESS:
            return action.payload;
        case actionTypes.ORDER_COURIER_ERROR:
            return state
        default:
            return state;
    }
}
