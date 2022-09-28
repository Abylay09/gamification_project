import React from 'react'
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
  return (
    <span style={styleGold}>+{gold} Gold</span>
  )
}

export default Gold