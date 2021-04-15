import React from 'react';
import RadioInput from "./RadioInput";

const RadioInputGroup = ({radioInputProps, onChange, name, inline, checkedValue}) => {
    return (<div className="form-group" onChange={onChange}>
            {radioInputProps.map(radioInputProp =>  (
                <RadioInput
                    name={name}
                    key={radioInputProp.value}
                    inline={inline}
                    checked={checkedValue === radioInputProp.value}
                    value={radioInputProp.value}
                    label={radioInputProp.label}/>
            ))}
        </div>
    )
}

export default RadioInputGroup;