import * as apiService from './apiService';

export const getTariffs = () => {
    return apiService.get("pricing")
        .then(data => data)
        .catch(err => err);
}

export const createTariff = t => {
    return apiService.post("pricing", t)
        .then(data => data)
        .catch(err => err);
}

export const updateTariff = t => {
    return apiService.put("pricing", t)
        .then(data => data)
        .catch(err => err);
}

export const deleteTariff = t => {
    return apiService.del("pricing/" + t.id)
        .then(data => data)
        .catch(err => err);
}

export const setTariffInterval = t => {
    return apiService.post("pricing/filter", t)
        .then(data => data)
        .catch(err => err);
}