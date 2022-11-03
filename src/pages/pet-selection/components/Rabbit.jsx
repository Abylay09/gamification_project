import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
function Rabbit(props) {
    const { nodes, materials } = useGLTF('/models/RabbitDraco.gltf')
    return (
        <group {...props} dispose={null} scale = {3} position={[0, -3, 7]}>
            <mesh geometry={nodes.Sphere.geometry} material={materials.Mat} />
            <mesh geometry={nodes.Plane_005.geometry} material={materials['Mat.1']} />
        </group>
    )
}

export default Rabbit