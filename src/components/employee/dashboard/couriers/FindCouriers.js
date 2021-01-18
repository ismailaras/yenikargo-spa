import React from 'react';
import {findCouriers, selectCouriers} from '../../../../redux/actions/courierActions';
import {connect} from "react-redux";
import FindCouriersForm from "./FindCouriersForm";
import {useFormik} from "formik";
import {findCouriersFormValidationSchema} from '../../../../utilities/formValidationSchemas';

const FindCouriers = ({findCouriers, selectCouriers}) => {
    const {handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting} = useFormik({
        initialValues: {keyword: '', via: 'viaId'},
        validationSchema: findCouriersFormValidationSchema,
        onSubmit: (values, {setSubmitting}) => {
            selectCouriers([]); // Axtaris zamani secilmish musteriler bosh array edir.
            findCouriers(values);
            setSubmitting(false);
        }
    });
    const radioInputProps = [
        {
            value: 'viaId',
            label: 'Kuryer ID ilə'
        },
        {
            value: 'viaCourierMobileNumber',
            label: 'Kuryer mobil nömrəsi ilə'
        },
        {
            value: 'viaCourierFirstName',
            label: 'Kuryer Adı ilə'
        },
        {
            value: 'viaCourierLastName',
            label: 'Kuryer Soyadı ilə'
        },
    ];
    return (
        <FindCouriersForm
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
    findCouriers,
    selectCouriers
}

const mapStateToProps = state => ({});


export default connect(mapStateToProps, mapDispatchToProps)(FindCouriers);