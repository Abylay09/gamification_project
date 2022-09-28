import React from 'react'
import { Container, Stack } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import LoginPassword from './components/LoginPassword'
import LoginPhone from './components/LoginPhone'
function LoginPage() {
    const step = useSelector((state) => state.signIn.step);
    return (
        <Container fluid className='vh-100 ' style={{ background: "#27272F" }}>
            <Stack className='h-100' >
                <div className='mt-auto flex-column' style={{ gap: "150px" }}>
                    {step === 1 && <LoginPhone />}
                    {step === 2 && <LoginPassword />}
                </div>
            </Stack >

            {/* <Stack className='h-100' >
                <div className='mt-auto flex-column' >
                    {step === 1 && <PhoneInput />}
                    {step === 2 && <PasswordInput />}
                    {step === 3 && <SmsInput />}
                </div>
            </Stack> */}
        </Container >
    )
}

export default LoginPage