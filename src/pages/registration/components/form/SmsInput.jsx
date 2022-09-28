import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import AuthButton from 'components/buttons/AuthButton';
import "./SmsInput.scss"
function SmsInput() {
    const { register, handleSubmit, watch, formState: { errors }, setFocus, getValues } = useForm();
    // const  [first,second,third,fourth] = watch(["first-num", "second-num","third-num", "fourth-num"])
    const first = watch("first-num");
    const second = watch("second-num");
    const third = watch("third-num");
    const fourth = watch("fourth-num");

    // useEffect(() => {
    //     setFocus("first-num");
    // }, [])

    // useEffect(() => {
    //     if(first.length > 0) setFocus("second-num")
    //     else  setFocus("first-num")
    // }, [first])

    const onSubmit = data => console.log(data);

    return (
        <div style={{
            margin: "0 -12px", padding: "36px 24px 64px 24px", backgroundColor: "#fff", borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px"
        }}>

            <form className="signin-sms__wrap w-100 mt-4" onSubmit={handleSubmit(onSubmit)} >
                <p  className="sms-title ">Код подтверждения</p>
                <p className="sms-subtitle ">text</p>
                <div className='signin-sms__inputs'>
                    <input autoComplete="off" className="sms-input" type="tel" placeholder='-' maxlength="1" {...register("first-num")} />
                    <input autoComplete="off" className="sms-input" type="tel" placeholder='-' maxlength="1" {...register("second-num")} />
                    <input autoComplete="off" className="sms-input" type="tel" placeholder='-' maxlength="1" {...register("third-num")} />
                    <input autoComplete="off" className="sms-input" type="tel" placeholder='-' maxlength="1" {...register("fourth-num")} />
                </div>

                <AuthButton text="Подтвердить" />

            </form>
        </div>

    )
}

export default SmsInput