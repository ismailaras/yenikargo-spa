import React, {useEffect} from 'react';
import {getStations} from "../../../../redux/actions/stationActions";
import {createCourier, selectCouriers, updateCourier} from "../../../../redux/actions/courierActions";
import {connect} from "react-redux";
import CreateOrUpdateCourierForm from "./CreateOrUpdateCourierForm";
import {useFormik} from "formik";
import {notEmpty} from "../../../../utilities/helpers";
import {createOrUpdateCourierFormValidationSchema} from '../../../../utilities/formValidationSchemas';

const CreateOrUpdateCourier = ({createCourier, updateCourier, stations, getStations, selectedCouriers, auth, selectedPackages}) => {
    useEffect(() => {
        if (stations.length === 0) {
            getStations();
        }
    });
    let initialValues = {
        station_id: auth.currentEmployee.station_id,
        first_name: '',
        package_ids: selectedPackages.allSelectedPackages.map(p => p.id),
        last_name: '',
        mobile_number: '',
        pick_up: false,
        courier_cost: 0
    }
    if (notEmpty(selectedCouriers.lastSelectedCourier)) {
        initialValues = selectedCouriers.lastSelectedCourier
    }
    const {handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting} = useFormik({
        initialValues,
        validationSchema: createOrUpdateCourierFormValidationSchema,
        onSubmit: (values, {setSubmitting}) => {
            values.is_partner = values.discount > 0
            values.id
                ? updateCourier(values, selectedCouriers.lastSelectedCourier)
                : createCourier(values, selectedPackages.allSelectedPackages);
            setSubmitting(false);
        }
    });
    return (
        <CreateOrUpdateCourierForm
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
    selectCouriers,
    createCourier,
    updateCourier
}

const mapStateToProps = state => ({
    selectedCouriers: state.selectCouriersReducer,
    selectedPackages: state.selectPackagesReducer,
    stations: state.getStationsReducer,
    auth: state.authReducer
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateOrUpdateCourier);
