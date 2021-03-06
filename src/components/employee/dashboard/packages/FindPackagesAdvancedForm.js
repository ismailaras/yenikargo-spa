import React, { useEffect } from "react";
import { getStations} from "../../../../redux/actions/stationActions";
import SelectInput from "../../../toolbox/SelectInput";
import DFilter from "../../../toolbox/DFilter";
import { connect } from "react-redux";
import {  useFormik } from "formik";
import {
    findAdvancedPackages,
    selectPackages,
} from "../../../../redux/actions/packageActions";
import { findPackagesAdvancedFormValidationSchema } from "../../../../utilities/formValidationSchemas";
const FindPackagesAdvancedForm = ({
    stations,
    setIsAdvanceFilter,
    isAdvanceFilter,
    findAdvancedPackages,
    getStations,
    selectPackages
}) => {
    const {
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
        handleBlur,
        isSubmitting,
        submitForm
    } = useFormik({
        initialValues: { sender_station_id: '', receiver_station_id: '', states: '' },
        validationSchema: findPackagesAdvancedFormValidationSchema,
        onSubmit: (values, { setSubmitting }) => {
            selectPackages([]); // Axtaris zamani secilmish musteriler bosh array edir.
            findAdvancedPackages(values);
            submitForm()
            console.log(values);
            setSubmitting(false);
        },
    });
    useEffect(() => {
        if (stations.length === 0) {
          getStations();
        }
      });
    const stateCollection = [
        { value: "Declared", label: "Declared" },
        { value: "ReadyToSorting", label: "ReadyToSorting" },
        { value: "Sorting", label: "Sorting" },
        { value: "OnWay", label: "OnWay" },
        { value: "Arrived", label: "Arrived" },
        { value: "Delivered", label: "Delivered" }
      ];
    return (
        <div>
            <div className="card">
                <DFilter title="Ətraflı">
                    <form onSubmit={handleSubmit}>
                        <SelectInput
                            value={values.sender_station_id}
                            name="sender_station_id"
                            options={stations.map((station) => ({
                                value: station.id,
                                text: station.name,
                            }))}
                            label="Göndərən Filial"
                            defaultOption="Filial seçin"
                            touched={touched.sender_station_id}
                            error={errors.sender_station_id}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        <SelectInput
                            value={values.receiver_station_id}
                            name="receiver_station_id"
                            options={stations.map((station) => ({
                                value: station.id,
                                text: station.name,
                            }))}
                            label="Alan Filial"
                            defaultOption="Filial seçin"
                            touched={touched.receiver_station_id}
                            error={errors.receiver_station_id}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                         {stateCollection.map(s=>{
                            return <label key={s.value}>
                            <input
                                name="states"
                                type="checkbox"
                                id={s.value}
                                value={s.value}
                                checked={values.states.includes(s.value)}
                                onChange={handleChange}
                            />
                            <span>{s.label}</span>
                        </label>
                         })}
                        {console.log(values)}
                    </form>
                </DFilter>
                <div className="card-footer">
                    {isAdvanceFilter && <button
                        className="btn btn-warning"
                        onClick={() => setIsAdvanceFilter(!isAdvanceFilter)}
                    >
                        <i className="fa fa-arrow-circle-left" />
                    </button>}
                    <button
                        className="btn btn-primary  ml-1"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        <i className="fa fa-search" />
                        <span> Axtar</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    findAdvancedPackages,
    selectPackages,
    getStations,
}

const mapStateToProps = (state) => ({
    stations: state.getStationsReducer,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FindPackagesAdvancedForm);
