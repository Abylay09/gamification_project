import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TicketIcon from "assets/info/two-airline-tickets.png"
import "./SuccessBuyModal.scss"
import { useNavigate } from 'react-router-dom';
function SuccessBuyModal({ success, close }) {
    const navigate = useNavigate();

    const handleClose = () => {
        close()
    };


    return (
        <Modal
            show={success}
            onHide={handleClose}
            keyboard={false}
            centered
            className='text-center '
        >

            <Modal.Body className='p-4'>
                <Modal.Title>Ура!</Modal.Title>
                <div className='modal-img'>
                    <img src={TicketIcon} alt="" />
                </div>
                <div className="modal-text">
                    Твой купон находится в разделе “Лавка”
                    в “Мои купоны”
                </div>
            </Modal.Body>
            <Modal.Footer style={{borderTop : "none"}}>
                <Button onClick={() => navigate("/shop")} className="successBtn w-100 mx-0" variant="primary" >
                    Вернуться на Лавку
                </Button>
                <Button onClick={() => navigate("/ticket")} className="successBtn successBtn--second  w-100 mt-3 mx-0" variant="primary" >
                    Вернуться в Мои купоны
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SuccessBuyModal