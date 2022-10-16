import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import AuthButton from 'components/buttons/AuthButton';
import logo from "assets/login/bubble.png"

import { setPhone, nextStep, setPassword } from 'redux/features/restoreSlice';

import "./RestorePassword.scss"
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { restore } from 'utils/api/restore';
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
        return restore.changePassword(userInfo)
    })

    const onSubmit = () => {
        if (watchPassword === watchPasswordProve) {
            mutation.mutate({ login: phone, password: passwd }, {
                onSuccess: (response) => {
                    localStorage.setItem("token", response.data.token)
                    navigate("/lesson")
                },
                onError: () => {
                    alert("Ошибка")
                }
            });
        } else {
            alert("Пароли не совпадают")
        }
    }
    return (
        <>
            <div style={{ paddingBottom: "30%", marginTop: "24px" }}>
                <img src={logo} alt="" />
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

                    <div className="form-validation my-3 p-2 rounded">
                        <p>Пароль должен содержать не менее:</p>
                        <span className={`form-validation__rule ${watchPassword.length >= 8 ? "rule--right" : ""}`} >8 символов </span>
                        <span className={`form-validation__rule ${watchPassword.match(/[0-9]/) ? "rule--right" : ""}`}  >Одной цифры (0-9)</span>
                        <span className={`form-validation__rule ${watchPassword.match(/[А-ЯA-Z]/) ? "rule--right" : ""}`}  >Одной буквы Верхнего регистра</span>
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