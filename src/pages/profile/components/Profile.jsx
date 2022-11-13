import React from 'react'
import "./Profile.scss"
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const buttonStyle = {
    backgroundColor: "#2A80FF",
    borderRadius: "12px",
    padding: "10px 10px",
    color: "#fff",
    marginTop: '20px',
    border: "none"
}



function Profile({ name, surname, school, grade, func }) {
    const language = useSelector(state => state.language.language);
    const navigate = useNavigate();

    function exit() {
        localStorage.removeItem('token');
        navigate("/login")
    }
    
    return (
        <div className='profile'>
            <input className='mt-3' type="file" />
            {/* <div className='profile-photo'>

            </div> */}
            <div className='profile-name'>
                {surname} {name}
            </div>
            <div className='profile-school'>
                {school} {grade}
            </div>

            <button onClick={func} className='profile-btn' style={buttonStyle}>{language.change_profile}</button>

            <Button onClick={() => exit()} className='mt-3' style={{ borderRadius: "12px", padding: "10px 10px", }} variant="danger">Выйти из приложения</Button>
        </div>
    )
}

export default Profile