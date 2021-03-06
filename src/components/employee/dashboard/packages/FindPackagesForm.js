import React, { useEffect } from "react";
import RadioInputGroup from "../../../toolbox/RadioInputGroup";
import NumberInput from "../../../toolbox/NumberInput";
import SelectInput from "../../../toolbox/SelectInput";
import { iterTrackingStates } from "../../../../enums/trackingStateEnum";
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
}) => {
  useEffect(() => {
    if (stations.length === 0) {
      getStations();
    }
  });
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
                    value={values.keyword}
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
                    value={values.keyword}
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
                    value={values.keyword}
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
                  <SelectInput
                    value={values.keyword}
                    name="keyword"
                    options={iterTrackingStates().map((trackingStateObj) => ({
                      value: trackingStateObj.value,
                      text: trackingStateObj.name,
                    }))}
                    label="Bağlama statusu"
                    defaultOption="Status seçin"
                    touched={touched.keyword}
                    error={errors.keyword}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(FindPackagesForm);
