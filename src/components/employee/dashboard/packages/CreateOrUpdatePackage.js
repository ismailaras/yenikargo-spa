import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getStations } from "../../../../redux/actions/stationActions";
import {
  createPackage,
  selectPackages,
  updatePackage,
} from "../../../../redux/actions/packageActions";
import { setTariffInterval } from "../../../../redux/actions/tariffActions";
import { connect } from "react-redux";
import CreateOrUpdatePackageForm from "./CreateOrUpdatePackageForm";
import { useFormik } from "formik";
import { notEmpty } from "../../../../utilities/helpers";
import { createOrUpdatePackageFormValidationSchema } from "../../../../utilities/formValidationSchemas";

const CreateOrUpdatePackage = ({
  createPackage,
  updatePackage,
  stations,
  getStations,
  selectedPackages,
  setCustomers,
  setTariffData,
  setTariffInterval,
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
  });

  let initialValues = {
    sender_customer_id: "",
    receiver_customer_id: "",
    sender_station_id: "",
    receiver_station_id: "",
    weight: 0,
    extra_amount: 0,
    amount: 0,
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

  useEffect(() => {
    function setPriceFunc() {
      const sendStationID = {
        sender_station_id: initialValues.sender_station_id,
        receiver_station_id: initialValues.receiver_station_id,
      };
      setTariffInterval(sendStationID);
    }
    setPriceFunc();
  }, [initialValues.sender_station_id,initialValues.receiver_station_id,setTariffInterval]);
  const history = useHistory();
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    isSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: createOrUpdatePackageFormValidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      values.id
        ? updatePackage(values, selectedPackages.lastSelectedPackage)
        : createPackage(values, history);
      setSubmitting(false);
    },
  });
  return (
    <CreateOrUpdatePackageForm
      onChange={handleChange}
      onSubmit={handleSubmit}
      onBlur={handleBlur}
      setFieldValue={setFieldValue}
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
  setTariffInterval,
};

const mapStateToProps = (state) => ({
  selectedPackages: state.selectPackagesReducer,
  selectedCustomers: state.selectCustomersReducer,
  stations: state.getStationsReducer,
  setTariffData: state.setTariffReducer,
  setCustomers: state.setCustomerReducer,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateOrUpdatePackage);
