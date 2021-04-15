import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const getTariffsReducer = (state = initialState.tariffs, action) => {
    switch (action.type) {
        case actionTypes.GET_TARIFFS_BEGIN:
            return state;
        case actionTypes.GET_TARIFFS_SUCCESS:
            return action.payload;
        case actionTypes.ADD_TARIFF_TO_TABLE:
            return [...state, action.payload]
        case actionTypes.UPDATE_TARIFF_ON_TABLE:
            return state.map(tariff => {
                if (tariff.id === action.payload.id) {
                    tariff = action.payload;
                }
                return tariff;
            })
        case actionTypes.DELETE_TARIFF_FROM_TABLE:
            return state.filter(tariff => tariff.id !== action.payload.id);
        case actionTypes.GET_TARIFFS_ERROR:
            return state
        default:
            return state;
    }
}
