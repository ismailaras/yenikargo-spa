import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const setCouriersFilterKeysReducer = (state = initialState.filteredCouriersKeys, action) => {
    switch (action.type) {
        case actionTypes.SET_COURIERS_FILTER_KEYS:
            return action.payload;
        default:
            return state;
    }
}
