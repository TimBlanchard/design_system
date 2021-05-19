import React from 'react';
import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";

const LabelWithInput = ({ label, placeholder, type }) => {
    return (
        <div className="label-input-container" >
            <Label children={label}/>
            <Input placeholder={placeholder} />
            {
                type === 'error' ?
                <span className={`alert-${type}`}>
                    <span className="icon alert-error-icon" />An error has occured
                </span> :
                type === 'link' &&
                <a>Link</a>
            }
        </div>
    )
}

export default LabelWithInput

