import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const updatePackageReducer = (state = initialState.selectedPackages.lastSelectedPackage, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PACKAGE_BEGIN:
            return state;
        case actionTypes.UPDATE_PACKAGE_SUCCESS:
            return action.payload;
        case actionTypes.UPDATE_PACKAGE_ERROR:
            return state
        default:
            return state;
    }
}
