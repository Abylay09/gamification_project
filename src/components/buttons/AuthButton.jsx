import React from 'react'
import { Button } from 'react-bootstrap'

const button = {
    padding : "16px 0",
    borderRadius : "12px"
}

function AuthButton({text, onClick}) {
  return (
    <Button type="submit" className='w-100' variant="primary" style={button} onClick = {onClick}>{text}</Button>
  )
}

export default AuthButton