import React from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import { trackPackageFormValidationSchema } from "../../../../utilities/formValidationSchemas";
import NumberInput from "../../../toolbox/NumberInput";
import { trackPackage } from "../../../../redux/actions/packageActions";
import TrackPackageInfo from "./TrackPackageInfo";

const TrackPackage = ({ trackPackage, trackingPackage }) => {
  let initialValues = {
    id: 0,
  };
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
    validationSchema: trackPackageFormValidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      trackPackage(values);
      setSubmitting(false);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <NumberInput
        label="Paket ID"
        placeHolder="Paket ID"
        name="id"
        value={values.id}
        error={errors.id}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.id}
      />
      {!trackingPackage.package_id || trackingPackage.package_id != values.id ?null: <TrackPackageInfo/>}
      <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
        <i className="fa fa-search" />
        <span> Təsdiqlə</span>
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  trackPackage,
};

const mapStateToProps = (state) => ({
  trackingPackage: state.trackPackageReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackPackage);
