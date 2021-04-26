import React from 'react';
import RadioInputGroup from "../../../toolbox/RadioInputGroup";
import NumberInput from "../../../toolbox/NumberInput";
import DFilter from '../../../toolbox/DFilter';

const FindReportsForm = ({onSubmit, onChange, values, errors, onBlur, touched, isSubmitting, radioInputProps}) => {
    return (
        <div>
            <div className="card">
                <form onSubmit={onSubmit}>
                        <DFilter title="Hesabat">
                        <RadioInputGroup
                            radioInputProps={radioInputProps}
                            name="via"
                            checkedValue={values.via}
                            onChange={onChange}
                        />
                        <hr/>
                        {
                                <NumberInput
                                    value={values.employee_id}
                                    name="employee_id"
                                    label="Açar söz"
                                    placeHolder="Açar söz"
                                    touched={touched.employee_id}
                                    error={errors.employee_id}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                />
                        }
                    </DFilter>
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
export default FindReportsForm;