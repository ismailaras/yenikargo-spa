import * as apiService from '../services/apiService';

export const getEmployees = () => {
    return apiService.get("employee")
        .then(data => data)
        .catch(err => err);
}

export const findEmployees = findObject => {
    return apiService.post("employee/filter", findObject)
        .then(data => data)
        .catch(err => err);
}

export const createEmployee = employee => {
    return apiService.post("employee", employee)
        .then(data => data)
        .catch(err => err);
}

export const updateEmployee = employee => {
    return apiService.put("employee", employee)
        .then(data => data)
        .catch(err => err);
}

export const deleteEmployee = employee => {
    return apiService.del("employee/" + employee.id)
        .then(data => data)
        .catch(err => err);
}