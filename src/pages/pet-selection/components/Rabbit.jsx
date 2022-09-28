import React, { useRef }from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
function Rabbit(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/rabbit.glb')
    // const { actions } = useAnimations(animations, group)
    return (
        <group ref={group} {...props} dispose={null} scale={1}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={35.27}>
                    <group name="6d35d3dde4354c4f8f094ecc2dab5a39fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Sphere" position={[0.09, 3.34, 0.26]} rotation={[-Math.PI / 2, 0, 0]} scale={0.06} />
                                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]}>
                                    <group name="Object_6">
                                        <primitive object={nodes._rootJoint} />
                                        <group name="Object_8" position={[0.09, 3.34, 0.26]} rotation={[-Math.PI / 2, 0, 0]} scale={0.06} />
                                        <group name="Object_68" rotation={[-Math.PI / 2, 0, 0]} />
                                        <skinnedMesh name="Object_69" geometry={nodes.Object_69.geometry} material={materials.Body} skeleton={nodes.Object_69.skeleton} morphTargetDictionary={nodes.Object_69.morphTargetDictionary} morphTargetInfluences={nodes.Object_69.morphTargetInfluences} />
                                        <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.Eyes} skeleton={nodes.Object_9.skeleton} />
                                    </group>
                                </group>
                                <group name="Plane005" rotation={[-Math.PI / 2, 0, 0]} />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

export default Rabbit