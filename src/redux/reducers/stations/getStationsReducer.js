import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const getStationsReducer = (state = initialState.stations, action) => {
    switch (action.type) {
        case actionTypes.GET_STATIONS_BEGIN:
            return state;
        case actionTypes.GET_STATIONS_SUCCESS:
            return action.payload;
        case actionTypes.ADD_STATION_TO_TABLE:
            return [...state, action.payload]
        case actionTypes.UPDATE_STATION_ON_TABLE:
            return state.map(station => {
                if (station.id === action.payload.id) {
                    station = action.payload;
                }
                return station;
            })
        case actionTypes.DELETE_STATION_FROM_TABLE:
            return state.filter(station => station.id !== action.payload.id);
        case actionTypes.GET_STATIONS_ERROR:
            return state
        default:
            return state;
    }
}
