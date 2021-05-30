import React from 'react';
import RadioInput from "./RadioInput";

const RadioInputGroup = ({radioInputProps, onChange, name, inline, checkedValue}) => {
    let cls = 'form-group';
    if (inline) {
        cls += ' custom-control-inline';
    }
    return (<div className={cls} onChange={onChange}>
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