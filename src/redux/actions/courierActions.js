import * as actionTypes from "./actionTypes";
import * as courierService from "../../services/courierService";
import {begin, end, endAll, pendingTask} from 'react-redux-spinner';
import {addCourierToPackages} from "./packageActions";
import * as notification from '../../utilities/notification';

export const findCouriersBegin = () => ({
    type: actionTypes.FIND_COURIERS_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const findCouriersSuccess = couriers => ({
    type: actionTypes.FIND_COURIERS_SUCCESS,
    payload: couriers,
    [pendingTask]: end
})

export const findCouriersError = error => ({
    type: actionTypes.FIND_COURIERS_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const selectCouriers = selectedCouriers => ({
    type: actionTypes.SELECT_COURIERS,
    payload: selectedCouriers
})

export const updateSelectedCourierData = selectedCourier => ({
    type: actionTypes.UPDATE_SELECTED_COURIER_DATA,
    payload: selectedCourier
})

export const deleteSelectedCourierData = selectedCourier => ({
    type: actionTypes.DELETE_SELECTED_COURIER_DATA,
    payload: selectedCourier
})

export const createCourierBegin = () => ({
    type: actionTypes.CREATE_COURIER_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const createCourierSuccess = courier => ({
    type: actionTypes.CREATE_COURIER_SUCCESS,
    payload: courier,
    [pendingTask]: end
})

export const createCourierError = error => ({
    type: actionTypes.CREATE_COURIER_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const updateCourierBegin = () => ({
    type: actionTypes.UPDATE_COURIER_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const updateCourierSuccess = courier => ({
    type: actionTypes.UPDATE_COURIER_SUCCESS,
    payload: courier,
    [pendingTask]: end
})

export const updateCourierError = error => ({
    type: actionTypes.UPDATE_COURIER_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const deleteCourierBegin = () => ({
    type: actionTypes.DELETE_COURIER_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const deleteCourierSuccess = courier => ({
    type: actionTypes.DELETE_COURIER_SUCCESS,
    payload: courier,
    [pendingTask]: end
})

export const deleteCourierError = error => ({
    type: actionTypes.DELETE_COURIER_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const createCourier = (courier, packages) => {
    return async dispatch => {
        dispatch(createCourierBegin())
        courierService.createCourier(courier)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(createCourierError(data.message));
                } else {
                    dispatch(createCourierSuccess(data));
                    dispatch(addCourierToPackages(data, packages));
                    notification.success('Kuryer artırıldı.');
                }
            })
            .catch(err => dispatch(createCourierError(err)));
    }
}

export const updateCourier = (courier, selectedCourier) => {
    return async dispatch => {
        dispatch(updateCourierBegin())
        courierService.updateCourier(courier)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(updateCourierError(data.message))
                } else {
                    dispatch(updateCourierSuccess(data))
                    dispatch(updateSelectedCourierData(changeSelectedCourierValues(data, selectedCourier)))
                }
            })
            .catch(err => dispatch(updateCourierError(err)));
    }
}

export const deleteCourier = courier => {
    return async dispatch => {
        dispatch(deleteCourierBegin())
        courierService.deleteCourier(courier)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(deleteCourierError(data.message))
                } else {
                    dispatch(deleteCourierSuccess(courier))
                    dispatch(deleteSelectedCourierData(courier))
                }
            })
            .catch(err => dispatch(deleteCourierError(err)));
    }
}

export const findCouriers = findObject => {
    return async dispatch => {
        dispatch(findCouriersBegin())
        courierService.findCouriers(findObject)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(findCouriersError(data.message))
                } else {
                    dispatch(findCouriersSuccess(data))
                }
            })
            .catch(err => dispatch(findCouriersError(err)));
    }
}

const changeSelectedCourierValues = (values, lastSelectedCourier) => {
    for (let field in lastSelectedCourier) {
        for (let value in values) {
            if (field === value) {
                lastSelectedCourier[field] = values[value]
            }
        }
    }
    return lastSelectedCourier;
}
