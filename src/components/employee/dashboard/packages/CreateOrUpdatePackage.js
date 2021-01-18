import React, {useEffect} from 'react';
import {getStations} from "../../../../redux/actions/stationActions";
import {createCustomer, selectCustomers, updateCustomer} from "../../../../redux/actions/customerActions";
import {connect} from "react-redux";
import CreateOrUpdateCustomerForm from "./CreateOrUpdateCustomerForm";
import {useFormik} from "formik";
import {notEmpty} from "../../../../utilities/helpers";
import {createOrUpdateCustomerFormValidationSchema} from '../../../../utilities/formValidationSchemas';

const CreateOrUpdateCustomer = ({createCustomer, updateCustomer, stations, getStations, selectedCustomers, selectCustomers}) => {
    useEffect(() => {
        if (stations.length === 0) {
            getStations()
        }
    });
    let initialValues = {
        first_name: '',
        last_name: '',
        mobile_number: '',
        password: '',
        discount: 0,
        station_id: '',
        address: ''
    }
    if (notEmpty(selectedCustomers.lastSelectedCustomer)) {
        initialValues = selectedCustomers.lastSelectedCustomer
    }
    const {handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting} = useFormik({
        initialValues,
        validationSchema: createOrUpdateCustomerFormValidationSchema,
        onSubmit: (values, {setSubmitting}) => {
            values.is_partner = values.discount > 0
            values.id
                ? updateCustomer(values, selectedCustomers.lastSelectedCustomer)
                : createCustomer(values);
            setSubmitting(false);
        }
    });
    return (
        <CreateOrUpdateCustomerForm
            onChange={handleChange}
            onSubmit={handleSubmit}
            onBlur={handleBlur}
            values={values}
            stations={stations}
            errors={errors}
            touched={touched}
            isSubmitting={isSubmitting}
        />
    )
}

const mapDispatchToProps = {
    getStations,
    selectCustomers,
    createCustomer,
    updateCustomer
}

const mapStateToProps = state => ({
    selectedCustomers: state.selectCustomersReducer,
    stations: state.getStationsReducer
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateOrUpdateCustomer);
