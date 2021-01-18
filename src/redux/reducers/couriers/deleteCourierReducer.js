import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const deleteCourierReducer = (state = initialState.selectedCouriers.lastSelectedCourier, action) => {
    switch (action.type) {
        case actionTypes.DELETE_COURIER_BEGIN:
            return state;
        case actionTypes.DELETE_COURIER_SUCCESS:
            return action.payload;
        case actionTypes.DELETE_COURIER_ERROR:
            return state
        default:
            return state;
    }
}
