import * as apiService from '../services/apiService';

export const getAllExtraSelling = () => {
    return apiService.get("extra-selling")
        .then(data => data)
        .catch(err => err);
}

export const createExtraSelling = s => {
    return apiService.post("extra-selling", s)
        .then(data => data)
        .catch(err => err);
}

export const updateExtraSelling = s => {
    return apiService.put("extra-selling", s)
        .then(data => data)
        .catch(err => err);
}

export const deleteExtraSelling = s => {
    return apiService.del("extra-selling/" + s.id)
        .then(data => data)
        .catch(err => err);
}