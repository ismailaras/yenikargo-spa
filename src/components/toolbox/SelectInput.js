import React from 'react';
import {InputFeedback} from "./InputFeedback";

const SelectInput = ({name, label, onChange, defaultOption, value, error, options, onBlur, touched, disabled}) => {
    let clsName = 'form-control';
    if (value || (!error && touched)) {
        clsName += ' is-valid'
    }
    if (!!error && touched) {
        clsName += ' is-invalid'
    }
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select
                name={name}
                onChange={onChange}
                defaultValue={value}
                onBlur={onBlur}
                disabled={disabled}
                className={clsName}>
                <option value="">{defaultOption}</option>
                {options.map(option => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    )
                })}
            </select>
            {touched && <InputFeedback error={error} />}
        </div>
    )
}

export default SelectInput;