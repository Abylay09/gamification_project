import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AuthButton from 'components/buttons/AuthButton';
import "./RestoreSms.scss"
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { nextStep } from 'redux/features/restoreSlice';
import { restore } from 'utils/api/restore';
import Image from "assets/login/bonbon-dialog.png"

const initDigits = ["", "", "", ""]
function RestoreSms() {
    const [counter, setCounter] = useState(5);
    const [digits, setDigits] = useState(initDigits);
    const inputRefs = useRef([]);
    const navigate = useNavigate();
    const length = digits.length;

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    const dispatch = useDispatch();

    const login = useSelector((state) => state.restore.phone)

    const mutation = useMutation(data => {
        return restore.checkCode(data)
    })

    const smsMutation = useMutation(login => {
        return restore.sendCode(login)
    }, {
        cacheTime: 0
    })

    function sendSms() {
        smsMutation.mutate(login)
        setCounter(5)
    }

    const onSubmit = () => {
        if (digits.length < 4) {
            alert("Заполните смс форму")
        } else {
            mutation.mutate({ login: login, sms: digits.join("") }, {
                onSuccess: () => {
                    dispatch(nextStep())
                },
                onError: () => {
                    alert("Вы ввели неправильный смс код")
                }
            })
        }
    }

    const handleChange = (index, newValue) => {
        const oldDigit = digits[index];

        const newDigit = newValue.trim().replace(oldDigit, '');
        if (newDigit < '0' || newDigit > '9') return;

        const newDigits = [...digits];
        newDigits[index] = newDigit;
        setDigits(newDigits);
        if (index < length - 1) {
            inputRefs.current[index + 1].focus();
        } else {
            inputRefs.current[index].blur();
        }
    }

    const handleKeyDown = (index, event) => {
        if (event.key === 'Backspace') {
            event.preventDefault();
            if (digits[index].match(/^[0-9]$/)) {
                const newDigits = [...digits];
                newDigits[index] = '';
                setDigits(newDigits);
            } else {
                if (index > 0) inputRefs.current[index - 1].focus();
            }
        }
    }

    return (
        <>
            <div style={{ paddingBottom: "30%" }}>
                <img src={Image} alt="" />
            </div>

            <div style={{
                margin: "0 -12px", padding: "36px 24px 64px 24px", backgroundColor: "#fff", borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px"
            }}>

                <form className="signin-sms__wrap w-100 mt-4" onSubmit={onSubmit} >
                    <p className="sms-title ">Код подтверждения</p>
                    <p className="sms-subtitle ">На номер {login} отправлен SMS с кодом подтверждения </p>
                    <div className='signin-sms__inputs' style={{ gap: "15px" }}>
                        {digits.map((digit, index) => (
                            <input
                                key={index}
                                className="sms-input"
                                value={digit}
                                placeholder='-'
                                onChange={event => handleChange(index, event.target.value)}
                                onKeyDown={event => handleKeyDown(index, event)}
                                ref={element => inputRefs.current[index] = element}
                            />
                        ))}
                    </div>
                    <AuthButton text="Подтвердить" />

                    {counter === 0
                        ? <p className='repeat-sms' onClick={() => sendSms()}>Отправить смс повторно</p>
                        : <p className='repeat-sms' >Отправить смс повторно через {counter + " " + "секунд"}</p>}
                </form>
            </div>
        </>


    )
}

export default RestoreSms