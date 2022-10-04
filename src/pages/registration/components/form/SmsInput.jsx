import React, { useEffect, useState, Component } from 'react'

import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import AuthButton from 'components/buttons/AuthButton';
import { setSms, removeSms } from 'redux/features/signUpSlice';
import axios from 'axios';

import "./SmsInput.scss"


function SmsInput() {
    const [counter, setCounter] = useState("");
    const [otp, setOpt] = useState("");
    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);
    const navigate = useNavigate();

    // const schema = yup.object().shape({
    //     firstNum: yup.number().positive().integer().required(),
    //     secondNum: yup.number().positive().integer().required(),
    //     thirdNum: yup.number().positive().integer().required(),
    //     fourthNum: yup.number().positive().integer().required(),

    // }).required();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();

    let sms = useSelector((state) => state.signUp.sms)
    const login = useSelector((state) => state.signUp.phone)
    const password = useSelector((state) => state.signUp.password)

    const token = localStorage.getItem("token");



    const mutation = useMutation(data => {
        return axios.post("http://195.49.212.191:8779/user/check-code", data, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
    }, {
        // onSuccess: () => {
        //     localStorage.setItem("token", mutation.data.data.token)
        //     navigate("/lessons/11870796-3253-11ed-a261-0242ac120002")
        // }
    })

    const smsMutation = useMutation(userInfo => {
        axios.post("http://195.49.212.191:8779/user/update-code ", userInfo)
    })

    function sendSms() {
        smsMutation.mutate({ login: login })
        setCounter(5)
    }

    const onSubmit = (data) => {
        console.log(data);
    }
    // const onSubmit = () => {
    //     if (counter == 0) {
    //         // mutation.mutate({ login: "11111", password: "B1325028", code: sms })
    //         console.log(sms);
    //         mutation.mutate({ login: login, password: password, code: sms })
    //         // dispatch(removeSms())
    //         setCounter(5)
    //         // reset({
    //         //     firstNum : "",
    //         //     secondNum : "",
    //         //     thirdNum : "",
    //         //     fourthNum : "",
    //         // })
    //         if (mutation.isSuccess) {
    //             localStorage.setItem("token", mutation.data.data.token)
    //             navigate("/lessons/11870796-3253-11ed-a261-0242ac120002")
    //         }
    //     } else {
    //         alert("Повторить попытку можно через 60 секунд")
    //     }

    // }
    console.log(otp);
    return (
        <div style={{
            margin: "0 -12px", padding: "36px 24px 64px 24px", backgroundColor: "#fff", borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px"
        }}>

            <form className="signin-sms__wrap w-100 mt-4" onSubmit={handleSubmit(onSubmit)} >
                <p className="sms-title ">Код подтверждения</p>
                <p className="sms-subtitle ">На номер {login} отправлен SMS с кодом подтверждения </p>
                <div className='signin-sms__inputs'>

                    <input autoComplete="off" className="sms-input" type="text" placeholder='-' maxlength="1" {...register("firstNum", {
                        onChange: (event) => setOpt(event.target.value)
                    })} />
                    <input autoComplete="off" className="sms-input" type="text" placeholder='-' maxlength="1" {...register("secondNum", {
                        onChange: (event) => setOpt(event.target.value)
                    })} />
                    {/* <input autoComplete="off" className="sms-input" type="text" placeholder='-' maxlength="1" {...register("firstNum", {
                        onChange: (event) => dispatch(setSms("" + event.target.value))
                    })} />
                    <input autoComplete="off" className="sms-input" type="tel" placeholder='-' maxlength="1" {...register("secondNum", {
                        onChange: (event) => dispatch(setSms("" + event.target.value)),
                    })} />
                    <input autoComplete="off" className="sms-input" type="tel" placeholder='-' maxlength="1" {...register("thirdNum", {
                        onChange: (event) => dispatch(setSms("" + event.target.value))
                    })} />
                    <input autoComplete="off" className="sms-input" type="tel" placeholder='-' maxlength="1" {...register("fourthNum", {
                        onChange: (event) => dispatch(setSms("" + event.target.value))
                    })} /> */}
                </div>
                <AuthButton text="Подтвердить" />

                {counter === 0
                    ? <p className='repeat-sms' onClick={() => sendSms()}>Отправить смс повторно</p>
                    : <p className='repeat-sms' >Отправить смс повторно через {counter}</p>}
            </form>
        </div>

    )
}

export default SmsInput