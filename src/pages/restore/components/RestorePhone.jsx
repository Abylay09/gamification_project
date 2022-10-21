import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { setPhone, nextStep } from 'redux/features/restoreSlice';
import AuthButton from 'components/buttons/AuthButton';
import logo from "assets/login/puzzles.png"
import { useNavigate } from 'react-router-dom';
import "./RestorePhone.scss"
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { restore } from 'utils/api/restore';

function RestorePhone() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const language = useSelector(state => state.language.language);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const phone = useSelector((state) => state.restore.phone)

    const mutation = useMutation(userPhone => {
        return restore.sendCode(userPhone)
    })

    const onSubmit = async () => {
        mutation.mutate(phone, {
            onSuccess: () => {
                dispatch(nextStep());
            },
            onError: () => {
                alert(language.invalid_phone)
            }
        })
    }

    return (
        <>
            <div style={{ paddingBottom: "30%" }}>
                <img src={logo} alt="" />
                <p className='content-info__text'>{language.welcome}</p>
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
                        <div className='get-password' onClick={() => navigate("/login")}>
                            {language.login}
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default RestorePhone    