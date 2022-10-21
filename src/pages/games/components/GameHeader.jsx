import React from 'react'
import PurpleCross from "assets/common/purple-cross.png"
import { Row, Col, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import "./GameHeader.scss"
function GameHeader({ children, title }) {
    const navigate = useNavigate()
    return (
            <div className='game-header d-flex px-3 pt-4' >
                <img style={{ height: "20px" }} src={PurpleCross} alt="" onClick={() => navigate(-1)} />
                <h3 className="lecture-title">{title}</h3>
            </div>
    )
}

export default GameHeader