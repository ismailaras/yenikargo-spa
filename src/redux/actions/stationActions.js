import * as actionTypes from "./actionTypes";
import {begin, end, endAll, pendingTask} from 'react-redux-spinner';
import * as stationService from "../../services/stationService";
import * as notification from "../../utilities/notification";

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

export const selectStations = selectedStations => ({
    type: actionTypes.SELECT_STATIONS,
    payload: selectedStations
})

export const updateSelectedStationData = selectedStation => ({
    type: actionTypes.UPDATE_SELECTED_STATION_DATA,
    payload: selectedStation
})

export const deleteSelectedStationData = selectedStation => ({
    type: actionTypes.DELETE_SELECTED_STATION_DATA,
    payload: selectedStation
})

export const createStationBegin = () => ({
    type: actionTypes.CREATE_STATION_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const createStationSuccess = p => ({
    type: actionTypes.CREATE_STATION_SUCCESS,
    payload: p,
    [pendingTask]: end
})

export const createStationError = error => ({
    type: actionTypes.CREATE_STATION_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const updateStationBegin = () => ({
    type: actionTypes.UPDATE_STATION_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const updateStationSuccess = p => ({
    type: actionTypes.UPDATE_STATION_SUCCESS,
    payload: p,
    [pendingTask]: end
})

export const updateStationError = error => ({
    type: actionTypes.UPDATE_STATION_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const deleteStationBegin = () => ({
    type: actionTypes.DELETE_STATION_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const deleteStationSuccess = p => ({
    type: actionTypes.DELETE_STATION_SUCCESS,
    payload: p,
    [pendingTask]: end
})

export const deleteStationError = error => ({
    type: actionTypes.DELETE_STATION_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const addStationToTable = station => ({
    type: actionTypes.ADD_STATION_TO_TABLE,
    payload: station
})

export const updateStationOnTable = station => ({
    type: actionTypes.UPDATE_STATION_ON_TABLE,
    payload: station
})

export const deleteStationFromTable = station => ({
    type: actionTypes.DELETE_STATION_FROM_TABLE,
    payload: station
})

export const createStation = p => {
    return async dispatch => {
        dispatch(createStationBegin())
        stationService.createStation(p)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(createStationError(data.message))
                } else {
                    dispatch(createStationSuccess(data));
                    dispatch(addStationToTable(data));
                    notification.success('Filial artırıldı.')
                }
            })
            .catch(err => dispatch(createStationError(err)));
    }
}

export const updateStation = (p, selectedStation) => {
    return async dispatch => {
        dispatch(updateStationBegin())
        stationService.updateStation(p)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(updateStationError(data.message))
                } else {
                    dispatch(updateStationSuccess(data))
                    dispatch(updateStationOnTable(data))
                    dispatch(updateSelectedStationData(changeSelectedStationValues(data, selectedStation)))
                }
            })
            .catch(err => dispatch(updateStationError(err)));
    }
}

export const deleteStation = p => {
    return async dispatch => {
        dispatch(deleteStationBegin())
        stationService.deleteStation(p)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(deleteStationError(data.message))
                } else {
                    dispatch(deleteStationSuccess(p))
                    dispatch(deleteStationFromTable(p))
                    dispatch(deleteSelectedStationData(p))
                }
            })
            .catch(err => dispatch(deleteStationError(err)));
    }
}

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

const changeSelectedStationValues = (values, lastSelectedStation) => {
    for (let field in lastSelectedStation) {
        for (let value in values) {
            if (field === value) {
                lastSelectedStation[field] = values[value]
            }
        }
    }
    return lastSelectedStation;
}