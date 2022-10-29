
import Profile from 'pages/profile/components/Profile'
import React from 'react'
import { User } from 'utils/api/User';
import { Rating } from 'utils/api/getRating';
import { useQueries, useQuery } from '@tanstack/react-query'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import BlueLeftArrow from "assets/common/blue-left-arrow.png"
import Indicator from 'pages/pet/components/Indicator'
import IndicatorGraph from './components/IndicatorGraph'
function AnotherProfile() {
    const params = useParams()
    const navigate = useNavigate()
    const [AnotherIndicators, MyIndicators] = useQueries({
        queries: [
            { queryKey: ['another-user'], queryFn: () => User.getAnotherUser(params.id), staleTime: Infinity },
            { queryKey: ['me'], queryFn: () => Rating.getMyIndicator(), staleTime: Infinity }
        ]
    })

    if (AnotherIndicators.isLoading) {
        return <div>Loading</div>
    }
    if (MyIndicators.isLoading) {
        return <div>Loading</div>
    }
    else if (AnotherIndicators.isError) {
        return <div>Error</div>
    }
    else if (MyIndicators.isError) {
        return <div>Error</div>
    }
    // const { data: userInfo, isLoading, isError } = useQuery(["another-user"], () => {
    //     return User.getAnotherUser(params.id)
    // })
    // if (isLoading) {
    //     return <div>Loading</div>
    // }

    // else if (isError) {
    //     return <div>Error</div>
    // }
    console.log(MyIndicators);
    return (
        <Container>
            <Row>
                <Col>
                    <div className='page-header d-flex align-items-center py-4' onClick={() => navigate(-1)}>
                        <img style={{ height: "20px" }} src={BlueLeftArrow} alt="" />
                        <h3 className="page-title"  >Профиль</h3>
                    </div>
                </Col>
            </Row>
            <div className='profile'>
                <div className='profile-photo'>
                </div>
                <div className='profile-name'>
                    {AnotherIndicators.data.profile.first_name} {AnotherIndicators.data.profile.last_name}
                </div>
                <div className='profile-school'>
                    {AnotherIndicators.data.profile.school} {AnotherIndicators.data.profile.grade}
                </div>
            </div>
            <Row>
                <Col>
                    <h5>Индикаторы</h5>
                    <div className=''>
                        <IndicatorGraph surname = {AnotherIndicators.data.profile.last_name} name =  {AnotherIndicators.data.profile.first_name} myData = {[MyIndicators.data.indicators.memmory,
                        MyIndicators.data.indicators.thinkings,
                        MyIndicators.data.indicators.attention]}/>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default AnotherProfile