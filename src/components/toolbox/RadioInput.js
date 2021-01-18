import React from 'react';

const TextInput = ({name, label, onChange, placeHolder, value, error}) => {
    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <input
                type="text"
                defaultValue={value}
                onChange={onChange}
                name={name}
                className={error && error.length > 0 ? 'form-control is-invalid' : 'form-control'}
                placeholder={placeHolder}/>
            {error && <div className="badge badge-danger">{error}</div>}
        </div>
    )
}

export default TextInput;