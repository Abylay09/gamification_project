import React, { useEffect, useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import AuthButton from 'components/buttons/AuthButton';
import { registration } from 'utils/api/registration';
import Image from "assets/login/bonbon-dialog.png"
import "./SmsInput.scss"
import { inputHelper } from 'utils/InputHelper';

const initDigits = ["", "", "", ""]
export default function SmsInput() {
    const language = useSelector(state => state.language.language);
    const [digits, setDigits] = useState(initDigits);
    const [counter, setCounter] = useState();
    const inputRefs = useRef([]);
    const length = digits.length;

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);


    useEffect(() => {
        setCounter(60);
    }, [])
    const { register, handleSubmit, formState: { errors } } = useForm();

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
        setCounter(60)
    }

    

    const onSubmit = (e) => {
        e.preventDefault()
        if (digits.length < 4) {
            alert(language.sms_is_required)
        } else {
            mutation.mutate({ login: login, password: password, code: digits.join("") }, {
                onSuccess: (response) => {
                    localStorage.setItem("token", response.data.token)
                    navigate("/lesson")
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

    function scrollToInput() {
        const input = document.querySelector(".signin-sms__inputs")
        const y = input.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: y
        });
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

                <form form className="signin-sms__wrap w-100 mt-4" onSubmit={onSubmit} >
                    <p className="sms-title ">{language.code}</p>
                    <p className="sms-subtitle ">{language.on_phone} {login} {language.sms_sended} </p>
                    <div className='signin-sms__inputs' style={{ gap: "15px" }}>
                        {digits.map((digit, index) => (
                            <input
                                key={index}
                                className="sms-input"
                                value={digit}
                                onFocus={() => inputHelper.upInput(".signin-sms__wrap", ".sms-input", 3)}
                                onBlur = {() => inputHelper.downInput(".signin-sms__wrap", ".sms-input")}
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

