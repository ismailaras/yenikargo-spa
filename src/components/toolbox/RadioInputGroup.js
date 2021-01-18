import React from 'react';

const RadioInput = ({id, name, label, onChange, value}) => {
    return (<div className="custom-control custom-radio">
            <input
                type="radio"
                id={id}
                name={name}
                onChange={onChange}
                defaultValue={value}
                className="custom-control-input"/>
                <label className="custom-control-label" htmlFor={id}>{label}</label>
        </div>
    )
}

export default RadioInput;