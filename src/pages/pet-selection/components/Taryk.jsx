import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


export default function Taryk(props) {
    const { nodes, materials } = useGLTF('/TarykDraco.gltf')
    return (
        <group {...props} dispose={null} scale={0.0016} position={[0, -10, 0]}>
            <mesh geometry={nodes.Body.geometry} material={materials['Mat.1']} />
            <mesh geometry={nodes.Head.geometry} material={materials['Mat.1']} />
            <mesh geometry={nodes.Eyes.geometry} material={materials['Mat.2']} />
        </group>
    )
}
