import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import AuthButton from 'components/buttons/AuthButton';
import logo from "assets/login/username-and-password.png"
import { setPassword } from 'redux/features/signInSlice';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { login } from 'utils/api/Login';

import "./LoginPassword.scss"
const topInfo = {
    margin: "0 -12px",
    padding: "36px 24px 64px 24px",
    backgroundColor: "#fff",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px"
}
function LoginPassword() {
    const language = useSelector(state => state.language.language);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const phone = useSelector((state) => state.signIn.phone)
    const passwd = useSelector((state) => state.signIn.password)

    const mutation = useMutation(userInfo => {
        return login.auth(userInfo)
    })

    const onSubmit = () => {
        mutation.mutate({ login: phone, password: passwd }, {
            onSuccess: (response) => {
                localStorage.setItem('token', response.data.token)
                navigate("/lesson")
            },
            onError: () => {
                alert(language.invalid_data)
            }
        });

    }

    return (
        <>
            <div style={{ paddingBottom: "30%", marginTop: "24px" }}>
                <img src={logo} alt="" className='login-img' onClick={() => console.log(mutation.data)} />
                
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="password-form">
                <div style={topInfo}>
                    <Form.Label className="form-title mb-3" htmlFor="basic-url">{language.input_password}</Form.Label>
                    <div className='input__wrapper'>
                        <Form.Control
                            className='password-input login-password'
                            type="password"
                            placeholder="•••••"
                            aria-describedby="passwordHelpBlock"
                            {...register("password", {
                                onChange: (event) => dispatch(setPassword("" + event.target.value))
                            })}
                        />
                        <p className='password-input__wrapper-title'>{language.password}</p>
                        <AuthButton text={language.next} />
                        <div className='get-password' onClick={() => navigate("/registration")}>
                            {language.registration}
                        </div>
                        <div className='get-password py-1 mt-0' onClick={() => navigate("/restore")}>
                            {language.restore}
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default LoginPassword    