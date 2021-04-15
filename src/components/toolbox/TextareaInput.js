import React from 'react';
import {InputFeedback} from "./InputFeedback";

const TextareaInput = ({name, label, onChange, placeHolder, value, error, onBlur, touched}) => {
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
            <textarea
                defaultValue={value}
                onChange={onChange}
                name={name}
                rows={4}
                onBlur={onBlur}
                className={clsName}
                placeholder={placeHolder}/>
            {touched && <InputFeedback error={error} />}
        </div>
    )
}

export default TextareaInput;