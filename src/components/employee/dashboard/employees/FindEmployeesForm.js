import React from 'react';
import RadioInputGroup from "../../../toolbox/RadioInputGroup";
import TextInput from "../../../toolbox/TextInput";
import NumberInput from "../../../toolbox/NumberInput";

const FindEmployeesForm = ({onSubmit, onChange, values, errors, onBlur, touched, isSubmitting, radioInputProps}) => {
    return (
        <div>
            <div className="card">
                <form onSubmit={onSubmit}>
                    <div className="card-header">
                        İşçi axtar
                    </div>
                    <div className="card-body">
                        <RadioInputGroup
                            radioInputProps={radioInputProps}
                            name="via"
                            checkedValue={values.via}
                            onChange={onChange}
                        />
                        <hr/>
                        {
                            (values.via === 'viaId')
                                ? <NumberInput
                                    value={values.keyword}
                                    name="keyword"
                                    label="Açar söz"
                                    placeHolder="Açar söz"
                                    touched={touched.keyword}
                                    error={errors.keyword}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                />
                                : <TextInput
                                    value={values.keyword}
                                    name="keyword"
                                    label="Açar söz"
                                    placeHolder="Açar söz"
                                    touched={touched.keyword}
                                    error={errors.keyword}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                />
                        }
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                            <i className="fa fa-search"/>
                            <span> Axtar</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default FindEmployeesForm;