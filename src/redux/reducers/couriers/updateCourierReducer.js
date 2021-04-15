import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const updateCourierReducer = (state = initialState.selectedCouriers.lastSelectedCourier, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_COURIER_BEGIN:
            return state;
        case actionTypes.UPDATE_COURIER_SUCCESS:
            return action.payload;
        case actionTypes.UPDATE_COURIER_ERROR:
            return state
        default:
            return state;
    }
}
