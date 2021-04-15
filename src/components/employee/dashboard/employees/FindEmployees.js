import React from 'react';
import {findEmployees, selectEmployees, setEmployeesFilterKeys} from '../../../../redux/actions/employeeActions';
import {connect} from "react-redux";
import FindEmployeesForm from "./FindEmployeesForm";
import {useFormik} from "formik";
import {findEmployeesFormValidationSchema} from '../../../../utilities/formValidationSchemas';

const FindEmployees = ({findEmployees, selectEmployees,setEmployeesFilterKeys}) => {
    const {handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting} = useFormik({
        initialValues: {keyword: '', via: 'viaId'},
        validationSchema: findEmployeesFormValidationSchema,
        onSubmit: (values, {setSubmitting}) => {
            selectEmployees([]); // Axtaris zamani secilmish musteriler bosh array edir.
            setEmployeesFilterKeys(values)
            findEmployees(values);
            setSubmitting(false);
        }
    });
    const radioInputProps = [
        {
            value: 'viaId',
            label: 'İşçi ID ilə'
        },
        {
            value: 'viaEmployeeFirstName',
            label: 'İşçi Adı ilə'
        },
        {
            value: 'viaEmployeeLastName',
            label: 'İşçi Soyadı ilə'
        },
    ];
    return (
        <FindEmployeesForm
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
    findEmployees,
    selectEmployees,
    setEmployeesFilterKeys
}

const mapStateToProps = state => ({});


export default connect(mapStateToProps, mapDispatchToProps)(FindEmployees);