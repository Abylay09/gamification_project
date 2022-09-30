import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame, } from '@react-three/fiber'
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
// import Rabbit from './components/Rabbit'
// const wrapper = {
//     minHeight: '100vh',

// }
function Tiger(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/tiger.glb')
    const { actions } = useAnimations(animations, group)
    return (
        <group ref={group} {...props} dispose={null} scale={1} >
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1}>
                    <group name="24d5c560279b4e48b582cd645dc010f5fbx" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Sphere001" rotation={[-Math.PI / 2, 0, 0]} />
                                <group name="Lowpoly001" position={[0, 104.61, 2.35]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.01} />
                                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]}>
                                    <group name="Object_7">
                                        <primitive object={nodes._rootJoint} />
                                        <group name="Object_9" rotation={[-Math.PI / 2, 0, 0]} />
                                        <group name="Object_12" position={[0, 104.61, 2.35]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.01} />
                                        <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.Eyes} skeleton={nodes.Object_10.skeleton} />
                                        <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.Shine} skeleton={nodes.Object_11.skeleton} />
                                        <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.PantherNaked_Final} skeleton={nodes.Object_13.skeleton} />
                                        <skinnedMesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.Mouth_Cat} skeleton={nodes.Object_14.skeleton} />
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}


function Wolf(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/terris_wolf.glb')
    const { actions } = useAnimations(animations, group)
    return (
        <group ref={group} {...props} dispose={null} scale={0.015}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="139f500375b64fb297d5f5b80c725347fbx" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Body_Final" position={[0, 866.68, 556.35]} rotation={[-Math.PI / 2, 0, 0]} scale={99.79} />
                                <group name="Head_Combined003" position={[0, 818.48, -222.42]} rotation={[-Math.PI / 2, 0, 0]} scale={91.21} />
                                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                                    <group name="Object_7">
                                        <primitive object={nodes._rootJoint} />
                                        <group name="Object_9" position={[0, 866.68, 556.35]} rotation={[-Math.PI / 2, 0, 0]} scale={99.79} />
                                        <group name="Object_11" position={[0, 818.48, -222.42]} rotation={[-Math.PI / 2, 0, 0]} scale={91.21} />
                                        <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.Wolf} skeleton={nodes.Object_10.skeleton} />
                                        <skinnedMesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.Shine} skeleton={nodes.Object_12.skeleton} />
                                        <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.Eyes} skeleton={nodes.Object_13.skeleton} />
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
    // const group = useRef()
    // const { nodes, materials, animations } = useGLTF('/terris_wolf.glb')
    // const { actions } = useAnimations(animations, group)
    // return (
    //   <group ref={group} {...props} dispose={null} scale = {0.2} position = {[0,-60,0]}>
    //     <group name="Sketchfab_Scene">
    //       <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
    //         <group name="139f500375b64fb297d5f5b80c725347fbx" rotation={[Math.PI / 2, 0, 0]}>
    //           <group name="Object_2">
    //             <group name="RootNode">
    //               {/* <group name="Body_Final" position={[0, 866.68, 556.35]} rotation={[-Math.PI / 2, 0, 0]} scale={99.79} /> */}
    //               <group name="Body_Final" position={[0, 866.68, 556.35]} rotation={[-Math.PI / 2, 0, 0]} scale={2} />
    //               {/* <group name="Head_Combined003" position={[0, 818.48, -222.42]} rotation={[-Math.PI / 2, 0, 0]} scale={91.21} /> */}
    //               <group name="Head_Combined003" position={[0, 818.48, -222.42]} rotation={[-Math.PI / 2, 0, 0]} scale={2} />
    //               <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={10}>
    //                 <group name="Object_7">
    //                   <primitive object={nodes._rootJoint} />
    //                   <group name="Object_9" position={[0, 866.68, 556.35]} rotation={[-Math.PI / 2, 0, 0]} scale={2} />
    //                   <group name="Object_11" position={[0, 818.48, -222.42]} rotation={[-Math.PI / 2, 0, 0]} scale={2} />
    //                   <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.Wolf} skeleton={nodes.Object_10.skeleton} />
    //                   <skinnedMesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.Shine} skeleton={nodes.Object_12.skeleton} />
    //                   <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.Eyes} skeleton={nodes.Object_13.skeleton} />
    //                 </group>
    //               </group>
    //             </group>
    //           </group>
    //         </group>
    //       </group>
    //     </group>
    //   </group>
    // )
}


function Taryk(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/taryk.glb')
    const { actions } = useAnimations(animations, group)
    return (
        <group ref={group} {...props} dispose={null} scale={70}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.02}>
                    <group name="9d1039354d204a20abe98e7f49dbe389fbx" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Body" position={[0, -2.61, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                                <group name="Head" position={[0, -2.61, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                                <group name="Eyes" position={[0, -2.61, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]}>
                                    <group name="Object_8">
                                        <primitive object={nodes._rootJoint} />
                                        <group name="Object_10" position={[0, -2.61, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                                        <group name="Object_12" position={[0, -2.61, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                                        <group name="Object_14" position={[0, -2.61, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                                        <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.M_Taryk} skeleton={nodes.Object_13.skeleton} morphTargetDictionary={nodes.Object_13.morphTargetDictionary} morphTargetInfluences={nodes.Object_13.morphTargetInfluences} />
                                        <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.M_Taryk} skeleton={nodes.Object_11.skeleton} />
                                        <skinnedMesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.material} skeleton={nodes.Object_15.skeleton} />
                                        <skinnedMesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.Eye_Shine} skeleton={nodes.Object_16.skeleton} />
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}
function Skycat(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/skycat.glb')
    const { actions } = useAnimations(animations, group)
    return (
        <group ref={group} {...props} dispose={null} scale={1}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="a2bedcd5eef14e5099b45a0b1652e133fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Body" rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
                                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                                    <group name="Object_6">
                                        <primitive object={nodes._rootJoint} />
                                        <group name="Object_8" rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
                                        <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.M_Body} skeleton={nodes.Object_9.skeleton} morphTargetDictionary={nodes.Object_9.morphTargetDictionary} morphTargetInfluences={nodes.Object_9.morphTargetInfluences} />
                                        <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.M_Eyes} skeleton={nodes.Object_10.skeleton} morphTargetDictionary={nodes.Object_10.morphTargetDictionary} morphTargetInfluences={nodes.Object_10.morphTargetInfluences} />
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}
function Ruby(props) {
    const { nodes, materials } = useGLTF('/ruby.glb')
    return (
        <group {...props} dispose={null} scale={19}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.Object_2.geometry} material={materials.Body} />
                <mesh geometry={nodes.Object_3.geometry} material={materials.Clothes} />
                <mesh geometry={nodes.Object_4.geometry} material={materials.Eyes} />
                <mesh geometry={nodes.Object_5.geometry} material={materials.Hair_Fringe} />
                <mesh geometry={nodes.Object_6.geometry} material={materials.Hair_Long} />
                <mesh geometry={nodes.Object_7.geometry} material={materials.Laces} />
                <mesh geometry={nodes.Object_8.geometry} material={materials.Pants} />
                <mesh geometry={nodes.Object_9.geometry} material={materials.Shoes} />
            </group>
        </group>
    )
}

function Model(props) {
    const { nodes, materials } = useGLTF('/oracle.glb')
    return (
        <group {...props} dispose={null} scale={1} position={[-60, -120, 0]}>
            <group rotation={[-Math.PI / 2, 0, 0]} >
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[74.79, 0, 0]} rotation={[-Math.PI / 2, 0, 0.3]}>
                        <primitive object={nodes._rootJoint} />
                        <skinnedMesh geometry={nodes.Object_115.geometry} material={materials.Eyes} skeleton={nodes.Object_115.skeleton} />
                        <skinnedMesh geometry={nodes.Object_116.geometry} material={materials.Shine} skeleton={nodes.Object_116.skeleton} />
                        <skinnedMesh geometry={nodes.Object_118.geometry} material={materials.M_Orica} skeleton={nodes.Object_118.skeleton} />
                    </group>
                </group>
            </group>
        </group>
    )
}

function Rabbit(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/rabbit.glb')
    const { actions } = useAnimations(animations, group)
    return (
        <group ref={group} {...props} dispose={null} scale={1}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={35.27}>
                    <group name="6d35d3dde4354c4f8f094ecc2dab5a39fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Sphere" position={[0.09, 3.34, 0.26]} rotation={[-Math.PI / 2, 0, 0]} scale={0.06} />
                                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]}>
                                    <group name="Object_6">
                                        <primitive object={nodes._rootJoint} />
                                        <group name="Object_8" position={[0.09, 3.34, 0.26]} rotation={[-Math.PI / 2, 0, 0]} scale={0.06} />
                                        <group name="Object_68" rotation={[-Math.PI / 2, 0, 0]} />
                                        <skinnedMesh name="Object_69" geometry={nodes.Object_69.geometry} material={materials.Body} skeleton={nodes.Object_69.skeleton} morphTargetDictionary={nodes.Object_69.morphTargetDictionary} morphTargetInfluences={nodes.Object_69.morphTargetInfluences} />
                                        <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.Eyes} skeleton={nodes.Object_9.skeleton} />
                                    </group>
                                </group>
                                <group name="Plane005" rotation={[-Math.PI / 2, 0, 0]} />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

function PetSliderPage() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Swiper
                direction={"horizontal"}
                slidesPerView={1}
                mousewheel={true}
                spaceBetween={24}
                navigation={true}
                modules={[Navigation]}
                allowTouchMove={false}
            >
                <SwiperSlide>
                    <div style={{ height: "450px", backgroundColor: "#272121", width: "300px", margin: "0 auto", borderRadius: "12px" }}>
                        <Canvas camera={{ fov: 100, position: [0, 70, 255] }}>
                            <Suspense fallback={null}>
                                <ambientLight />
                                <directionalLight intensity={0} position={[0, 0, 50]} />
                                {/* <Model /> */}
                                {/* <Ruby/> */}
                                {/* <Taryk /> */}
                                {/* <Wolf /> */}
                                <Tiger />

                                {/* <Skycat/> */}
                                {/* <Rabbit/> */}
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                            </Suspense>
                        </Canvas>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ height: "450px", backgroundColor: "#f5f5f5", width: "300px", margin: "0 auto", borderRadius: "12px" }}>
                        <Canvas camera={{ fov: 100, position: [0, 70, 255] }}>
                            <Suspense fallback={null}>
                                <ambientLight />
                                <directionalLight intensity={0} position={[0, 0, 50]} />
                                <Model />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                            </Suspense>
                        </Canvas>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ height: "450px", backgroundColor: "#272121", width: "300px", margin: "0 auto", borderRadius: "12px" }}>
                        <Canvas camera={{ fov: 100, position: [0, 70, 255] }}>
                            <Suspense fallback={null}>
                                <ambientLight />
                                <directionalLight intensity={0} position={[0, 0, 50]} />
                                <Taryk />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                            </Suspense>
                        </Canvas>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ height: "450px", backgroundColor: "#272121", width: "300px", margin: "0 auto", borderRadius: "12px" }}>
                        <Canvas camera={{ fov: 100, position: [0, 70, 255] }}>
                            <Suspense fallback={null}>
                                <ambientLight />
                                <directionalLight intensity={0} position={[0, 0, 50]} />
                                {/* <Model /> */}
                                <Ruby/>
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                            </Suspense>
                        </Canvas>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default PetSliderPage