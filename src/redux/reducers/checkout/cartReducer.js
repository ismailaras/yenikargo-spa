import initialState from "../initialState";
import * as actionTypes from '../../actions/actionTypes';
import {TrackingStateEnum} from "../../../enums/trackingStateEnum";

export const cartReducer = (state = initialState.cart, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const addedItem = state.find(cartItem => cartItem.id === action.payload.id);
            if (addedItem) {
                return state.map(cartItem => {
                    if (cartItem.id === action.payload.id) {
                        return Object.assign({}, addedItem, {quantity: action.payload.quantity})
                    }
                    return cartItem;
                });
            } else {
                return [...state, {...action.payload}]
            }
        case actionTypes.ADD_EXTRA_SERVICE_COST:
            console.log(action.payload);
            return state.map(cItem => {
                if (cItem.id === action.payload.id) {
                    cItem.extra_selling_cost = action.payload.extra_selling_cost;
                }
                return cItem;
            });
        case actionTypes.REMOVE_FROM_CART:
            state = state.filter(cartItem => {
                if (action.payload.remove) {
                    return cartItem.id !== action.payload.c.id && cartItem.paymentFor !== 'ExtraSelling';
                }
                return cartItem.id !== action.payload.c.id;
            });
            return state;
        case actionTypes.ADD_COURIER_TO_PACKAGES:
            const {packages, courier} = action.payload;
            state = state.map(ps => {
                let selectedPackage = packages.find(p => ps.id === p.id && ps.sort === 'Package');
                if (selectedPackage) {
                    ps.courier_id = courier.id;
                    ps.courier_cost = courier.courier_cost;
                }
                return ps;
            })
            return state;
        case actionTypes.PARSE_PAYMENTS_TO_CART:
            return state.map(cartItem => {
                if (cartItem.payment_needing) {
                    if (cartItem.paymentFor === 'Package') {
                        const payment = action.payload.payments.find(payment => payment.sort === 'Package');
                        cartItem.payment_method = payment.method;
                        if (action.payload.isForDelivery) cartItem.tracking_state = TrackingStateEnum.Delivered;
                        if (!cartItem.is_paid) cartItem.is_paid = true;
                        if (!cartItem.is_courier_cost_paid && cartItem.courier_id) cartItem.is_courier_cost_paid = true;
                        if (!cartItem.is_product_paid && cartItem.is_postpaid) cartItem.is_product_paid = true;
                    }
                }
                return cartItem;
            });
        default:
            return state;
    }
}
