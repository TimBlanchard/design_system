import React from 'react';
import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";

const LabelWithInput = ({ label, placeholder, size, ...rest }) => {
    return (
        <div className="label-input-container" >
            <Label children={label}/>
            <Input placeholder={placeholder} size={size} />
        </div>
    )
}

export default LabelWithInput

