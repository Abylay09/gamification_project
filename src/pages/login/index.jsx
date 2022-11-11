import AppLoader from 'components/loading/AppLoader'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { Container, Stack } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import LoginPassword from './components/LoginPassword'
import LoginPhone from './components/LoginPhone'

function LoginPage() {
    const step = useSelector((state) => state.signIn.step);
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        let timer = setTimeout(() => {
            setLoading(false)
        }, 3500)

        return () => {
            clearTimeout(timer);
        };
    }, [])


    return isLoading ? < AppLoader />
        : <Container fluid className='vh-100' style={{ background: "#27272F" }}>
            <Stack className='h-100' >
                <div className='mt-auto flex-column' style={{ gap: "150px" }}>
                    {step === 1 && <LoginPhone />}
                    {step === 2 && <LoginPassword />}
                </div>
            </Stack >
        </Container >
}

export default LoginPage