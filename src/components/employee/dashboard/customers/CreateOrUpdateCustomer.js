import React, {useEffect} from 'react';
import {getStations} from "../../../../redux/actions/stationActions";
import {createCustomer, selectCustomers, updateCustomer, findCustomers} from "../../../../redux/actions/customerActions";
import {connect} from "react-redux";
import CreateOrUpdateCustomerForm from "./CreateOrUpdateCustomerForm";
import {useFormik} from "formik";
import {notEmpty} from "../../../../utilities/helpers";
import {createOrUpdateCustomerFormValidationSchema} from '../../../../utilities/formValidationSchemas';

const CreateOrUpdateCustomer = ({createCustomer, updateCustomer, stations, getStations, selectedCustomers, selectCustomers,customerFilters,findCustomers}) => {
    useEffect(() => {
        if (stations.length === 0) {
            getStations()
        }
    });
    let initialValues = {
        first_name: '',
        last_name: '',
        mobile_number: '',
        password: '0000',
        discount: 0,
        station_id: '',
        address: '',
        card_number: '',
        exp_date: '',
        bank_name: '',
        bank_info:''
    }
    if (notEmpty(selectedCustomers.lastSelectedCustomer)) {
        initialValues = selectedCustomers.lastSelectedCustomer
    }
    const {handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting,setFieldValue} = useFormik({
        initialValues,
        validationSchema: createOrUpdateCustomerFormValidationSchema,
        onSubmit: (values, {setSubmitting}) => {
            values.is_partner = values.discount > 0
            if(values.id){
                updateCustomer(values, selectedCustomers.lastSelectedCustomer)
                setTimeout(()=>{
                    findCustomers(customerFilters)
                },500)
            }
            else {createCustomer(values)}
            setSubmitting(false);
        }
    });
    const onChange = e => {
        console.log(e.target);
        handleChange(e);
    }
    return (
        <CreateOrUpdateCustomerForm
            onChange={onChange}
            onSubmit={handleSubmit}
            onBlur={handleBlur}
            values={values}
            stations={stations}
            setFieldValue={setFieldValue}
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
    updateCustomer,
    findCustomers
}

const mapStateToProps = state => ({
    selectedCustomers: state.selectCustomersReducer,
    stations: state.getStationsReducer,
    customerFilters:state.setCustomersFilterKeysReducer
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateOrUpdateCustomer);
