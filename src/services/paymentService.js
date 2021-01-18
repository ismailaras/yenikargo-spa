import * as apiService from '../services/apiService';

export const getAllExtraSelling = () => {
    return apiService.get("extra-selling")
        .then(data => data)
        .catch(err => err);
}
