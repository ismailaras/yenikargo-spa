import * as apiService from '../services/apiService';

export const findCouriers = findObject => {
    return apiService.post("courier/filter", findObject)
        .then(data => data)
        .catch(err => err);
}

export const createCourier = courier => {
    return apiService.post("courier", courier)
        .then(data => data)
        .catch(err => err);
}

export const updateCourier = courier => {
    return apiService.put("courier", courier)
        .then(data => data)
        .catch(err => err);
}

export const deleteCourier = courier => {
    return apiService.del("courier/" + courier.id)
        .then(data => data)
        .catch(err => err);
}

export const orderCourier = courier => {
    return apiService.post("courier_request", courier)
        .then(data => data)
        .catch(err => err);
}

export const getCities = () => {
    return apiService.get("/service_cities")
        .then(data => data)
        .catch(err => err);
}