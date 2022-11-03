import React from 'react'
import { Button } from 'react-bootstrap'

const button = {
    padding: "16px 0",
    borderRadius: "12px"
}

function CommonButton({ text, onClick, color }) {
    return (
        <Button className='w-100' variant={color} style={button} onClick={onClick}>{text}</Button>
    )
}

export default CommonButton