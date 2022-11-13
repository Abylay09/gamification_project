import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Wolf(props) {
    const { nodes, materials } = useGLTF('/models/WolfDraco.gltf')
    return (
        <group {...props} dispose={null} position={[0, -30, 0]} scale={0.45}>
            <mesh geometry={nodes.Head_Combined.geometry} material={materials['Mat.1']} />
            <mesh geometry={nodes.Body_Combined.geometry} material={materials['Mat.1']} />
            <mesh geometry={nodes.Head_Combined_001.geometry} material={materials.Mat} />
        </group>
    )
}

export default Wolf