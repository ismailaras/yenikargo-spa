import React, {useEffect} from "react";
import {
  selectPackages,
  setPackagesFilterKeys
} from "../../../../redux/actions/packageActions";
import {
  findAdvancedPayments
} from "../../../../redux/actions/paymentActions";
import { getStations } from "../../../../redux/actions/stationActions";
import DFilter from "../../../toolbox/DFilter";
import { connect } from "react-redux";
import { useFormik } from "formik";
import { findPackagesAdvancedFormValidationSchema } from "../../../../utilities/formValidationSchemas";
import DateInput from "../../../toolbox/DateInput";

const FindPaymentsAdvancedForm = ({
  stations,
  setIsAdvanceFilter,
  isAdvanceFilter,
  findAdvancedPayments,
  getStations,
}) => {
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    isSubmitting,
  } = useFormik({
    initialValues: {
      from_date: null,
      to_date: null,
      station_id: [].map(Number)
    },
    validationSchema: findPackagesAdvancedFormValidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      findAdvancedPayments(values);
      setSubmitting(false);
    },
  });
  useEffect(() => {
     if (stations.length === 0) {
       getStations();
     }
  });
  return (
    <div>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <DFilter title="Ətraflı">
            <DateInput
                value={values.from_date}
                name="from_date"
                label="Başlanğıc tarixi"
                placeHolder="Açar söz"
                touched={touched.from_date}
                error={errors.from_date}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <DateInput
                value={values.to_date}
                name="to_date"
                label="Bitiş tarixi"
                placeHolder="DD/MM/YYYY"
                touched={touched.to_date}
                error={errors.to_date}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <div className="d-flex flex-column justify-content-between align-items-left advanced_payments">
              {stations.map((s,index) => {
                return (
                    <label key={index}>
                      <input
                          name="station_id"
                          type="checkbox"
                          id={s.id}
                          value={s.id}
                          checked={values.station_id.includes(String(s.id))}
                          onChange={handleChange}
                      />
                      <span className="pl-2">{s.name}</span>
                    </label>
                );
              })}
            </div>
          </DFilter>
          <div className="card-footer">
            {isAdvanceFilter && (
              <button
                className="btn btn-warning"
                type="button"
                onClick={() => setIsAdvanceFilter(!isAdvanceFilter)}
              >
                <i className="fa fa-arrow-circle-left" />
              </button>
            )}
            <button
              className="btn btn-primary  ml-1"
              type="submit"
              disabled={isSubmitting}
            >
              <i className="fa fa-search" />
              <span> Axtar</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  findAdvancedPayments,
  selectPackages,
  getStations,
  setPackagesFilterKeys
};

const mapStateToProps = (state) => ({
  stations: state.getStationsReducer,
  auth: state.authReducer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindPaymentsAdvancedForm);
