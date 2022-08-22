/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/panda/panda.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[5.9, 35.28, 115.38]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.1}>
        <mesh geometry={nodes.Sphere001_1.geometry} material={materials.tanasi} />
      </group>
      <group position={[6.06, 35.36, 99.23]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.07, 0.05, 0.05]}>
        <mesh geometry={nodes.Sphere004_1.geometry} material={materials.qulogi} />
      </group>
      <group position={[6.07, 28.35, 94.73]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.12}>
        <mesh geometry={nodes.Sphere005_1.geometry} material={materials.tanasi} />
      </group>
      <group position={[8.71, 21.88, 95.11]} rotation={[Math.PI / 2, 0, 0]} scale={[0.09, 0.12, 0.11]}>
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials.qulogi} />
      </group>
      <group position={[10.68, 27.73, 96]} rotation={[-Math.PI / 2, -0.09, Math.PI / 2]} scale={0.1}>
        <mesh geometry={nodes.Box004_1.geometry} material={materials.qulogi} />
      </group>
      <group position={[2.26, 39.38, 93.94]} scale={0.1}>
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials.qulogi} />
      </group>
      <group position={[9.89, 39.38, 93.94]} rotation={[Math.PI, 0, 0]} scale={-0.1}>
        <mesh geometry={nodes.Cylinder007_1.geometry} material={materials.qulogi} />
      </group>
      <group position={[6.09, 35.28, 115.44]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.1}>
        <mesh geometry={nodes.Object001_1.geometry} material={materials.qulogi} />
      </group>
      <group position={[7.2, 37.46, 97.86]} rotation={[-1.47, 0, Math.PI / 2]} scale={[0.08, 0.09, 0.05]}>
        <mesh geometry={nodes.Sphere037_1.geometry} material={materials.kozi} />
      </group>
      <group position={[1.38, 27.73, 96]} rotation={[Math.PI / 2, -0.09, Math.PI / 2]} scale={-0.1}>
        <mesh geometry={nodes.Box005_1.geometry} material={materials.qulogi} />
      </group>
      <group position={[3.61, 21.88, 95.11]} rotation={[-Math.PI / 2, 0, 0]} scale={[-0.09, -0.12, -0.11]}>
        <mesh geometry={nodes.Cylinder008_1.geometry} material={materials.qulogi} />
      </group>
    </group>
  )
}

useGLTF.preload('/panda.gltf')
