import * as actionTypes from "./actionTypes";
import * as customerService from "../../services/customerService";
import * as notification from "../../utilities/notification";
import {begin, end, endAll, pendingTask} from 'react-redux-spinner';

export const findCustomersBegin = () => ({
    type: actionTypes.FIND_CUSTOMERS_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const findCustomersSuccess = customers => ({
    type: actionTypes.FIND_CUSTOMERS_SUCCESS,
    payload: customers,
    [pendingTask]: end
})

export const findCustomersError = error => ({
    type: actionTypes.FIND_CUSTOMERS_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const selectCustomers = selectedCustomers => ({
    type: actionTypes.SELECT_CUSTOMERS,
    payload: selectedCustomers
})

export const updateSelectedCustomerData = selectedCustomer => ({
    type: actionTypes.UPDATE_SELECTED_CUSTOMER_DATA,
    payload: selectedCustomer
})

export const deleteSelectedCustomerData = selectedCustomer => ({
    type: actionTypes.DELETE_SELECTED_CUSTOMER_DATA,
    payload: selectedCustomer
})

export const setSenderCustomer = senderCustomer => {
    return ({
        type: actionTypes.SET_SENDER_CUSTOMER,
        payload: senderCustomer
    })
}

export const setReceiverCustomer = receiverCustomer => ({
    type: actionTypes.SET_RECEIVER_CUSTOMER,
    payload: receiverCustomer
})

export const createCustomerBegin = () => ({
    type: actionTypes.CREATE_CUSTOMER_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const createCustomerSuccess = customer => ({
    type: actionTypes.CREATE_CUSTOMER_SUCCESS,
    payload: customer,
    [pendingTask]: end
})

export const createCustomerError = error => ({
    type: actionTypes.CREATE_CUSTOMER_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const updateCustomerBegin = () => ({
    type: actionTypes.UPDATE_CUSTOMER_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const updateCustomerSuccess = customer => ({
    type: actionTypes.UPDATE_CUSTOMER_SUCCESS,
    payload: customer,
    [pendingTask]: end
})

export const updateCustomerError = error => ({
    type: actionTypes.UPDATE_CUSTOMER_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const deleteCustomerBegin = () => ({
    type: actionTypes.DELETE_CUSTOMER_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const deleteCustomerSuccess = customer => ({
    type: actionTypes.DELETE_CUSTOMER_SUCCESS,
    payload: customer,
    [pendingTask]: end
})

export const deleteCustomerError = error => ({
    type: actionTypes.DELETE_CUSTOMER_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const createCustomer = customer => {
    return async dispatch => {
        dispatch(createCustomerBegin())
        customerService.createCustomer(customer)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(createCustomerError(data.message))
                } else {
                    dispatch(createCustomerSuccess(data))
                    customer.is_receiver ? dispatch(setReceiverCustomer(data)) : dispatch(setSenderCustomer(data))
                    notification.success('Müştəri artırıldı')
                }
            })
            .catch(err => dispatch(createCustomerError(err)));
    }
}

export const updateCustomer = (customer, selectedCustomer) => {
    return async dispatch => {
        dispatch(updateCustomerBegin())
        customerService.updateCustomer(customer)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(updateCustomerError(data.message))
                    notification.success('*Mobil nömrə fərqli olmalıdır')
                } else {
                    dispatch(updateCustomerSuccess(data))
                    dispatch(updateSelectedCustomerData(changeSelectedCustomerValues(data, selectedCustomer)))
                    notification.success('Müştəri məlumatları tənzimləndi')
                }
            })
            .catch(err => dispatch(updateCustomerError(err)));
    }
}

export const deleteCustomer = customer => {
    return async dispatch => {
        dispatch(deleteCustomerBegin())
        customerService.deleteCustomer(customer)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(deleteCustomerError(data.message))
                } else {
                    dispatch(deleteCustomerSuccess(customer))
                    dispatch(deleteSelectedCustomerData(customer))
                    notification.error('Müştəri silindi')
                }
            })
            .catch(err => dispatch(deleteCustomerError(err)));
    }
}

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

const changeSelectedCustomerValues = (values, lastSelectedCustomer) => {
    for (let field in lastSelectedCustomer) {
        for (let value in values) {
            if (field === value) {
                lastSelectedCustomer[field] = values[value]
            }
        }
    }
    return lastSelectedCustomer;
}