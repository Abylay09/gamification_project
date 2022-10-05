import React from 'react'
import RestorePhone from './components/RestorePhone'
import { Container, Stack } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import RestorePassword from './components/RestorePassword';
import RestoreSms from './components/RestoreSms';

function RestorePage() {
    const step = useSelector((state) => state.restore.step);

    return (
        <Container fluid className='vh-100 ' style={{ background: "#27272F" }}>
            <Stack className='h-100' >
                <div className='mt-auto flex-column' style={{ gap: "150px" }}>
                    {step === 1 && <RestorePhone />}
                    {step === 2 && <RestoreSms />}
                    {step === 3 && <RestorePassword />}
                    {/* <RestoreSms/> */}
                </div>
            </Stack>
        </Container >

    )
}

export default RestorePage