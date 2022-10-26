import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Container } from 'react-bootstrap';

import { PetApi } from 'utils/api/Pet';
// models
import Rabbit from './components/Rabbit';
import Cat from './components/Cat';
import Tiger from './components/Tiger';
import Wolf from './components/Wolf';
import SF from './components/SF';
import Cougar from './components/Cougar';
import CommonButton from 'components/buttons/CommonButton';
import Taryk from './components/Taryk';

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "./index.scss"
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

function PetSliderPage() {
    const [pet, setPet] = useState("");
    const navigate = useNavigate();
    const mutation = useMutation(petName => PetApi.choosePet(petName))

    function savePet() {
        mutation.mutate(pet, {
            onSuccess() {
                alert("Success")
            },
            onError() {
                alert("Error")
            }
        })
    }

    return (
        <Container>
            <div style={{ width: "100%", height: "100vh" }}>
                <h4 className='mt-3'>Выбери питомца</h4>
                <Swiper
                    className='mb-5'
                    direction={"horizontal"}
                    slidesPerView={1}
                    mousewheel={true}
                    spaceBetween={24}
                    navigation={true}
                    modules={[Navigation]}
                    allowTouchMove={false}
                    loop={true}
                >
                    <SwiperSlide>
                        <div className='pet-slide' onClick={(e) => {
                            setPet("Taryk")
                            document.querySelectorAll('canvas').forEach(item => item.classList.remove('active-pet'));
                            e.target.classList.toggle("active-pet")
                            // e.target.classList.toggle("active-pet")
                        }} style={{ height: "450px", width: "300px", margin: "0 auto", borderRadius: "12px" }}>
                            <Canvas camera={{ fov: 50, position: [0, 2, 35] }} >
                                <Suspense fallback={null}>
                                    <ambientLight />
                                    <directionalLight intensity={1} position={[0, 0, -50]} />
                                    <directionalLight intensity={3} position={[0, 0, 50]} />
                                    <directionalLight intensity={1} position={[0, 20, 50]} />
                                    <Taryk />
                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                </Suspense>
                            </Canvas>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='pet-slide' onClick={(e) => {
                            setPet("Rabbit")
                            document.querySelectorAll('canvas').forEach(item => item.classList.remove('active-pet'));
                            e.target.classList.toggle("active-pet")
                        }} style={{ height: "450px", width: "300px", margin: "0 auto", borderRadius: "12px" }}>
                            <Canvas camera={{ fov: 70, position: [0, 50, 255] }}>
                                <Suspense fallback={null}>
                                    <ambientLight />
                                    <directionalLight intensity={2} position={[0, 0, 20]} />
                                    <directionalLight intensity={0.8} position={[0, 0, -20]} />
                                    <Rabbit />
                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                </Suspense>
                            </Canvas>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='pet-slide' onClick={(e) => {
                            setPet("Cat")
                            document.querySelectorAll('canvas').forEach(item => item.classList.remove('active-pet'));
                            e.target.classList.toggle("active-pet")
                        }} style={{ height: "450px", width: "300px", margin: "0 auto", borderRadius: "12px" }}>
                            <Canvas camera={{ fov: 70, position: [0, 50, 255] }}>
                                <Suspense fallback={null}>
                                    <ambientLight />
                                    <directionalLight intensity={3} position={[0, 0, 20]} />
                                    <directionalLight intensity={0.8} position={[0, 0, -20]} />
                                    <Cat />
                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                </Suspense>
                            </Canvas>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='pet-slide' onClick={(e) => {
                            setPet("Tiger")
                            document.querySelectorAll('canvas').forEach(item => item.classList.remove('active-pet'));
                            e.target.classList.toggle("active-pet")
                        }} style={{ height: "450px", width: "300px", margin: "0 auto", borderRadius: "12px" }}>
                            <Canvas camera={{ fov: 60, position: [0, 50, 255] }}>
                                <Suspense fallback={null}>
                                    <ambientLight />
                                    <directionalLight intensity={1} position={[0, 0, 20]} />
                                    <directionalLight intensity={0.8} position={[0, 0, -20]} />
                                    <Tiger />
                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                </Suspense>
                            </Canvas>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='pet-slide' onClick={(e) => {
                            setPet("Wolf")
                            document.querySelectorAll('canvas').forEach(item => item.classList.remove('active-pet'));
                            e.target.classList.toggle("active-pet")
                        }} style={{ height: "450px", width: "300px", margin: "0 auto", borderRadius: "12px" }}>
                            <Canvas camera={{ fov: 55, position: [0, 50, 255] }}>
                                <Suspense fallback={null}>
                                    <ambientLight />
                                    <directionalLight intensity={3} position={[0, 0, 20]} />
                                    <directionalLight intensity={0.8} position={[0, 0, -20]} />
                                    <Wolf />
                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                </Suspense>
                            </Canvas>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='pet-slide' onClick={(e) => {
                            setPet("Sf")
                            document.querySelectorAll('canvas').forEach(item => item.classList.remove('active-pet'));
                            e.target.classList.toggle("active-pet")
                        }} style={{ height: "450px", width: "300px", margin: "0 auto", borderRadius: "12px" }}>
                            <Canvas camera={{ fov: 58, position: [0, 50, 255] }}>
                                <Suspense fallback={null}>
                                    <ambientLight />
                                    <directionalLight intensity={3} position={[0, 50, 80]} />
                                    <directionalLight intensity={0.8} position={[0, 0, -20]} />
                                    <directionalLight intensity={1} position={[0, 0, 80]} />
                                    <SF />
                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                </Suspense>
                            </Canvas>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='pet-slide' onClick={(e) => {
                            setPet("Cougar")
                            document.querySelectorAll('canvas').forEach(item => item.classList.remove('active-pet'));
                            e.target.classList.toggle("active-pet")
                        }} style={{ height: "450px", width: "300px", margin: "0 auto", borderRadius: "12px" }}>
                            <Canvas camera={{ fov: 58, position: [0, 50, 255] }}>
                                <Suspense fallback={null}>
                                    <ambientLight />
                                    <directionalLight intensity={3} position={[0, 50, 80]} />
                                    <directionalLight intensity={0.8} position={[0, 0, -20]} />
                                    <directionalLight intensity={2} position={[0, 0, 80]} />
                                    <Cougar />
                                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                                </Suspense>
                            </Canvas>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <CommonButton onClick={() => {
                    savePet()
                    navigate("/pet")
                }} text={"Выбрать"} />
            </div>
        </Container>
    )
}

export default PetSliderPage