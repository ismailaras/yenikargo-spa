import React from "react";
import TextareaInput from "../../../toolbox/TextareaInput";
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
                            name="city"
                            value={values.city}
                            error={errors.city}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.city}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateOrUpdateExtraSellingForm;