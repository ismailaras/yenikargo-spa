import React from 'react';
import {getStations} from "../../../../redux/actions/stationActions";
import {orderCourier} from "../../../../redux/actions/courierActions";
import {connect} from "react-redux";
import OrderCourierForm from "./OrderCourierForm";
import {useFormik} from "formik";
import {orderCourierFormValidationSchema} from '../../../../utilities/formValidationSchemas';

const OrderCourier = ({ orderCourier, stations}) => {
    let initialValues = {
        station_id:'',
        first_name: '',
        last_name: '',
        mobile: '',
        estimated_weight: '',
        city: '',
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
            stations={stations}
            errors={errors}
            touched={touched}
            isSubmitting={isSubmitting}
        />
    )
}

const mapDispatchToProps = {
    getStations,
    orderCourier
}

const mapStateToProps = state => ({
    selectedCouriers: state.selectCouriersReducer,
    selectedPackages: state.selectPackagesReducer,
    stations: state.getStationsReducer,
    auth: state.authReducer
});


export default connect(mapStateToProps, mapDispatchToProps)(OrderCourier);
