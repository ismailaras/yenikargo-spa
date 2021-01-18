import * as actionTypes from "./actionTypes";
import * as employeeService from "../../services/employeeService";

export const getEmployeeByIdSuccess = employee => ({
    type: actionTypes.GET_EMPLOYEE_BY_ID_SUCCESS,
    payload: employee
})

export const getEmployeeByIdError = error => ({
    type: actionTypes.GET_EMPLOYEE_BY_ID_ERROR,
    payload: error
})

export const getEmployeeById = employeeId => {
    return dispatch => {
        employeeService.getEmployeeById(employeeId)
            .then(data => {
                if (data.message) {
                    dispatch(getEmployeeByIdError(data.message))
                } else {
                    dispatch(getEmployeeByIdSuccess(data))
                }
            })
            .catch(err => dispatch(getEmployeeByIdError(err)));
    }
}