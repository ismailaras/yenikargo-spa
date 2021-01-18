import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const getStationsReducer = (state = initialState.stations, action) => {
    switch (action.type) {
        case actionTypes.GET_STATIONS_BEGIN:
            return state;
        case actionTypes.GET_STATIONS_SUCCESS:
            return action.payload;
        case actionTypes.GET_STATIONS_ERROR:
            return state
        default:
            return state;
    }
}
