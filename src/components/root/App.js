import './App.scss';
import React from "react";
import {Route, Switch} from "react-router-dom";
import NotFound from "../common/NotFound";
import SignIn from "../employee/auth/sign-in/SignIn";
import Customers from "../employee/dashboard/customers/Customers";
import PrivateRoute from "./PrivateRoute";
import {ToastContainer} from 'react-toastify';
import {Spinner} from 'react-redux-spinner';
import {Routes} from '../../routes';
import Packages from "../employee/dashboard/packages/Packages";
import Checkout from "../employee/dashboard/checkout/Checkout";
import Landing from "../landing/Landing";
import Couriers from "../employee/dashboard/couriers/Couriers";
import Stations from "../employee/dashboard/stations/Stations";
import Employees from "../employee/dashboard/employees/Employees";
import AllExtraSelling from "../employee/dashboard/all-extra-selling/AllExtraSelling";

function App() {
    return (
        <div>
            <Switch>
                <Route exact path={Routes.landing} component={Landing}/>
                <Route exact path={Routes.signIn} component={SignIn}/>
                <PrivateRoute exact path={Routes.dashboard} component={Customers}/>
                <PrivateRoute exact path={Routes.customers} component={Customers}/>
                <PrivateRoute exact path={Routes.packages} component={Packages}/>
                <PrivateRoute exact path={Routes.checkout} component={Checkout}/>
                <PrivateRoute exact path={Routes.courier} component={Couriers}/>
                <PrivateRoute exact path={Routes.stations} component={Stations}/>
                <PrivateRoute exact path={Routes.allExtraSelling} component={AllExtraSelling}/>
                <PrivateRoute exact path={Routes.employees} component={Employees}/>
                {/*<Route path="/saveProduct/:productId" component={AddOrUpdateProduct}/>*/}
                {/*<Route path="/saveProduct" component={AddOrUpdateProduct}/>*/}
                <Route component={NotFound}/>
            </Switch>
            <Spinner/>
            <ToastContainer/>
        </div>
    );
}

export default App;
