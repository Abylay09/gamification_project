import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react'
export default function Box(props) {
    const gltf = useLoader(GLTFLoader, '/3dModel.gltf')
    // const mesh = useRef()

    // const [hovered, setHover] = useState(false)
    // const [active, setActive] = useState(false)

    // useFrame(() => (mesh.current.rotation.x += 0.01))

    return (
        <Suspense fallback={null}>
            <primitive object={gltf.scene} />
        </Suspense>
        // <mesh
        //     {...props}
        //     ref={mesh}
        //     scale={active ? 1.5 : 1}
        //     onClick={(event) => setActive(!active)}
        //     onPointerOver={(event) => setHover(true)}
        //     onPointerOut={(event) => setHover(false)}>
        //     <boxGeometry args={[1, 2, 3]} />
        //     <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        // </mesh>
    )
}

