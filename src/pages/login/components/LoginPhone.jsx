import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { setPhone, nextStep } from 'redux/features/signInSlice';
import AuthButton from 'components/buttons/AuthButton';
import logo from "assets/login/puzzles.png"
import "./LoginPhone.scss"
function LoginPhone() {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = () => {
        dispatch(nextStep());
    }
    return (
        <>
            <div style={{ paddingBottom: "30%" }}>
                <img src={logo} alt="" />
                <p className='phone-info__text'>Добро пожаловать в OpenSkill</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="phone-form">
                <div style={{
                    margin: "0 -12px", padding: "36px 24px 64px 24px", backgroundColor: "#fff", borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px"
                }}>
                    <Form.Label className="form-title mb-3" htmlFor="basic-url">Введи номер телефона</Form.Label>
                    <div className='input__wrapper'>
                        <Form.Control
                            className='phone-input'
                            type="number"
                            placeholder="998-"
                            aria-describedby="passwordHelpBlock"
                            {...register("phone", {
                                required: true,
                                onChange: (event) => dispatch(setPhone("" + event.target.value))
                            })}
                        />
                        <p className='phone-input__wrapper-title'>Номер телефона</p>

                        {errors?.phone && <p className='error-msg'>Поле обязательна к заполнению</p>}

                        <AuthButton text={"Продолжить"}  />
                    </div>
                </div>
            </form>
        </>
    )
}

export default LoginPhone    