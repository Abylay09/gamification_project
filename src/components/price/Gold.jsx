import React from 'react'
import { useSelector } from 'react-redux'
const styleGold = {
    padding: "4px 8px",
    borderRadius: '8px',
    background: "#FFC10C",
    fontWeight: "400",
    fontSize: "11px",
    lineHeight: "16px",
    color: "#FFFFFF"
}
function Gold({gold}) {
  const language = useSelector(state => state.language.language)
  return (
    <span style={styleGold}>+{gold} {language.gold}</span>
  )
}

export default Gold