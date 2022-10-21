import React, { useEffect, useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import AuthButton from 'components/buttons/AuthButton';
import { registration } from 'utils/api/registration';
import Image from "assets/login/bonbon-dialog.png"
import "./SmsInput.scss"

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
        // старую цифру из поля ввода убираем, оставляя только новую
        const newDigit = newValue.trim().replace(oldDigit, '');
        if (newDigit < '0' || newDigit > '9') return;
        // теперь вызываем callback родителя, чтобы обовить digits
        const newDigits = [...digits]; // копия digits
        newDigits[index] = newDigit;
        setDigits(newDigits);
        if (index < length - 1) {
            inputRefs.current[index + 1].focus();
        } else { // или убираем фокус, если это было последнее поле
            inputRefs.current[index].blur();
        }
    }

    const handleKeyDown = (index, event) => {
        if (event.key === 'Backspace') {
            event.preventDefault();
            if (digits[index].match(/^[0-9]$/)) {
                // если элемент массива digits содержит цифру, то при нажатии клавиши
                // вызываем callback-функцию родителя, чтобы записать пустую строку
                const newDigits = [...digits]; // копия digits
                newDigits[index] = '';
                setDigits(newDigits);
            } else {
                // элемент массива digits пустой, удалять нечего — так что надо сместить
                // фокус на предыдущее поле input — при условии, что это не первое поле
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

                <form form className="signin-sms__wrap w-100 mt-4" onSubmit={onSubmit} >
                    <p className="sms-title ">{language.code}</p>
                    <p className="sms-subtitle ">{language.on_phone} {login} {language.sms_sended} </p>
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


// import React, { useEffect, useState, useRef } from 'react'

// import { useForm } from 'react-hook-form'
// import { useSelector } from 'react-redux'
// import { useMutation } from '@tanstack/react-query';
// import { useNavigate } from 'react-router-dom';
// import AuthButton from 'components/buttons/AuthButton';
// import "./SmsInput.scss"
// import { registration } from 'utils/api/registration';

// function SmsInput() {
//     const [counter, setCounter] = useState();
//     const [firstNum, setFirstNum] = useState("");
//     const [secondNum, setSecondNum] = useState("");
//     const [thirdNum, setThirdNum] = useState("");
//     const [fourthNum, setFourthNum] = useState("");
//     const inputRef1 = useRef();
//     const inputRef2 = useRef();
//     const inputRef3 = useRef();
//     const inputRef4 = useRef();

//     useEffect(() => {
//         const timer =
//             counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
//         return () => clearInterval(timer);
//     }, [counter]);


//     useEffect(() => {
//         setCounter(5);
//     }, [])
//     const { register, handleSubmit, formState: { errors }} = useForm();

//     const navigate = useNavigate();


//     const login = useSelector((state) => state.signUp.phone)
//     const password = useSelector((state) => state.signUp.password)

//     function isEmpty(text) {
//         return text === ""
//     }

//     const mutation = useMutation(data => {
//         return registration.checkCode(data)
//     })

//     const smsMutation = useMutation(userInfo => {
//         return registration.updateCode(userInfo)
//     })

//     function sendSms() {
//         smsMutation.mutate({ login: login })
//         setCounter(5)
//     }

//     const onSubmit = (data) => {
//         if (isEmpty(firstNum) || isEmpty(secondNum) || isEmpty(thirdNum) || isEmpty(fourthNum)) {
//             alert("Заполните смс форму")
//         } else {
//             mutation.mutate({ login: login, password: password, code: firstNum + secondNum + thirdNum + fourthNum }, {
//                 onSuccess: (response) => {
//                     localStorage.setItem("token", response.data.token)
//                     navigate("/lesson")
//                 },
//                 onError: () => {
//                     alert("Вы ввели неправильный смс код")
//                 }
//             })
//         }
//     }

//     return (
//         <div style={{
//             margin: "0 -12px", padding: "36px 24px 64px 24px", backgroundColor: "#fff", borderTopLeftRadius: "12px",
//             borderTopRightRadius: "12px"
//         }}>

//             <form className="signin-sms__wrap w-100 mt-4" onSubmit={handleSubmit(onSubmit)} >
//                 <p className="sms-title ">Код подтверждения</p>
//                 <p className="sms-subtitle ">На номер {login} отправлен SMS с кодом подтверждения </p>
//                 <div className='signin-sms__inputs'>
//                     <input ref={inputRef1} autoComplete="off" className="sms-input" type="text" placeholder='-' maxlength="1" {...register("firstNum", {
//                         onChange: (event) => setFirstNum(event.target.value)
//                     })} />
//                     <input ref={inputRef2} autoComplete="off" className="sms-input" type="text" placeholder='-' maxlength="1" {...register("secondNum", {
//                         onChange: (event) => setSecondNum(event.target.value)
//                     })} />
//                     <input ref={inputRef3} autoComplete="off" className="sms-input" type="text" placeholder='-' maxlength="1" {...register("thirdNum", {
//                         onChange: (event) => setThirdNum(event.target.value)
//                     })} />
//                     <input ref={inputRef4} autoComplete="off" className="sms-input" type="text" placeholder='-' maxlength="1" {...register("fourthNum", {
//                         onChange: (event) => setFourthNum(event.target.value)
//                     })} />
//                 </div>
//                 <AuthButton text="Подтвердить" />

//                 {counter === 0
//                     ? <p className='repeat-sms' onClick={() => sendSms()}>Отправить смс повторно</p>
//                     : <p className='repeat-sms' >Отправить смс повторно через {counter + " " + "секунд"}</p>}
//             </form>

//         </div>

//     )
// }

// export default SmsInput