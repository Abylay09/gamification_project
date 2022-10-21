import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import AuthButton from 'components/buttons/AuthButton';
import logo from "assets/login/bubble.png"

import { setPhone, nextStep, setPassword } from 'redux/features/restoreSlice';

import "./RestorePassword.scss"
import { useMutation } from '@tanstack/react-query';
import { restore } from 'utils/api/restore';
import { useNavigate } from 'react-router-dom';
const topInfo = {
    margin: "0 -12px",
    padding: "36px 24px 64px 24px",
    backgroundColor: "#fff",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px"
}
function RestorePassword() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const language = useSelector(state => state.language.language);
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
                    alert(language.error)
                }
            });
        } else {
            alert(language.password_not_equals)
        }
    }
    return (
        <>
            <div style={{ paddingBottom: "30%", marginTop: "24px" }}>
                <img src={logo} alt="" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="phone-form">
                <div style={topInfo}>
                    <Form.Label className="form-title mb-3" htmlFor="basic-url">{language.password_create}</Form.Label>
                    <div className='input__wrapper'>
                        <Form.Control
                            className='password-input'
                            type="password"
                            placeholder="•••••"
                            aria-describedby="passwordHelpBlock"
                            {...register("password")}
                        />
                        <p className='password-input__wrapper-title'>{language.password}</p>
                    </div>

                    <div className="form-validation my-3 p-2 rounded">
                        <p>{language.password_rules}</p>
                        <span className={`form-validation__rule ${watchPassword.length >= 8 ? "rule--right" : ""}`} >{language.password_8}</span>
                        <span className={`form-validation__rule ${watchPassword.match(/[0-9]/) ? "rule--right" : ""}`}  >{language.password_digit}</span>
                        <span className={`form-validation__rule ${watchPassword.match(/[А-ЯA-Z]/) ? "rule--right" : ""}`}  >{language.password_up}</span>
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
                        <p className='password-input__wrapper-title'>{language.password}</p>
                        <AuthButton text={language.next} />
                        <div className='get-password' onClick={() => navigate("/login")}>
                            {language.login}
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default RestorePassword    