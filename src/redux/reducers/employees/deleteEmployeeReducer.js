import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const deleteEmployeeReducer = (state = initialState.selectedEmployees.lastSelectedEmployee, action) => {
    switch (action.type) {
        case actionTypes.DELETE_EMPLOYEE_BEGIN:
            return state;
        case actionTypes.DELETE_EMPLOYEE_SUCCESS:
            return action.payload;
        case actionTypes.DELETE_EMPLOYEE_ERROR:
            return state
        default:
            return state;
    }
}
