import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const createPackageReducer = (state = initialState.selectedPackages.lastSelectedPackage, action) => {
    switch (action.type) {
        case actionTypes.CREATE_PACKAGE_BEGIN:
            return state;
        case actionTypes.CREATE_PACKAGE_SUCCESS:
            return action.payload;
        case actionTypes.CREATE_PACKAGE_ERROR:
            return state
        default:
            return state;
    }
}
