import "./App.scss";
import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../common/NotFound";
import SignIn from "../employee/auth/sign-in/SignIn";
import Customers from "../employee/dashboard/customers/Customers";
import PrivateRoute from "./PrivateRoute";
import { ToastContainer } from "react-toastify";
import { Spinner } from "react-redux-spinner";
import { Routes } from "../../routes";
import Packages from "../employee/dashboard/packages/Packages";
import Checkout from "../employee/dashboard/checkout/Checkout";
import Landing from "../landing/Landing";
import Couriers from "../employee/dashboard/couriers/Couriers";
import Stations from "../employee/dashboard/stations/Stations";
import Employees from "../employee/dashboard/employees/Employees";
import Tariffs from "../employee/dashboard/tariffs/Tariffs";
import AllExtraSelling from "../employee/dashboard/all-extra-selling/AllExtraSelling";
import Payments from "../employee/dashboard/payments/Payments";
import TrackPackagePage from "../landing/pages/TrackPackagePage";
import Franchising from "../landing/pages/Franchising";
import Features from "../landing/pages/Features";
import IndividualCustomers from "../landing/pages/IndividualCustomers";
import BusinessCustomers from "../landing/pages/BusinessCustomers";
import Discounts from "../landing/pages/Discounts";
import Vacations from "../landing/pages/Vacations";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={Routes.landing} component={Landing} />
        <Route exact path={Routes.franchising} component={Franchising} />
        <Route exact path={Routes.features} component={Features} />
        <Route exact path={Routes.individualCustomers} component={IndividualCustomers} />
        <Route exact path={Routes.businessCustomers} component={BusinessCustomers} />
        <Route exact path={Routes.discounts} component={Discounts} />
        <Route exact path={Routes.vacations} component={Vacations} />
        <Route exact path={Routes.trackPackagePage} component={TrackPackagePage} />
        <Route exact path={Routes.signIn} component={SignIn} />
        <PrivateRoute exact path={Routes.dashboard} component={Customers} />
        <PrivateRoute exact path={Routes.customers} component={Customers} />
        <PrivateRoute exact path={Routes.packages} component={Packages} />
        <PrivateRoute exact path={Routes.checkout} component={Checkout} />
        <PrivateRoute exact path={Routes.courier} component={Couriers} />
        <PrivateRoute exact path={Routes.stations} component={Stations} />
        <PrivateRoute exact path={Routes.tariffs} component={Tariffs} />
        <PrivateRoute
          exact
          path={Routes.allExtraSelling}
          component={AllExtraSelling}
        />
        <PrivateRoute exact path={Routes.employees} component={Employees} />
        <PrivateRoute exact path={Routes.payments} component={Payments} />
        <Route component={NotFound} />
      </Switch>
      <Spinner />
      <ToastContainer />
    </div>
  );
}

export default App;
