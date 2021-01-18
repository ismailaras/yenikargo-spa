import * as actionTypes from "./actionTypes";
import * as authService from "../../services/authService";
import * as notification from '../../utilities/notification';
import {begin, end, endAll, pendingTask} from "react-redux-spinner";
import {Routes} from "../../routes";

export const signInBegin = () => ({
    type: actionTypes.EMPLOYEE_SIGN_IN_BEGIN,
    payload: {},
    [ pendingTask ]: begin
})

export const signInSuccess = employee => ({
    type: actionTypes.EMPLOYEE_SIGN_IN_SUCCESS,
    payload: employee,
    [ pendingTask ]: end
})

export const signInError = error => ({
    type: actionTypes.EMPLOYEE_SIGN_IN_ERROR,
    payload: error,
    [ pendingTask ]: endAll
})

export const signIn = (employeeCredentials, history) => {
    return dispatch => {
        dispatch(signInBegin())
        authService.signIn(employeeCredentials)
            .then(async data => {
                await data;
                if (data.message) {
                    dispatch(signInError(data.message))
                } else{
                    dispatch(signInSuccess(data.employee))
                    history.push(Routes.dashboard)
                    notification.success('Daxil olundu.');
                }
            })
            .catch(err => dispatch(signInError(err)));
    }
}

export const signOut = history => {
    authService.signOut();
    history.push(Routes.signIn);
    notification.info('Çıxış edildi.');
    return {
        type: actionTypes.EMPLOYEE_SIGN_OUT,
        payload: {}
    };
}