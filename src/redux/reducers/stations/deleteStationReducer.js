import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const deleteStationReducer = (state = initialState.selectedStations.lastSelectedStation, action) => {
    switch (action.type) {
        case actionTypes.DELETE_STATION_BEGIN:
            return state;
        case actionTypes.DELETE_STATION_SUCCESS:
            return action.payload;
        case actionTypes.DELETE_STATION_ERROR:
            return state
        default:
            return state;
    }
}
