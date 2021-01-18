import * as notification from "../utilities/notification";
import {constants} from '../keys.env'

const TOKEN_KEY = 'jwtToken';
const HEADERS = {'Content-Type': 'application/json'};
const ERROR_MESSAGE_COMMON = 'Gözlənilməyən bir xəta baş verdi. Daha sonra təkrar yoxlayın.';
const ERROR_MESSAGE_UNAUTHORIZED = 'Login detalları səhvdir və ya bu proses üçün səlahiyyətiniz yoxdur.';

export const post = (endpoint, data) => {
    const TOKEN = localStorage.getItem(TOKEN_KEY);
    return fetch(constants.BASE_URL + endpoint,
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: TOKEN ? {...HEADERS, Authorization: 'Bearer ' + TOKEN} : HEADERS
        })
        .then(handleResponse)
        .catch(handleError)
}
export const put = (endpoint, data) => {
    const TOKEN = localStorage.getItem(TOKEN_KEY);
    return fetch(constants.BASE_URL + endpoint,
        {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: TOKEN ? {...HEADERS, Authorization: 'Bearer ' + TOKEN} : HEADERS
        })
        .then(handleResponse)
        .catch(handleError)
}

export const del = endpoint => {
    const TOKEN = localStorage.getItem(TOKEN_KEY);
    return fetch(constants.BASE_URL + endpoint,
        {
            method: 'DELETE',
            headers: TOKEN ? {...HEADERS, Authorization: 'Bearer ' + TOKEN} : HEADERS
        })
        .then(handleResponse)
        .catch(handleError)
}
export const get = endpoint => {
    const TOKEN = localStorage.getItem(TOKEN_KEY);
    return fetch(constants.BASE_URL + endpoint,
        {
            headers: TOKEN ? {...HEADERS, Authorization: 'Bearer ' + TOKEN} : HEADERS
        })
        .then(handleResponse)
        .catch(handleError)
}

export const handleResponse = async response => {
    if (response.ok) {
        const data = await response.json();
        if (data.message) {
            notification.success(data.message);
        }
        return data;
    }
    let err = '';
    if (response.status === 401) {
        err = ERROR_MESSAGE_UNAUTHORIZED;
    } else {
        err = ERROR_MESSAGE_COMMON;
    }
    throw new Error(err);
}

export const handleError = async err => {
    notification.error(err.toString());
    throw err;
}