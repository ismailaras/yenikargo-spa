import * as actionTypes from "../actions/actionTypes";

export const addToCart = cartItem => ({
    type: actionTypes.ADD_TO_CART,
    payload: cartItem
})

export const removeFromCart = (cartItem, remove = false) => ({
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
        c: cartItem,
        remove
    }
})

export const parsePaymentsToCart = (payments, isForDelivery) => ({
    type: actionTypes.PARSE_PAYMENTS_TO_CART,
    payload: {
        payments,
        isForDelivery
    }
})