import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'react-bootstrap';

import AuthButton from 'components/buttons/AuthButton';
import PhoneInput from './PhoneInput';
import logo from "assets/login/puzzles.png"

function SignUpForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            {/* <div style={{ paddingBottom: "165px" }}>
                <img src={logo} alt="" />
                <p>Добро пожаловать в OpenSkill</p>
            </div> */}
            <PhoneInput /> 
            {/* <form onSubmit={handleSubmit(onSubmit)} className="phone-form">
                <div style={{
                    margin: "0 -12px", padding: "36px 24px 64px 24px", backgroundColor: "#fff", borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px"
                }}>
                    <PhoneInput />
                </div> */}

            {/* <Form.Label className="form-title mb-3" htmlFor="basic-url">Введи номер телефона</Form.Label>
            <div className='phone-input__wrapper'>
                <Form.Control
                    className='phone-input'
                    type="text"
                    placeholder="998-"
                    aria-describedby="passwordHelpBlock"
                    {...register("phone-number")}
                />
                <p className='phone-input__wrapper-title'>Номер телефона</p>
                <AuthButton text={"Продолжить"} onClick = {() => console.log("data")}/>
            </div>   */}
            {/* </form> */}
        </>

    )
}

export default SignUpForm