import React from 'react'
function Button(props) {
  return (
    <button type="button" class="btn w-100"
      style=
      {{
        backgroundColor: "#2A80FF",
        borderRadius: "12px",
        padding: "15px 0",
        color: "#fff",
        marginBottom : props.regularMarginBottom,
        marginTop: '20px'
      }}>{props.text}</button>
  )
}

export default Button