export const PaymentMethodEnum = Object.freeze({
    CreditDebitCard: 0,
    Cash: 1,
    PromoCode: 2,
    Terminal: 3,
    POS: 4
})

export const iterPaymentMethods = () => {
    const list = [];
    for (let paymentMethod in PaymentMethodEnum) {
        list.push({name: paymentMethod,value: PaymentMethodEnum[paymentMethod]})
    }
    return list;
}
