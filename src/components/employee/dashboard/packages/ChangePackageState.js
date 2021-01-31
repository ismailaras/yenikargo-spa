import React, { useEffect } from "react";
import {changePackageState} from '../../../../redux/actions/packageActions'
import {iterTrackingStates} from '../../../../enums/trackingStateEnum'
import { connect } from "react-redux";
import SelectInput from "../../../toolbox/SelectInput";
import { useFormik } from "formik";
import { changePackageStateFormValidationSchema } from "../../../../utilities/formValidationSchemas";

const ChangePackageState = ({
  selectedPackages,
  changePackageState
}) => {
  useEffect(() => {
    
  });
  let initialValues = {
    id: selectedPackages.allSelectedPackages.map((p) => p.id),
    tracking_state: "",
  };
  const {
    handleSubmit,handleChange,values,errors,touched,handleBlur,isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: changePackageStateFormValidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      values.id && 
        changePackageState(values, selectedPackages.lastSelectedPackage)
      setSubmitting(false);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <SelectInput
        value={values.keyword}
        name="keyword"
        options={iterTrackingStates().map((trackingStateObj) => ({
          value: trackingStateObj.value,
          text: trackingStateObj.name,
        }))}
        label="Bağlama statusu"
        defaultOption="Status seçin"
        touched={touched.keyword}
        error={errors.keyword}
        onChange={handleChange}
        onBlur={handleBlur}
      />
        <button
          className="btn btn-primary"
          type="submit"
          disabled={isSubmitting}
        >
          <i className="fa fa-search" />
          <span> Təsdiqlə</span>
        </button>
    </form>
  );
};

const mapDispatchToProps = {
  changePackageState,
};

const mapStateToProps = (state) => ({
  selectedCouriers: state.selectCouriersReducer,
  selectedPackages: state.selectPackagesReducer,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePackageState);
