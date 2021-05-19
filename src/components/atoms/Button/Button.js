import React from 'react';
import './Button.scss'

const Button = ({ variant = 'primary', children, ...rest }) => {
    return (
        <button className={`btn ${variant}`} {...rest}>
            {children}
        </button>
    )
}



export default Button
