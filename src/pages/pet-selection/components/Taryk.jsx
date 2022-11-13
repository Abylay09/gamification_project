import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


export default function Taryk(props) {
    const { nodes, materials } = useGLTF('/models/TarykDraco.gltf')
    return (
        // <group {...props} dispose={null} scale={0.0065} position={[0, -50, 0]}>
        <group {...props} dispose={null} scale={0.0085} position={[0, -60, 0]}>
            <mesh geometry={nodes.Body.geometry} material={materials['Mat.1']} />
            <mesh geometry={nodes.Head.geometry} material={materials['Mat.1']} />
            <mesh geometry={nodes.Eyes.geometry} material={materials['Mat.2']} />
        </group>
        // <group {...props} dispose={null} scale={0.0045} position={[0, -10, 45]}>
        //     <mesh geometry={nodes.Body.geometry} material={materials['Mat.1']} />
        //     <mesh geometry={nodes.Head.geometry} material={materials['Mat.1']} />
        //     <mesh geometry={nodes.Eyes.geometry} material={materials['Mat.2']} />
        // </group>
    )
}
