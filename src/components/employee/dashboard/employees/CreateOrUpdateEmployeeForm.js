import React from "react";
import TextInput from "../../../toolbox/TextInput";
import SelectInput from "../../../toolbox/SelectInput";
import PasswordInput from "../../../toolbox/PasswordInput";
import CustomMaskedInput from "../../../toolbox/CustomMaskedInput";

const CreateOrUpdateEmployeeForm = ({ onSubmit, values, errors, onChange, onBlur, isSubmitting, touched, stations }) => {
    const roles = [
        {value:'is_sorting_admin',name:'Sorting'},
        {value:'is_operator_admin',name:'Operator'},
        {value:'is_readonly_admin',name:'Read only'},
    ]
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
                    <div className="col-md-4">
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
                    <div className="col-md-4">
                        <TextInput
                            label="Fin kod"
                            placeHolder="Fin kod"
                            name="identity2"
                            value={values.identity2}
                            error={errors.identity2}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.identity2}
                        />
                    </div>
                    <div className="col-md-4">
                        <TextInput
                            label="Doğum tarixi"
                            placeHolder="Doğum tarixi"
                            name="birthdate"
                            value={values.birthdate}
                            error={errors.birthdate}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.birthdate}
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="col-md-4">
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
                    <div className="col-md-4">
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
                    <div className="col-md-4">
                        <SelectInput
                            label="Rol"
                            placeHolder="Rol seç"
                            name="employee_role"
                            options={roles.map(e => ({
                                value: e.value,
                                text: e.name
                            }))}
                            defaultOption="İşçi rolunu seçin"
                            value={values.employee_role}
                            error={errors.employee_role}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.employee_role}
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