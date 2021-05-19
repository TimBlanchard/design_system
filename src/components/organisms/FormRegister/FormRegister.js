import React from 'react';
import Button from "../../atoms/Button/Button";
import LabelWithInput from "../../molecules/LabelWithInput/LabelWithInput";

function FormRegister() {

    const handleSubmit = () => {
        console.log('submit');
    }
    return (
        <div className="form-container">
            <form  className="form" onSubmit={handleSubmit}>
                <LabelWithInput label={'First name'} type={'error'} placeholder={'Your first name'} />
                <LabelWithInput label={'Last name'} type={'link'} placeholder={'Your last name'} />
                <LabelWithInput label={'Email'} placeholder={'Your email'} />
                <LabelWithInput label={'Username'} placeholder={'Your username'} />
                <LabelWithInput label={'Password'} placeholder={'Your password'} />
                <Button variant='primary'>Sign-up</Button>
            </form>
        </div>
    )
}

export default FormRegister
