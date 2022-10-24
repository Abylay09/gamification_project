import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Cougar(props) {
    const { nodes, materials } = useGLTF('/CougarDraco.gltf')
    return (
      <group {...props} dispose={null} scale = {1.5} position={[0, -90, 0]}>
        <mesh geometry={nodes.Eyes.geometry} material={materials.Mat} />
        <mesh geometry={nodes.LoPoly.geometry} material={materials['Mat.1']} />
      </group>
    )
}

export default Cougar