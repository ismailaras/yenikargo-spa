import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const createEmployeeReducer = (state = initialState.selectedEmployees.lastSelectedEmployee, action) => {
    switch (action.type) {
        case actionTypes.CREATE_EMPLOYEE_BEGIN:
            return state;
        case actionTypes.CREATE_EMPLOYEE_SUCCESS:
            return action.payload;
        case actionTypes.CREATE_EMPLOYEE_ERROR:
            return state
        default:
            return state;
    }
}
