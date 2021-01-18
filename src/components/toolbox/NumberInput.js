import React from 'react';

const TextInput = ({name, label, onChange, placeHolder, value, err}) => {
    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <input
                type="text"
                value={value}
                onChange={onChange}
                name={name}
                className={err && err.length > 0 ? 'form-control is-invalid' : 'form-control'}
                placeholder={placeHolder}/>
            {err && <div className="alert alert-danger">{err}</div>}
        </div>
    )
}

export default TextInput;