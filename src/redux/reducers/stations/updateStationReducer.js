import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const updateStationReducer = (state = initialState.selectedStations.lastSelectedStation, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_STATION_BEGIN:
            return state;
        case actionTypes.UPDATE_STATION_SUCCESS:
            return action.payload;
        case actionTypes.UPDATE_STATION_ERROR:
            return state
        default:
            return state;
    }
}
