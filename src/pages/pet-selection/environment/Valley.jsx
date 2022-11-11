import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import Rabbit from '../components/Rabbit'

function Valley(props) {
    const { nodes, materials } = useGLTF('models/rooms/mountain_valley.glb')
    return (
        <group>
            <Rabbit/>
            <group {...props} dispose={null} scale={200} position={[0, 1, -10]}>
                <group position={[0, -0.1, 0.1]} rotation={[Math.PI, Math.PI / 2, 0]}>
                    <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} scale={5} />
                    <mesh geometry={nodes.Object_3.geometry} material={materials.material_0} scale={5} />
                    <mesh geometry={nodes.Object_4.geometry} material={materials.material_0} scale={5} />
                </group>
            </group>
        </group>

    )
}

export default Valley