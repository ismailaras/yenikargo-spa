import React from "react";
import TextInput from "../../../toolbox/TextInput";
import SelectInput from "../../../toolbox/SelectInput";
import TextareaInput from "../../../toolbox/TextareaInput";
import NumberInput from "../../../toolbox/NumberInput";
import CheckboxInput from "../../../toolbox/CheckboxInput";
import PasswordInput from "../../../toolbox/PasswordInput";

const CreateOrUpdateCustomerForm = ({onSubmit, values, errors, onChange, onBlur, isSubmitting, touched, stations}) => {
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
                <div className="form-row">
                    <div className="col-md-6">
                        <NumberInput
                            label="Güzəşt (0 - 1)"
                            placeHolder="Güzəşt"
                            name="discount"
                            value={values.discount}
                            error={errors.discount}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.discount}
                        />
                    </div>
                    <div className="col-md-6">
                        <SelectInput
                            label="Filial"
                            placeHolder="Filial"
                            name="station_id"
                            options={stations.map(station => ({
                                value: station.id,
                                text: station.name
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
                {!values.id
                    ?
                    <div className="form-row">
                        <div className="col-md-12">
                            <CheckboxInput
                                label="Alan müştəri olaraq seç (Cari olaraq: Göndərən müştəri)"
                                name="is_receiver"
                                value={values.is_receiver}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    :
                    null}
                <div className="form-row">
                    <div className="col-md-12">
                        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                            <span>Təsdiqlə</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateOrUpdateCustomerForm;