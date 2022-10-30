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
    const [counter, setCounter] = useState(60);
    const language = useSelector(state => state.language.language);
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
        setCounter(60)
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        if (digits.length < 4) {
            alert(language.sms_is_required)
        } else {
            mutation.mutate({ login: login, sms: digits.join("") }, {
                onSuccess: () => {
                    dispatch(nextStep())
                },
                onError: () => {
                    alert(language.sms_incorrect)
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

    function scroll() {
        const input = document.querySelector(".sms-input")
        input.scrollIntoView({ behavior: 'smooth' });
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
                    <p className="sms-title ">{language.code}</p>
                    <p className="sms-subtitle ">{language.on_phone} {login} {language.sms_sended} </p>
                    <div className='signin-sms__inputs' style={{ gap: "15px" }}>
                        {digits.map((digit, index) => (
                            <input
                                key={index}
                                className="sms-input"
                                onFocus={() => scroll()}
                                value={digit}
                                placeholder='-'
                                onChange={event => handleChange(index, event.target.value)}
                                onKeyDown={event => handleKeyDown(index, event)}
                                ref={element => inputRefs.current[index] = element}
                            />
                        ))}
                    </div>
                    <AuthButton text={language.confirm} />

                    {counter === 0
                        ? <p className='repeat-sms' onClick={() => sendSms()}>{language.sms_retry}</p>
                        : <p className='repeat-sms' >{language.sms_seconds} {counter + " " + language.seconds}</p>}
                    <div className='get-password py-1 my-0' onClick={() => navigate("/login")}>
                        {language.login}
                    </div>
                </form>
            </div>
        </>


    )
}

export default RestoreSms