import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const findEmployeesReducer = (state = initialState.employees, action) => {
    switch (action.type) {
        case actionTypes.FIND_EMPLOYEES_BEGIN:
            return state;
        case actionTypes.FIND_EMPLOYEES_SUCCESS:
            return action.payload;
        case actionTypes.FIND_EMPLOYEES_ERROR:
            return []
        default:
            return state;
    }
}
