import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const selectTariffsReducer = (state = initialState.selectedTariffs, action) => {
    switch (action.type) {
        case actionTypes.SELECT_TARIFFS:
            const [lastItem] = action.payload.slice(-1)
            if (action.payload.length === 0) {
                state.toggledClearRows = !state.toggledClearRows
            }
            return {
                allSelectedTariffs: action.payload,
                lastSelectedTariff: lastItem,
                toggledClearRows: state.toggledClearRows
            }
        case actionTypes.UPDATE_SELECTED_TARIFF_DATA:
            state.allSelectedTariffs.forEach(p => {
                if (p.id === action.payload.id) {
                    state.lastSelectedTariff = action.payload;
                }
            })
            return {...state, lastSelectedTariff: action.payload}
        case actionTypes.DELETE_SELECTED_TARIFF_DATA:
            return {...state, lastSelectedTariff: {}}
        default:
            return state;
    }
}
