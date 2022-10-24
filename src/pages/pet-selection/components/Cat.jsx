import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Cat(props) {
    const { nodes, materials } = useGLTF('/CatDraco.gltf')
    return (
        <group {...props} dispose={null} position={[0, -120, 0]} scale={1.2}>
            <mesh geometry={nodes.Body.geometry} material={materials['Mat.3']} />
            <mesh geometry={nodes.Sphere.geometry} material={materials['Mat.2']} />
        </group>
    )
}
