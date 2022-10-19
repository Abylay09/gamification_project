import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TicketIcon from "assets/info/two-airline-tickets.png"
import "./SuccessBuyModal.scss"
function SuccessBuyModal({ success, close }) {
    // const [show, setShow] = useState(false);
    // const [show, setShow] = useState(success);

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
                <Button className="successBtn w-100 mx-0" variant="primary" >
                    Вернуться на Лавку
                </Button>
                <Button className="successBtn successBtn--second  w-100 mt-3 mx-0" variant="primary" >
                    Вернуться в Мои купоны
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SuccessBuyModal