import React, { useEffect } from "react";
import { changePackageState } from "../../../../redux/actions/packageActions";
import { iterTrackingStates } from "../../../../enums/trackingStateEnum";
import { connect } from "react-redux";
import SelectInput from "../../../toolbox/SelectInput";
import { useFormik } from "formik";
import { changePackageStateFormValidationSchema } from "../../../../utilities/formValidationSchemas";
import { getEmployeeCredentialsFromToken } from "../../../../utilities/helpers";
import { useHistory } from "react-router-dom";
import * as authActions from "../../../../redux/actions/authActions";

const ChangePackageState = ({ selectedPackages, changePackageState, auth,signIn }) => {
  const history = useHistory();
  let initialValues = {
    id: parseInt(selectedPackages.lastSelectedPackage.id),
    state: 0,
  };
  useEffect(() => {
    if (!auth.isAuthenticated) {
      signIn(getEmployeeCredentialsFromToken(), history);
    }
  });
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: changePackageStateFormValidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      values.id &&
        changePackageState(values, selectedPackages.lastSelectedPackage);
      setSubmitting(false);
    },
  });
  const validateAuthStatus = (a) =>
    auth.currentEmployee.is_sorting_admin
      ? a.value !== 1 &&
        a.value !== 0 &&
        a.value !== 4 &&
        a.value !== 5 &&
        a.value !== 6
      : auth.currentEmployee.is_operator_admin
      ? a.value !== 2 && a.value !== 3
      : a;
      console.log(auth)
  return (
    <form onSubmit={handleSubmit}>
      <SelectInput
        value={values.state}
        name="state"
        options={iterTrackingStates()
          .filter((a) => validateAuthStatus(a))
          .map((trackingStateObj) => ({
            value: parseInt(trackingStateObj.value),
            text: trackingStateObj.name,
          }))}
        label="Bağlama statusu"
        defaultOption="Status seçin"
        touched={touched.state}
        error={errors.state}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
        <i className="fa fa-search" />
        <span> Təsdiqlə</span>
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  changePackageState,
  signIn: authActions.signIn,
};

const mapStateToProps = (state) => ({
  selectedCouriers: state.selectCouriersReducer,
  selectedPackages: state.selectPackagesReducer,
  auth: state.authReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePackageState);
