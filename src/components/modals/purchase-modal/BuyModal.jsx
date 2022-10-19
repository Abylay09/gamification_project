import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Modal, Button } from "react-bootstrap"
import CrossIcon from "assets/common/purple-cross.png"
import PlusIcon from "assets/modal/plus.svg"
import MinusIcon from "assets/modal/minus.svg"
import Coin from "assets/tickets/coin.png"
import { coupons } from 'utils/api/getCoupons'
function BuyModal({ show, close, cost, uid, showSuccess }) {
    const [quantity, setQuantity] = useState(1);
    const mutation = useMutation((ticketInfo) => coupons.buyTickets(ticketInfo), {
        onSuccess: () => {
            setTimeout(() => {
                showSuccess()
            }, 800)
        }
    })

    function buy() {
        mutation.mutate({ amount: quantity, id: uid })
        close()
    }

    function deacrease() {
        if (quantity == 0) {
            setQuantity(0)
        } else {
            setQuantity(prev => prev - 1)
            console.log("work");
        }
    }

    function increase() {
        setQuantity(prev => prev + 1)
    }
    return (
        <Modal  dialogClassName='custom-modal' show={show} onHide={close}>
            <Modal.Body style={{ borderBottom: "1px solid #EFEFEF", }}>
                <div className='d-flex align-items-center' style={{ gap: "24px" }}>
                    <div className='' onClick={close}><img src={CrossIcon} alt="" /></div>
                    <span style={{ color: "#000", fontWeight: "600", fontSize: "17px" }}> Выбери количество купонов</span>
                </div>
            </Modal.Body>
            <div className="d-flex align-items-center justify-content-center" style={{ gap: "36px", margin: "32px 0" }}>
                <span style={{ padding: "2px 6px", border: "2px solid #2A80FF", borderRadius: "12px" }} onClick={() => deacrease()}>
                    <img src={MinusIcon} alt="" />
                </span>
                <span  style={{ fontWeight: "500", fontSize: "21px", lineHeight: "26px" }} >
                    {quantity}
                </span>
                <span style={{ padding: "2px 6px", border: "2px solid #2A80FF", borderRadius: "12px" }} onClick={() => increase()}>
                    <img src={PlusIcon} alt="" />
                </span>
            </div>
            <Modal.Footer bsPrefix="custom-footer">
                <Button onClick={() => buy()} className='w-100 py-3 mt-auto ' style={{ marginBottom: "64px", }} >
                    Купить за {quantity * cost}
                    <img style={{ width: "16px", height: "16px", marginLeft: "8px" }} src={Coin} alt="" />
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default BuyModal