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
import AbandonedRoom from 'pages/pet-selection/environment/AbandonedRoom';
import Forest from 'pages/pet-selection/environment/Forest';
import CatRoom from 'pages/pet-selection/environment/CatRoom';
import Camping from 'pages/pet-selection/environment/Camping';
import Tropics from 'pages/pet-selection/environment/Tropics';
import SkyIsland from 'pages/pet-selection/environment/SkyIsland';
import Jungle from 'pages/pet-selection/environment/Jungle';
import Valley from 'pages/pet-selection/environment/Valley';

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
    if (MyPet.isFetching) {
        return <Loading />
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
    console.log(MyPet.data.profile);
    return (
        <Layout>
            <Tabs className="custom-tabs">
                <TabList>
                    <Tab>{language.pet}</Tab>
                    <Tab>{language.indicators}</Tab>
                </TabList>

                <TabPanel className="custom-tab">
                    <div className='tab-inner'>
                        <div className='tab-inner__content pt-2 pb-3'>
                            <div style={{ height: "100%", width: "100%", margin: "0 auto", borderRadius: "12px" }}>
                                {(() => {
                                    switch (MyPet.data.profile.pet) {
                                        case 'Cat':
                                            return <div style={{ height: "100%", width: "100%" }}>
                                                <Canvas camera={{ fov: 70, position: [0, 30, 45] }}
                                                    style={{ width: "100%", height: "100%" }}>
                                                    <color attach="background" args={["#D3D3D3"]} />
                                                    <Suspense fallback={null}>
                                                        <ambientLight />
                                                        <directionalLight intensity={0.5} position={[0, 0, 50]} />
                                                        <directionalLight intensity={0.4} position={[0, 0, 20]} />
                                                        <directionalLight intensity={0.8} position={[0, 0, -20]} />
                                                        {/* <Cat /> */}
                                                        <CatRoom />
                                                        <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                                    </Suspense>
                                                </Canvas>
                                            </div>
                                        case 'Wolf':
                                            return <div style={{ height: "100%", width: "100%" }}> <Canvas camera={{ fov: 55, position: [0, 50, 90] }}>
                                                <Suspense fallback={null}>
                                                    <ambientLight />
                                                    <directionalLight intensity={3} position={[0, 0, 20]} />
                                                    <directionalLight intensity={0.8} position={[0, 0, -20]} />
                                                    <Camping />
                                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                                </Suspense>
                                            </Canvas>
                                            </div>
                                        case 'Taryk':
                                            return <div style={{ height: "100%", width: "100%" }}> <Canvas camera={{ fov: 60, position: [0, 55, 115] }} >
                                                <Suspense fallback={null}>
                                                    <ambientLight />
                                                    <directionalLight intensity={1} position={[0, 0, -50]} />
                                                    <directionalLight intensity={3} position={[0, 0, 50]} />
                                                    <directionalLight intensity={1} position={[0, 20, 50]} />
                                                    <AbandonedRoom />
                                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                                </Suspense>
                                            </Canvas>
                                            </div>
                                        case 'Rabbit':
                                            return <div style={{ height: "100%", width: "100%" }}> <Canvas camera={{ fov: 55, position: [0, 10, 25] }}>
                                                <color attach="background" args={["#D3D3D3"]} />
                                                <Suspense fallback={null}>
                                                    <ambientLight />
                                                    <pointLight intensity={1} position={[0, 20, 20]} />
                                                    <pointLight intensity={0.1} position={[0, 5, 20]} />
                                                    <pointLight intensity={0.1} position={[0, 2, -20]} />
                                                    <Valley />
                                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                                </Suspense>
                                            </Canvas>
                                            </div>
                                        case 'Tiger':
                                            return <div style={{ height: "100%", width: "100%" }}> <Canvas camera={{ fov: 60, position: [0, 20, 120] }}>
                                                <Suspense fallback={null}>
                                                    <ambientLight />
                                                    <directionalLight intensity={1} position={[0, 0, 20]} />
                                                    <directionalLight intensity={0.8} position={[0, 0, -20]} />
                                                    <Jungle />
                                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                                </Suspense>
                                            </Canvas>
                                            </div>
                                        case 'Sf':
                                            return <div style={{ height: "100%", width: "100%" }}> <Canvas camera={{ fov: 58, position: [0, 10, 35] }}>
                                                <Suspense fallback={null}>
                                                    <ambientLight />
                                                    <directionalLight intensity={3} position={[0, 50, 80]} />
                                                    <directionalLight intensity={0.8} position={[0, 0, -20]} />
                                                    <directionalLight intensity={1} position={[0, 0, 80]} />
                                                    <SkyIsland />
                                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                                </Suspense>
                                            </Canvas>
                                            </div>
                                        case 'Cougar':
                                            return <div style={{ height: "100%", width: "100%" }}> <Canvas camera={{ fov: 55, position: [0, 15, 40] }} >
                                                <Suspense fallback={null}>
                                                    <ambientLight />
                                                    <directionalLight intensity={3} position={[0, 50, 80]} />
                                                    <directionalLight intensity={0.8} position={[0, 0, -20]} />
                                                    <directionalLight intensity={2} position={[0, 0, 80]} />
                                                    <Tropics />
                                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                                </Suspense>
                                            </Canvas>
                                            </div>
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