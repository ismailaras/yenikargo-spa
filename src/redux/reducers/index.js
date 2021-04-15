import { combineReducers } from "redux";
import { authReducer } from "./auth/authReducer";
import { showCustomersByNumberReducer } from "./customers/showCustomersByNumberReducer";
import { findCustomersReducer } from "./customers/findCustomersReducer";
import { selectCustomersReducer } from "./customers/selectCustomersReducer";
import { setCustomerReducer } from "./customers/setCustomerReducer";
import { setCustomersFilterKeysReducer } from "./customers/setCustomersFilterKeysReducer";
import { createCustomerReducer } from "./customers/createCustomerReducer";
import { updateCustomerReducer } from "./customers/updateCustomerReducer";
import { deleteCustomerReducer } from "./customers/deleteCustomerReducer";
import { getStationsReducer } from "./stations/getStationsReducer";
import { getCitiesReducer } from "./couriers/getCitiesReducer";
import { findPackagesReducer } from "./packages/findPackagesReducer";
import { findAdvancedPackagesReducer } from "./packages/findAdvancedPackagesReducer";
import { selectPackagesReducer } from "./packages/selectPackagesReducer";
import { createPackageReducer } from "./packages/createPackageReducer";
import { updatePackageReducer } from "./packages/updatePackageReducer";
import { deletePackageReducer } from "./packages/deletePackageReducer";
import { changePackageStateReducer } from "./packages/changePackageState";
import { setPackagesFilterKeysReducer } from "./packages/setPackagesFilterKeysReducer";
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
import { setCouriersFilterKeysReducer } from "./couriers/setCouriersFilterKeysReducer";
import { findEmployeesReducer } from "./employees/findEmployeesReducer";
import { selectEmployeesReducer } from "./employees/selectEmployeesReducer";
import { createEmployeeReducer } from "./employees/createEmployeeReducer";
import { updateEmployeeReducer } from "./employees/updateEmployeeReducer";
import { deleteEmployeeReducer } from "./employees/deleteEmployeeReducer";
import { setEmployeesFilterKeysReducer } from "./employees/setEmployeesFilterKeysReducer";
import { createPaymentsReducer } from "./payments/createPaymentsReducer";
import { findPaymentsReducer } from "./payments/findPaymentsReducer";
import { findReportsReducer } from "./payments/findReportsReducer";
import { deleteStationReducer } from "./stations/deleteStationReducer";
import { updateStationReducer } from "./stations/updateStationReducer";
import { createStationReducer } from "./stations/createStationReducer";
import { selectStationsReducer } from "./stations/selectStationsReducer";
import { getAllExtraSellingReducer } from "./extra-selling/getAllExtraSellingReducer";
import { selectAllExtraSellingReducer } from "./extra-selling/selectAllExtraSellingReducer";
import { createExtraSellingReducer } from "./extra-selling/createExtraSellingReducer";
import { updateExtraSellingReducer } from "./extra-selling/updateExtraSellingReducer";
import { deleteExtraSellingReducer } from "./extra-selling/deleteExtraSellingReducer";
import { getTariffsReducer } from "./tariffs/getTariffsReducer";
import { deleteTariffReducer } from "./tariffs/deleteTariffReducer";
import { updateTariffReducer } from "./tariffs/updateTariffReducer";
import { createTariffReducer } from "./tariffs/createTariffReducer";
import { selectTariffsReducer } from "./tariffs/selectTariffsReducer";
import { setTariffReducer } from "./tariffs/setTariffReducer";

const appReducer = combineReducers({
  getCitiesReducer,
  authReducer,
  getTariffsReducer,
  createTariffReducer,
  updateTariffReducer,
  deleteTariffReducer,
  selectTariffsReducer,
  setTariffReducer,
  findCustomersReducer,
  selectCustomersReducer,
  setCustomerReducer,
  setCustomersFilterKeysReducer,
  showCustomersByNumberReducer,
  getStationsReducer,
  createCustomerReducer,
  updateCustomerReducer,
  deleteCustomerReducer,
  findAdvancedPackagesReducer,
  findPackagesReducer,
  selectPackagesReducer,
  createPackageReducer,
  updatePackageReducer,
  deletePackageReducer,
  setPackagesFilterKeysReducer,
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
  setCouriersFilterKeysReducer,
  createEmployeeReducer,
  updateEmployeeReducer,
  deleteEmployeeReducer,
  selectEmployeesReducer,
  setEmployeesFilterKeysReducer,
  findEmployeesReducer,
  createPaymentsReducer,
  findPaymentsReducer,
  findReportsReducer,
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
