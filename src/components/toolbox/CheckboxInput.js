import React from 'react';

const CheckboxInput = ({name, label, onChange, value, disabled}) => {
    return (
        <div className='form-group'>
            <div className="custom-control custom-checkbox">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    onChange={onChange}
                    name={name}
                    id={name}
                    disabled={disabled}
                    defaultValue={value}
                    defaultChecked={value}
                />
                <label className="custom-control-label" htmlFor={name}>{label}</label>
            </div>
        </div>
    )
}

export default CheckboxInput;