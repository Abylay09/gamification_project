import React from 'react'
import { Canvas } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import Model from './models/Panda'

function Slider() {
  // const gltf = useLoader(GLTFLoader, './models/scene.gltf')
  return (
    <div style={{height : "100vh"}}>
      <Canvas >
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        {/* <Model/> */}
        <Suspense>
          {/* <mesh position={[1, -2, -10]}> */}
          <mesh>
            <Model />
          </mesh>
          {/* <primitive object={gltf.scene} /> */}
        </Suspense>
        {/* <mesh rotateY={10}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh> */}
      </Canvas>
    </div>

  )
}

export default Slider