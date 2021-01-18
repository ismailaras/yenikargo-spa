import * as apiService from '../services/apiService';

export const findCustomers = findObject => {
    return apiService.post("customer/filter", findObject)
        .then(data => data)
        .catch(err => err);
}
