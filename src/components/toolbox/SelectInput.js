import React from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, err, options}) => {
    let wrapperClass = 'form-group';
    if (err && err.length > 0) {
        wrapperClass += ' has-error';
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <select
                name={name}
                onChange={onChange}
                value={value}
                className="form-control">
                <option value="">{defaultOption}</option>
                {options.map(option => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    )
                })}
            </select>
            {err && <div className="alert alert-danger">{err}</div>}
        </div>
    )
}

export default SelectInput;