import React from 'react';
import './styles.css';

export default function Input({type, name, placeholder, required, onChange}) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="input" 
            required={required}
            onChange={onChange}
        >
        </input> 
    );
}