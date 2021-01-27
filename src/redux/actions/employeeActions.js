import * as actionTypes from "./actionTypes";
import * as employeeService from "../../services/employeeService";

import * as notification from "../../utilities/notification";
import {begin, end, endAll, pendingTask} from 'react-redux-spinner';

// export const getEmployeeByIdSuccess = employee => ({
//     type: actionTypes.GET_EMPLOYEE_BY_ID_SUCCESS,
//     payload: employee
// })

// export const getEmployeeByIdError = error => ({
//     type: actionTypes.GET_EMPLOYEE_BY_ID_ERROR,
//     payload: error
// })

// export const getEmployeeById = employeeId => {
//     return dispatch => {
//         employeeService.getEmployeeById(employeeId)
//             .then(data => {
//                 if (data.message) {
//                     dispatch(getEmployeeByIdError(data.message))
//                 } else {
//                     dispatch(getEmployeeByIdSuccess(data))
//                 }
//             })
//             .catch(err => dispatch(getEmployeeByIdError(err)));
//     }
// }

// -------------------------++++++++++++++++++++++++----------------------- //

export const findEmployeesBegin = () => ({
    type: actionTypes.FIND_EMPLOYEES_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const findEmployeesSuccess = employees => ({
    type: actionTypes.FIND_EMPLOYEES_SUCCESS,
    payload: employees,
    [pendingTask]: end
})

export const findEmployeesError = error => ({
    type: actionTypes.FIND_EMPLOYEES_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const selectEmployees = selectedEmployees => ({
    type: actionTypes.SELECT_EMPLOYEES,
    payload: selectedEmployees
})

export const updateSelectedEmployeeData = selectedEmployee => ({
    type: actionTypes.UPDATE_SELECTED_EMPLOYEE_DATA,
    payload: selectedEmployee
})

export const deleteSelectedEmployeeData = selectedEmployee => ({
    type: actionTypes.DELETE_SELECTED_EMPLOYEE_DATA,
    payload: selectedEmployee
})

export const setSenderEmployee = senderEmployee => {
    return ({
        type: actionTypes.SET_SENDER_EMPLOYEE,
        payload: senderEmployee
    })
}

export const setReceiverEmployee = receiverEmployee => ({
    type: actionTypes.SET_RECEIVER_EMPLOYEE,
    payload: receiverEmployee
})

export const createEmployeeBegin = () => ({
    type: actionTypes.CREATE_EMPLOYEE_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const createEmployeeSuccess = employee => ({
    type: actionTypes.CREATE_EMPLOYEE_SUCCESS,
    payload: employee,
    [pendingTask]: end
})

export const createEmployeeError = error => ({
    type: actionTypes.CREATE_EMPLOYEE_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const updateEmployeeBegin = () => ({
    type: actionTypes.UPDATE_EMPLOYEE_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const updateEmployeeSuccess = employee => ({
    type: actionTypes.UPDATE_EMPLOYEE_SUCCESS,
    payload: employee,
    [pendingTask]: end
})

export const updateEmployeeError = error => ({
    type: actionTypes.UPDATE_EMPLOYEE_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const deleteEmployeeBegin = () => ({
    type: actionTypes.DELETE_EMPLOYEE_BEGIN,
    payload: {},
    [pendingTask]: begin
})

export const deleteEmployeeSuccess = employee => ({
    type: actionTypes.DELETE_EMPLOYEE_SUCCESS,
    payload: employee,
    [pendingTask]: end
})

export const deleteEmployeeError = error => ({
    type: actionTypes.DELETE_EMPLOYEE_ERROR,
    payload: error,
    [pendingTask]: endAll
})

export const createEmployee = employee => {
    return async dispatch => {
        dispatch(createEmployeeBegin())
        employeeService.createEmployee(employee)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(createEmployeeError(data.message))
                } else {
                    dispatch(createEmployeeSuccess(data))
                    employee.is_receiver ? dispatch(setReceiverEmployee(data)) : dispatch(setSenderEmployee(data))
                    notification.success('Müştəri artırıldı')
                }
            })
            .catch(err => dispatch(createEmployeeError(err)));
    }
}

export const updateEmployee = (employee, selectedEmployee) => {
    return async dispatch => {
        dispatch(updateEmployeeBegin())
        employeeService.updateEmployee(employee)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(updateEmployeeError(data.message))
                    notification.success('*Mobil nömrə fərqli olmalıdır')
                } else {
                    dispatch(updateEmployeeSuccess(data))
                    dispatch(updateSelectedEmployeeData(changeSelectedEmployeeValues(data, selectedEmployee)))
                    notification.success('Müştəri məlumatları tənzimləndi')
                }
            })
            .catch(err => dispatch(updateEmployeeError(err)));
    }
}

export const deleteEmployee = employee => {
    return async dispatch => {
        dispatch(deleteEmployeeBegin())
        employeeService.deleteEmployee(employee)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(deleteEmployeeError(data.message))
                } else {
                    dispatch(deleteEmployeeSuccess(employee))
                    dispatch(deleteSelectedEmployeeData(employee))
                    notification.success('Müştəri silindi')
                }
            })
            .catch(err => dispatch(deleteEmployeeError(err)));
    }
}

export const findEmployees = findObject => {
    return async dispatch => {
        dispatch(findEmployeesBegin())
        employeeService.findEmployees(findObject)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(findEmployeesError(data.message))
                } else {
                    dispatch(findEmployeesSuccess(data))
                }
            })
            .catch(err => dispatch(findEmployeesError(err)));
    }
}

const changeSelectedEmployeeValues = (values, lastSelectedEmployee) => {
    for (let field in lastSelectedEmployee) {
        for (let value in values) {
            if (field === value) {
                lastSelectedEmployee[field] = values[value]
            }
        }
    }
    return lastSelectedEmployee;
}

