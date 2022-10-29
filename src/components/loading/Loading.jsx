import React from 'react'
import { Container} from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner';

function Loading() {
    return (
        <Container className='vh-100 d-flex flex-column justify-content-center align-items-center'>
            <div className='text-center'>
                <Spinner animation="border" variant="primary" />
                <h3>Загрузка...</h3>
            </div>
        </Container>
    )
}

export default Loading