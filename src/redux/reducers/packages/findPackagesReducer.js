import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const findPackagesReducer = (state = initialState.packages, action) => {
    switch (action.type) {
        case actionTypes.FIND_PACKAGES_BEGIN:
            return state;
        case actionTypes.FIND_PACKAGES_SUCCESS:
            return action.payload;
        case actionTypes.FIND_PACKAGES_BY_BARCODE_SUCCESS:
            const addedPackage = state.find(p => p.id === action.payload.id);
            if (addedPackage) {
                return state;
            }
            return [...state, {...action.payload}];
        case actionTypes.ADD_COURIER_TO_PACKAGES:
            const {packages, courier} = action.payload;
            state = state.map(ps => {
                let selectedPackage = packages.find(p => ps.id === p.id);
                if (selectedPackage) {
                    ps.courier_id = courier.id;
                    ps.courier_cost = courier.courier_cost;
                }
                return ps;
            })
            return state;
        case actionTypes.FIND_PACKAGES_ERROR:
            return state
        default:
            return state;
    }
}
