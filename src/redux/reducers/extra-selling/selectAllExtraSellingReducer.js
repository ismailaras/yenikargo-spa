import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const selectAllExtraSellingReducer = (state = initialState.selectedAllExtraSelling, action) => {
    switch (action.type) {
        case actionTypes.SELECT_ALL_EXTRA_SELLING:
            const [lastItem] = action.payload.slice(-1)
            if (action.payload.length === 0) {
                state.toggledClearRows = !state.toggledClearRows
            }
            return {
                allSelectedExtraSelling: action.payload,
                lastSelectedExtraSelling: lastItem,
                toggledClearRows: state.toggledClearRows
            }
        case actionTypes.UPDATE_SELECTED_STATION_DATA:
            state.allSelectedExtraSelling.forEach(p => {
                if (p.id === action.payload.id) {
                    state.lastSelectedExtraSelling = action.payload;
                }
            })
            return {...state, lastSelectedExtraSelling: action.payload}
        case actionTypes.DELETE_SELECTED_STATION_DATA:
            return {...state, lastSelectedExtraSelling: {}}
        default:
            return state;
    }
}
