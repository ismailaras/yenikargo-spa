import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const updateTariffReducer = (state = initialState.selectedTariffs.lastSelectedTariff, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_TARIFF_BEGIN:
            return state;
        case actionTypes.UPDATE_TARIFF_SUCCESS:
            return action.payload;
        case actionTypes.UPDATE_TARIFF_ERROR:
            return state
        default:
            return state;
    }
}
