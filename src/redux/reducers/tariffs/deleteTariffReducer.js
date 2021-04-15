import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const deleteTariffReducer = (state = initialState.selectedTariffs.lastSelectedTariff, action) => {
    switch (action.type) {
        case actionTypes.DELETE_TARIFF_BEGIN:
            return state;
        case actionTypes.DELETE_TARIFF_SUCCESS:
            return action.payload;
        case actionTypes.DELETE_TARIFF_ERROR:
            return state
        default:
            return state;
    }
}
