import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const findAdvancedPackagesReducer = (state = initialState.packages, action) => {
    switch (action.type) {
        case actionTypes.FIND_ADVANCED_PACKAGES_BEGIN:
            return state;
        case actionTypes.FIND_ADVANCED_PACKAGES_SUCCESS:
            return action.payload;
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
        case actionTypes.FIND_ADVANCED_PACKAGES_ERROR:
            return []
        default:
            return state;
    }
}
