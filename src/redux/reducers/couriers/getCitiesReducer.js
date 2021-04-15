import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const getCitiesReducer = (state = initialState.cities, action) => {
    switch (action.type) {
        case actionTypes.GET_CITIES_BEGIN:
            return state;
        case actionTypes.GET_CITIES_SUCCESS:
            return action.payload;
        case actionTypes.GET_CITIES_ERROR:
            return state
        default:
            return state;
    }
}
