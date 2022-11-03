import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Tiger(props) {
    const { nodes, materials } = useGLTF('/models/TigerDraco.gltf')
    return (
        <group {...props} dispose={null} position={[0, -50, 0]} scale = {0.8}> 
            <mesh geometry={nodes['Lowpoly_001-Mouth_Cat'].geometry} material={materials.Mouth_Cat} />
            <mesh geometry={nodes['Lowpoly_001-PantherNaked_Final'].geometry} material={materials.PantherNaked_Final} />
            <mesh geometry={nodes.Sphere_001.geometry} material={materials.Mat} />
        </group>
    )
}

export default Tiger