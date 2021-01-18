import * as apiService from '../services/apiService';

export const createPayments = (cart, isForDelivery, paymentMethod, costs) => {
    return apiService.post("payment", {
        cart,
        isForDelivery,
        paymentMethod,
        costs
    })
        .then(data => data)
        .catch(err => err);
}
