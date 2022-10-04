import React from 'react'
const buttonStyle = {
    backgroundColor: "#2A80FF",
    borderRadius: "12px",
    padding: "15px 0",
    color: "#fff",
    position: "sticky",
    bottom: "64px",
    left: "0",
    // marginBottom: props.regularMarginBottom,
    marginTop: '55px'
}

function StickyButton({ text, onClick }) {
    return (
        <button type="button" className="btn w-100" onClick={onClick}
            // onClick={props.func}
            style={buttonStyle}>{text}</button>
    )
}

export default StickyButton