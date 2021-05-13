import React from 'react';
import {InputFeedback} from "./InputFeedback";

const DateInput = ({name, label, onChange, placeHolder, value, error, onBlur, touched, readOnly, disabled}) => {
    let clsName = 'form-control';
    if (value || (!error && touched)) {
        clsName += ' is-valid'
    }
    if (!!error && touched) {
        clsName += ' is-invalid'
    }
    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <input
                type="date"
                defaultValue={value}
                onChange={onChange}
                data-date-format="DD MM YYYY"
                name={name}
                readOnly={readOnly}
                onBlur={onBlur}
                disabled={disabled}
                className={clsName}
                placeholder={placeHolder}/>
            {touched && <InputFeedback error={error} />}
        </div>
    )
}

export default DateInput;