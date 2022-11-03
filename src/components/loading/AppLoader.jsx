import React from 'react'
import { Container } from 'react-bootstrap'
import Logo from "assets/common/openskill-logo.png"
import "./AppLoader.scss"
function AppLoader() {
    return (
        <Container className='app-loader vh-100 d-flex flex-column justify-content-center align-items-center ' style={{gap : "50px"}}>
            <div className='text-focus-in text-center'>
                <h1 className='app-loader__title'>OpenSkill</h1>
            </div>
            <div >
                <div className='slide-top ' style={{ width: "120px", height: "120px" }}>
                    <img className='w-100 h-100' src={Logo} alt="" />
                </div>
            </div>

        </Container>
    )
}

export default AppLoader