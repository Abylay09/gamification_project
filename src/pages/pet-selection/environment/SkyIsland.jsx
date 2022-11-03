import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import SF from '../components/SF'

function SkyIsland(props) {
    const { nodes, materials } = useGLTF('/models/rooms/island_red_sky.glb')
    return (
        <group>
            <SF/>
            <group {...props} dispose={null}  scale = {5} position={[-15, -50, 0]}>
                <group rotation={[-Math.PI / 2, 0, 0]}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <group position={[0.01, 8.64, 0]}>
                            <group position={[31.37, 30.07, -21.76]} rotation={[0, 0, -Math.PI]}>
                                <mesh geometry={nodes.Sky_Mat_0.geometry} material={materials.material} />
                            </group>
                            <group position={[24.21, -0.54, 0]}>
                                <mesh geometry={nodes.Water_mat0_0.geometry} material={materials.mat0} />
                            </group>
                            <group position={[25.82, -2.02, 4.5]}>
                                <mesh geometry={nodes.Fondos_mat0_0.geometry} material={materials.mat0_0} />
                            </group>
                            <group position={[21.43, 9.94, -10.96]}>
                                <mesh geometry={nodes.Rocks_mat0_0.geometry} material={materials.mat0_1} />
                                <mesh geometry={nodes.Rocks_mat01_0.geometry} material={materials['mat0.1']} />
                                <mesh geometry={nodes.Rocks_mat0_0_1.geometry} material={materials.mat0_2} />
                                <mesh geometry={nodes.Rocks_mat0_0_2.geometry} material={materials.mat0_3} />
                                <mesh geometry={nodes.Rocks_mat0_0_3.geometry} material={materials.mat0_4} />
                                <mesh geometry={nodes.Rocks_mat01_0_1.geometry} material={materials['mat0.1_0']} />
                                <mesh geometry={nodes.Rocks_mat0_0_4.geometry} material={materials.mat0_5} />
                                <mesh geometry={nodes.Rocks_mat01_0_2.geometry} material={materials['mat0.1_1']} />
                                <mesh geometry={nodes.Rocks_mat0_0_5.geometry} material={materials.mat0_6} />
                                <mesh geometry={nodes.Rocks_mat0_0_6.geometry} material={materials.mat0_7} />
                            </group>
                            <group position={[4.32, -0.63, -5.05]}>
                                <mesh geometry={nodes.Mini_Stones_mat0_0.geometry} material={materials.mat0_8} />
                            </group>
                            <group position={[3.54, 0.45, -4.93]}>
                                <mesh geometry={nodes.Stones_mat0_0.geometry} material={materials.mat0_9} />
                            </group>
                            <group position={[4.56, -0.11, -5.02]}>
                                <mesh geometry={nodes.Base_mat0_0.geometry} material={materials.mat0_10} />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

export default SkyIsland