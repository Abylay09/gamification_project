import React, {useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Stack, Row, Col } from 'react-bootstrap'
import Layout from 'layout/Layout'
import LessonItem from './components/LessonItem'
import FixedButton from 'components/buttons/fixed-button/FixedButton'
import Graduation from 'components/modals/Graduation'
import ClosedLesson from 'components/info/ClosedLesson'
import LessonHeader from './components/LessonHeader'
import { useGetLessonsGroupQuery, useGetLessonQuery } from 'redux/services/lessonApi'
import { useQueryClient, useQuery } from '@tanstack/react-query'
import axios from 'axios'
function LessonPage() {
    const params = useParams();
    const navigate = useNavigate();
    // const queryClient = useQueryClient();
    const token = localStorage.getItem("token");
    console.log(params.id);

    const { data: lessonGroup, status, isSuccess } = useQuery(["LessonGroup", params], async () => {
        const response = await axios.get("http://195.49.212.191:8779/lessons/lessons-group/", {
            params: {
                uid: params.id
            },
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
        const result = await response.data;
        return result;
    }, {
        enabled : !!params.id,
        cacheTime : 0
    })


    // const lessonId = lessonGroup?.lessons_group.lessons[1].uid;

    // const { data: lesson } = useQuery(["Lesson"], async () => {
    //     const response = await axios.get("http://195.49.212.191:8779/lessons/lesson/", {
    //         params: {
    //             uid: lessonId
    //         },
    //         headers: {
    //             'Authorization': `Basic ${token}`
    //         }
    //     })
    //     const result = await response.data;
    //     return result;
    // }, { enabled: !!lessonId })

    if (status === "loading") {
        return <div>Loading</div>
    }
    else if (status === "error") {
        return <div>Error</div>
    }

    // console.log(lesson);
    // const { isLoading, isSuccess, error, data } = useGetLessonsGroupQuery("11870796-3253-11ed-a261-0242ac120002")

    // const { currentData, isLoading, isSuccess, isError, error, } = useGetLessonsGroupQuery(params.id, {
    //     refetchOnMountOrArgChange: true
    // })

    // if (isSuccess) {
    //     const { currentLesson } = useGetLessonQuery(currentData.lessons[1].uid)
    //     console.log(currentLesson)
    // }

    // if (isLoading) return <div>Loading...</div>
    // if (lessonGroup)
    const navigatePage = (id) => {
        navigate(`/lecture/${id}`)
    }
        return (
            <Layout  >
                <Row>
                    <Col>
                        {/* <LessonHeader title={currentData.lessons_group.title} order={currentData.lessons_group.order}
                            prev={currentData.lessons_group.prev} next={currentData.lessons_group.next}
                        /> */}
                        <LessonHeader title={lessonGroup.lessons_group.title} order={lessonGroup.lessons_group.order}
                            prev={lessonGroup.lessons_group.prev} next={lessonGroup.lessons_group.next}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <Stack gap={3}>
                            
                            <LessonItem  
                            title = {lessonGroup.lessons_group.lessons[1]?.title} 
                            order = {lessonGroup.lessons_group.lessons[1]?.order}/>
                            
                            {/* <LessonItem />
                            <LessonItem />
                            <LessonItem />
                            <LessonItem />
                            <LessonItem />
                            <LessonItem />
                            <LessonItem /> */}
                            <FixedButton text={"начать"} onClick = {() => navigatePage(lessonGroup.lessons_group.lessons[1].uid)}/>
                        </Stack>
                    </Col>
                </Row>
                {/* popup с поздравлением */}
                {/* <Graduation show={true} /> */}
            </Layout >
        )
}

export default LessonPage