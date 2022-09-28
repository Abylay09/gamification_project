import React from 'react'
const styleHealth = {
    padding: "4px 8px",
    borderRadius: '8px',
    background: "#00BED1",
    fontWeight: "400",
    fontSize: "11px",
    lineHeight: "16px",
    color: "#FFFFFF"
}
function Health({ hp }) {
    return (
        <span style={styleHealth}>+{hp} HP</span>
    )
}

export default Health