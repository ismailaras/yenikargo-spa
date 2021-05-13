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

export const findPayments = findObject => {
    return apiService.post("payment/filter", findObject)
        .then(data => data)
        .catch(err => err);
}

export const findAdvancedPayments = p => {
    return apiService.post("payment/advanced_filter", {"from_date":p.from_date,"to_date":p.to_date,"station_id":p.station_id.map(Number)})
        .then(data => data)
        .catch(err => err);
}

export const findReports = findObject => {
    return apiService.post("payment/get_report", findObject)
        .then(data => data)
        .catch(err => err);
}