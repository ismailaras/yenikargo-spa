import * as apiService from '../services/apiService';

export const findCustomers = findObject => {
    return apiService.post("customer/filter", findObject)
        .then(data => data)
        .catch(err => err);
}

export const createCustomer = customer => {
    return apiService.post("customer", customer)
        .then(data => data)
        .catch(err => err);
}

export const updateCustomer = customer => {
    return apiService.put("customer", customer)
        .then(data => data)
        .catch(err => err);
}

export const deleteCustomer = customer => {
    return apiService.del("customer/" + customer.id)
        .then(data => data)
        .catch(err => err);
}