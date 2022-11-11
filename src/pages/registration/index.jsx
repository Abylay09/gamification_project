import React from 'react'
import { Container, Stack } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import PasswordInput from './components/form/PasswordInput'
import PhoneInput from './components/form/PhoneInput'
import SmsInput from './components/form/SmsInput'


function RegPage() {
    const step = useSelector((state) => state.signUp.step);

    return (

        <Container fluid className='vh-100 ' style={{ background: "#27272F" }}>
            <Stack className='h-100' >
                <div className='mt-auto flex-column' style={{ gap: "150px" }}>
                    {step === 1 && <PhoneInput />}
                    {step === 2 && <PasswordInput />}
                    {step === 3 && <SmsInput />}
                    {/* <PasswordInput /> */}
                </div>
            </Stack>
        </Container >
    )
}

export default RegPage