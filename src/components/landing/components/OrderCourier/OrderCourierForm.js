import React from "react";
import TextInput from "../../../toolbox/TextInput";
import NumberInput from "../../../toolbox/NumberInput";
import SelectInput from "../../../toolbox/SelectInput";

const OrderCourierForm = ({
  onSubmit,
  values,
  errors,
  onChange,
  onBlur,
  isSubmitting,
  touched,
  stations,
}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-row">
          <div className="col-md-6">
            <TextInput
              label="Ad"
              placeHolder="Ad"
              name="first_name"
              value={values.first_name}
              error={errors.first_name}
              onChange={onChange}
              onBlur={onBlur}
              touched={touched.first_name}
            />
          </div>
          <div className="col-md-6">
            <TextInput
              label="Soyad"
              placeHolder="Soyad"
              name="last_name"
              value={values.last_name}
              error={errors.last_name}
              onChange={onChange}
              onBlur={onBlur}
              touched={touched.last_name}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6">
            <TextInput
              label="Mobil nömrə"
              placeHolder="Mobil nömrə"
              name="mobile_number"
              value={values.mobile_number}
              error={errors.mobile_number}
              onChange={onChange}
              onBlur={onBlur}
              touched={touched.mobile_number}
            />
          </div>
          <div className="col-md-6">
            <NumberInput
              label="Təxmini çəki"
              placeHolder="Təxmini çəki"
              name="weight"
              value={values.weight}
              error={errors.weight}
              onChange={onChange}
              onBlur={onBlur}
              touched={touched.weight}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6">
            <TextInput
              label="Şəhər"
              placeHolder="Şəhər"
              name="city"
              value={values.city}
              error={errors.city}
              onChange={onChange}
              onBlur={onBlur}
              touched={touched.city}
            />
          </div>
          <div className="col-md-6">
            <SelectInput
              label="Filial"
              placeHolder="Filial"
              name="station_id"
              options={stations.map((station) => ({
                value: station.id,
                text: station.name,
              }))}
              defaultOption="Filial seçin"
              value={values.station_id}
              error={errors.station_id}
              onChange={onChange}
              onBlur={onBlur}
              touched={touched.station_id}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-12">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={isSubmitting}
            >
              <span>Təsdiqlə</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderCourierForm;
