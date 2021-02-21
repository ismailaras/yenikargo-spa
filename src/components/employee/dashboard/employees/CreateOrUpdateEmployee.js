import React, {useEffect} from 'react';
import {getStations} from "../../../../redux/actions/stationActions";
import {createEmployee, selectEmployees, updateEmployee} from "../../../../redux/actions/employeeActions";
import {connect} from "react-redux";
import CreateOrUpdateEmployeeForm from "./CreateOrUpdateEmployeeForm";
import {useFormik} from "formik";
import {notEmpty} from "../../../../utilities/helpers";
import {createOrUpdateEmployeeFormValidationSchema} from '../../../../utilities/formValidationSchemas';

const CreateOrUpdateEmployee = ({createEmployee, updateEmployee, stations, getStations, selectedEmployees, selectEmployees}) => {
    useEffect(() => {
        if (stations.length === 0) {
            getStations()
        }
    });
    let initialValues = {
        first_name: '',
        last_name: '',
        mobile1: '',
        mobile2: '',
        address: '',
        identity2: '',
        birthdate: '',
        password: '0000',
        station_id: '',
    }
    if (notEmpty(selectedEmployees.lastSelectedEmployee)) {
        initialValues = selectedEmployees.lastSelectedEmployee
    }
    const {handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting} = useFormik({
        initialValues,
        validationSchema: createOrUpdateEmployeeFormValidationSchema,
        onSubmit: (values, {setSubmitting}) => {
            values.id
                ? updateEmployee(values, selectedEmployees.lastSelectedEmployee)
                : createEmployee(values);
            setSubmitting(false);
        }
    });
    return (
        <CreateOrUpdateEmployeeForm
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
    selectEmployees,
    createEmployee,
    updateEmployee
}

const mapStateToProps = state => ({
    selectedEmployees: state.selectEmployeesReducer,
    stations: state.getStationsReducer
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateOrUpdateEmployee);
