import * as actionTypes from "./actionTypes";
import {begin, end, endAll, pendingTask} from 'react-redux-spinner';
import * as tariffService from "../../services/tariffService";
import * as notification from "../../utilities/notification";

export const getTariffsBegin = () => ({
    type: actionTypes.GET_TARIFFS_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const getTariffsSuccess = tariffs => ({
    type: actionTypes.GET_TARIFFS_SUCCESS,
    payload: tariffs,
    [pendingTask]: end
})

export const getTariffsError = error => ({
    type: actionTypes.GET_TARIFFS_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const selectTariffs = selectedTariffs => ({
    type: actionTypes.SELECT_TARIFFS,
    payload: selectedTariffs
})

export const updateSelectedTariffData = selectedTariff => ({
    type: actionTypes.UPDATE_SELECTED_TARIFF_DATA,
    payload: selectedTariff
})

export const deleteSelectedTariffData = selectedTariff => ({
    type: actionTypes.DELETE_SELECTED_TARIFF_DATA,
    payload: selectedTariff
})

export const createTariffBegin = () => ({
    type: actionTypes.CREATE_TARIFF_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const createTariffSuccess = p => ({
    type: actionTypes.CREATE_TARIFF_SUCCESS,
    payload: p,
    [pendingTask]: end
})

export const createTariffError = error => ({
    type: actionTypes.CREATE_TARIFF_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const updateTariffBegin = () => ({
    type: actionTypes.UPDATE_TARIFF_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const updateTariffSuccess = p => ({
    type: actionTypes.UPDATE_TARIFF_SUCCESS,
    payload: p,
    [pendingTask]: end
})

export const updateTariffError = error => ({
    type: actionTypes.UPDATE_TARIFF_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const deleteTariffBegin = () => ({
    type: actionTypes.DELETE_TARIFF_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const deleteTariffSuccess = p => ({
    type: actionTypes.DELETE_TARIFF_SUCCESS,
    payload: p,
    [pendingTask]: end
})

export const deleteTariffError = error => ({
    type: actionTypes.DELETE_TARIFF_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const addTariffToTable = tariff => ({
    type: actionTypes.ADD_TARIFF_TO_TABLE,
    payload: tariff
})

export const updateTariffOnTable = tariff => ({
    type: actionTypes.UPDATE_TARIFF_ON_TABLE,
    payload: tariff
})

export const deleteTariffFromTable = tariff => ({
    type: actionTypes.DELETE_TARIFF_FROM_TABLE,
    payload: tariff
})

export const createTariff = p => {
    return async dispatch => {
        dispatch(createTariffBegin())
        tariffService.createTariff(p)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(createTariffError(data.message))
                } else {
                    dispatch(createTariffSuccess(data));
                    dispatch(addTariffToTable(data));
                    notification.success('Filial artırıldı')
                }
            })
            .catch(err => dispatch(createTariffError(err)));
    }
}

export const updateTariff = (p, selectedTariff) => {
    return async dispatch => {
        dispatch(updateTariffBegin())
        tariffService.updateTariff(p)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(updateTariffError(data.message))
                } else {
                    dispatch(updateTariffSuccess(data))
                    dispatch(updateTariffOnTable(data))
                    notification.success('Filial tənzimləndi')
                    dispatch(updateSelectedTariffData(changeSelectedTariffValues(data, selectedTariff)))
                }
            })
            .catch(err => dispatch(updateTariffError(err)));
    }
}

export const deleteTariff = p => {
    return async dispatch => {
        dispatch(deleteTariffBegin())
        tariffService.deleteTariff(p)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(deleteTariffError(data.message))
                } else {
                    dispatch(deleteTariffSuccess(p))
                    dispatch(deleteTariffFromTable(p))
                    dispatch(deleteSelectedTariffData(p))
                    notification.error('Filial silindi')
                }
            })
            .catch(err => dispatch(deleteTariffError(err)));
    }
}

export const getTariffs = () => {
    return async dispatch => {
        dispatch(getTariffsBegin())
        tariffService.getTariffs()
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(getTariffsError(data.message))
                } else {
                    dispatch(getTariffsSuccess(data))
                }
            })
            .catch(err => dispatch(getTariffsError(err)));
    }
}

const changeSelectedTariffValues = (values, lastSelectedTariff) => {
    for (let field in lastSelectedTariff) {
        for (let value in values) {
            if (field === value) {
                lastSelectedTariff[field] = values[value]
            }
        }
    }
    return lastSelectedTariff;
}