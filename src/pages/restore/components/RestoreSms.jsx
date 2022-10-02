import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import AuthButton from 'components/buttons/AuthButton';
import "./RestoreSms.scss"
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { setSms, removeSms } from 'redux/features/restoreSlice';
import { useNavigate } from 'react-router-dom';
import { nextStep } from 'redux/features/restoreSlice';

function RestoreSms() {
    const [counter, setCounter] = useState("");
    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const first = watch("firstNum");
    const second = watch("secondNum");
    const third = watch("thirdNum");
    const fourth = watch("fourthNum");
    const dispatch = useDispatch();

    let sms = useSelector((state) => state.restore.sms)
    const login = useSelector((state) => state.restore.phone)
    const password = useSelector((state) => state.restore.password)



    const mutation = useMutation(data => {
        return axios.post("http://195.49.212.191:3001/user/restore", data)
    }, {
        onSuccess : () => {
            dispatch(nextStep())
        },
        onError : () => {
            alert("Введен неправильный смс")
        }
    })

    const smsMutation = useMutation(userInfo => {
        axios.post("http://195.49.212.191:8779/user/restore", userInfo)
    })

    function sendSms() {
        smsMutation.mutate({ login: login, step : 1 })
        setCounter(5)
    }

    const onSubmit = () => {
        if (counter == 0) {
            // mutation.mutate({ login: "11111", password: "B1325028", code: sms })
            mutation.mutate({ login: login, step: 2, code: sms })
            dispatch(removeSms())
            setCounter(5)
            reset({
                firstNum: "",
                secondNum: "",
                thirdNum: "",
                fourthNum: "",
            })
        } else {
            alert("Повторить попытку можно через 60 секунд")
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
                    <input autoComplete="off" className="sms-input" type="tel" placeholder='-' maxlength="1" {...register("firstNum", {
                        onChange: (event) => dispatch(setSms("" + event.target.value))
                    })} />
                    <input autoComplete="off" className="sms-input" type="tel" placeholder='-' maxlength="1" {...register("secondNum", {
                        onChange: (event) => dispatch(setSms("" + event.target.value))
                    })} />
                    <input autoComplete="off" className="sms-input" type="tel" placeholder='-' maxlength="1" {...register("thirdNum", {
                        onChange: (event) => dispatch(setSms("" + event.target.value))
                    })} />
                    <input autoComplete="off" className="sms-input" type="tel" placeholder='-' maxlength="1" {...register("fourthNum", {
                        onChange: (event) => dispatch(setSms("" + event.target.value))
                    })} />
                </div>
                <AuthButton text="Подтвердить" />

                {counter === 0
                    ? <p className='repeat-sms' onClick={() => sendSms()}>Отправить смс повторно</p>
                    : <p className='repeat-sms' >Отправить смс повторно через {counter}</p>}
            </form>
        </div>

    )
}

export default RestoreSms