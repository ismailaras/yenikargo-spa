import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const createTariffReducer = (state = initialState.selectedTariffs.lastSelectedTariff, action) => {
    switch (action.type) {
        case actionTypes.CREATE_TARIFF_BEGIN:
            return state;
        case actionTypes.CREATE_TARIFF_SUCCESS:
            return action.payload;
        case actionTypes.CREATE_TARIFF_ERROR:
            return state
        default:
            return state;
    }
}
