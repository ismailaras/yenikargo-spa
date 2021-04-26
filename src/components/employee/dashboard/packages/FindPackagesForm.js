import React, { useEffect } from "react";
import RadioInputGroup from "../../../toolbox/RadioInputGroup";
import NumberInput from "../../../toolbox/NumberInput";
import TextInput from "../../../toolbox/TextInput";
import DFilter from "../../../toolbox/DFilter";
import { connect } from "react-redux";
import { getStations } from "../../../../redux/actions/stationActions";

const FindPackagesForm = ({
  onSubmit,
  onChange,
  values,
  errors,
  onBlur,
  touched,
  isSubmitting,
  radioInputProps,
  onKeyPress,
  getStations,
  stations,
  setIsAdvanceFilter,
  isAdvanceFilter,
  auth
}) => {
  useEffect(() => {
    if (stations.length === 0) {
      getStations();
    }
  });
  const stateCollection = [
    { value: "0", label: "Declared", isSorting:false },
    { value: "1", label: "ReadyToSorting", isSorting:true },
    { value: "2", label: "Sorting", isSorting:true },
    { value: "3", label: "OnWay", isSorting:true },
    { value: "4", label: "Arrived", isSorting:false },
    { value: "5", label: "Delivered", isSorting:false },
  ];
  return (
    <div>
      <div className="card">
        <form onSubmit={onSubmit}>
          <DFilter title="Bağlama">
            <RadioInputGroup
              radioInputProps={radioInputProps}
              name="via"
              checkedValue={values.via}
              onChange={onChange}
            />
            <hr />
            {
              {
                viaCustomerId: (
                  <NumberInput
                    name="keyword"
                    label="Müştəri ID"
                    placeHolder="Açar söz"
                    touched={touched.keyword}
                    error={errors.keyword}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                ),
                viaId: (
                  <NumberInput
                    name="keyword"
                    label="Bağlama ID"
                    placeHolder="Açar söz"
                    touched={touched.keyword}
                    error={errors.keyword}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                ),
                viaBarcode: (
                  <TextInput
                    name="keyword"
                    label="Barkod"
                    onKeyPress={onKeyPress}
                    placeHolder="0000000000000"
                    touched={touched.keyword}
                    error={errors.keyword}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                ),
                viaTrackingState: (
                  <div className="d-flex flex-column justify-content-between align-items-left">
                    {stateCollection.filter(a=> auth.currentEmployee.is_sorting_admin ? a.isSorting !== false : a).map((s) => {
                      return (
                        <label key={s.value}>
                          <input
                            name="keyword"
                            type="checkbox"
                            id={s.value}
                            value={s.value}
                            checked={values.keyword.includes(s.value)}
                            onChange={onChange}
                          />
                          <span className="pl-2">{s.label}</span>
                        </label>
                      );
                    })}
                  </div>
                ),
              }[values.via]
            }
          </DFilter>
          <div className="card-footer">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={isSubmitting}
            >
              <i className="fa fa-search" />
              <span> Axtar</span>
            </button>
            {!isAdvanceFilter && (
              <button
                className="btn btn-warning ml-1"
                onClick={() => setIsAdvanceFilter(!isAdvanceFilter)}
              >
                <i className="fa fa-filter" />
                <span> Ətraflı</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  getStations,
};

const mapStateToProps = (state) => ({
  stations: state.getStationsReducer,
  auth: state.authReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(FindPackagesForm);
