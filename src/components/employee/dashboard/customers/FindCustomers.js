import React from 'react';
import {findCustomers, selectCustomers,setCustomersFilterKeys} from '../../../../redux/actions/customerActions';
import {connect} from "react-redux";
import FindCustomersForm from "./FindCustomersForm";
import {useFormik} from "formik";
import {findCustomersFormValidationSchema} from '../../../../utilities/formValidationSchemas';

const FindCustomers = ({findCustomers, selectCustomers,setCustomersFilterKeys}) => {
    const {handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting} = useFormik({
        initialValues: {keyword: '', via: 'viaId'},
        validationSchema: findCustomersFormValidationSchema,
        onSubmit: (values, {setSubmitting}) => {
            selectCustomers([]); // Axtaris zamani secilmish musteriler bosh array edir.
            setCustomersFilterKeys(values)
            findCustomers(values);
            setSubmitting(false);
        }
    });
    const radioInputProps = [
        {
            value: 'viaId',
            label: 'Müştəri ID ilə'
        },
        {
            value: 'viaCustomerMobileNumber',
            label: 'Müştəri mobil nömrəsi ilə'
        },
        {
            value: 'viaCustomerFirstName',
            label: 'Müştəri Adı ilə'
        },
        {
            value: 'viaCustomerLastName',
            label: 'Müştəri Soyadı ilə'
        },
    ];
    return (
        <FindCustomersForm
            errors={errors}
            values={values}
            onSubmit={handleSubmit}
            onChange={handleChange}
            radioInputProps={radioInputProps}
            onBlur={handleBlur}
            touched={touched}
            isSubmitting={isSubmitting}
        />
    )
};


const mapDispatchToProps = {
    findCustomers,
    selectCustomers,
    setCustomersFilterKeys
}

const mapStateToProps = state => ({});


export default connect(mapStateToProps, mapDispatchToProps)(FindCustomers);