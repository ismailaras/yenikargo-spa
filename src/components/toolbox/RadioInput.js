import React from 'react';

const RadioInput = ({name, label, value, inline, checked,onChange}) => {
    let cls = "custom-control custom-radio";
    if (inline) {
        cls += ' custom-control-inline';
    }
    return (<div className={cls}>
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