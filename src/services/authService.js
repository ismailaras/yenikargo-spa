import * as apiService from '../services/apiService';

export const signIn = (employeeCredentials) => {
    return apiService.post("employee/sign-in", employeeCredentials)
        .then(data => {
            if (!data.message) {
                localStorage.setItem("jwtToken", data.jwtToken);
            }
            return data;
        })
        .catch(err => err);
}

export const signOut = () => {
    localStorage.removeItem("jwtToken");
}
