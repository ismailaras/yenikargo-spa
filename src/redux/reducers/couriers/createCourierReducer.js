import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const createCourierReducer = (state = initialState.selectedCouriers.lastSelectedCourier, action) => {
    switch (action.type) {
        case actionTypes.CREATE_COURIER_BEGIN:
            return state;
        case actionTypes.CREATE_COURIER_SUCCESS:
            return action.payload;
        case actionTypes.CREATE_COURIER_ERROR:
            return state
        default:
            return state;
    }
}
