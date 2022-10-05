import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import AuthButton from 'components/buttons/AuthButton';
import "./RestoreSms.scss"
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { nextStep } from 'redux/features/restoreSlice';
import { restore } from 'utils/api/restore';

function RestoreSms() {
    const [counter, setCounter] = useState(5);
    const [firstNum, setFirstNum] = useState("");
    const [secondNum, setSecondNum] = useState("");
    const [thirdNum, setThirdNum] = useState("");
    const [fourthNum, setFourthNum] = useState("");

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();

    const login = useSelector((state) => state.restore.phone)

    function isEmpty(text) {
        return text === ""
    }

    const mutation = useMutation(data => {
        return restore.checkCode(data)
    })

    const smsMutation = useMutation(login => {
        return restore.sendCode(login)
    }, {
        cacheTime : 0
    })

    function sendSms() {
        smsMutation.mutate(login)
        setCounter(5)
    }

    const onSubmit = () => {
        if (isEmpty(firstNum) || isEmpty(secondNum) || isEmpty(thirdNum) || isEmpty(fourthNum)) {
            alert("Заполните смс форму")
        } else {
            mutation.mutate({ login: login, sms: firstNum + secondNum + thirdNum + fourthNum }, {
                onSuccess: () => {
                    dispatch(nextStep())
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

export default RestoreSms