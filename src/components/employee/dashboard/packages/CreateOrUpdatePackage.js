import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getStations } from "../../../../redux/actions/stationActions";
import {
  createPackage,
  selectPackages,
  updatePackage,
  findPackages,
  findAdvancedPackages
} from "../../../../redux/actions/packageActions";
import { setReceiverCustomer, setSenderCustomer } from '../../../../redux/actions/customerActions';
import { setTariffInterval } from "../../../../redux/actions/tariffActions";
import { connect, useSelector } from "react-redux";
import CreateOrUpdatePackageForm from "./CreateOrUpdatePackageForm";
import { useFormik } from "formik";
import { notEmpty } from "../../../../utilities/helpers";
import { createOrUpdatePackageFormValidationSchema } from "../../../../utilities/formValidationSchemas";

function setInitialValues(initialValues, setCustomers, selectedPackages) {
  if (notEmpty(setCustomers.senderCustomer) && notEmpty(setCustomers.receiverCustomer) && !notEmpty(selectedPackages.lastSelectedPackage)) {
    initialValues.sender_customer_id = setCustomers.senderCustomer.id;
    initialValues.receiver_customer_id = setCustomers.receiverCustomer.id;
    initialValues.sender_station_id = setCustomers.senderCustomer.station_id;
    initialValues.receiver_station_id =
      setCustomers.receiverCustomer.station_id;
  }
  else if (notEmpty(selectedPackages.lastSelectedPackage)) {
    initialValues = selectedPackages.lastSelectedPackage;
  }

  return initialValues;
}

const CreateOrUpdatePackage = ({
  createPackage,
  updatePackage,
  selectPackages,
  stations,
  getStations,
  selectedPackages,
  setTariffData,
  findPackages,
  findAdvancedPackages,
  setTariffInterval,
  filteredPackageKeys
  // setReceiverCustomer, setSenderCustomer
}) => {
  let initialValues = {
    sender_customer_id: "",
    receiver_customer_id: "",
    sender_station_id: "",
    receiver_station_id: "",
    weight: null,
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
  const setCustomers = useSelector(state=> state.setCustomerReducer)
  useEffect(() => {
    // if (stations.length === 0) {
    //   getStations();
    // }
    const sendStationID = {
      sender_station_id: initialValues.sender_station_id,
      receiver_station_id: initialValues.receiver_station_id,
    };
    setTariffInterval(sendStationID);
  }, [getStations,stations,initialValues.sender_station_id, initialValues.receiver_station_id, setTariffInterval]);

  initialValues = setInitialValues(
    initialValues,
    setCustomers,
    selectedPackages
  );
  
  const history = useHistory();
  // const onChange = (e) => {
  //   const {name, value} = e.target;
  //   if (name === 'weight' && setTariffData) {
  //     const tariff = tariffs.filter(t => t.from_kg < value );
  //     if (tariff) {
  //       values.price = tariff.price;
  //     } else {
  //       values
  //     }
  //   }
  //   handleChange(e);
  // };
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
      if (values.id) {
        updatePackage(values, selectedPackages.lastSelectedPackage)
        setTimeout(() => {
          filteredPackageKeys.states ?
          findAdvancedPackages(filteredPackageKeys)
          : findPackages(filteredPackageKeys)
        }, 500)
      }
      else { createPackage(values, history) }
        selectPackages([])
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
  findPackages,
  findAdvancedPackages,
  setReceiverCustomer,
  setSenderCustomer
};

const mapStateToProps = (state) => ({
  selectedPackages: state.selectPackagesReducer,
  selectedCustomers: state.selectCustomersReducer,
  stations: state.getStationsReducer,
  setTariffData: state.setTariffReducer,
  filteredPackageKeys:state.setPackagesFilterKeysReducer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateOrUpdatePackage);
