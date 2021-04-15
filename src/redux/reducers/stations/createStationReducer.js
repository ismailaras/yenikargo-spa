import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const createStationReducer = (state = initialState.selectedStations.lastSelectedStation, action) => {
    switch (action.type) {
        case actionTypes.CREATE_STATION_BEGIN:
            return state;
        case actionTypes.CREATE_STATION_SUCCESS:
            return action.payload;
        case actionTypes.CREATE_STATION_ERROR:
            return state
        default:
            return state;
    }
}
