import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const setPackagesFilterKeysReducer = (state = initialState.filteredPackagesKeys, action) => {
    switch (action.type) {
        case actionTypes.SET_PACKAGES_FILTER_KEYS:
            return action.payload;
        default:
            return state;
    }
}
