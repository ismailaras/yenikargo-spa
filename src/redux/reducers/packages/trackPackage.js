import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const trackPackageReducer = (state = initialState.trackedPackage, action) => {
    switch (action.type) {
        case actionTypes.TRACK_PACKAGE_BEGIN:
            return state;
        case actionTypes.TRACK_PACKAGE_SUCCESS:
            return action.payload;
        case actionTypes.TRACK_PACKAGE_ERROR:
            return state
        default:
            return state;
    }
}
