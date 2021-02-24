import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {Routes} from "../../routes";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <div className="admin_container">
            <Route { ...rest } render={ props => (
                localStorage.getItem("jwtToken") ?
                <Component {...props} /> :
                <Redirect to={{ pathname: Routes.signIn, state: { from: props.location } }} />
            ) }
            />
        </div>
    );
};

export default PrivateRoute;