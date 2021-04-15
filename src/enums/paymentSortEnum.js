export const PaymentSortEnum = Object.freeze({
    Package: 0,
    ExtraSelling: 1
})

export const iterPaymentSorts = () => {
    const list = [];
    for (let paymentSort in PaymentSortEnum) {
        list.push({name: paymentSort, value: PaymentSortEnum[paymentSort]})
    }
    return list;
}
