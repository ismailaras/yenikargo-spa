import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const getEmployeesReducer = (state = initialState.employees, action) => {
    switch (action.type) {
        case actionTypes.GET_EMPLOYEES_BEGIN:
            return state;
        case actionTypes.GET_EMPLOYEES_SUCCESS:
            return action.payload;
        case actionTypes.ADD_EMPLOYEE_TO_TABLE:
            return [...state, action.payload]
        case actionTypes.UPDATE_EMPLOYEE_ON_TABLE:
            return state.map(employee => {
                if (employee.id === action.payload.id) {
                    employee = action.payload;
                }
                return employee;
            })
        case actionTypes.DELETE_EMPLOYEE_FROM_TABLE:
            return state.filter(employee => employee.id !== action.payload.id);
        case actionTypes.GET_EMPLOYEES_ERROR:
            return state
        default:
            return state;
    }
}
