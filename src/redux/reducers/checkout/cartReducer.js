import * as actionTypes from '../actions/actionTypes';
import initialState from "./initialState";

export const cartReducer = (state = initialState.cart, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const addedItem = state.find(cartItem => cartItem.product.id === action.payload.product.id);
            if (addedItem) {
                return state.map(cartItem => {
                    if (cartItem.product.id === action.payload.product.id) {
                        return Object.assign({}, addedItem, {quantity: addedItem.quantity += 1})
                    }
                    return cartItem;
                });
            } else {
                return [...state, {...action.payload}]
            }
        case actionTypes.REMOVE_FROM_CART:
            return state.filter(cartItem => cartItem.product.id !== action.payload.product.id);
        default:
            return state;
    }
}
