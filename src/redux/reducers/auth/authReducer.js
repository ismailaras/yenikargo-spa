import * as actionTypes from '../../actions/actionTypes';
import initialState from "../initialState";

export const authReducer = (state = initialState.auth, action) => {
    switch (action.type) {
        case actionTypes.EMPLOYEE_SIGN_IN_BEGIN:
            return state;
        case actionTypes.EMPLOYEE_SIGN_IN_SUCCESS:
            return {
                ...state,
                currentEmployee: action.payload,
                isAuthenticated: true,
                error: false,
                errorMessage: ''
            };
        case actionTypes.EMPLOYEE_SIGN_IN_ERROR:
            return {
                ...state,
                currentEmployee: {},
                error: true,
                isAuthenticated: false,
                errorMessage: action.payload
            };
        case actionTypes.EMPLOYEE_SIGN_OUT:
            return action.payload
        default:
            return state;
    }
}
