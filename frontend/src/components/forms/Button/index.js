import React from 'react';

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