import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
function Rabbit(props) {
    const { nodes, materials } = useGLTF('/RabbitDraco.gltf')
    return (
        <group {...props} dispose={null} scale = {58} position={[0, -115, 10]}>
            <mesh geometry={nodes.Sphere.geometry} material={materials.Mat} />
            <mesh geometry={nodes.Plane_005.geometry} material={materials['Mat.1']} />
        </group>
    )
}

export default Rabbit