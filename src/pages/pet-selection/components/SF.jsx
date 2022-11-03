import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function SF(props) {
    const { nodes, materials } = useGLTF('/models/SFDraco.gltf')
    return (
      <group {...props} dispose={null} scale = {0.0015} position={[0, -7, 0]}>
        <mesh geometry={nodes.Plane_001.geometry} material={materials.Skin} />
        <mesh geometry={nodes.Plane_006.geometry} material={materials.Skin} />
        <mesh geometry={nodes.Plane_007.geometry} material={materials.Skin} />
        <mesh geometry={nodes.Plane_008.geometry} material={materials.Skin} />
        <mesh geometry={nodes.Plane_016.geometry} material={materials.Skin} />
        <mesh geometry={nodes.Plane_017.geometry} material={materials.Skin} />
        <mesh geometry={nodes.CupaTea_Plane_018_Dupli_.geometry} material={materials.Material} />
        <mesh geometry={nodes.CupaTea_Plane_019_Dupli_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.CupaTea_Circle_001_Dupli_2.geometry} material={materials.M_Tea} />
        <mesh geometry={nodes.CupaTea_Plane_020_Dupli_4.geometry} material={materials.Material} />
        <mesh geometry={nodes.Sphere.geometry} material={materials.Mat} />
        <mesh geometry={nodes.BodyMesh_Naked_000.geometry} material={materials.Skin} />
        <mesh geometry={nodes.BodyMesh_Naked_003.geometry} material={materials['Mat.1']} />
        <mesh geometry={nodes.Plane_015.geometry} material={materials.Skin} />
      </group>
    )
}

export default SF