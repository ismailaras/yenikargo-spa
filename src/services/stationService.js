import * as apiService from '../services/apiService';

export const getStations = () => {
    return apiService.get("station")
        .then(data => data)
        .catch(err => err);
}

export const createStation = s => {
    return apiService.post("station", s)
        .then(data => data)
        .catch(err => err);
}

export const updateStation = s => {
    return apiService.put("station", s)
        .then(data => data)
        .catch(err => err);
}

export const deleteStation = s => {
    return apiService.del("station/" + s.id)
        .then(data => data)
        .catch(err => err);
}