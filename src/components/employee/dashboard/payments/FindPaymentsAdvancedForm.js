import React, {useEffect, useState} from "react";
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
    resetForm
  } = useFormik({
    initialValues: {
      from_date: null,
      to_date: null,
      stations: []
    },
    validationSchema: findPackagesAdvancedFormValidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      findAdvancedPayments(values);
      setSubmitting(false);
    },
  });
  const [isReset, setIsReset] = useState(false)
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
                          name="stations"
                          type="checkbox"
                          id={s.id}
                          value={s.id}
                          checked={values.stations.includes(String(s.id))}
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
            {isAdvanceFilter && (
                <button
                    className="btn btn-outline-info ml-2"
                    type="button"
                    onClick={() => {
                      resetForm()
                      findAdvancedPayments({from_date: "2030-01-01",to_date: null,stations:[]})
                      setIsReset(true)
                      setTimeout(()=>{
                        setIsReset(false)
                      },2000)
                    }}
                >
                  <i className="fa fa-refresh" />
                </button>
            )}
          </div>
        </form>
      </div>
      {isReset && <div className="alert alert-info alert-dismissible fade show mt-2" role="alert">
        Axtarış sıfırlandı
      </div>}
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
