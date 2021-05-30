import React, {useEffect, useState} from 'react';
import {getAllExtraSelling} from "../../../../redux/actions/extraSellingActions";
import {connect, useSelector} from "react-redux";
import {addExtraSellingCost, addToCart, removeFromCart} from "../../../../redux/actions/cartActions";
import {ExtraSellingForm} from "./ExtraSellingForm";


const ExtraSelling = ({getAllExtraSelling, allExtraSelling, addToCart, removeFromCart, addExtraSellingCost}) => {
    useEffect(() => {
        if (allExtraSelling.length === 0) getAllExtraSelling();
    });
    const [selectedCartItem, selectCartItem] = useState('');
    const [extraSellingCart, setExtraSellingCart] = useState([]);
    const cart = useSelector(state => state.cartReducer);
    const getRadioInputProps = () => cart.map(cartItem => ({label: cartItem.id, value: cartItem.id}));
    const onChange = e => selectCartItem(e.target.value)
    const handleSubmit = async () => {
        let cost = 0;
        extraSellingCart.forEach(cartItem => {
            cost += cartItem.quantity * cartItem.price;
        })
        await addExtraSellingCost(parseInt(selectedCartItem, 10), cost);
        cost = 0;
    }
    const handleReset = ()=>{
        let cost = 0;

        addExtraSellingCost(parseInt(selectedCartItem, 10), cost);
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        const cartItemId = parseInt(name, 10);
        const extraSelling = allExtraSelling.find(extraSelling => extraSelling.id === cartItemId);
        const quantity = parseInt(value, 10);
        setExtraSellingCart(extraSellingCart => {
            const addedItem = extraSellingCart.find(cartItem => cartItem.id === cartItemId);
            if (addedItem) {
                return extraSellingCart.map(cartItem => {
                    if (cartItem.id === parseInt(name, 10)) {
                        return Object.assign({}, addedItem, {quantity})
                    }
                    return cartItem;
                });
            } else {
                return [...extraSellingCart, {id: cartItemId, quantity: 1, price: extraSelling.price}]
            }
        });
    }
    return (
        <ExtraSellingForm
            handleChange={handleChange}
            allExtraSelling={allExtraSelling}
            selectedCartItem={selectedCartItem}
            selectCartItem={selectCartItem}
            cart={cart}
            handleSubmit={handleSubmit}
            handleReset={handleReset}
            onChange={onChange}
            getRadioInputProps={getRadioInputProps}
        />
    )
}

const mapDispatchToProps = {
    getAllExtraSelling,
    addToCart,
    removeFromCart,
    addExtraSellingCost
}

const mapStateToProps = state => ({
    allExtraSelling: state.getAllExtraSellingReducer,
    cart: state.cartReducer
});


export default connect(mapStateToProps, mapDispatchToProps)(ExtraSelling);
