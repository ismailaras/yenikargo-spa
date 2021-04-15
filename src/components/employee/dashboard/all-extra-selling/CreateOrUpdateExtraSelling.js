import React, {useEffect} from 'react';
import {createExtraSelling, getAllExtraSelling, selectExtraSelling, updateExtraSelling} from "../../../../redux/actions/extraSellingActions";
import {connect} from "react-redux";
import CreateOrUpdateExtraSellingForm from "./CreateOrUpdateExtraSellingForm";
import {useFormik} from "formik";
import {createOrUpdateExtraSellingFormValidationSchema} from '../../../../utilities/formValidationSchemas';
import {notEmpty} from "../../../../utilities/helpers";

const CreateOrUpdateExtraSelling = ({
                                   createExtraSelling, updateExtraSelling, allExtraSelling, getAllExtraSelling,
                                   selectedAllExtraSelling
                               }) => {
    useEffect(() => {
        if (allExtraSelling.length === 0) {
            getAllExtraSelling();
        }
    });
    let initialValues = {
        name: '',
        price: 0
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
            allExtraSelling={allExtraSelling}
            errors={errors}
            touched={touched}
            isSubmitting={isSubmitting}
        />
    )
}

const mapDispatchToProps = {
    getAllExtraSelling,
    selectExtraSelling,
    createExtraSelling,
    updateExtraSelling
}

const mapStateToProps = state => ({
    selectedAllExtraSelling: state.selectAllExtraSellingReducer,
    selectedCustomers: state.selectCustomersReducer,
    allExtraSelling: state.getAllExtraSellingReducer,
    setCustomers: state.setCustomerReducer
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateOrUpdateExtraSelling);
