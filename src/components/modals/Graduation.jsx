import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import modalIcon from "assets/modal/gold_cup.png"
import "./Graduation.scss"
function Graduation(props) {
    // const [show, setShow] = useState(false);
    const [show, setShow] = useState(props.show);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
            className='text-center '
        >

            <Modal.Body className='p-4'>
                <Modal.Title>Поздравляю</Modal.Title>
                <div className='modal-img'>
                    <img src={modalIcon} alt="" />
                </div>
                <div className="modal-text">
                    Ты успешно прошел главу <br />
                    “Глава 1: Натуральные числа”. Тебе доступна “Глава 2: Рациональные числа”
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="w-100" variant="primary" onClick={handleClose}>
                    Спасибо
                </Button>

            </Modal.Footer>
        </Modal>
    )
}

export default Graduation