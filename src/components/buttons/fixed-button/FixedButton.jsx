import React from 'react'

const buttonStyle = {
    backgroundColor: "#2A80FF",
    borderRadius: "12px",
    padding: "15px 0",
    color: "#fff",
    position : "sticky",
    bottom : "64px",
    left : "12px",
    right : "12px",
    width : "100%",
    marginTop : "20px"
    // marginBottom: props.regularMarginBottom,
    // backgroundColor: "#2A80FF",
    // borderRadius: "12px",
    // padding: "15px 0",
    // color: "#fff",
    // position : "sticky",
    // bottom : "120px",
    // left : "0",
    // // marginBottom: props.regularMarginBottom,
    // marginTop: '26px'
}

function FixedButton({ text, onClick }) {
    return (
        <button type="button" className="btn " onClick={onClick}
            // onClick={props.func}
            style={buttonStyle}>{text}</button>
    )
}

export default FixedButton