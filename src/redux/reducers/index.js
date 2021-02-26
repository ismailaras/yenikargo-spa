import { combineReducers } from "redux";
import { authReducer } from "./auth/authReducer";
import { findCustomersReducer } from "./customers/findCustomersReducer";
import { selectCustomersReducer } from "./customers/selectCustomersReducer";
import { setCustomerReducer } from "./customers/setCustomerReducer";
import { createCustomerReducer } from "./customers/createCustomerReducer";
import { updateCustomerReducer } from "./customers/updateCustomerReducer";
import { deleteCustomerReducer } from "./customers/deleteCustomerReducer";
import { getStationsReducer } from "./stations/getStationsReducer";
import { getCitiesReducer } from "./couriers/getCitiesReducer";
import { findPackagesReducer } from "./packages/findPackagesReducer";
import { selectPackagesReducer } from "./packages/selectPackagesReducer";
import { createPackageReducer } from "./packages/createPackageReducer";
import { updatePackageReducer } from "./packages/updatePackageReducer";
import { deletePackageReducer } from "./packages/deletePackageReducer";
import { changePackageStateReducer } from "./packages/changePackageState";
import { trackPackageReducer } from "./packages/trackPackage";
import { trackPackageViaCustomerIDReducer } from "./packages/trackPackageViaCustomerIDReducer";
import { cartReducer } from "./checkout/cartReducer";
import { pendingTasksReducer } from "react-redux-spinner";
import * as actionTypes from "../actions/actionTypes";
import { findCouriersReducer } from "./couriers/findCouriersReducer";
import { selectCouriersReducer } from "./couriers/selectCouriersReducer";
import { orderCourierReducer } from "./couriers/orderCourierReducer";
import { createCourierReducer } from "./couriers/createCourierReducer";
import { updateCourierReducer } from "./couriers/updateCourierReducer";
import { deleteCourierReducer } from "./couriers/deleteCourierReducer";
import { findEmployeesReducer } from "./employees/findEmployeesReducer";
import { selectEmployeesReducer } from "./employees/selectEmployeesReducer";
import { createEmployeeReducer } from "./employees/createEmployeeReducer";
import { updateEmployeeReducer } from "./employees/updateEmployeeReducer";
import { deleteEmployeeReducer } from "./employees/deleteEmployeeReducer";
import { createPaymentsReducer } from "./payments/createPaymentsReducer";
import { deleteStationReducer } from "./stations/deleteStationReducer";
import { updateStationReducer } from "./stations/updateStationReducer";
import { createStationReducer } from "./stations/createStationReducer";
import { selectStationsReducer } from "./stations/selectStationsReducer";
import { getAllExtraSellingReducer } from "./extra-selling/getAllExtraSellingReducer";
import { selectAllExtraSellingReducer } from "./extra-selling/selectAllExtraSellingReducer";
import { createExtraSellingReducer } from "./extra-selling/createExtraSellingReducer";
import { updateExtraSellingReducer } from "./extra-selling/updateExtraSellingReducer";
import { deleteExtraSellingReducer } from "./extra-selling/deleteExtraSellingReducer";
import { deleteTariffReducer } from "./tariffs/deleteTariffReducer";
import { updateTariffReducer } from "./tariffs/updateTariffReducer";
import { createTariffReducer } from "./tariffs/createTariffReducer";
import { selectTariffsReducer } from "./tariffs/selectTariffsReducer";
import { setTariffReducer } from "./tariffs/setTariffReducer";

const appReducer = combineReducers({
  getCitiesReducer,
  authReducer,
  createTariffReducer,
  updateTariffReducer,
  deleteTariffReducer,
  selectTariffsReducer,
  setTariffReducer,
  findCustomersReducer,
  selectCustomersReducer,
  setCustomerReducer,
  getStationsReducer,
  createCustomerReducer,
  updateCustomerReducer,
  deleteCustomerReducer,
  findPackagesReducer,
  selectPackagesReducer,
  createPackageReducer,
  updatePackageReducer,
  deletePackageReducer,
  changePackageStateReducer,
  trackPackageReducer,
  trackPackageViaCustomerIDReducer,
  cartReducer,
  orderCourierReducer,
  findCouriersReducer,
  selectCouriersReducer,
  createCourierReducer,
  updateCourierReducer,
  deleteCourierReducer,
  createEmployeeReducer,
  updateEmployeeReducer,
  deleteEmployeeReducer,
  selectEmployeesReducer,
  findEmployeesReducer,
  createPaymentsReducer,
  selectStationsReducer,
  createStationReducer,
  updateStationReducer,
  deleteStationReducer,
  getAllExtraSellingReducer,
  selectAllExtraSellingReducer,
  createExtraSellingReducer,
  updateExtraSellingReducer,
  deleteExtraSellingReducer,
  pendingTasks: pendingTasksReducer,
});

const rootReducer = (state, action) => {
  if (action.type === actionTypes.EMPLOYEE_SIGN_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
