import React from "react";
import TextInput from "../../../toolbox/TextInput";
import SelectInput from "../../../toolbox/SelectInput";
import TextareaInput from "../../../toolbox/TextareaInput";
import PasswordInput from "../../../toolbox/PasswordInput";
import CustomMaskedInput from "../../../toolbox/CustomMaskedInput";
import { ListGroup, ListGroupItem } from "reactstrap";
import { showCustomersByNumber, setReceiverCustomer, setSenderCustomer } from "../../../../redux/actions/customerActions";
import { connect } from "react-redux";
import RadioInputGroup from "../../../toolbox/RadioInputGroup";

const CreateOrUpdateCustomerForm = ({
  onSubmit,
  values,
  errors,
  onChange,
  onBlur,
  isSubmitting,
  touched,
  setFieldValue,
  stations,
  customersByNumber,
  showCustomersByNumber,
  setSenderCustomer,
  setReceiverCustomer,
  currentUser
}) => {
  var str2bool = (value) => {
    if (value && typeof value === "string") {
      if (value.toLowerCase() === "true") return true;
      if (value.toLowerCase() === "false") return false;
    }
    return value;
  }
  let handleSenderCustomer = e=>{
    if (
        !currentUser.currentEmployee.is_superuser &&
        currentUser.currentEmployee.station_id !==
        e.station_id
    ) {
      return true
    } else {
      return false
    };
  }
  const radioInputProps = [
    {
        value: "false",
        label: 'Göndərən müştəri olaraq seç'
    },
    {
        value: "true",
        label: 'Alan müştəri olaraq seç'
    },
];
  const handleNumber = (e) => {
    onChange(e);
    if (!values.id && e.target.value.length > 3) {
      showCustomersByNumber({ mobile: e.target.value });
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-row">
          <div className="col-md-6">
            <TextInput
              label="Mobil nömrə"
              placeHolder="Mobil nömrə"
              name="mobile_number"
              mask="mobile_number"
              value={values.mobile_number}
              error={errors.mobile_number}
              onChange={handleNumber}
              onBlur={onBlur}
              touched={touched.mobile_number}
            />

          </div>
          <div className="col-md-6">
            <PasswordInput
              label="Şifrə"
              placeHolder="Şifrə"
              name="password"
              value={values.password}
              error={errors.password}
              onChange={onChange}
              onBlur={onBlur}
              touched={touched.password}
            />
          </div>
        </div>
        {!values.id &&
          <ListGroup style={{ position: "relative", bottom: ".7rem" }}>
            {console.log(customersByNumber)}
            {customersByNumber.map((c) => {
              return (
                <ListGroupItem key={c.id} className="mb-1 p-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <button disabled={handleSenderCustomer(c)} onClick={()=>setSenderCustomer(c)} className="btn btn-warning px-5">G</button>
                    <div>
                      {c.mobile_number}: {c.first_name} {c.last_name}-{c.station.name}
                    </div>
                    <div onClick={e => setReceiverCustomer(c)} className="btn btn-info px-5">A</div>
                  </div>
                </ListGroupItem>
              );
            })}
          </ListGroup>}

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
          <div className="col-md-4">
            <TextInput
              label="Bank adı"
              placeHolder="Bank adı"
              name="bank_name"
              value={values.bank_name}
              error={errors.bank_name}
              onChange={onChange}
              onBlur={onBlur}
              touched={touched.bank_name}
            />
          </div>
          <div className="col-md-5">
            <CustomMaskedInput
              label="Kart nömrəsi"
              placeHolder="Kart nömrəsi"
              name="card_number"
              mask="card_number"
              value={values.card_number}
              error={errors.card_number}
              onChange={onChange}
              onBlur={onBlur}
              touched={touched.card_number}
            />
          </div>
          <div className="col-md-3">
            <CustomMaskedInput
              label="Bitiş tarixi"
              placeHolder="Bitiş tarixi"
              name="exp_date"
              mask="exp_date"
              value={values.exp_date}
              error={errors.exp_date}
              onChange={onChange}
              onBlur={onBlur}
              touched={touched.exp_date}
            />
          </div>
        </div>
        <div className="form-row">
          {/*<div className="col-md-6">*/}
          {/*  <NumberInput*/}
          {/*    label="Güzəşt (0 - 1)"*/}
          {/*    placeHolder="Güzəşt"*/}
          {/*    name="discount"*/}
          {/*    value={values.discount}*/}
          {/*    error={errors.discount}*/}
          {/*    onChange={onChange}*/}
          {/*    onBlur={onBlur}*/}
          {/*    touched={touched.discount}*/}
          {/*  />*/}
          {/*</div>*/}
          <div className="col-md-12">
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
            <TextareaInput
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
        </div>
        {!values.id ? (
          <div className="form-row">
            <div className="col-md-12">
              {/* <CheckboxInput
                label="Alan müştəri olaraq seç (Cari olaraq: Göndərən müştəri)"
                name="is_receiver"
                value={values.is_receiver}
                onChange={onChange}
              /> */}
              <RadioInputGroup
                radioInputProps={radioInputProps}
                name="is_receiver"
                checkedValue={values.is_receiver}
                onChange={e => setFieldValue('is_receiver', str2bool(e.target.value))}
              />
            </div>
          </div>
        ) : null}
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

const mapDispatchToProps = {
  showCustomersByNumber,
  setSenderCustomer,
  setReceiverCustomer,
};

const mapStateToProps = (state) => ({
  customersByNumber: state.showCustomersByNumberReducer,
  currentUser: state.authReducer,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateOrUpdateCustomerForm);
