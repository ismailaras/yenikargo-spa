import React from "react";
import TextInput from "../../../toolbox/TextInput";
import NumberInput from "../../../toolbox/NumberInput";
import CheckboxInput from "../../../toolbox/CheckboxInput";

const CreateOrUpdateCourierForm = ({onSubmit, values, errors, onChange, onBlur, isSubmitting, touched}) => {
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
                            label="Məbləğ"
                            placeHolder="Məbləğ"
                            name="courier_cost"
                            value={values.courier_cost}
                            error={errors.courier_cost}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.courier_cost}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-12">
                        <CheckboxInput
                            label="Qapıdan təhvil olaraq seç (Cari olaraq: Qapıya təhvil)"
                            name="pick_up"
                            value={values.pick_up}
                            onChange={onChange}
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

export default CreateOrUpdateCourierForm;