import React, {useEffect} from 'react';
import {createExtraSelling, getAllExtraSelling, selectAllExtraSelling, updateExtraSelling} from "../../../../redux/actions/extraSellingActions";
import {connect} from "react-redux";
import CreateOrUpdateExtraSellingForm from "./CreateOrUpdateExtraSellingForm";
import {useFormik} from "formik";
import {createOrUpdateExtraSellingFormValidationSchema} from '../../../../utilities/formValidationSchemas';
import {notEmpty} from "../../../../utilities/helpers";

const CreateOrUpdateExtraSelling = ({
                                   createExtraSelling, updateExtraSelling, extraSellings, getAllExtraSelling,
                                   selectedAllExtraSelling
                               }) => {
    useEffect(() => {
        if (extraSellings.length === 0) {
            getAllExtraSelling();
        }
    });
    let initialValues = {
        latitude: '',
        longitude: '',
        name: '',
        city: '',
        address: '',
        phone_number: '',
        mobile_number: '',
        url: ''
    }
    if (notEmpty(selectedAllExtraSelling.lastSelectedExtraSelling)) {
        initialValues = selectedAllExtraSelling.lastSelectedExtraSelling
    }
    const {handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting} = useFormik({
        initialValues,
        validationSchema: createOrUpdateExtraSellingFormValidationSchema,
        onSubmit: (values, {setSubmitting}) => {
            values.id
                ? updateExtraSelling(values, selectedAllExtraSelling.lastSelectedExtraSelling)
                : createExtraSelling(values);
            setSubmitting(false);
        }
    });
    return (
        <CreateOrUpdateExtraSellingForm
            onChange={handleChange}
            onSubmit={handleSubmit}
            onBlur={handleBlur}
            values={values}
            extraSellings={extraSellings}
            errors={errors}
            touched={touched}
            isSubmitting={isSubmitting}
        />
    )
}

const mapDispatchToProps = {
    getAllExtraSelling,
    selectAllExtraSelling,
    createExtraSelling,
    updateExtraSelling
}

const mapStateToProps = state => ({
    selectedAllExtraSelling: state.selectAllExtraSellingReducer,
    selectedCustomers: state.selectCustomersReducer,
    extraSellings: state.getAllExtraSellingReducer,
    setCustomers: state.setCustomerReducer
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateOrUpdateExtraSelling);
