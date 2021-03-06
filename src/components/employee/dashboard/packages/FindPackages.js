import React from 'react';
import {findPackages, selectPackages} from '../../../../redux/actions/packageActions';
import {connect} from "react-redux";
import FindPackagesForm from "./FindPackagesForm";
import {useFormik} from "formik";
import {findPackagesFormValidationSchema} from '../../../../utilities/formValidationSchemas';

const FindPackages = ({findPackages, selectPackages, setIsAdvanceFilter,isAdvanceFilter}) => {
    const {handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting, submitForm} = useFormik({
        initialValues: {keyword: '', via: 'viaId'},
        validationSchema: findPackagesFormValidationSchema,
        onSubmit: (values, {setSubmitting}) => {
            selectPackages([]); // Axtaris zamani secilmish musteriler bosh array edir.
            findPackages(values);
            setSubmitting(false);
        }
    });
    const radioInputProps = [
        {
            value: 'viaCustomerId',
            label: 'Müştəri ID ilə'
        },
        {
            value: 'viaId',
            label: 'Bağlama ID ilə'
        },
        {
            value: 'viaBarcode',
            label: 'Barcode ilə'
        },
        {
            value: 'viaTrackingState',
            label: 'Bağlama statusu ilə'
        }
    ];
    const handleKeyPress = e => {
        if (e.target.value.length === 13) {
            submitForm();
        }
    }
    return (
        <FindPackagesForm
            errors={errors}
            values={values}
            onSubmit={handleSubmit}
            onChange={handleChange}
            radioInputProps={radioInputProps}
            onBlur={handleBlur}
            touched={touched}
            onKeyPress={handleKeyPress}
            setIsAdvanceFilter={setIsAdvanceFilter}
            isAdvanceFilter={isAdvanceFilter}
            isSubmitting={isSubmitting}
        />
    )
};


const mapDispatchToProps = {
    findPackages,
    selectPackages
}

const mapStateToProps = state => ({});


export default connect(mapStateToProps, mapDispatchToProps)(FindPackages);