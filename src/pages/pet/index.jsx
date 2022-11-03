import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber';
import Layout from 'layout/Layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Indicator from './components/Indicator';
import StickyButton from 'components/buttons/StickyButton';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { Button, Container } from 'react-bootstrap';
import { Environment, OrbitControls } from '@react-three/drei'

//models
import Taryk from 'pages/pet-selection/components/Taryk';
import Cat from 'pages/pet-selection/components/Cat';
import Cougar from 'pages/pet-selection/components/Cougar';
import Rabbit from 'pages/pet-selection/components/Rabbit';
import SF from 'pages/pet-selection/components/SF';
import Tiger from 'pages/pet-selection/components/Tiger';
import Wolf from 'pages/pet-selection/components/Wolf';
import "./index.scss"

import { useQuery, useQueries } from '@tanstack/react-query';
import { PetApi } from 'utils/api/Pet';
import { Rating } from 'utils/api/getRating';
import CommonButton from 'components/buttons/CommonButton';
import Loading from 'components/loading/Loading';

function PetPage() {
    const language = useSelector(state => state.language.language);
    const navigate = useNavigate()
    const [MyPet, MyIndicators] = useQueries({
        queries: [
            { queryKey: ['MyPet'], queryFn: () => PetApi.getPet(), staleTime: Infinity },
            { queryKey: ['MyIndicator'], queryFn: () => Rating.getMyIndicator(), staleTime: Infinity }
        ]
    })
    // const { data, isLoading, isError } = useQuery(["MyPet"], () => {
    //     return PetApi.getPet()
    // })
    if(MyPet.isFetching){
        return <Loading/>
    }
    if (MyPet.isLoading) {
        return <div>Loading</div>
    }
    if (MyIndicators.isLoading) {
        return <div>Loading</div>
    }
    else if (MyPet.isError) {
        return <div>Error</div>
    }
    else if (MyIndicators.isError) {
        return <div>Error</div>
    }
    console.log(MyIndicators);
    return (
        <Layout>
            <Tabs className="custom-tabs">
                <TabList>
                    <Tab>{language.pet}</Tab>
                    <Tab>{language.indicators}</Tab>
                </TabList>

                <TabPanel className="custom-tab">
                    <div className='tab-inner'>
                        <div className='tab-inner__content'>
                            <div style={{ height: "100%", width: "100%", margin: "0 auto", borderRadius: "12px" }}>
                                {(() => {
                                    switch (MyPet.data.profile.pet) {
                                        case 'Cat':
                                            return <Canvas camera={{ fov: 70, position: [0, 50, 255] }}>
                                                <Suspense fallback={null}>
                                                    <ambientLight />
                                                    <directionalLight intensity={3} position={[0, 0, 20]} />
                                                    <directionalLight intensity={0.8} position={[0, 0, -20]} />
                                                    <Cat />
                                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                                </Suspense>
                                            </Canvas>
                                        case 'Wolf':
                                            return <Canvas camera={{ fov: 55, position: [0, 50, 255] }}>
                                                <Suspense fallback={null}>
                                                    <ambientLight />
                                                    <directionalLight intensity={3} position={[0, 0, 20]} />
                                                    <directionalLight intensity={0.8} position={[0, 0, -20]} />
                                                    <Wolf />
                                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                                </Suspense>
                                            </Canvas>
                                        case 'Taryk':
                                            return <Canvas camera={{ fov: 50, position: [0, 2, 35] }} >
                                                <Suspense fallback={null}>
                                                    <ambientLight />
                                                    <directionalLight intensity={1} position={[0, 0, -50]} />
                                                    <directionalLight intensity={3} position={[0, 0, 50]} />
                                                    <directionalLight intensity={1} position={[0, 20, 50]} />
                                                    <Taryk />
                                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                                </Suspense>
                                            </Canvas>
                                        case 'Rabbit':
                                            return <Canvas camera={{ fov: 70, position: [0, 50, 255] }}>
                                                <Suspense fallback={null}>
                                                    <ambientLight />
                                                    <directionalLight intensity={2} position={[0, 0, 20]} />
                                                    <directionalLight intensity={0.8} position={[0, 0, -20]} />
                                                    <Rabbit />
                                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                                </Suspense>
                                            </Canvas>
                                        case 'Tiger':
                                            return <Canvas camera={{ fov: 60, position: [0, 50, 255] }}>
                                                <Suspense fallback={null}>
                                                    <ambientLight />
                                                    <directionalLight intensity={1} position={[0, 0, 20]} />
                                                    <directionalLight intensity={0.8} position={[0, 0, -20]} />
                                                    <Tiger />
                                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                                </Suspense>
                                            </Canvas>
                                        case 'Sf':
                                            return <Canvas camera={{ fov: 58, position: [0, 50, 255] }}>
                                                <Suspense fallback={null}>
                                                    <ambientLight />
                                                    <directionalLight intensity={3} position={[0, 50, 80]} />
                                                    <directionalLight intensity={0.8} position={[0, 0, -20]} />
                                                    <directionalLight intensity={1} position={[0, 0, 80]} />
                                                    <SF />
                                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                                </Suspense>
                                            </Canvas>
                                        case 'Cougar':
                                            return <Canvas camera={{ fov: 58, position: [0, 50, 255] }}>
                                                <Suspense fallback={null}>
                                                    <ambientLight />
                                                    <directionalLight intensity={3} position={[0, 50, 80]} />
                                                    <directionalLight intensity={0.8} position={[0, 0, -20]} />
                                                    <directionalLight intensity={2} position={[0, 0, 80]} />
                                                    <Cougar />
                                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                                </Suspense>
                                            </Canvas>
                                        default:
                                            return <Button
                                                variant="warning"
                                                className='w-100 py-3 mt-5'
                                                onClick={() => navigate("/choose-pet")}
                                                style={{ color: "#000" }}>Выбрать питомца</Button>
                                    }
                                })()}
                            </div>
                        </div>

                        <button onClick={() => navigate("/quests")} className='tab-inner__btn'>{language.play}</button>
                    </div>
                </TabPanel>
                <TabPanel className="custom-tab indicator-tab">
                    <Indicator myData={[MyIndicators.data.indicators.memmory,
                    MyIndicators.data.indicators.thinkings,
                    MyIndicators.data.indicators.attention]} />
                </TabPanel>
            </Tabs>
        </Layout>
    )

}


// function PetPage() {
//     const language = useSelector(state => state.language.language);
//     const navigate = useNavigate()
//     return (
//         <Layout>
//             <Tabs className="custom-tabs">
//                 <TabList>
//                     <Tab>{language.pet}</Tab>
//                     <Tab>{language.indicators}</Tab>
//                 </TabList>

//                 <TabPanel className="custom-tab">
//                     <div className='tab-inner'>
//                         <div className='tab-inner__content'>{language.pet}</div>
//                         <button onClick={() => navigate("/quests")} className='tab-inner__btn'>{language.play}</button>
//                     </div>


//                 </TabPanel>
//                 <TabPanel className="custom-tab">
//                     <Indicator />
//                 </TabPanel>
//             </Tabs>
//         </Layout>
//     )
// }

export default PetPage