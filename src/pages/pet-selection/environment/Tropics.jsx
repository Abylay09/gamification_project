import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import Cougar from '../components/Cougar'

function Tropics(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/rooms/tropical_island.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group>
      <Cougar/>
      <group ref={group} {...props} dispose={null} position={[0, -10, 0]} scale={10}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="_15cf_Var2_LOD0_0" position={[3.49, -0.4, 1.48]} rotation={[0.05, 0, -0.11]} scale={0.01}>
                  <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Cat_Palm} />
                </group>
                <group name="_18f6_Var1_LOD0_1" position={[-4.14, -0.13, 0.83]} rotation={[-0.01, 0, 0.11]} scale={0.01}>
                  <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.Areca_Palm} />
                </group>
                <group name="_1ffc_Var3_LOD0_2" position={[2.46, -0.03, -1.38]} rotation={[-0.05, 0.88, -0.1]} scale={0.01}>
                  <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.Areca_Palm} />
                </group>
                <group name="_2688_Var3_LOD0_3" position={[2.13, -0.25, 1.61]} rotation={[0.05, 0, -0.11]} scale={0.01}>
                  <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.Cat_Palm} />
                </group>
                <group name="_3b4f_Var2_LOD0_4" position={[-1.03, 0.08, 2.39]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                  <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.Tropical_Palm} />
                </group>
                <group name="_7303_Var2_LOD0_5" position={[1.8, -0.29, 2.49]} rotation={[0.13, -0.01, -0.13]} scale={0.01}>
                  <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.Areca_Palm} />
                </group>
                <group name="_89e2_Var5_LOD0_6" position={[-3.59, -0.08, -0.28]} rotation={[-0.01, 0, 0.11]} scale={0.01}>
                  <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.Areca_Palm} />
                </group>
                <group name="_8b2b_Var4_LOD0_7" position={[2.42, -0.14, 0.46]} rotation={[0.05, 0, -0.11]} scale={0.01}>
                  <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.Areca_Palm} />
                </group>
                <group name="_a2c9_Var3_LOD0_8" position={[2.6, -0.3, 1.9]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                  <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.Tropical_Palm} />
                </group>
                <group name="_e0f8_Var1_LOD0_9" position={[-2.8, 0.04, -1.87]} rotation={[Math.PI / 2, 0, -1.12]} scale={0.01}>
                  <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.Tropical_Palm} />
                </group>
                <group name="_e1f4_Var1_LOD0_10" position={[-4.37, -0.13, -0.19]} rotation={[0.09, 0, 0.03]} scale={0.01}>
                  <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.Cat_Palm} />
                </group>
                <group name="_e74b_Var4_LOD0_11" position={[1.97, 0.05, -2.18]} rotation={[0.02, 0.67, -0.03]} scale={0.01}>
                  <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials.Cat_Palm} />
                </group>
                <group name="Armature_40" position={[-0.28, 0.62, 0]}>
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <group name="Spiral002_39" />
                    <skinnedMesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials['Material.001']} skeleton={nodes.Object_31.skeleton} />
                  </group>
                </group>
                <group name="Aset_other__M_ufhsea0fa_LOD2_41" position={[-0.02, 0.05, 1.66]} rotation={[1.63, -0.02, -1.58]}>
                  <mesh name="Object_60" geometry={nodes.Object_60.geometry} material={materials.Treibholz} />
                </group>
                <group name="Aset_other_forest_root_M_ufhrfjefa_LOD2_42" position={[-0.34, 0.01, -1.97]}>
                  <mesh name="Object_62" geometry={nodes.Object_62.geometry} material={materials.Root} />
                </group>
                <group name="Aset_rock_assembly_M_udxkec2fa_LOD2_43" position={[1.64, -2.2, 12.35]}>
                  <mesh name="Object_64" geometry={nodes.Object_64.geometry} material={materials.RocksBig} />
                </group>
                <group name="Beach_44" position={[-0.28, 0, 0]}>
                  <mesh name="Object_66" geometry={nodes.Object_66.geometry} material={materials.BeachBaked} />
                </group>
                <group name="Palme_45" position={[2.08, 0.02, -1.78]} rotation={[1.54, -0.08, -2.33]}>
                  <mesh name="Object_68" geometry={nodes.Object_68.geometry} material={materials.Palme} />
                </group>
                <group name="Plane024_46" position={[2.84, 3.56, -2.03]} rotation={[-3.14, -0.58, -3.1]}>
                  <mesh name="Object_70" geometry={nodes.Object_70.geometry} material={materials.Palme_Blaetter} />
                </group>
                <group name="RocksSmall_47" position={[-11.77, -1.79, -7.85]}>
                  <mesh name="Object_72" geometry={nodes.Object_72.geometry} material={materials.RocksSmall} />
                </group>
                <group name="Skybox_48" position={[-0.02, -1.97, 0]} rotation={[-Math.PI, -0.79, -Math.PI]} scale={0.52}>
                  <mesh name="Object_74" geometry={nodes.Object_74.geometry} material={materials['Skybox.001']} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>

  )
}

export default Tropics