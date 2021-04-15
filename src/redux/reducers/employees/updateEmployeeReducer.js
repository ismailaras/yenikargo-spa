import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";


export const updateEmployeeReducer = (state = initialState.selectedEmployees.lastSelectedEmployee, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_EMPLOYEE_BEGIN:
            return state;
        case actionTypes.UPDATE_EMPLOYEE_SUCCESS:
            return action.payload;
        case actionTypes.UPDATE_EMPLOYEE_ERROR:
            return state
        default:
            return state;
    }
}
