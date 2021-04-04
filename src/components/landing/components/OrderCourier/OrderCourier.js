import React, { useEffect } from 'react';
import {getStations} from "../../../../redux/actions/stationActions";
import {getCities} from "../../../../redux/actions/courierActions";
import {orderCourier} from "../../../../redux/actions/courierActions";
import {connect} from "react-redux";
import OrderCourierForm from "./OrderCourierForm";
import {useFormik} from "formik";
import {orderCourierFormValidationSchema} from '../../../../utilities/formValidationSchemas';

const OrderCourier = ({ orderCourier,getCities, cities}) => {
    useEffect(() => {
        if(cities.length === 0) getCities()
    });
    let initialValues = {
        first_name: '',
        last_name: '',
        mobile1: '',
        mobile2: '',
        estimated_weight: '',
        city: '',
        note:'',
        address:''
    }
    const {handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting} = useFormik({
        initialValues,
        validationSchema: orderCourierFormValidationSchema,
        onSubmit: (values, {setSubmitting}) => {
            orderCourier(values)
            setSubmitting(false);
            console.log(values)
        }
    });
    return (
        <OrderCourierForm
            onChange={handleChange}
            onSubmit={handleSubmit}
            onBlur={handleBlur}
            values={values}
            cities={cities}
            errors={errors}
            touched={touched}
            isSubmitting={isSubmitting}
        />
    )
}

const mapDispatchToProps = {
    getStations,
    orderCourier,
    getCities
}

const mapStateToProps = state => ({
    selectedCouriers: state.selectCouriersReducer,
    selectedPackages: state.selectPackagesReducer,
    cities: state.getCitiesReducer,
    stations: state.getStationsReducer,
    auth: state.authReducer
});


export default connect(mapStateToProps, mapDispatchToProps)(OrderCourier);
