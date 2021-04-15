import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const setEmployeesFilterKeysReducer = (state = initialState.filteredEmployeesKeys, action) => {
    switch (action.type) {
        case actionTypes.SET_EMPLOYEES_FILTER_KEYS:
            return action.payload;
        default:
            return state;
    }
}
