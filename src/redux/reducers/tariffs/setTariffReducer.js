import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const setTariffReducer = (state = initialState.setTariff, action) => {
    switch (action.type) {
        case actionTypes.SET_TARIFF_INTERVAL_BEGIN:
            return state;
        case actionTypes.SET_TARIFF_INTERVAL_SUCCESS:
            return action.payload;
        case actionTypes.SET_TARIFF_INTERVAL_ERROR:
            return state
        default:
            return state;
    }
}
