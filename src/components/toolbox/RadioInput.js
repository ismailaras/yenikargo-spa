import React from 'react';

const RadioInput = ({name, label, value, checked, onChange,className}) => {
    let cls = "custom-control custom-radio";
    return (<div className={`${cls} ${className}`}>
            <input
                type="radio"
                id={value}
                name={name}
                onChange={onChange}
                defaultChecked={checked}
                defaultValue={value}
                className="custom-control-input"/>
            <label className="custom-control-label" htmlFor={value}>{label}</label>
        </div>
    )
}

export default RadioInput;