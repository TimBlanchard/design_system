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
                <LabelWithInput label={'First name'} placeholder={'Your first name'} size={'medium'}/>
                <LabelWithInput label={'Last name'} placeholder={'Your last name'} size={'medium'}/>
                <LabelWithInput label={'Email'} placeholder={'Your email'} size={'medium'}/>
                <LabelWithInput label={'Username'} placeholder={'Your username'} size={'medium'}/>
                <LabelWithInput label={'Password'} placeholder={'Your password'} size={'medium'}/>
                <Button variant='primary'>Sign-up</Button>
            </form>
        </div>
    )
}

export default FormRegister
