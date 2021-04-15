import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const selectPackagesReducer = (state = initialState.selectedPackages, action) => {
    switch (action.type) {
        case actionTypes.SELECT_PACKAGES:
            const [lastItem] = action.payload.slice(-1)
            if (action.payload.length === 0) {
                state.toggledClearRows = !state.toggledClearRows
            }
            return {
                allSelectedPackages: action.payload,
                lastSelectedPackage: lastItem,
                toggledClearRows: state.toggledClearRows
            }
        case actionTypes.UPDATE_SELECTED_PACKAGE_DATA:
            state.allSelectedPackages.forEach(p => {
                if (p.id === action.payload.id) {
                    state.lastSelectedPackage = action.payload;
                }
            })
            return {...state, lastSelectedPackage: action.payload}
        case actionTypes.ADD_COURIER_TO_PACKAGES:
            const {packages, courier} = action.payload;
            state.allSelectedPackages.forEach(ps => {
                let selectedPackage = packages.find(p => ps.id === p.id);
                if (selectedPackage) {
                    state.lastSelectedPackage.courier_id = courier.id;
                    state.lastSelectedPackage.courier_cost = courier.courier_cost;
                    ps.courier_id = courier.id;
                    ps.courier_cost = courier.courier_cost;
                }
            })
            return state;
        case actionTypes.DELETE_SELECTED_PACKAGE_DATA:
            return {...state, lastSelectedPackage: {}}
        default:
            return state;
    }
}
