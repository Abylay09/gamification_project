import React from 'react'
import { useGLTF } from '@react-three/drei';
import Taryk from '../components/Taryk';

function AbandonedRoom(props) {
  const { nodes, materials } = useGLTF('/abandoned_room.glb')
  return (
    <group>
      <Taryk />
      <group {...props} dispose={null} position={[0, -6, -240]} scale = {0.8}>
        <group rotation={[-Math.PI / 2, 0, 0]} >
          <group position={[318.08, -919.04, 163.49]} rotation={[1.39, 0.47, 0.08]} />
          <mesh geometry={nodes.Material2.geometry} material={materials.Paint01} />
          <mesh geometry={nodes.Material2_1.geometry} material={materials.Trim} />
          <mesh geometry={nodes.Material2_2.geometry} material={materials.WallPaint} />
          <mesh geometry={nodes.Material2_3.geometry} material={materials.Floor_Albedo} />
          <mesh geometry={nodes.Material2_4.geometry} material={materials.Doorknob} />
          <mesh geometry={nodes.Material2_5.geometry} material={materials.Background} />
          <lineSegments geometry={nodes.Material2_6.geometry} material={materials.edge_color000255} />
          <mesh geometry={nodes.Material2_7.geometry} material={materials['0137_Black']} />
          <mesh geometry={nodes.Material2_8.geometry} material={materials.material} />
          <mesh geometry={nodes.Material3.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Material2_9.geometry} material={materials.material_10} />
          <lineSegments geometry={nodes.Material2_10.geometry} material={materials.edge_color210180140255} />
          <mesh geometry={nodes.Material2_11.geometry} material={materials.Glass01} />
        </group>
      </group>
    </group>

  )
}
export default AbandonedRoom;