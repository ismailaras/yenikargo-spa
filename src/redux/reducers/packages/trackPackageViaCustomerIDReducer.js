import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const trackPackageViaCustomerIDReducer = (state = initialState.trackedPackageByCustomer, action) => {
    switch (action.type) {
        case actionTypes.TRACK_PACKAGE_VIA_CUSTOMER_ID_BEGIN:
            return state;
        case actionTypes.TRACK_PACKAGE_VIA_CUSTOMER_ID_SUCCESS:
            return action.payload;
        case actionTypes.TRACK_PACKAGE_VIA_CUSTOMER_ID_ERROR:
            return state
        default:
            return state;
    }
}
