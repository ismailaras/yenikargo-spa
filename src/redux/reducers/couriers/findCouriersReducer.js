import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const findCouriersReducer = (state = initialState.couriers, action) => {
    switch (action.type) {
        case actionTypes.FIND_COURIERS_BEGIN:
            return state;
        case actionTypes.FIND_COURIERS_SUCCESS:
            return action.payload;
        case actionTypes.FIND_COURIERS_ERROR:
            return state
        default:
            return state;
    }
}
