import React from 'react';
import './styles.css';

export default function Button({children, onClick, type}) {
    return (
        <button 
            className="button"
            type={type}
            onClick={onClick}  
        >
            {children}
        </button>
    );
}