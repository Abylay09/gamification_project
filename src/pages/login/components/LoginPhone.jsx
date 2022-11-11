import React, { useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { setPhone, nextStep } from 'redux/features/signInSlice';
import AuthButton from 'components/buttons/AuthButton';
import logo from "assets/login/puzzles.png"
import "./LoginPhone.scss"
import { inputHelper } from 'utils/InputHelper';

function LoginPhone({ parent }) {
    const ref = useRef();
    const dispatch = useDispatch();
    const language = useSelector(state => state.language.language);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = () => {
        dispatch(nextStep());
    }


    function scrollToInput() {

        // const windowInnerHeight = document.documentElement.clientHeight / 4
        // const bb = document.getElementsByTagName("BODY")[0];
        // // const y = input.getBoundingClientRect().top + window.scrollY;
        // const y = input.getBoundingClientRect();
        // console.log(y);
        // console.log(windowInnerHeight);
        const input = document.querySelector(".phone-input");
        const wrapper = document.querySelector(".phone-form");
        const y = input.getBoundingClientRect().top + window.scrollY;
        if (wrapper.style.marginBottom != "50%") {
            wrapper.style.marginBottom = "50%"
        } else {
            wrapper.style.marginBottom = "0"
        }
        window.scrollTo({
            top: y
        });
    }

    function scroll() {
        const input = document.querySelector(".phone-input")
        input.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <div style={{ paddingBottom: "30%" }}>
                <img src={logo} alt="" onClick={() => scrollToInput()} />
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
                            onFocus={() => inputHelper.upInput(".phone-form", ".phone-input")}
                            type="number"
                            placeholder="998-"
                            aria-describedby="passwordHelpBlock"
                            {...register("phone", {
                                required: true,
                                onChange: (event) => dispatch(setPhone("" + event.target.value)),
                                onBlur: () => {
                                    inputHelper.downInput(".phone-form", ".phone-input")
                                }
                            })}
                        />
                        <p className='phone-input__wrapper-title'>{language.phone}</p>

                        {errors?.phone && <p className='error-msg'>{language.required_field}</p>}

                        <AuthButton text={language.next} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginPhone    