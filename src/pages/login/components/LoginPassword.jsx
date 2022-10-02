import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import AuthButton from 'components/buttons/AuthButton';
import logo from "assets/login/username-and-password.png"
import { setPhone, nextStep, setPassword } from 'redux/features/signInSlice';
import { useSigninMutation } from 'redux/services/signIn';
import "./LoginPassword.scss"
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import useReceiveToken from 'utils/hooks/receiveToken';
const topInfo = {
    margin: "0 -12px",
    padding: "36px 24px 64px 24px",
    backgroundColor: "#fff",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px"
}
function LoginPassword() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const token = useReceiveToken();

    const phone = useSelector((state) => state.signIn.phone)
    const passwd = useSelector((state) => state.signIn.password)

    const mutation = useMutation(userInfo => {
        return axios.post("http://195.49.212.191:8779/user/signin", userInfo)
    })


    const onSubmit = () => {
        // const response = await login({login:  phone, password:  passwd});

        mutation.mutate({ login: phone, password: passwd });
        if (mutation.isSuccess) {
            localStorage.setItem('token', mutation.data.data.token)
        } else {
            console.log(mutation.error)
        }
        navigate("/lessons/11870796-3253-11ed-a261-0242ac120002")
    }
    return (
        <>
            {/* <div style={{ paddingBottom: "165px" }}> */}
            <div style={{ paddingBottom: "30%", marginTop: "24px" }}>
                <img src={logo} alt="" className='login-img' onClick={() => console.log(mutation.data)} />
                <p className='content-info__text'>Добро пожаловать в OpenSkill</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="password-form">
                <div style={topInfo}>
                    <Form.Label className="form-title mb-3" htmlFor="basic-url">Введи пароль</Form.Label>
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
                        <p className='password-input__wrapper-title'>Пароль</p>
                        <AuthButton text={"Продолжить"} />
                        <div className='get-password' onClick={() => navigate("/registration")}>
                            Зарегистрироваться
                        </div>
                        <div className='get-password' onClick={() => navigate("/restore")}>
                            Восстановить пароль
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default LoginPassword    