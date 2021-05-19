import React from 'react';
import './Input.scss'

const Input = ({...rest }) => {
    return (
        <input className="input" {...rest}/>
    )
}

export default Input
