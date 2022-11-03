import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import Cat from '../components/Cat';

function WinterHouse(props) {
  const { nodes, materials } = useGLTF('/models/rooms/winter_house.glb')
  return (
    <group>
        <Cat />
      <group {...props} dispose={null} scale={45} position={[0, -30, -90]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[-1.01, -8.85, 4.34]} rotation={[0, 0, -3]} scale={[0.19, 0.19, 0.11]}>
            <mesh geometry={nodes.Cylinder008_0.geometry} material={materials.Main} />
          </group>
          <group position={[-0.07, -0.92, 0.86]} rotation={[-Math.PI / 2, 0, 0]} scale={[0, 0.01, 0.01]}>
            <mesh geometry={nodes.Cube035_0.geometry} material={materials.Main} />
          </group>
          <group position={[4.24, 2.89, -0.03]} rotation={[Math.PI / 2, 0, 0]} scale={0.71}>
            <mesh geometry={nodes.Cylinder_Cylinder009_0.geometry} material={materials.Main} />
          </group>
          <group scale={8.88}>
            <mesh geometry={nodes.Plane001_0.geometry} material={materials.Main} />
          </group>
          <group position={[-1.01, -8.7, 4.22]} rotation={[0, 0, -Math.PI / 2]} scale={0.04}>
            <mesh geometry={nodes.Cylinder000_0.geometry} material={materials.Main} />
          </group>
          <group position={[3.22, 5.42, 2.05]} rotation={[0, 0, -1.92]} scale={[0.12, 0.12, 0.42]}>
            <mesh geometry={nodes.Plane009_0.geometry} material={materials.Main} />
          </group>
          <group position={[-7.58, -0.4, 0.88]} scale={0.22}>
            <mesh geometry={nodes.Cylinder_0.geometry} material={materials.Main} />
          </group>
          <group position={[7.51, -3.06, 2.28]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[0.33, 0.11, 0.11]}>
            <mesh geometry={nodes.Plane_0.geometry} material={materials.Main} />
          </group>
          <group position={[-7.05, -3.33, 4.41]} rotation={[0, 0, -Math.PI / 2]} scale={0.02}>
            <mesh geometry={nodes.Cylinder002_0.geometry} material={materials.Main} />
          </group>
          <group position={[6.7, -3.33, 4.41]} rotation={[0, 0, -Math.PI / 2]} scale={0.02}>
            <mesh geometry={nodes.Cylinder001_0.geometry} material={materials.Main} />
          </group>
          <group position={[-5.24, -2.92, -0.03]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.11, 0.11, 0.03]}>
            <mesh geometry={nodes.Cylinder003_0.geometry} material={materials.Main} />
          </group>
          <group position={[-6.46, -3.33, 2.14]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[0.25, 0.31, 0.31]}>
            <mesh geometry={nodes.Plane012_0.geometry} material={materials.Main} />
          </group>
          <group position={[4.96, 8.1, 0.51]} scale={[0.89, 0.01, 0.07]}>
            <mesh geometry={nodes.Cube005_0.geometry} material={materials.Main} />
          </group>
          <group position={[-1.34, 1, 2.38]} scale={[0.01, 0.01, 0.42]}>
            <mesh geometry={nodes.Cube_0.geometry} material={materials.Main} />
          </group>
          <group position={[6.63, 1.33, 0.15]} rotation={[0, 0, -Math.PI / 2]} scale={0.31}>
            <mesh geometry={nodes.Plane002_0.geometry} material={materials.Main} />
          </group>
        </group>
      </group>
    </group>

  )
}

export default WinterHouse