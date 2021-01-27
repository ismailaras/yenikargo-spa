import React from "react";
import TextInput from "../../../toolbox/TextInput";
import SelectInput from "../../../toolbox/SelectInput";
import PasswordInput from "../../../toolbox/PasswordInput";

const CreateOrUpdateEmployeeForm = ({onSubmit, values, errors, onChange, onBlur, isSubmitting, touched, stations}) => {
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
                            label="Email"
                            placeHolder="Email"
                            name="email_address"
                            value={values.email_address}
                            error={errors.email_address}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.email_address}
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
                        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                            <span>Təsdiqlə</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateOrUpdateEmployeeForm;