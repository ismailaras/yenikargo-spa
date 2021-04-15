import * as actionTypes from "./actionTypes";
import {begin, end, endAll, pendingTask} from 'react-redux-spinner';
import * as notification from "../../utilities/notification";
import * as extraSellingService from "../../services/extraSellingService";

export const getAllExtraSellingBegin = () => ({
    type: actionTypes.GET_ALL_EXTRA_SELLING_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const getAllExtraSellingSuccess = allExtraSelling => ({
    type: actionTypes.GET_ALL_EXTRA_SELLING_SUCCESS,
    payload: allExtraSelling,
    [pendingTask]: end
})

export const getAllExtraSellingError = error => ({
    type: actionTypes.GET_ALL_EXTRA_SELLING_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const selectExtraSelling = selectedExtraSelling => ({
    type: actionTypes.SELECT_ALL_EXTRA_SELLING,
    payload: selectedExtraSelling
})

export const updateSelectedExtraSellingData = selectedExtraSelling => ({
    type: actionTypes.UPDATE_SELECTED_EXTRA_SELLING_DATA,
    payload: selectedExtraSelling
})

export const deleteSelectedExtraSellingData = selectedExtraSelling => ({
    type: actionTypes.DELETE_SELECTED_EXTRA_SELLING_DATA,
    payload: selectedExtraSelling
})

export const createExtraSellingBegin = () => ({
    type: actionTypes.CREATE_EXTRA_SELLING_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const createExtraSellingSuccess = p => ({
    type: actionTypes.CREATE_EXTRA_SELLING_SUCCESS,
    payload: p,
    [pendingTask]: end
})

export const createExtraSellingError = error => ({
    type: actionTypes.CREATE_EXTRA_SELLING_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const updateExtraSellingBegin = () => ({
    type: actionTypes.UPDATE_EXTRA_SELLING_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const updateExtraSellingSuccess = p => ({
    type: actionTypes.UPDATE_EXTRA_SELLING_SUCCESS,
    payload: p,
    [pendingTask]: end
})

export const updateExtraSellingError = error => ({
    type: actionTypes.UPDATE_EXTRA_SELLING_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const deleteExtraSellingBegin = () => ({
    type: actionTypes.DELETE_EXTRA_SELLING_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const deleteExtraSellingSuccess = p => ({
    type: actionTypes.DELETE_EXTRA_SELLING_SUCCESS,
    payload: p,
    [pendingTask]: end
})

export const deleteExtraSellingError = error => ({
    type: actionTypes.DELETE_EXTRA_SELLING_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const addExtraSellingToTable = extraSelling => ({
    type: actionTypes.ADD_EXTRA_SELLING_TO_TABLE,
    payload: extraSelling
})

export const updateExtraSellingOnTable = extraSelling => ({
    type: actionTypes.UPDATE_EXTRA_SELLING_ON_TABLE,
    payload: extraSelling
})

export const deleteExtraSellingFromTable = extraSelling => ({
    type: actionTypes.DELETE_EXTRA_SELLING_FROM_TABLE,
    payload: extraSelling
})

export const createExtraSelling = p => {
    return async dispatch => {
        dispatch(createExtraSellingBegin())
        extraSellingService.createExtraSelling(p)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(createExtraSellingError(data.message))
                } else {
                    dispatch(createExtraSellingSuccess(data));
                    dispatch(addExtraSellingToTable(data));
                    notification.success('Əlavə xidmət artırıldı.')
                }
            })
            .catch(err => dispatch(createExtraSellingError(err)));
    }
}

export const updateExtraSelling = (p, selectedExtraSelling) => {
    return async dispatch => {
        dispatch(updateExtraSellingBegin())
        extraSellingService.updateExtraSelling(p)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(updateExtraSellingError(data.message))
                } else {
                    dispatch(updateExtraSellingSuccess(data))
                    dispatch(updateExtraSellingOnTable(data))
                    notification.success('Əlavə xidmət tənzimləndi')
                    dispatch(updateSelectedExtraSellingData(changeSelectedExtraSellingValues(data, selectedExtraSelling)))
                }
            })
            .catch(err => dispatch(updateExtraSellingError(err)));
    }
}

export const deleteExtraSelling = p => {
    return async dispatch => {
        dispatch(deleteExtraSellingBegin())
        extraSellingService.deleteExtraSelling(p)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(deleteExtraSellingError(data.message))
                } else {
                    dispatch(deleteExtraSellingSuccess(p))
                    dispatch(deleteExtraSellingFromTable(p))
                    dispatch(deleteSelectedExtraSellingData(p))
                    notification.error('Əlavə xidmət silindi')
                }
            })
            .catch(err => dispatch(deleteExtraSellingError(err)));
    }
}

export const getAllExtraSelling = () => {
    return async dispatch => {
        dispatch(getAllExtraSellingBegin())
        extraSellingService.getAllExtraSelling()
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(getAllExtraSellingError(data.message))
                } else {
                    dispatch(getAllExtraSellingSuccess(data))
                }
            })
            .catch(err => dispatch(getAllExtraSellingError(err)));
    }
}


const changeSelectedExtraSellingValues = (values, lastSelectedExtraSelling) => {
    for (let field in lastSelectedExtraSelling) {
        for (let value in values) {
            if (field === value) {
                lastSelectedExtraSelling[field] = values[value]
            }
        }
    }
    return lastSelectedExtraSelling;
}