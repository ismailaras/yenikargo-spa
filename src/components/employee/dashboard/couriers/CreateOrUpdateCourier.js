import React, {useEffect} from 'react';
import {getStations} from "../../../../redux/actions/stationActions";
import {createCourier, findCouriers, selectCouriers, updateCourier} from "../../../../redux/actions/courierActions";
import {connect} from "react-redux";
import CreateOrUpdateCourierForm from "./CreateOrUpdateCourierForm";
import {useFormik} from "formik";
import {notEmpty} from "../../../../utilities/helpers";
import {createOrUpdateCourierFormValidationSchema} from '../../../../utilities/formValidationSchemas';

const CreateOrUpdateCourier = ({createCourier, updateCourier, stations, getStations, selectedCouriers, auth, selectedPackages,filteredCouriers,findCouriers}) => {
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
    const {handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting,setFieldValue} = useFormik({
        initialValues,
        validationSchema: createOrUpdateCourierFormValidationSchema,
        onSubmit: (values, {setSubmitting}) => {
            values.is_partner = values.discount > 0
            if(values.id){
                updateCourier(values, selectedCouriers.lastSelectedCourier)
                setTimeout(()=>{
                    findCouriers(filteredCouriers)
                },500)
            }
            else {createCourier(values, selectedPackages.allSelectedPackages)}
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
            setFieldValue={setFieldValue}
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
    updateCourier,
    findCouriers
}

const mapStateToProps = state => ({
    selectedCouriers: state.selectCouriersReducer,
    selectedPackages: state.selectPackagesReducer,
    stations: state.getStationsReducer,
    auth: state.authReducer,
    filteredCouriers:state.setCouriersFilterKeysReducer
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateOrUpdateCourier);
