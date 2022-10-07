import React, { useEffect, useState, useRef } from 'react'

import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import AuthButton from 'components/buttons/AuthButton';

import "./SmsInput.scss"
import { registration } from 'utils/api/registration';


function SmsInput() {
    const [counter, setCounter] = useState();
    const [firstNum, setFirstNum] = useState("");
    const [secondNum, setSecondNum] = useState("");
    const [thirdNum, setThirdNum] = useState("");
    const [fourthNum, setFourthNum] = useState("");
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();
    const inputRef4 = useRef();

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);


    useEffect(() => {
        setCounter(5);
    }, [])
    const { register, handleSubmit, formState: { errors }} = useForm();

    const navigate = useNavigate();


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
                onSuccess: (response) => {
                    localStorage.setItem("token", response.data.token)
                    navigate("/lesson")
                },
                onError: () => {
                    alert("Вы ввели неправильный смс код")
                }
            })
        }
    }

    return (
        <div style={{
            margin: "0 -12px", padding: "36px 24px 64px 24px", backgroundColor: "#fff", borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px"
        }}>

            <form className="signin-sms__wrap w-100 mt-4" onSubmit={handleSubmit(onSubmit)} >
                <p className="sms-title ">Код подтверждения</p>
                <p className="sms-subtitle ">На номер {login} отправлен SMS с кодом подтверждения </p>
                <div className='signin-sms__inputs'>
                    <input ref={inputRef1} autoComplete="off" className="sms-input" type="text" placeholder='-' maxlength="1" {...register("firstNum", {
                        onChange: (event) => setFirstNum(event.target.value)
                    })} />
                    <input ref={inputRef2} autoComplete="off" className="sms-input" type="text" placeholder='-' maxlength="1" {...register("secondNum", {
                        onChange: (event) => setSecondNum(event.target.value)
                    })} />
                    <input ref={inputRef3} autoComplete="off" className="sms-input" type="text" placeholder='-' maxlength="1" {...register("thirdNum", {
                        onChange: (event) => setThirdNum(event.target.value)
                    })} />
                    <input ref={inputRef4} autoComplete="off" className="sms-input" type="text" placeholder='-' maxlength="1" {...register("fourthNum", {
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