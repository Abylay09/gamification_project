import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { useMutation, useQuery } from '@tanstack/react-query';
import AuthButton from 'components/buttons/AuthButton';
import { nextStep, setPassword } from 'redux/features/signUpSlice';
import { registration } from 'utils/api/registration';
import logo from "assets/login/bubble.png"
import "./PasswordInput.scss"
import { inputHelper } from 'utils/InputHelper';
const topInfo = {
    margin: "0 -12px",
    padding: "36px 24px 64px 24px",
    backgroundColor: "#fff",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px"
}
function PasswordInput() {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const phone = useSelector((state) => state.signUp.phone)
    const passwd = useSelector((state) => state.signUp.password)
    const watchPassword = watch("password", "");
    const watchPasswordProve = watch("passwordProve", "")

    const mutation = useMutation(userInfo => {
        return registration.signup(userInfo)
    })

    const onSubmit = () => {
        if (watchPassword === watchPasswordProve) {
            mutation.mutate({ login: phone, password: passwd }, {
                onSuccess: () => {
                    dispatch(nextStep());
                },
                onError: () => {
                    alert("Ошибка. Возможно были введены неправильные данные")
                }
            });
        } else {
            alert("Пароли не совпадают")
        }
    }

    function scrollToInput1() {
        const input = document.querySelector(".password-input")
        const y = input.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: y
        });
    }

    function scrollToInput2() {
        const input = document.querySelector(".password-input--second")
        const y = input.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: y
        });
    }

    return (
        <>
            <div style={{ paddingBottom: "30%", marginTop: "24px" }}>
                <img src={logo} alt="" />
                <p className='content-info__text'>Добро пожаловать в OpenSkill</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="password-form">
                <div style={topInfo}>
                    <Form.Label className="form-title mb-3" htmlFor="basic-url">Придумай пароль</Form.Label>
                    <div className='input__wrapper'>
                        <Form.Control
                            className='password-input'
                            type="password"
                            onFocus={() => inputHelper.upInput(".password-form", ".password-input")}

                            placeholder="•••••"
                            aria-describedby="passwordHelpBlock"
                            {...register("password", {
                                onBlur : () => inputHelper.downInput(".password-form", ".password-input")
                            })}
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
                            onFocus={() => inputHelper.upInput(".password-form", ".password-input--second", 3)}
                            placeholder="•••••"
                            aria-describedby="passwordHelpBlock"
                            {...register("passwordProve", {
                                onChange: (event) => dispatch(setPassword("" + event.target.value)),
                                onBlur : () => inputHelper.downInput(".password-form", ".password-input--second")
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

export default PasswordInput    