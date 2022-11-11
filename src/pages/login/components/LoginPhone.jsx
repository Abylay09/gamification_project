import React, { useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { setPhone, nextStep } from 'redux/features/signInSlice';
import AuthButton from 'components/buttons/AuthButton';
import logo from "assets/login/puzzles.png"
import "./LoginPhone.scss"


function LoginPhone() {
    const ref = useRef();
    const dispatch = useDispatch();
    const language = useSelector(state => state.language.language);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = () => {
        dispatch(nextStep());
    }
   

    function scrollToInput(){
        const input = document.querySelector(".phone-input")
        const y = input.getBoundingClientRect().top + window.scrollY;
        console.log(input.offsetTop);
        window.scrollTo({
            top  : y
        });
    }
    // useEffect(() => {
    //     const executeScroll = () => scrollToRef(ref);
    //     const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
    // }, [])


    function scroll() {
        const input = document.querySelector(".phone-input")
        input.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <div style={{ paddingBottom: "30%" }}>
                <img src={logo} alt="" />
                <p className='phone-info__text'>{language.welcom}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="phone-form">
                <div style={{
                    margin: "0 -12px", padding: "36px 24px 64px 24px", backgroundColor: "#fff", borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px"
                }}>
                    <Form.Label className="form-title mb-3" htmlFor="basic-url">{language.input_phone}</Form.Label>
                    <div className='input__wrapper'>
                        <Form.Control
                            className='phone-input'
                            ref={ref}
                            onClick={() => scrollToInput()}
                            // onFocus={() => scroll()}
                            type="number"
                            placeholder="998-"
                            aria-describedby="passwordHelpBlock"
                            {...register("phone", {
                                required: true,
                                onChange: (event) => dispatch(setPhone("" + event.target.value))
                            })}
                        />
                        <p className='phone-input__wrapper-title'>{language.phone}</p>

                        {errors?.phone && <p className='error-msg'>{language.required_field}</p>}

                        <AuthButton text={language.next} />
                    </div>
                </div>
            </form>
        </>
    )
}

export default LoginPhone    