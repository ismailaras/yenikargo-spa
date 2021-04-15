import React, {useEffect} from 'react';
import {getAllExtraSelling} from "../../../../redux/actions/extraSellingActions";
import {connect} from "react-redux";
import {addToCart, removeFromCart} from "../../../../redux/actions/cartActions";
import {ExtraSellingForm} from "./ExtraSellingForm";


const ExtraSelling = ({getAllExtraSelling, allExtraSelling, addToCart, removeFromCart}) => {
    useEffect(() => {
        if (allExtraSelling.length === 0) {
            getAllExtraSelling();
        }
    });
    const handleChange = (event) => {
        const {name, value} = event.target;
        const extraSelling = allExtraSelling.find(extraSelling => extraSelling.id === parseInt(name, 10));
        const quantity = parseInt(value, 10);
        const cartItem = {
            id: extraSelling.id,
            name: extraSelling.name,
            quantity,
            paymentFor: 'ExtraSelling',
            price: extraSelling.price
        };
        if (quantity > 0) {
            addToCart(cartItem);
        } else {
            removeFromCart(cartItem);
        }
    }
    return (
        <ExtraSellingForm
            handleChange={handleChange}
            allExtraSelling={allExtraSelling}
        />
    )
}

const mapDispatchToProps = {
    getAllExtraSelling,
    addToCart,
    removeFromCart
}

const mapStateToProps = state => ({
    allExtraSelling: state.getAllExtraSellingReducer,
    cart: state.cartReducer
});


export default connect(mapStateToProps, mapDispatchToProps)(ExtraSelling);
