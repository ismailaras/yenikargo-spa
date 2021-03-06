import React from 'react';
import {InputFeedback} from "./InputFeedback";

const TextInput = ({name, label, onChange, placeHolder, value, error, onBlur, touched, readOnly, onKeyPress, disabled,onKeyUp}) => {
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
                type="text"
                defaultValue={value}
                onChange={onChange}
                name={name}
                onKeyPress={onKeyPress}
                onKeyUp={onKeyUp}
                readOnly={readOnly}
                onBlur={onBlur}
                disabled={disabled}
                className={clsName}
                placeholder={placeHolder}/>
            {touched && <InputFeedback error={error} />}
        </div>
    )
}

export default TextInput;