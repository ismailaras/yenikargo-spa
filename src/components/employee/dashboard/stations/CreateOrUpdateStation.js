import React, {useEffect} from 'react';
import {createStation, getStations, selectStations, updateStation} from "../../../../redux/actions/stationActions";
import {connect} from "react-redux";
import CreateOrUpdateStationForm from "./CreateOrUpdateStationForm";
import {useFormik} from "formik";
import {createOrUpdateStationFormValidationSchema} from '../../../../utilities/formValidationSchemas';
import {notEmpty} from "../../../../utilities/helpers";

const CreateOrUpdateStation = ({
                                   createStation, updateStation, stations, getStations,
                                   selectedStations
                               }) => {
    useEffect(() => {
        if (stations.length === 0) {
            getStations();
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
        work_hours:'',
        url: ''
    }
    if (notEmpty(selectedStations.lastSelectedStation)) {
        initialValues = selectedStations.lastSelectedStation
    }
    const {handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting} = useFormik({
        initialValues,
        validationSchema: createOrUpdateStationFormValidationSchema,
        onSubmit: (values, {setSubmitting}) => {
            values.id
                ? updateStation(values, selectedStations.lastSelectedStation)
                : createStation(values);
            setSubmitting(false);
        }
    });
    return (
        <CreateOrUpdateStationForm
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
    selectStations,
    createStation,
    updateStation
}

const mapStateToProps = state => ({
    selectedStations: state.selectStationsReducer,
    selectedCustomers: state.selectCustomersReducer,
    stations: state.getStationsReducer,
    setCustomers: state.setCustomerReducer
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateOrUpdateStation);
