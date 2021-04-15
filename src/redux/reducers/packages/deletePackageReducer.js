import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const deletePackageReducer = (state = initialState.selectedPackages.lastSelectedPackage, action) => {
    switch (action.type) {
        case actionTypes.DELETE_PACKAGE_BEGIN:
            return state;
        case actionTypes.DELETE_PACKAGE_SUCCESS:
            return action.payload;
        case actionTypes.DELETE_PACKAGE_ERROR:
            return state
        default:
            return state;
    }
}
