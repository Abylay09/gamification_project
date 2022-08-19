import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react'

export default function Model(props) {
    const gltf = useLoader(GLTFLoader, './panda2.glb')

    return (
        <Suspense fallback={null}>
            {/* <dino/> */}
            {/* <primitive object={gltf.scene} /> */}
        </Suspense>
    )
}

