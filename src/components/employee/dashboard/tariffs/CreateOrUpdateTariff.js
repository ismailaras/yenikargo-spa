import React, { useEffect } from 'react';
import { createTariff, getTariffs, selectTariffs, updateTariff } from "../../../../redux/actions/tariffActions";
import { connect } from "react-redux";
import CreateOrUpdateTariffForm from "./CreateOrUpdateTariffForm";
import { useFormik } from "formik";
import { createOrUpdateTariffFormValidationSchema } from '../../../../utilities/formValidationSchemas';
import { notEmpty } from "../../../../utilities/helpers";
import { getStations } from "../../../../redux/actions/stationActions";

const CreateOrUpdateTariff = ({
    createTariff, updateTariff, tariffs, getStations,stations,
    selectedTariffs
}) => {
    useEffect(() => {
        if (stations.length === 0) {
            getStations();
        }
    });
    let initialValues = {
        from_kg: '',
        to_kg: '',
        price: '',
        sender_station_id: '',
        receiver_station_id: '',
        price_per_kg:0
    }
    if (notEmpty(selectedTariffs.lastSelectedTariff)) {
        initialValues = selectedTariffs.lastSelectedTariff
    }
    const { handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting } = useFormik({
        initialValues,
        validationSchema: createOrUpdateTariffFormValidationSchema,
        onSubmit: (values, { setSubmitting }) => {
            values.id
                ? updateTariff(values, selectedTariffs.lastSelectedTariff)
                : createTariff(values);
            setSubmitting(false);
        }
    });
    return (
        <CreateOrUpdateTariffForm
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
    getTariffs,
    getStations,
    selectTariffs,
    createTariff,
    updateTariff
}

const mapStateToProps = state => ({
    selectedTariffs: state.selectTariffsReducer,
    selectedCustomers: state.selectCustomersReducer,
    tariffs: state.getTariffsReducer,
    stations: state.getStationsReducer,
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateOrUpdateTariff);
