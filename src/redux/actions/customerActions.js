import * as actionTypes from "./actionTypes";
import * as customerService from "../../services/customerService";
import {begin, pendingTask, end, endAll} from 'react-redux-spinner';

export const findCustomersBegin = () => ({
    type: actionTypes.FIND_CUSTOMERS_BEGIN,
    payload: {},
    [ pendingTask ]: begin
})

export const findCustomersSuccess = customers => ({
    type: actionTypes.FIND_CUSTOMERS_SUCCESS,
    payload: customers,
    [ pendingTask ]: end
})

export const findCustomersError = error => ({
    type: actionTypes.FIND_CUSTOMERS_ERROR,
    payload: error,
    [ pendingTask ]: endAll
})


export const findCustomers = findObject => {
    return async dispatch => {
        dispatch(findCustomersBegin())
        customerService.findCustomers(findObject)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(findCustomersError(data.message))
                } else {
                    dispatch(findCustomersSuccess(data))
                }
            })
            .catch(err => dispatch(findCustomersError(err)));
    }
}