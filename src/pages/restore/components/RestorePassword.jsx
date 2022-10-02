import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import AuthButton from 'components/buttons/AuthButton';
import logo from "assets/login/bubble.png"

import { setPhone, nextStep, setPassword } from 'redux/features/restoreSlice';
import { useSignUpMutation } from 'redux/services/signUp';

import "./RestorePassword.scss"
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const topInfo = {
    margin: "0 -12px",
    padding: "36px 24px 64px 24px",
    backgroundColor: "#fff",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px"
}
function RestorePassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const phone = useSelector((state) => state.restore.phone)
    const passwd = useSelector((state) => state.restore.password)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const watchPassword = watch("password", "");
    const watchPasswordProve = watch("passwordProve", "")

    const mutation = useMutation(userInfo => {
        axios.post("http://195.49.212.191:8779/user/restore", userInfo)
    })

    const onSubmit = () => {
        if (watchPassword === watchPasswordProve) {
            mutation.mutate({ login: phone, step: 3, password: passwd, });
            if (mutation.isSuccess) {
                navigate("/lessons/11870796-3253-11ed-a261-0242ac120002")
            }
        } else {
            console.log(watchPasswordProve)
        }
    }
    return (
        <>
            {/* <div style={{ paddingBottom: "165px" }}> */}
            <div style={{ paddingBottom: "30%", marginTop: "24px" }}>
                <img src={logo} alt="" />
                <p className='content-info__text'>Добро пожаловать в OpenSkill</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="phone-form">
                <div style={topInfo}>
                    <Form.Label className="form-title mb-3" htmlFor="basic-url">Придумай пароль</Form.Label>
                    <div className='input__wrapper'>
                        <Form.Control
                            className='password-input'
                            type="password"
                            placeholder="•••••"
                            aria-describedby="passwordHelpBlock"
                            {...register("password")}
                        />
                        <p className='password-input__wrapper-title'>Пароль</p>
                    </div>

                    <div class="form-validation my-3 p-2 rounded">
                        <p>Пароль должен содержать не менее:</p>
                        <span class={`form-validation__rule ${watchPassword.length >= 8 ? "rule--right" : ""}`} >8 символов </span>
                        <span class={`form-validation__rule ${watchPassword.match(/[0-9]/) ? "rule--right" : ""}`}  >Одной цифры (0-9)</span>
                        <span class={`form-validation__rule ${watchPassword.match(/[А-ЯA-Z]/) ? "rule--right" : ""}`}  >Одной буквы Верхнего регистра</span>
                    </div>

                    <div className='input__wrapper'>
                        <Form.Control
                            className='password-input password-input--second'
                            type="password"
                            placeholder="•••••"
                            aria-describedby="passwordHelpBlock"
                            {...register("passwordProve", {
                                onChange: (event) => dispatch(setPassword("" + event.target.value))
                            })}
                        />
                        <p className='password-input__wrapper-title'>Пароль</p>
                        <AuthButton text={"Продолжить"} />
                    </div>
                </div>
            </form>
        </>
    )
}

export default RestorePassword    