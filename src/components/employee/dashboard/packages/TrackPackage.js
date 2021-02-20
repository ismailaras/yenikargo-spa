import React from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import { trackPackageFormValidationSchema } from "../../../../utilities/formValidationSchemas";
import NumberInput from "../../../toolbox/NumberInput";
import { trackPackage } from "../../../../services/packageService";

const TrackPackage = ({ trackPackage }) => {
  let initialValues = {
    package_id: 0,
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
      console.log(values)
    },
  });
  return (
    <form onSubmit={handleSubmit}>
        <NumberInput
          label="Paket ID"
          placeHolder="Paket ID"
          name="package_id"
          value={values.package_id}
          error={errors.package_id}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.package_id}
        />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackPackage);
