import React from 'react';
import {findPayments, selectPayments} from '../../../../redux/actions/paymentActions';
import {connect} from "react-redux";
import FindPaymentsForm from "./FindPaymentsForm";
import {useFormik} from "formik";
import {findPaymentsFormValidationSchema} from '../../../../utilities/formValidationSchemas';

const FindPayments = ({findPayments, selectPayments}) => {
    const {handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting} = useFormik({
        initialValues: {keyword: '', via: 'viaId'},
        validationSchema: findPaymentsFormValidationSchema,
        onSubmit: (values, {setSubmitting}) => {
            selectPayments([]); // Axtaris zamani secilmish musteriler bosh array edir.
            findPayments(values);
            setSubmitting(false);
        }
    });
    const radioInputProps = [
        {
            value: 'viaPackageId',
            label: 'Paket ID ilə'
        },
        {
            value: 'viaEmployeeId',
            label: 'İşçi ID ilə'
        },
    ];
    return (
        <FindPaymentsForm
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
    findPayments,
    selectPayments
}

const mapStateToProps = state => ({});


export default connect(mapStateToProps, mapDispatchToProps)(FindPayments);