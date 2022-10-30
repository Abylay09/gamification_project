import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { setPhone, nextStep } from 'redux/features/signUpSlice';
import AuthButton from 'components/buttons/AuthButton';
import logo from "assets/login/puzzles.png"
import "./PhoneInput.scss"
function PhoneInput() {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = () => {
        dispatch(nextStep());
    }

    function scroll() {
        const input = document.querySelector(".phone-input")
        input.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <div style={{ paddingBottom: "30%" }}>
                <img src={logo} alt="" />
                <p className='content-info__text'>Добро пожаловать в OpenSkill</p>
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
                            onFocus={() => scroll()}
                            placeholder="998-"
                            aria-describedby="passwordHelpBlock"
                            {...register("phone", {
                                required: true,
                                onChange: (event) => dispatch(setPhone("" + event.target.value))
                            })}
                        />
                        <p className='phone-input__wrapper-title'>Номер телефона</p>

                        {errors?.phone && <p className='error-msg'>Поле обязательна к заполнению</p>}

                        <AuthButton text={"Продолжить"} onClick={() => console.log("data")} />
                    </div>
                </div>
            </form>
        </>
    )
}

export default PhoneInput    