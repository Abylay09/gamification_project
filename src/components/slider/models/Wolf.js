/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/wolf.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane006.geometry} material={materials['Material #41']} position={[0.63, 0.21, 0.88]} scale={0} />
      <mesh geometry={nodes.Sphere010.geometry} material={materials['Material.001']} position={[0.66, 0.38, 1.12]} scale={0} />
      <mesh geometry={nodes.Sphere011.geometry} material={materials['Material #26']} position={[0.63, 0.4, 1.05]} scale={0} />
      <mesh geometry={nodes.Sphere012.geometry} material={materials['Material.002']} position={[0.63, 0.4, 1.05]} scale={0} />
    </group>
  )
}

useGLTF.preload('/wolf.glb')