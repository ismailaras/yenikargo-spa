import {connect, useSelector} from "react-redux";
import React, {useEffect, useRef, useState} from "react";
import CheckboxInput from "../../../toolbox/CheckboxInput";
import {formatPrice, notEmpty} from "../../../../utilities/helpers";
import RadioInputGroup from "../../../toolbox/RadioInputGroup";
import {iterPaymentMethods, PaymentMethodEnum} from "../../../../enums/paymentMethodEnum";
import {createPayments} from "../../../../redux/actions/paymentActions";
import {useReactToPrint} from "react-to-print";
import Receipt from "./Receipt";

const PaymentInfo = ({cart, createPayments}) => {
    const payments = useSelector(state => state.createPaymentsReducer)
    const [toggled, setToggled] = useState(false);
    const [costs, setCosts] = useState({
        totalCost: 0,
        extraSellingCost: 0,
        shippingCost: 0,
        courierCost: 0,
        productPrice: 0,
    });
    const ref = useRef()
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
            cart.forEach(cartItem => {
                let costs1 = {
                    totalCost: 0,
                    extraSellingCost: 0,
                    shippingCost: 0,
                    courierCost: 0,
                    productPrice: 0,
                };
                cartItem.payment_needing = true;
                if (!cartItem.is_paid || !cartItem.is_courier_cost_paid) {
                    costs1.shippingCost += cartItem.amount;
                    costs1.courierCost += cartItem.courier_cost;
                    if (notEmpty(cartItem.extra_selling_cost)) costs1.extraSellingCost += cartItem.extra_selling_cost;
                }
                if (!cartItem.is_product_paid && cartItem.is_postpaid && isForDelivery && !cartItem.will_receiver_pay) {
                    costs1.productPrice += cartItem.price;
                    costs1.shippingCost = 0;
                    costs1.courierCost = 0;
                    costs1.extraSellingCost = 0;
                }
                if (!cartItem.is_product_paid && !isForDelivery && ((cartItem.is_postpaid && cartItem.will_receiver_pay) || cartItem.will_receiver_pay)) {
                    costs1.productPrice = 0;
                    costs1.shippingCost = 0;
                    costs1.courierCost = 0;
                    costs1.extraSellingCost = 0;
                }
                if (isForDelivery && cartItem.is_postpaid && cartItem.will_receiver_pay) costs1.productPrice += cartItem.price;
                costs.totalCost += costs1.extraSellingCost + costs1.shippingCost + costs1.courierCost + costs1.productPrice;
                costs.shippingCost += costs1.shippingCost;
                costs.productPrice += costs1.productPrice;
                costs.courierCost += costs1.courierCost;
                costs.extraSellingCost += costs1.extraSellingCost;
            });
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
                <div>
                    {/*<p>{cartI}</p>*/}
                </div>
                <div className="card-body text-right">
                    Daşınma haqqı: <strong>{formatPrice('AZN').format(costs.shippingCost)}</strong> <br/>
                    Kuryer xidməti: <strong>{formatPrice('AZN').format(costs.courierCost)}</strong> <br/>
                    Məhsul qiyməti: <strong>{formatPrice('AZN').format(costs.productPrice)}</strong> <br/>
                    Ekstra servis: <strong>{formatPrice('AZN').format(costs.extraSellingCost)}</strong> <br/>
                    <hr/>
                    <h5>Toplam: <strong>{formatPrice('AZN').format(costs.totalCost)}</strong></h5>
                </div>
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