import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getStations } from "../../../../redux/actions/stationActions";
import {
  createPackage,
  selectPackages,
  updatePackage,
} from "../../../../redux/actions/packageActions";
import { connect } from "react-redux";
import CreateOrUpdatePackageForm from "./CreateOrUpdatePackageForm";
import { useFormik } from "formik";
import { notEmpty } from "../../../../utilities/helpers";
import { createOrUpdatePackageFormValidationSchema } from "../../../../utilities/formValidationSchemas";

function setAmount(weight, amounts) {
  if (weight <= 100) {
    amounts = 10;
    // console.log(amounts);
    // console.log("100<=");
  } else if (weight > 100) {
    amounts = 20;
    // console.log(amounts);
    // console.log("100>");
  }
}

const CreateOrUpdatePackage = ({
  createPackage,
  updatePackage,
  stations,
  getStations,
  selectedPackages,
  setCustomers,
}) => {
  function setInitialValues(initialValues, setCustomers, selectedPackages) {
    if (
      notEmpty(setCustomers.senderCustomer) &&
      notEmpty(setCustomers.receiverCustomer)
    ) {
      initialValues.sender_customer_id = setCustomers.senderCustomer.id;
      initialValues.receiver_customer_id = setCustomers.receiverCustomer.id;
      initialValues.sender_station_id = setCustomers.senderCustomer.station_id;
      initialValues.receiver_station_id =
        setCustomers.receiverCustomer.station_id;
    } else if (notEmpty(selectedPackages.lastSelectedPackage)) {
      initialValues = selectedPackages.lastSelectedPackage;
    }
    return initialValues;
  }
  useEffect(() => {
    if (stations.length === 0) {
      getStations();
    }
    setAmount(values.weight, values.amount);
  });
  let initialValues = {
    sender_customer_id: "",
    receiver_customer_id: "",
    sender_station_id: "",
    receiver_station_id: "",
    weight: 0,
    length: 0,
    height: 0,
    width: 0,
    amount: setAmount,
    description: "",
    comment: "",
    price: 0,
    is_postpaid: false,
    deliver_to_address: false,
    will_receiver_pay: false,
    quantity: 1,
  };
  initialValues = setInitialValues(
    initialValues,
    setCustomers,
    selectedPackages
  );
  const history = useHistory();
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
    validationSchema: createOrUpdatePackageFormValidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      values.id
        ? updatePackage(values, selectedPackages.lastSelectedPackage)
        : createPackage(values, history);
      setSubmitting(false);
      console.log(values)
    },
  });
  return (
    <CreateOrUpdatePackageForm
      onChange={handleChange}
      onSubmit={handleSubmit}
      onBlur={handleBlur}
      values={values}
      stations={stations}
      errors={errors}
      touched={touched}
      isSubmitting={isSubmitting}
    />
  );
};

const mapDispatchToProps = {
  getStations,
  selectPackages,
  createPackage,
  updatePackage,
};

const mapStateToProps = (state) => ({
  selectedPackages: state.selectPackagesReducer,
  selectedCustomers: state.selectCustomersReducer,
  stations: state.getStationsReducer,
  setCustomers: state.setCustomerReducer,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateOrUpdatePackage);
