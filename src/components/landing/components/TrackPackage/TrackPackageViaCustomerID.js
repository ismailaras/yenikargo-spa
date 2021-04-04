import React from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import { trackPackageViaCustomerIDFormValidationSchema } from "../../../../utilities/formValidationSchemas";
import NumberInput from "../../../toolbox/NumberInput";
import { trackPackageViaCustomerID } from "../../../../redux/actions/packageActions";
import TrackPackageViaCustomerInfo from "./TrackPackageViaCustomerInfo";

const TrackPackageViaCustomerID = ({ trackPackageViaCustomerID, trackingPackage }) => {
  let initialValues = {
    customer_id: 0,
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
    validationSchema: trackPackageViaCustomerIDFormValidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      trackPackageViaCustomerID(values);
      setSubmitting(false);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <h5>Müştəri ID ilə axtar</h5>
      <hr/>
      <NumberInput
        label="Müştəri ID"
        placeHolder="Müştəri ID"
        name="customer_id"
        value={values.customer_id}
        error={errors.customer_id}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.customer_id}
      />
      <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
        <i className="fa fa-search" />
        <span> Təsdiqlə</span>
      </button>
      {!trackingPackage[0] || trackingPackage[0].customer_id != values.customer_id ?null: <TrackPackageViaCustomerInfo/>}
    </form>
  );
};

const mapDispatchToProps = {
  trackPackageViaCustomerID,
};

const mapStateToProps = (state) => ({
  trackingPackage: state.trackPackageViaCustomerIDReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackPackageViaCustomerID);
