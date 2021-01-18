import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const selectCouriersReducer = (state = initialState.selectedCouriers, action) => {
    switch (action.type) {
        case actionTypes.SELECT_COURIERS:
            const [lastItem] = action.payload.slice(-1)
            if (action.payload.length === 0) {
                state.toggledClearRows = !state.toggledClearRows
            }
            return {
                allSelectedCouriers: action.payload,
                lastSelectedCourier: lastItem,
                toggledClearRows: state.toggledClearRows
            }
        case actionTypes.UPDATE_SELECTED_COURIER_DATA:
            state.allSelectedCouriers.forEach(courier => {
                if (courier.id === action.payload.id) {
                    state.lastSelectedCourier = action.payload;
                }
            })
            return {...state, lastSelectedCourier: action.payload}
        case actionTypes.DELETE_SELECTED_COURIER_DATA:
            return {...state, lastSelectedCourier: {}}
        default:
            return state;
    }
}
