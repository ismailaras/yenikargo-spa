import React from "react";
import TextInput from "../../../toolbox/TextInput";

const CreateOrUpdateExtraSellingForm = ({onSubmit, values, errors, onChange, onBlur, isSubmitting, touched}) => {
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
                            label="Qiymət"
                            placeHolder="Qiymət"
                            name="price"
                            value={values.price}
                            error={errors.price}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.price}
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