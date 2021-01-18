import * as apiService from '../services/apiService';

export const getEmployeeById = employeeId => {
    return apiService.get("employee/" + employeeId)
        .then(data => data)
        .catch(err => err);
}
