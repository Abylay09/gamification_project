import React, { useEffect, useState, Component } from 'react'

import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import AuthButton from 'components/buttons/AuthButton';
import { setSms, removeSms } from 'redux/features/signUpSlice';
import axios from 'axios';

import "./SmsInput.scss"
import { registration } from 'utils/api/registration';


function SmsInput() {
    const [counter, setCounter] = useState();
    const [firstNum, setFirstNum] = useState("");
    const [secondNum, setSecondNum] = useState("");
    const [thirdNum, setThirdNum] = useState("");
    const [fourthNum, setFourthNum] = useState("");

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    useEffect(() => {
        setCounter(5)
    }, [])
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const login = useSelector((state) => state.signUp.phone)
    const password = useSelector((state) => state.signUp.password)

    function isEmpty(text) {
        return text === ""
    }

    const mutation = useMutation(data => {
        return registration.checkCode(data)
    })

    const smsMutation = useMutation(userInfo => {
        return registration.updateCode(userInfo)
    })

    function sendSms() {
        smsMutation.mutate({ login: login })
        setCounter(5)
    }

    const onSubmit = (data) => {
        if (isEmpty(firstNum) || isEmpty(secondNum) || isEmpty(thirdNum) || isEmpty(fourthNum)) {
            alert("Заполните смс форму")
        } else {
            mutation.mutate({ login: login, password: password, code: firstNum + secondNum + thirdNum + fourthNum }, {
            // mutation.mutate({ login: "99999", password: "Ab09092000", code: firstNum + secondNum + thirdNum + fourthNum }, {
                onSuccess: (response) => {
                    localStorage.setItem("token", response.data.token)
                    navigate("/lesson")
                    // alert("Успешно")
                },
                onError: () => {
                    alert("Вы ввели неправильный смс код")
                }
            })
        }
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
                        onChange: (event) => setFirstNum(event.target.value)
                    })} />
                    <input autoComplete="off" className="sms-input" type="text" placeholder='-' maxlength="1" {...register("secondNum", {
                        onChange: (event) => setSecondNum(event.target.value)
                    })} />
                    <input autoComplete="off" className="sms-input" type="text" placeholder='-' maxlength="1" {...register("thirdNum", {
                        onChange: (event) => setThirdNum(event.target.value)
                    })} />
                    <input autoComplete="off" className="sms-input" type="text" placeholder='-' maxlength="1" {...register("fourthNum", {
                        onChange: (event) => setFourthNum(event.target.value)
                    })} />
                </div>
                <AuthButton text="Подтвердить" />

                {counter === 0
                    ? <p className='repeat-sms' onClick={() => sendSms()}>Отправить смс повторно</p>
                    : <p className='repeat-sms' >Отправить смс повторно через {counter + " " + "секунд"}</p>}
            </form>
        </div>

    )
}

export default SmsInput