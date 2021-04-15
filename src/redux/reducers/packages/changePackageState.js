import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const changePackageStateReducer = (state = initialState.selectedPackages.lastSelectedPackage, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_PACKAGE_STATE_BEGIN:
            return state;
        case actionTypes.CHANGE_PACKAGE_STATE_SUCCESS:
            return action.payload;
        case actionTypes.CHANGE_PACKAGE_STATE_ERROR:
            return state
        default:
            return state;
    }
}
