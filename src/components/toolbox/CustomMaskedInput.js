import React from 'react';
import {InputFeedback} from "./InputFeedback";
import MaskedInput from "react-text-mask";
import { selectMaskInputValue } from '../../utilities/helpers';

const CustomMaskedInput = ({name, label, onChange, placeHolder, value, error, onBlur, touched, readOnly, autoFocus,mask}) => {
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
            <MaskedInput
                mask={()=>selectMaskInputValue(mask)}
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

export default CustomMaskedInput;