import React from 'react';

const HiddenInput = ({name, value}) => {
    return (
        <input
            type="hidden"
            defaultValue={value}
            name={name}
        />
    )
}

export default HiddenInput;