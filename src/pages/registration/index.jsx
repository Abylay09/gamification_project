import React from 'react'
import { Container, Stack } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import PasswordInput from './components/form/PasswordInput'
import PhoneInput from './components/form/PhoneInput'
import SignUpForm from './components/form/SignUpForm'
import SmsInput from './components/form/SmsInput'
import { setPhone, nextStep } from 'redux/features/signUpSlice';

function RegPage() {
    const dispatch = useDispatch();
    const step = useSelector((state) => state.signUp.step);

    return (
        <Container fluid className='vh-100 ' style={{ background: "#27272F" }}>
            <Stack className='h-100' >
                <div className='mt-auto flex-column' style={{gap : "150px"}}>
                    {step === 1 && <PhoneInput/>}
                    {step === 2 && <PasswordInput/>}
                    {step === 3 && <SmsInput/>}

                    
                    {/* <PasswordInput/> */}
                    {/* <SmsInput/> */}


                    {/* <SignUpForm /> */}
                    {/* <div style={{paddingBottom : "165px"}}>
                        <img src={logo} alt="" />
                        <p>Добро пожаловать в OpenSkill</p>
                    </div>
                    <div style={{
                        margin: "0 -12px", padding: "36px 24px 64px 24px", backgroundColor: "#fff", borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px"
                    }}>
                        <SignUpForm />
                    </div> */}
                </div>

                {/* <div className='mt-auto' style={{
                    margin: "0 -12px", padding: "36px 24px 64px 24px", backgroundColor: "#fff", borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px"
                }}>
                    <SignUpForm />
                </div> */}
            </Stack>
        </Container >
    )
}

export default RegPage