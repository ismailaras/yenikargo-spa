import React, {useEffect} from 'react';
import {getStations} from "../../../../redux/actions/stationActions";
import {createCourier, selectCouriers, updateCourier} from "../../../../redux/actions/courierActions";
import {connect} from "react-redux";
import OrderCourierForm from "./OrderCourierForm";
import {useFormik} from "formik";
import {notEmpty} from "../../../../utilities/helpers";
import {orderCourierFormValidationSchema} from '../../../../utilities/formValidationSchemas';

const OrderCourier = ({createCourier, updateCourier, stations, getStations, selectedCouriers, auth, selectedPackages}) => {
    useEffect(() => {
        if (stations.length === 0) {
            getStations();
        }
    });
    let initialValues = {
        station_id:'',
        first_name: '',
        last_name: '',
        mobile_number: '',
        weight: '',
        comment: '',
        city: '',
    }
    if (notEmpty(selectedCouriers.lastSelectedCourier)) {
        initialValues = selectedCouriers.lastSelectedCourier
    }
    const {handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting} = useFormik({
        initialValues,
        validationSchema: orderCourierFormValidationSchema,
        onSubmit: (values, {setSubmitting}) => {
            values.is_partner = values.discount > 0
            values.id
                ? updateCourier(values, selectedCouriers.lastSelectedCourier)
                : createCourier(values, selectedPackages.allSelectedPackages);
            setSubmitting(false);
        }
    });
    return (
        <OrderCourierForm
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


export default connect(mapStateToProps, mapDispatchToProps)(OrderCourier);
