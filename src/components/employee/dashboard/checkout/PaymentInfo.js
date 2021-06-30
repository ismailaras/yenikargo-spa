import { connect, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import CheckboxInput from "../../../toolbox/CheckboxInput";
import { formatPrice, notEmpty } from "../../../../utilities/helpers";
import RadioInputGroup from "../../../toolbox/RadioInputGroup";
import { iterPaymentMethods, PaymentMethodEnum } from "../../../../enums/paymentMethodEnum";
import { createPayments } from "../../../../redux/actions/paymentActions";
import { useReactToPrint } from "react-to-print";
import Receipt from "./Receipt";
import * as notification from '../../../../utilities/notification';


const PaymentInfo = ({ cart, createPayments }) => {
    const payments = useSelector(state => state.createPaymentsReducer)
    const [toggled, setToggled] = useState(true);
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

    const handlePrint = useReactToPrint({
        content: () => ref.current,
        onAfterPrint: () => setToggled(false),
        onPrintError: () => setToggled(false),
        onBeforeGetContent: () => setToggled(true),
        onBeforePrint: () => setToggled(true)
    });

    const createPayments1 = () => {
        if (cart.length === 0) {
            notification.error('Heç bir bağlama tapılmadı.');
            return;
        }
        const paidItem = cart.find(cartItem => cartItem.is_paid);
        if (!paidItem && cart.length > 0)
            createPayments(cart, isForDelivery, paymentMethod, costs)
                .then(() => {
                    if (isPrint) handlePrint();
                })
        else
            notification.error('Ödənilmiş bağlamaları ləğv edin.')
    }

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
                if (!cartItem.is_paid) {
                    if (isForDelivery && cartItem.will_receiver_pay) {
                        cartItem.payment_needing = true;
                        costs1.shippingCost += cartItem.amount;
                        if (notEmpty(cartItem.extra_selling_cost)) costs1.extraSellingCost += cartItem.extra_selling_cost;
                        if (!cartItem.is_courier_cost_paid && cartItem.courierCost) costs1.courierCost += cartItem.courierCost;
                    } else if (!isForDelivery && !cartItem.will_receiver_pay) {
                        cartItem.payment_needing = true;
                        costs1.shippingCost += cartItem.amount;
                        if (notEmpty(cartItem.extra_selling_cost)) costs1.extraSellingCost += cartItem.extra_selling_cost;
                        if (!cartItem.is_courier_cost_paid && cartItem.courierCost) costs1.courierCost += cartItem.courierCost;
                    }
                    if (!cartItem.is_product_paid && cartItem.is_postpaid && cartItem.price && isForDelivery) costs1.productPrice += cartItem.price;
                }
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
                {cart.map(cartItem => <li key={cartItem.id}>Daşınma #{cartItem.id} - {cartItem.quantity} parça</li>)}
            </ul>
            <hr />
            <div className="card">
                <div className="card-body text-right">
                    Daşınma haqqı: <strong>{formatPrice('AZN').format(costs.shippingCost)}</strong> <br />
                    Kuryer xidməti: <strong>{formatPrice('AZN').format(costs.courierCost)}</strong> <br />
                    Məhsul qiyməti: <strong>{formatPrice('AZN').format(costs.productPrice)}</strong> <br />
                    Ekstra servis: <strong>{formatPrice('AZN').format(costs.extraSellingCost)}</strong> <br />
                    <hr />
                    <h5>Toplam: <strong>{formatPrice('AZN').format(costs.totalCost)}</strong></h5>
                </div>
                <div className="card-body">
                    <CheckboxInput label="Çek çap edilsin" name="is-print" value={isPrint} onChange={() => setIsPrint(!isPrint)} />
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
                    <button className="btn btn-primary btn-block" onClick={createPayments1}>
                        Təsdiqlə
                    </button>
                    <Receipt ref={ref} payments={payments} toggled={toggled} costs={costs}/>
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