import React from 'react'
import "./Profile.scss"
import { useSelector } from 'react-redux'

const buttonStyle = {
    backgroundColor: "#2A80FF",
    borderRadius: "12px",
    padding: "10px 10px",
    color: "#fff",
    marginTop: '20px',
    border : "none"
}

function Profile({ name, surname, school, grade, func }) {
    const language = useSelector(state => state.language.language);
    return (
        <div className='profile'>
            <div className='profile-photo'>

            </div>
            <div className='profile-name'>
                {surname} {name}
            </div>
            <div className='profile-school'>
                {school} {grade}
            </div>
            
            <button onClick={func} className='profile-btn' style={buttonStyle}>{language.change_profile}</button>
        </div>
    )
}

export default Profile