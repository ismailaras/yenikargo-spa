import * as actionTypes from "./actionTypes";
import {begin, end, endAll, pendingTask} from 'react-redux-spinner';
import * as paymentService from "../../services/paymentService";
import {parsePaymentsToCart} from "./cartActions";

export const createPaymentsBegin = () => ({
    type: actionTypes.CREATE_PAYMENTS_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const createPaymentsSuccess = payments => ({
    type: actionTypes.CREATE_PAYMENTS_SUCCESS,
    payload: payments,
    [pendingTask]: end
})

export const createPaymentsError = error => ({
    type: actionTypes.CREATE_PAYMENTS_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const findPaymentsBegin = () => ({
    type: actionTypes.FIND_PAYMENTS_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const findPaymentsSuccess = payments => ({
    type: actionTypes.FIND_PAYMENTS_SUCCESS,
    payload: payments,
    [pendingTask]: end
})

export const findPaymentsError = error => ({
    type: actionTypes.FIND_PAYMENTS_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const selectPayments = selectedPayments => ({
    type: actionTypes.SELECT_PAYMENTS,
    payload: selectedPayments
})

export const createPayments = (cart, isForDelivery, paymentMethod, costs, handlePrint) => {
    return async dispatch => {
        dispatch(createPaymentsBegin())
        paymentService.createPayments(cart, isForDelivery, paymentMethod, costs)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(createPaymentsError(data.message));
                } else {
                    dispatch(createPaymentsSuccess(data));
                    dispatch(parsePaymentsToCart(data, isForDelivery));
                    handlePrint();
                }
            })
            .catch(err => dispatch(createPaymentsError(err)));
    }
}


export const findPayments = findObject => {
    return async dispatch => {
        dispatch(findPaymentsBegin())
        paymentService.findPayments(findObject)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(findPaymentsError(data.message))
                } else {
                    dispatch(findPaymentsSuccess(data))
                    console.log(data)
                }
            })
            .catch(err => dispatch(findPaymentsError(err)));
    }
}
