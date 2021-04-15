import React from 'react';
import {InputFeedback} from "./InputFeedback";

const NumberInput = ({name, label, onChange, placeHolder, value, error, onBlur, touched, readOnly, autoFocus}) => {
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
                type="tel"
                defaultValue={value}
                onChange={onChange}
                autoFocus={autoFocus}
                name={name}
                onBlur={onBlur}
                readOnly={readOnly}
                className={clsName}
                placeholder={placeHolder}/>
            {touched && <InputFeedback error={error} />}
        </div>
    )
}

export default NumberInput;