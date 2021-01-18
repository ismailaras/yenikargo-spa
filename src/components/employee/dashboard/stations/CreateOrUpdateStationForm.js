import React from "react";
import TextareaInput from "../../../toolbox/TextareaInput";
import TextInput from "../../../toolbox/TextInput";

const CreateOrUpdateExtraSellingForm = ({onSubmit, values, errors, onChange, onBlur, isSubmitting, touched,}) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-row">
                    <div className="col-md-6">
                        <TextInput
                            label="Ad"
                            placeHolder="Ad"
                            name="name"
                            value={values.name}
                            error={errors.name}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.name}
                        />
                    </div>
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
                </div>
                <div className="form-row">
                    <div className="col-md-6">
                        <TextInput
                            label="Enlik"
                            placeHolder="Enlik"
                            name="latitude"
                            value={values.latitude}
                            error={errors.latitude}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.latitude}
                        />
                    </div>
                    <div className="col-md-6">
                        <TextInput
                            label="Uzunluq"
                            placeHolder="Uzunluq"
                            name="longitude"
                            value={values.longitude}
                            error={errors.longitude}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.longitude}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6">
                        <TextInput
                            label="Telefon nömrəsi"
                            placeHolder="Telefon nömrəsi"
                            name="phone_number"
                            value={values.phone_number}
                            error={errors.phone_number}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.phone_number}
                        />
                    </div>
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
                </div>
                <div className="form-row">
                    <div className="col-md-12">
                        <TextInput
                            label="URL"
                            placeHolder="URL"
                            name="url"
                            value={values.url}
                            error={errors.url}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.url}
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

export default CreateOrUpdateExtraSellingForm;