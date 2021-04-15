import React from "react";
import TextInput from "../../../toolbox/TextInput";
import NumberInput from "../../../toolbox/NumberInput";
import SelectInput from "../../../toolbox/SelectInput";
import TextareaInput from "../../../toolbox/TextareaInput";
import CustomMaskedInput from "../../../toolbox/CustomMaskedInput";

const OrderCourierForm = ({
  onSubmit,
  values,
  errors,
  onChange,
  onBlur,
  isSubmitting,
  touched,
  cities,
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
            <CustomMaskedInput
              mask="mobile_number"
              label="Mobil nömrə"
              placeHolder="Mobil nömrə"
              name="mobile1"
              value={values.mobile1}
              error={errors.mobile1}
              onChange={onChange}
              onBlur={onBlur}
              touched={touched.mobile1}
            />
          </div>
          <div className="col-md-6">
          <CustomMaskedInput
              mask="mobile_number"
              label="Əlavə nömrə"
              placeHolder="Əlavə nömrə"
              name="mobile2"
              value={values.mobile2}
              error={errors.mobile2}
              onChange={onChange}
              onBlur={onBlur}
              touched={touched.mobile2}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-12">
            <NumberInput
              label="Təxmini çəki (Kg)"
              placeHolder="Təxmini çəki"
              name="estimated_weight"
              value={values.estimated_weight}
              error={errors.estimated_weight}
              onChange={onChange}
              onBlur={onBlur}
              touched={touched.estimated_weight}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6">
            <TextInput
              label="Ünvan"
              placeHolder="Ünvan"
              name="address"
              value={values.address}
              error={errors.address}
              onChange={onChange}
              onBlur={onBlur}
              touched={touched.address}
            />
          </div>
          <div className="col-md-6">
            <SelectInput
              label="Şəhər"
              placeHolder="Şəhər"
              name="city"
              options={cities.map((city) => ({
                value: city,
                text: city,
              }))}
              defaultOption="Şəhər seçin"
              value={values.city}
              error={errors.city}
              onChange={onChange}
              onBlur={onBlur}
              touched={touched.city}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-12">
            <TextareaInput
              label="Əlavə qeyd"
              name="note"
              placeHolder="Ünvanın, paketin ətraflı təsviri və s."
              value={values.note}
              error={errors.note}
              onChange={onChange}
              onBlur={onBlur}
              touched={touched.note}
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
