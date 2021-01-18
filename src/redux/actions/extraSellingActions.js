import * as actionTypes from "./actionTypes";
import {begin, end, endAll, pendingTask} from 'react-redux-spinner';
import * as stationService from "../../services/stationService";

export const getStationsBegin = () => ({
    type: actionTypes.GET_STATIONS_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const getStationsSuccess = stations => ({
    type: actionTypes.GET_STATIONS_SUCCESS,
    payload: stations,
    [pendingTask]: end
})

export const getStationsError = error => ({
    type: actionTypes.GET_STATIONS_ERROR,
    payload: error,
    [pendingTask]: endAll
})


export const getStations = () => {
    return async dispatch => {
        dispatch(getStationsBegin())
        stationService.getStations()
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(getStationsError(data.message))
                } else {
                    dispatch(getStationsSuccess(data))
                }
            })
            .catch(err => dispatch(getStationsError(err)));
    }
}
