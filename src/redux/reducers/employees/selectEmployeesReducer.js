import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const selectEmployeesReducer = (state = initialState.selectedEmployees, action) => {
    switch (action.type) {
        case actionTypes.SELECT_EMPLOYEES:
            const [lastItem] = action.payload.slice(-1)
            if (action.payload.length === 0) {
                state.toggledClearRows = !state.toggledClearRows
            }
            return {
                allSelectedEmployees: action.payload,
                lastSelectedEmployee: lastItem,
                toggledClearRows: state.toggledClearRows
            }
        case actionTypes.UPDATE_SELECTED_EMPLOYEE_DATA:
            state.allSelectedEmployees.forEach(employee => {
                if (employee.id === action.payload.id) {
                    state.lastSelectedEmployee = action.payload;
                }
            })
            return {...state, lastSelectedEmployee: action.payload}
        case actionTypes.DELETE_SELECTED_EMPLOYEE_DATA:
            return {...state, lastSelectedEmployee: {}}
        default:
            return state;
    }
}
