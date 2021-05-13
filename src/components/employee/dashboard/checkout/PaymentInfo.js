import {connect, useSelector} from "react-redux";
import React, {useEffect, useRef, useState} from "react";
import CheckboxInput from "../../../toolbox/CheckboxInput";
import {formatPrice} from "../../../../utilities/helpers";
import RadioInputGroup from "../../../toolbox/RadioInputGroup";
import {iterPaymentMethods, PaymentMethodEnum} from "../../../../enums/paymentMethodEnum";
import {createPayments} from "../../../../redux/actions/paymentActions";
import {useReactToPrint} from "react-to-print";
import Receipt from "./Receipt";


const PaymentInfo = ({cart, createPayments}) => {
    const payments = useSelector(state => state.createPaymentsReducer)
    const [toggled, setToggled] = useState(false);
    const ref = useRef()
    const [costs, setCosts] = useState({});
    const [isForDelivery, setIsForDelivery] = useState(false);
    const [isPrint, setIsPrint] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(PaymentMethodEnum.Cash);
    const handlePrint = useReactToPrint(isPrint && {
        content: () => ref.current,
        onAfterPrint: () => setToggled(true),
        onPrintError: () => setToggled(true),
        onBeforeGetContent: () => setToggled(false),
        onBeforePrint: () => setToggled(true)
    });

    useEffect(() => {
        const getCosts = () => {
            let costs = {
                totalCost: 0,
                extraSellingCost: 0,
                shippingCost: 0,
                courierCost: 0,
                productPrice: 0,
            };
            {
                console.log(cart)
            }
            cart.forEach(cartItem => {
                cartItem.payment_needing = false;
                if (cartItem.paymentFor === 'ExtraSelling') {
                    // cartItem.payment_needing = true;
                    // if ((cartItem.will_receiver_pay && cartItem.is_postpaid) && isForDelivery) {
                    //     cartItem.payment_needing = false;
                    //     costs.extraSellingCost += cartItem.price * cartItem.quantity;
                    // }
                    if ((cartItem.will_receiver_pay && cartItem.is_postpaid) && isForDelivery) {
                        costs.extraSellingCost += cartItem.price * cartItem.quantity;
                    }else if ((cartItem.will_receiver_pay && cartItem.is_postpaid) && !isForDelivery) {
                        costs.extraSellingCost = 0;
                    }else if (!cartItem.is_postpaid && !cartItem.will_receiver_pay) {
                        costs.extraSellingCost += cartItem.price * cartItem.quantity;
                        cartItem.payment_needing = false;
                    }else if (cartItem.is_postpaid && !isForDelivery) {
                        costs.extraSellingCost = 0;
                    }
                }
                if (cartItem.paymentFor === 'Package'
                    && !cartItem.is_paid
                    && (!cartItem.will_receiver_pay || (cartItem.will_receiver_pay && isForDelivery))) {
                    cartItem.payment_needing = true;
                    costs.shippingCost += cartItem.amount;
                    costs.courierCost += cartItem.courier_cost;
                }
                if (cartItem.paymentFor === 'Package'
                    && !cartItem.is_courier_cost_paid
                    && (!cartItem.will_receiver_pay || (cartItem.will_receiver_pay && isForDelivery))) {
                    cartItem.payment_needing = true;
                    costs.courierCost += cartItem.courier_cost;
                }
                if (cartItem.paymentFor === 'Package'
                    && !cartItem.is_product_paid
                    && (!cartItem.will_receiver_pay || (cartItem.will_receiver_pay && isForDelivery))) {
                    cartItem.payment_needing = true;

                    // costs.productPrice += cartItem.price;
                }
                if (cartItem.paymentFor === 'Package'
                    && cartItem.is_postpaid && !isForDelivery) {
                    costs.shippingCost = 0;
                }
            });
            costs.totalCost = costs.extraSellingCost + costs.shippingCost + costs.courierCost + costs.productPrice;
            return costs;
        }
        setCosts(getCosts());
    }, [cart, isForDelivery])
    return (
        <div>
            <ul>
                {cart.map(cartItem => (
                    cartItem.paymentFor === 'ExtraSelling'
                        ? <li key={cartItem.id}>{cartItem.name} - {cartItem.quantity} ədəd</li>
                        : <li key={cartItem.id}>Daşınma - {cartItem.quantity} parça</li>
                ))}
            </ul>
            <hr/>
            <div className="card">
                <div className="card-body text-right">
                    Daşınma haqqı: <strong>{formatPrice('AZN').format(costs.shippingCost)}</strong> <br/>
                    Kuryer xidməti: <strong>{formatPrice('AZN').format(costs.courierCost)}</strong> <br/>
                    Məhsul qiyməti: <strong>{formatPrice('AZN').format(costs.productPrice)}</strong> <br/>
                    Ekstra servis: <strong>{formatPrice('AZN').format(costs.extraSellingCost)}</strong> <br/>
                    <hr/>
                    <h5>Toplam: <strong>{formatPrice('AZN').format(costs.totalCost)}</strong></h5>
                </div>
                {/*(!cart[0]?.will_receiver_pay && !cart[0]?.is_postpaid) ||*/}
                <div className="card-body">
                    <CheckboxInput label="Çek çap edilsin" name="is-print" value={isPrint}
                                   onChange={() => setIsPrint(!isPrint)}/>
                    <CheckboxInput
                        label="Təhvil-təslim prosesi"
                        value={isForDelivery}
                        name="is-for-delivery"
                        onChange={() => setIsForDelivery(!isForDelivery)}
                    />
                    <RadioInputGroup
                        radioInputProps={iterPaymentMethods().map(paymentMethod => (
                            {
                                value: paymentMethod.value,
                                label: paymentMethod.name
                            }
                        ))}
                        name="payment-method"
                        checkedValue={paymentMethod}
                        onChange={e => setPaymentMethod(e.target.value)}
                    />
                    <button className="btn btn-primary btn-block" onClick={() => {
                        createPayments(cart, isForDelivery, paymentMethod, costs, handlePrint);
                    }}>Təsdiqlə
                    </button>
                    <Receipt ref={ref} payments={payments} toggled={toggled}/>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    createPayments
}

const mapStateToProps = state => ({
    cart: state.cartReducer
});


export default connect(mapStateToProps, mapDispatchToProps)(PaymentInfo);