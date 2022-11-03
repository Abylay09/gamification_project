import React, { Suspense, useRef, useState } from 'react'
import { Canvas, } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Container } from 'react-bootstrap';
import { PetApi } from 'utils/api/Pet';
import { useMutation } from '@tanstack/react-query';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// models

// import Tiger from './components/Tiger';
import Jungle from './environment/Jungle';
import Wolf from './components/Wolf';
import Cougar from './components/Cougar';
import CommonButton from 'components/buttons/CommonButton';
import AbandonedRoom from './environment/AbandonedRoom';
import Forest from './environment/Forest';
import Tropics from './environment/Tropics';
import WinterHouse from './environment/WinterHouse';
import Camping from './environment/Camping';
import SkyIsland from './environment/SkyIsland';


// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "./index.scss"
import CatRoom from './environment/CatRoom';
import Valley from './environment/Valley';

function PetSliderPage(props) {
    const navigate = useNavigate()
    const language = useSelector(state => state.language.language);
    const [pet, setPet] = useState("Taryk");
    const [button, SetButton] = useState("primary")
    const petsByIndex = ["Taryk", "Rabbit", "Cat", "Tiger", "Wolf", "Sf", "Cougar",]

    const mutation = useMutation(petName => PetApi.choosePet(petName))
    function savePet() {
        mutation.mutate(pet, {
            onSuccess() {
                // props.selectPet()
                alert("Питомец успешно добавлен")
            },
            onError() {
                alert("Error")
            }
        })
    }
    function slideChange(e) {
        setPet(petsByIndex[e.activeIndex - 1])
    }

    return (
        <Container >
            <div style={{ width: "100%", height: "80vh" }}>
                <h4 className='mt-3'>{language.select_pet}</h4>
                <Swiper
                    className='mb-5 mt-5'
                    style={{ height: "calc(100% - 120px)" }}
                    direction={"horizontal"}
                    slidesPerView={1}
                    mousewheel={true}
                    spaceBetween={24}
                    navigation={true}
                    modules={[Navigation]}
                    allowTouchMove={false}
                    loop={true}
                    onTransitionEnd={(e) => slideChange(e)}
                    onSlideChange={() => SetButton("primary")}
                >
                    <SwiperSlide id="Taryk">
                        <div className='pet-slide' onClick={(e) => {
                            setPet("Taryk")
                            SetButton("success")
                            document.querySelectorAll('canvas').forEach(item => item.classList.remove('active-pet'));
                            e.target.classList.toggle("active-pet")
                            // e.target.classList.toggle("active-pet")
                        }} style={{ height: "100%", width: "100%", margin: "0 auto", borderRadius: "12px" }}>
                            <Canvas camera={{ fov: 70, position: [0, 55, 115] }} >
                                <Suspense fallback={null}>
                                    <ambientLight />
                                    <directionalLight intensity={1} position={[0, 0, -50]} />
                                    <directionalLight intensity={3} position={[0, 0, 50]} />
                                    {/* <directionalLight intensity={1} position={[0, 20, 50]} /> */}
                                    <AbandonedRoom />
                                    <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
                                </Suspense>
                            </Canvas>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide id="Rabbit">
                        <div className='pet-slide' onClick={(e) => {
                            setPet("Rabbit")
                            SetButton("success")
                            document.querySelectorAll('canvas').forEach(item => item.classList.remove('active-pet'));
                            e.target.classList.toggle("active-pet")
                        }} style={{ height: "100%", width: "100%", margin: "0 auto", borderRadius: "12px" }}>
                            <Canvas camera={{ fov: 55, position: [0, 10, 25] }}>
                                <color attach="background" args={["#D3D3D3"]} />
                                <Suspense fallback={null}>
                                    <ambientLight intensity={0.1} />
                                    <pointLight intensity={1.2} position={[0, 20, 20]} />
                                    <pointLight intensity={0.1} position={[0, 5, 20]} />
                                    <pointLight intensity={0.1} position={[0, 2, -20]} />
                                    <Valley />
                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                </Suspense>
                            </Canvas>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide id="Cat">
                        <div className='pet-slide' onClick={(e) => {
                            setPet("Cat")
                            SetButton("success")
                            document.querySelectorAll('canvas').forEach(item => item.classList.remove('active-pet'));
                            e.target.classList.toggle("active-pet")
                        }} style={{ height: "100%", width: "100%", margin: "0 auto", borderRadius: "12px" }}>
                            <Canvas camera={{ fov: 70, position: [0, 30, 45] }}>
                                <color attach="background" args={["#D3D3D3"]} />
                                <Suspense fallback={null}>
                                    <ambientLight />
                                    <directionalLight intensity={0.5} position={[0, 0, 50]} />
                                    <directionalLight intensity={0.4} position={[0, 0, 20]} />
                                    <directionalLight intensity={0.8} position={[0, 0, -20]} />
                                    <CatRoom />
                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                </Suspense>
                            </Canvas>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide id="Tiger">
                        <div className='pet-slide' onClick={(e) => {
                            setPet("Tiger")
                            SetButton("success")
                            document.querySelectorAll('canvas').forEach(item => item.classList.remove('active-pet'));
                            e.target.classList.toggle("active-pet")
                        }} style={{ height: "100%", width: "100%", margin: "0 auto", borderRadius: "12px" }}>
                            <Canvas camera={{ fov: 65, position: [0, 20, 120] }}>
                                <Suspense fallback={null}>
                                    <ambientLight />
                                    <directionalLight intensity={0.5} position={[0, 0, 20]} />
                                    <Jungle />
                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                </Suspense>
                            </Canvas>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide id="Wolf">
                        <div className='pet-slide' onClick={(e) => {
                            setPet("Wolf")
                            SetButton("success")
                            document.querySelectorAll('canvas').forEach(item => item.classList.remove('active-pet'));
                            e.target.classList.toggle("active-pet")
                        }} style={{ height: "100%", width: "100%", margin: "0 auto", borderRadius: "12px" }}>
                            <Canvas camera={{ fov: 60, position: [0, 50, 90] }}>
                                <Suspense fallback={null}>
                                    <ambientLight intensity={2} />
                                    <directionalLight intensity={3} position={[0, 0, 20]} />
                                    <directionalLight intensity={0.8} position={[0, 0, -20]} />
                                    <Camping />
                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                </Suspense>
                            </Canvas>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide id="Sf">
                        <div className='pet-slide' onClick={(e) => {
                            setPet("Sf")
                            SetButton("success")
                            document.querySelectorAll('canvas').forEach(item => item.classList.remove('active-pet'));
                            e.target.classList.toggle("active-pet")
                        }} style={{ height: "100%", width: "100%", margin: "0 auto", borderRadius: "12px" }}>
                            <Canvas camera={{ fov: 58, position: [0, 10, 35] }}>
                                <Suspense fallback={null}>
                                    <ambientLight />
                                    <directionalLight intensity={1} position={[0, 50, 50]} />
                                    <directionalLight intensity={0.8} position={[0, 0, -20]} />
                                    <directionalLight intensity={1} position={[0, 0, 30]} />
                                    <SkyIsland />
                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                </Suspense>
                            </Canvas>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide id="Cougar">
                        <div className='pet-slide' onClick={(e) => {
                            setPet("Cougar")
                            SetButton("success")
                            document.querySelectorAll('canvas').forEach(item => item.classList.remove('active-pet'));
                            e.target.classList.toggle("active-pet")
                        }} style={{ height: "100%", width: "100%", margin: "0 auto", borderRadius: "12px" }}>
                            <Canvas camera={{ fov: 55, position: [0, 15, 40] }}>
                                <Suspense fallback={null}>
                                    <ambientLight />
                                    <directionalLight intensity={3} position={[0, 50, 80]} />
                                    <directionalLight intensity={0.8} position={[0, 0, -20]} />
                                    <Tropics />
                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                </Suspense>
                            </Canvas>
                        </div>
                    </SwiperSlide>
                </Swiper>
                {pet ? (<CommonButton color={button} onClick={() => savePet()} text={language.select} />) : ""}
            </div>
        </Container>
    )
}

export default PetSliderPage