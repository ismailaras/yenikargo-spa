import axios from 'axios';
import { setAuthorizationToken } from '../helpers/setAuthorizationToken';


const jwtToken = localStorage.getItem("jwtToken");
if (jwtToken) {
    setAuthorizationToken(jwtToken);
}

const signIn = (employeeCredentials) => {
    console.log(employeeCredentials)
    return axios.post("http://localhost:5000/employee/sign-in", employeeCredentials)
        .then(employee => {
            console.log(employee)
            if (employee.data.status) {
                const { token } = employee.data;
                localStorage.setItem("jwtToken", token);
                setAuthorizationToken(token);
            }
            return employee.data;
        })
        .catch(err => console.log(err));
}

const signOut = () => {
    localStorage.removeItem("jwtToken");
    setAuthorizationToken(false);
}

export default { signIn, signOut };