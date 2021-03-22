import React from 'react';
import {findReports} from '../../../../redux/actions/paymentActions';
import {connect} from "react-redux";
import {useFormik} from "formik";
import {findPaymentsFormValidationSchema} from '../../../../utilities/formValidationSchemas';
import FindReportsForm from './FindReportsForm';

const FindReports = ({findReports}) => {
    const {handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting} = useFormik({
        initialValues: {employee_id: ''},
        // validationSchema: findPaymentsFormValidationSchema,
        onSubmit: (values, {setSubmitting}) => {
            findReports(values);
            setSubmitting(false);
        }
    });
    const radioInputProps = [
        {
            value: 'employee_id',
            label: 'İşçi ID ilə'
        },
    ];
    return (
        <FindReportsForm
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
    findReports,
}

const mapStateToProps = state => ({});


export default connect(mapStateToProps, mapDispatchToProps)(FindReports);