import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const selectStationsReducer = (state = initialState.selectedStations, action) => {
    switch (action.type) {
        case actionTypes.SELECT_STATIONS:
            const [lastItem] = action.payload.slice(-1)
            if (action.payload.length === 0) {
                state.toggledClearRows = !state.toggledClearRows
            }
            return {
                allSelectedStations: action.payload,
                lastSelectedStation: lastItem,
                toggledClearRows: state.toggledClearRows
            }
        case actionTypes.UPDATE_SELECTED_STATION_DATA:
            state.allSelectedStations.forEach(p => {
                if (p.id === action.payload.id) {
                    state.lastSelectedStation = action.payload;
                }
            })
            return {...state, lastSelectedStation: action.payload}
        case actionTypes.DELETE_SELECTED_STATION_DATA:
            return {...state, lastSelectedStation: {}}
        default:
            return state;
    }
}
