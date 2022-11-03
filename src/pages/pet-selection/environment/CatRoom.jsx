import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import Cat from '../components/Cat'

function CatRoom(props) {
    const { nodes, materials } = useGLTF('/models/rooms/cat_room.glb')
    return (
        <group>
            <Cat/>
            <group {...props} dispose={null} scale={10} position={[0, -25, -20]}>
                <group rotation={[-Math.PI / 2, 0, 0]}>
                    <group position={[-0.3, 0.05, 6.51]} rotation={[-0.27, 0.6, 1.93]} />
                    <group position={[-0.02, 0, 0]} scale={[5.72, 5.72, 0.27]}>
                        <mesh geometry={nodes.Cube_0.geometry} material={materials.Vloer} />
                        <mesh geometry={nodes.Cube_1.geometry} material={materials.Muren} />
                    </group>
                    <group position={[-1.34, 4.06, 1.43]} rotation={[0, 0, -Math.PI / 2]} scale={[0.57, 0.38, 0.21]}>
                        <mesh geometry={nodes.Cube013_0.geometry} material={materials.Kussen} />
                    </group>
                    <group position={[0.44, 3.95, 1.26]} rotation={[0, 0, -Math.PI / 2]} scale={[0.86, 1.6, 0.44]}>
                        <mesh geometry={nodes.Cube014_0.geometry} material={materials.Dekbed} />
                        <mesh geometry={nodes.Cube014_1.geometry} material={materials.Kussen} />
                    </group>
                    <group position={[0.91, 5.22, 1.59]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[-0.28, 0.02, 0.36]}>
                        <mesh geometry={nodes.Cube015_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[-0.58, 5.22, 1.59]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[-0.28, 0.02, 0.36]}>
                        <mesh geometry={nodes.Cube016_0.geometry} material={materials.Bedframe} />
                    </group>
                    <mesh geometry={nodes.Cube017_0.geometry} material={materials.Bedframe} />
                    <mesh geometry={nodes.Cube018_0.geometry} material={materials.Bedframe} />
                    <group position={[-0.07, 4.06, 1.18]} rotation={[0, 0, -Math.PI / 2]} scale={[0.84, 1.79, 0.18]}>
                        <mesh geometry={nodes.Cube019_0.geometry} material={materials.Matras} />
                    </group>
                    <group position={[0.09, 5.27, 0.81]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-2.05, 0.03, 0.47]}>
                        <mesh geometry={nodes.Cube020_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[0.09, 5.5, 1.36]} rotation={[0, 0, -Math.PI]} scale={[-2.05, 0.07, 0.51]}>
                        <mesh geometry={nodes.Cube021_0.geometry} material={materials.Bedframe} />
                    </group>
                    <mesh geometry={nodes.Cube022_0.geometry} material={materials.Bedframe} />
                    <mesh geometry={nodes.Cube023_0.geometry} material={materials.Bedframe} />
                    <group position={[-0.07, 4.06, 0.92]} rotation={[0, 0, -Math.PI / 2]} scale={[0.84, 1.83, 0.14]}>
                        <mesh geometry={nodes.Cube024_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[-4.04, -0.86, 1.05]} scale={[0.03, 0.15, 0.03]}>
                        <mesh geometry={nodes.Cube032_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[-4.04, -0.86, 1.41]} scale={[0.03, 0.15, 0.03]}>
                        <mesh geometry={nodes.Cube033_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[-4.04, -0.86, 1.77]} scale={[0.03, 0.15, 0.03]}>
                        <mesh geometry={nodes.Cube034_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[-4.85, -0.9, 1.32]} scale={[0.78, 0.44, 0.56]}>
                        <mesh geometry={nodes.Cube035_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[-4.85, -4.02, 1.08]} scale={[0.78, 0.04, 0.91]}>
                        <mesh geometry={nodes.Cube036_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[-4.85, -0.47, 1.08]} scale={[0.78, 0.04, 0.91]}>
                        <mesh geometry={nodes.Cube037_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[-4.85, -2.25, 1.97]} scale={[0.78, 1.83, 0.07]}>
                        <mesh geometry={nodes.Cube038_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[3.62, 4.82, 2.34]} scale={[1, 0.72, 1.9]}>
                        <mesh geometry={nodes.Cube039_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[2.78, 4.23, 0.38]} scale={[0.1, 0.1, 0.14]}>
                        <mesh geometry={nodes.Cube040_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[2.78, 5.42, 0.38]} scale={[0.1, 0.1, 0.14]}>
                        <mesh geometry={nodes.Cube041_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[4.49, 5.42, 0.38]} scale={[0.1, 0.1, 0.14]}>
                        <mesh geometry={nodes.Cube042_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[4.49, 4.24, 0.38]} scale={[0.1, 0.1, 0.14]}>
                        <mesh geometry={nodes.Cube043_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[3.44, 4.06, 2.15]} scale={[0.04, 0.04, 0.2]}>
                        <mesh geometry={nodes.Cube044_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[3.76, 4.06, 2.15]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.04, 0.04, 0.2]}>
                        <mesh geometry={nodes.Cube045_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[-5.74, 0.41, 2.59]} scale={[0.32, 1.86, 0.07]}>
                        <mesh geometry={nodes.Cube046_0.geometry} material={materials.material} />
                    </group>
                    <group position={[-5.68, 0.37, 5.02]} scale={[0.06, 1.93, 0.07]}>
                        <mesh geometry={nodes.Cube047_0.geometry} material={materials.material} />
                    </group>
                    <group position={[-5.66, 2.2, 3.82]} rotation={[Math.PI / 2, 0, 0]} scale={[0.06, 1.24, 0.07]}>
                        <mesh geometry={nodes.Cube048_0.geometry} material={materials.material} />
                    </group>
                    <group position={[-5.68, -1.35, 3.82]} rotation={[Math.PI / 2, 0, 0]} scale={[0.06, 1.24, 0.07]}>
                        <mesh geometry={nodes.Cube049_0.geometry} material={materials.material} />
                    </group>
                    <group position={[-0.05, -0.64, 0.28]} scale={[3.6, 3.34, 1.72]}>
                        <mesh geometry={nodes.Plane_0.geometry} material={materials.Tapijt} />
                    </group>
                    <group position={[-5.89, 0.36, 3.81]} rotation={[0, Math.PI / 2, 0]} scale={[1.65, 2.08, 2.08]}>
                        <mesh geometry={nodes.Plane001_0.geometry} material={materials.Glass} />
                    </group>
                    <mesh geometry={nodes.Cylinder001_0.geometry} material={materials.Laptop_licht} />
                    <group position={[-4.59, -2.89, 2.09]} rotation={[0, 0, 0.41]} scale={[0.07, 0.11, 0.01]}>
                        <mesh geometry={nodes.Cube054_0.geometry} material={materials.Laptop_licht} />
                    </group>
                    <mesh geometry={nodes.Cube055_0.geometry} material={materials.Laptop_licht} />
                    <mesh geometry={nodes.Cube056_0.geometry} material={materials.Laptop_donker} />
                    <mesh geometry={nodes.Cube056_1.geometry} material={materials.Laptop_scherm} />
                    <mesh geometry={nodes.Cube057_0.geometry} material={materials.Laptop_donker} />
                    <group position={[-5.43, -3.65, 3.92]} scale={[0.32, 1.51, 0.05]}>
                        <mesh geometry={nodes.Cube058_0.geometry} material={materials.material} />
                    </group>
                    <group position={[-4.95, -1.01, 2.62]} rotation={[-0.25, -0.21, 2.25]} scale={[0.19, 0.18, 0.24]}>
                        <mesh geometry={nodes.Sphere002_0.geometry} material={materials.Laptop_licht} />
                    </group>
                    <group position={[-5.02, -0.93, 2.87]} rotation={[-0.32, -0.26, 2.24]} scale={0.1}>
                        <mesh geometry={nodes.Cylinder003_0.geometry} material={materials.Laptop_licht} />
                        <mesh geometry={nodes.Cylinder003_1.geometry} material={materials.Licht} />
                    </group>
                    <group position={[-5.21, -0.71, 2.42]} rotation={[-Math.PI / 2, -0.71, Math.PI / 2]} scale={0.33}>
                        <mesh geometry={nodes.NurbsPath001_0.geometry} material={materials.Metaal} />
                    </group>
                    <group position={[-5.21, -0.71, 2.04]} rotation={[0, 0, 2.28]} scale={[0.2, 0.2, 0.1]}>
                        <mesh geometry={nodes.Sphere003_0.geometry} material={materials.Laptop_licht} />
                    </group>
                    <group position={[-1.7, 5.33, 1.88]} rotation={[0, 0, 1.76]} scale={[0.2, 0.2, 0.1]}>
                        <mesh geometry={nodes.Sphere004_0.geometry} material={materials.Laptop_licht} />
                    </group>
                    <group position={[-1.7, 5.33, 2.26]} rotation={[-Math.PI / 2, -0.19, Math.PI / 2]} scale={0.33}>
                        <mesh geometry={nodes.NurbsPath002_0.geometry} material={materials.Metaal} />
                    </group>
                    <group position={[-1.64, 5.05, 2.71]} rotation={[-0.4, -0.08, 1.75]} scale={0.1}>
                        <mesh geometry={nodes.Cylinder004_0.geometry} material={materials.Laptop_licht} />
                        <mesh geometry={nodes.Cylinder004_1.geometry} material={materials.Licht} />
                    </group>
                    <group position={[-1.62, 4.95, 2.45]} rotation={[-0.32, -0.06, 1.75]} scale={[0.19, 0.18, 0.24]}>
                        <mesh geometry={nodes.Sphere005_0.geometry} material={materials.Laptop_licht} />
                    </group>
                    <group position={[-5.55, -4.49, 4.21]} scale={[0.16, 0.08, 0.24]}>
                        <mesh geometry={nodes.Cube060_0.geometry} material={materials.Laptop_donker} />
                        <mesh geometry={nodes.Cube060_1.geometry} material={materials.material} />
                    </group>
                    <group position={[-5.52, -4.3, 4.25]} scale={[0.18, 0.1, 0.3]}>
                        <mesh geometry={nodes.Cube061_0.geometry} material={materials.Dekbed} />
                        <mesh geometry={nodes.Cube061_1.geometry} material={materials.material} />
                    </group>
                    <group position={[-5.54, -4.09, 4.18]} scale={[0.18, 0.11, 0.23]}>
                        <mesh geometry={nodes.Cube062_0.geometry} material={materials.Vloer} />
                        <mesh geometry={nodes.Cube062_1.geometry} material={materials.material} />
                    </group>
                    <group position={[-5.54, -3.92, 4.16]} scale={[0.18, 0.05, 0.2]}>
                        <mesh geometry={nodes.Cube063_0.geometry} material={materials.Kussen} />
                        <mesh geometry={nodes.Cube063_1.geometry} material={materials.material} />
                    </group>
                    <group position={[-5.52, -4.65, 4.21]} scale={[0.19, 0.08, 0.24]}>
                        <mesh geometry={nodes.Cube064_0.geometry} material={materials.Muren} />
                        <mesh geometry={nodes.Cube064_1.geometry} material={materials.material} />
                    </group>
                    <group position={[-5.52, -2.83, 4.28]} scale={[0.19, 0.08, 0.33]}>
                        <mesh geometry={nodes.Cube065_0.geometry} material={materials.Muren} />
                        <mesh geometry={nodes.Cube065_1.geometry} material={materials.material} />
                    </group>
                    <group position={[-5.54, -3.2, 4.16]} scale={[0.18, 0.05, 0.2]}>
                        <mesh geometry={nodes.Cube066_0.geometry} material={materials.Kussen} />
                        <mesh geometry={nodes.Cube066_1.geometry} material={materials.material} />
                    </group>
                    <group position={[-5.54, -3.36, 4.28]} scale={[0.18, 0.09, 0.31]}>
                        <mesh geometry={nodes.Cube067_0.geometry} material={materials.Vloer} />
                        <mesh geometry={nodes.Cube067_1.geometry} material={materials.material} />
                    </group>
                    <group position={[-5.52, -3.78, 4.18]} scale={[0.18, 0.07, 0.21]}>
                        <mesh geometry={nodes.Cube068_0.geometry} material={materials.Dekbed} />
                        <mesh geometry={nodes.Cube068_1.geometry} material={materials.material} />
                    </group>
                    <group position={[-5.49, -3.59, 4.21]} scale={[0.23, 0.12, 0.24]}>
                        <mesh geometry={nodes.Cube069_0.geometry} material={materials.Laptop_donker} />
                        <mesh geometry={nodes.Cube069_1.geometry} material={materials.material} />
                    </group>
                    <group position={[-5.52, -2.65, 4.21]} scale={[0.2, 0.08, 0.24]}>
                        <mesh geometry={nodes.Cube070_0.geometry} material={materials.Laptop_donker} />
                        <mesh geometry={nodes.Cube070_1.geometry} material={materials.material} />
                    </group>
                    <group position={[-5.52, -3.06, 4.18]} scale={[0.18, 0.07, 0.21]}>
                        <mesh geometry={nodes.Cube071_0.geometry} material={materials.Dekbed} />
                        <mesh geometry={nodes.Cube071_1.geometry} material={materials.material} />
                    </group>
                    <group position={[-5.54, -2.95, 4.18]} rotation={[0, 0, -Math.PI]} scale={[-0.18, 0.03, 0.23]}>
                        <mesh geometry={nodes.Cube072_0.geometry} material={materials.Vloer} />
                        <mesh geometry={nodes.Cube072_1.geometry} material={materials.material} />
                    </group>
                    <group position={[1.57, 5.26, 1.99]} rotation={[-0.1, 0.05, -0.06]} scale={[0.13, 0.01, 0.13]}>
                        <mesh geometry={nodes.Cube075_0.geometry} material={materials.Vloer} />
                    </group>
                    <group position={[1.47, 5.23, 2.16]} rotation={[-0.11, 0.06, -0.48]} scale={[0.19, 0.01, 0.23]}>
                        <mesh geometry={nodes.Cube076_0.geometry} material={materials.Vloer} />
                        <mesh geometry={nodes.Cube076_1.geometry} material={materials.Foto1} />
                    </group>
                    <group position={[1.92, 4.97, 2.06]} rotation={[-0.09, 0.08, -0.74]} scale={[0.12, 0.01, 0.15]}>
                        <mesh geometry={nodes.Cube077_0.geometry} material={materials.Dekbed} />
                        <mesh geometry={nodes.Cube077_1.geometry} material={materials.Foto2} />
                    </group>
                    <group position={[1.98, 4.97, 1.92]} rotation={[-0.08, 0.07, -0.33]} scale={[0.08, 0.01, 0.08]}>
                        <mesh geometry={nodes.Cube078_0.geometry} material={materials.Vloer} />
                    </group>
                    <group position={[-0.68, 5.37, 2.13]} rotation={[-0.11, -0.05, 0.43]} scale={[0.13, 0.01, 0.2]}>
                        <mesh geometry={nodes.Cube079_0.geometry} material={materials.Laptop_donker} />
                        <mesh geometry={nodes.Cube079_1.geometry} material={materials.Foto3} />
                    </group>
                    <group position={[-0.65, 5.45, 1.98]} rotation={[-0.1, -0.04, 0.85]} scale={[0.11, 0.01, 0.12]}>
                        <mesh geometry={nodes.Cube080_0.geometry} material={materials.Vloer} />
                    </group>
                    <mesh geometry={nodes.Cube081_0.geometry} material={materials.Schilderij} />
                    <group position={[-3.05, -2.18, 0.36]} rotation={[Math.PI / 2, -0.16, 3.14]} scale={[-0.09, 0.09, 0.06]}>
                        <mesh geometry={nodes.Cylinder013_0.geometry} material={materials.Donker} />
                    </group>
                    <group position={[-3.07, -2.9, 0.36]} rotation={[-1.57, -1.52, 0]} scale={[-0.09, 0.09, 0.06]}>
                        <mesh geometry={nodes.Cylinder014_0.geometry} material={materials.Donker} />
                    </group>
                    <group position={[-3.95, -3.05, 0.36]} rotation={[-Math.PI / 2, 0.3, 0]} scale={[-0.09, 0.09, 0.06]}>
                        <mesh geometry={nodes.Cylinder015_0.geometry} material={materials.Donker} />
                    </group>
                    <group position={[-4.33, -2.3, 0.36]} rotation={[Math.PI / 2, -0.04, -Math.PI]} scale={[-0.09, 0.09, 0.06]}>
                        <mesh geometry={nodes.Cylinder016_0.geometry} material={materials.Donker} />
                    </group>
                    <group position={[-3.71, -1.72, 0.36]} rotation={[1.57, -1.09, -Math.PI]} scale={[-0.09, 0.09, 0.06]}>
                        <mesh geometry={nodes.Cylinder017_0.geometry} material={materials.Donker} />
                    </group>
                    <group position={[-3.63, -2.43, 1.27]} rotation={[-Math.PI, 0, 1.09]} scale={[-0.11, 0.11, 0.11]}>
                        <mesh geometry={nodes.Cylinder018_0.geometry} material={materials.Donker} />
                    </group>
                    <group position={[-3.63, -2.43, 0.59]} rotation={[-Math.PI, 0, 1.09]} scale={[-0.11, 0.11, 0.11]}>
                        <mesh geometry={nodes.Cylinder019_0.geometry} material={materials.Donker} />
                    </group>
                    <group position={[-4.2, -2.33, 0.55]} rotation={[0, 0, -0.23]} scale={[-0.51, 0.07, 0.07]}>
                        <mesh geometry={nodes.Cube089_0.geometry} material={materials.Donker} />
                    </group>
                    <group position={[-3.89, -2.91, 0.55]} rotation={[0, 0, 1.09]} scale={[-0.51, 0.07, 0.07]}>
                        <mesh geometry={nodes.Cube090_0.geometry} material={materials.Donker} />
                    </group>
                    <group position={[-3.71, -1.87, 0.55]} rotation={[0, 0, -1.47]} scale={[-0.51, 0.07, 0.07]}>
                        <mesh geometry={nodes.Cube091_0.geometry} material={materials.Donker} />
                    </group>
                    <group position={[-3.2, -2.25, 0.55]} rotation={[0, 0, -2.75]} scale={[-0.51, 0.07, 0.07]}>
                        <mesh geometry={nodes.Cube092_0.geometry} material={materials.Donker} />
                    </group>
                    <group position={[-3.2, -2.79, 0.55]} rotation={[0, 0, 2.43]} scale={[-0.51, 0.07, 0.07]}>
                        <mesh geometry={nodes.Cube093_0.geometry} material={materials.Donker} />
                    </group>
                    <group position={[-3.63, -2.43, 0.98]} rotation={[0, 0, 2.05]} scale={[0.06, 0.06, 0.5]}>
                        <mesh geometry={nodes.Cylinder020_0.geometry} material={materials.Metaal} />
                    </group>
                    <group position={[-3.17, -2.19, 2]} rotation={[1.08, -1.04, 2.71]} scale={[0.63, 0.69, 0.11]}>
                        <mesh geometry={nodes.Cube094_0.geometry} material={materials.Kussen} />
                    </group>
                    <group position={[-3.63, -2.43, 1.38]} rotation={[0, 0, 2.05]} scale={[0.63, 0.63, 0.11]}>
                        <mesh geometry={nodes.Cube095_0.geometry} material={materials.Kussen} />
                    </group>
                    <group position={[-6.42, 1.18, 3.11]} rotation={[0, 0.14, 3.12]} scale={[0.01, 0.01, 0.29]}>
                        <mesh geometry={nodes.Cylinder026_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.44, 1.18, 3.37]} rotation={[0.02, 0.6, 3.11]} scale={0.05}>
                        <mesh geometry={nodes.Plane033_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.4, 1.13, 3.39]} rotation={[-0.45, 0.29, -1.85]} scale={0.05}>
                        <mesh geometry={nodes.Plane034_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.41, 1.24, 3.29]} rotation={[0.46, 0.24, 1.72]} scale={0.05}>
                        <mesh geometry={nodes.Plane035_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.35, 1.16, 3.25]} rotation={[-0.22, -0.26, -0.52]} scale={0.05}>
                        <mesh geometry={nodes.Plane036_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.36, 1.21, 3.18]} rotation={[0.25, -0.25, 0.57]} scale={0.05}>
                        <mesh geometry={nodes.Plane037_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.34, 1.19, 3.45]} rotation={[0.17, -0.51, 0.39]} scale={0.05}>
                        <mesh geometry={nodes.Plane038_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.45, 1.21, 3.17]} rotation={[0.32, 0.49, 2.37]} scale={0.05}>
                        <mesh geometry={nodes.Plane039_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.38, 1.36, 3.13]} rotation={[-0.55, 0.19, -2.03]} scale={0.05}>
                        <mesh geometry={nodes.Plane040_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.39, 1.47, 3.42]} rotation={[0.49, 0.23, 2.04]} scale={0.05}>
                        <mesh geometry={nodes.Plane041_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.4, 1.44, 3.14]} rotation={[0.21, 0.28, 2.26]} scale={0.05}>
                        <mesh geometry={nodes.Plane042_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.35, 1.46, 3.22]} rotation={[0.3, -0.16, 1.29]} scale={0.05}>
                        <mesh geometry={nodes.Plane043_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.41, 1.39, 3.26]} rotation={[-0.34, 0.4, -2.68]} scale={0.05}>
                        <mesh geometry={nodes.Plane044_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.31, 1.42, 3.36]} rotation={[-0.24, -0.48, -0.22]} scale={0.05}>
                        <mesh geometry={nodes.Plane045_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.36, 1.38, 3.34]} rotation={[-0.6, -0.09, -1.44]} scale={0.05}>
                        <mesh geometry={nodes.Plane046_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.36, 1.39, 3.08]} rotation={[-0.14, -0.02, -1.41]} scale={[0.01, 0.01, 0.29]}>
                        <mesh geometry={nodes.Cylinder027_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.5, 1.3, 3.08]} rotation={[0, -0.14, 0]} scale={[0.01, 0.01, 0.29]}>
                        <mesh geometry={nodes.Cylinder028_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.49, 1.3, 3.34]} rotation={[0, -0.61, 0]} scale={0.05}>
                        <mesh geometry={nodes.Plane047_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.52, 1.35, 3.36]} rotation={[0.45, -0.28, 1.32]} scale={0.05}>
                        <mesh geometry={nodes.Plane048_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.51, 1.25, 3.26]} rotation={[-0.46, -0.25, -1.4]} scale={0.05}>
                        <mesh geometry={nodes.Plane049_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.57, 1.32, 3.22]} rotation={[0.22, 0.27, 2.65]} scale={0.05}>
                        <mesh geometry={nodes.Plane050_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.56, 1.27, 3.14]} rotation={[-0.25, 0.25, -2.55]} scale={0.05}>
                        <mesh geometry={nodes.Plane051_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.58, 1.29, 3.42]} rotation={[-0.18, 0.51, -2.73]} scale={0.05}>
                        <mesh geometry={nodes.Plane052_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.47, 1.28, 3.13]} rotation={[-0.31, -0.5, -0.75]} scale={0.05}>
                        <mesh geometry={nodes.Plane053_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.4, 1.3, 2.94]} scale={0.16}>
                        <mesh geometry={nodes.Plane054_0.geometry} material={materials.Dirt} />
                    </group>
                    <group position={[-6.4, 1.3, 2.79]} scale={[0.19, 0.19, 0.15]}>
                        <mesh geometry={nodes.Cylinder029_0.geometry} material={materials.Flowerpot} />
                    </group>
                    <group position={[-6.46, -0.5, 2.79]} rotation={[0, 0, 2.73]} scale={[0.19, 0.19, 0.15]}>
                        <mesh geometry={nodes.Cylinder030_0.geometry} material={materials.Flowerpot} />
                    </group>
                    <group position={[-6.46, -0.5, 2.94]} rotation={[0, 0, 2.73]} scale={0.16}>
                        <mesh geometry={nodes.Plane055_0.geometry} material={materials.Dirt} />
                    </group>
                    <group position={[-6.38, -0.51, 3.13]} rotation={[0.48, 0.34, 1.98]} scale={0.05}>
                        <mesh geometry={nodes.Plane056_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.28, -0.56, 3.42]} rotation={[-0.06, -0.54, -0.06]} scale={0.05}>
                        <mesh geometry={nodes.Plane057_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.3, -0.54, 3.14]} rotation={[0.13, -0.33, 0.17]} scale={0.05}>
                        <mesh geometry={nodes.Plane058_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.31, -0.59, 3.22]} rotation={[-0.3, -0.16, -0.9]} scale={0.05}>
                        <mesh geometry={nodes.Plane059_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.33, -0.5, 3.26]} rotation={[0.51, 0.05, 1.38]} scale={0.05}>
                        <mesh geometry={nodes.Plane060_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.36, -0.59, 3.36]} rotation={[-0.31, 0.44, -2.23]} scale={0.05}>
                        <mesh geometry={nodes.Plane061_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.38, -0.54, 3.34]} rotation={[0.27, 0.55, 2.66]} scale={0.05}>
                        <mesh geometry={nodes.Plane062_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.36, -0.54, 3.08]} rotation={[0.06, 0.13, 2.73]} scale={[0.01, 0.01, 0.29]}>
                        <mesh geometry={nodes.Cylinder031_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.53, -0.57, 3.08]} rotation={[0.14, -0.04, 1.32]} scale={[0.01, 0.01, 0.29]}>
                        <mesh geometry={nodes.Cylinder032_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.52, -0.55, 3.34]} rotation={[0.59, -0.14, 1.37]} scale={0.05}>
                        <mesh geometry={nodes.Plane063_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.58, -0.57, 3.36]} rotation={[0.41, 0.34, 2.5]} scale={0.05}>
                        <mesh geometry={nodes.Plane064_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.48, -0.59, 3.26]} rotation={[0.15, -0.5, 0.02]} scale={0.05}>
                        <mesh geometry={nodes.Plane065_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.56, -0.63, 3.22]} rotation={[-0.21, 0.27, -2.26]} scale={0.05}>
                        <mesh geometry={nodes.Plane066_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.51, -0.63, 3.14]} rotation={[-0.3, -0.18, -1.29]} scale={0.05}>
                        <mesh geometry={nodes.Plane067_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.53, -0.65, 3.42]} rotation={[-0.54, -0.03, -1.46]} scale={0.05}>
                        <mesh geometry={nodes.Plane068_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.5, -0.55, 3.13]} rotation={[0.45, -0.39, 0.74]} scale={0.05}>
                        <mesh geometry={nodes.Plane069_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.37, -0.43, 3.17]} rotation={[-0.49, -0.33, -1.18]} scale={0.05}>
                        <mesh geometry={nodes.Plane070_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.47, -0.38, 3.45]} rotation={[0.07, 0.53, 3.06]} scale={0.05}>
                        <mesh geometry={nodes.Plane071_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.45, -0.4, 3.18]} rotation={[-0.13, 0.33, -2.99]} scale={0.05}>
                        <mesh geometry={nodes.Plane072_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.44, -0.35, 3.25]} rotation={[0.31, 0.15, 2.22]} scale={0.05}>
                        <mesh geometry={nodes.Plane073_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.42, -0.44, 3.29]} rotation={[-0.52, -0.04, -1.78]} scale={0.05}>
                        <mesh geometry={nodes.Plane074_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.38, -0.35, 3.39]} rotation={[0.3, -0.44, 0.89]} scale={0.05}>
                        <mesh geometry={nodes.Plane075_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.37, -0.41, 3.37]} rotation={[-0.28, -0.54, -0.51]} scale={0.05}>
                        <mesh geometry={nodes.Plane076_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-6.39, -0.4, 3.11]} rotation={[-0.06, -0.13, -0.44]} scale={[0.01, 0.01, 0.29]}>
                        <mesh geometry={nodes.Cylinder033_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.03, 5.26, 2.23]} rotation={[-0.14, 0.01, -1.63]} scale={[0, 0, 0.22]}>
                        <mesh geometry={nodes.Cylinder034_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.03, 5.25, 2.43]} rotation={[-0.6, 0.03, -1.62]} scale={0.04}>
                        <mesh geometry={nodes.Plane077_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-0.99, 5.27, 2.44]} rotation={[-0.34, -0.41, -0.45]} scale={0.04}>
                        <mesh geometry={nodes.Plane078_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.07, 5.27, 2.36]} rotation={[-0.24, 0.46, -2.91]} scale={0.04}>
                        <mesh geometry={nodes.Plane079_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.01, 5.31, 2.34]} rotation={[0.26, -0.22, 1.07]} scale={0.04}>
                        <mesh geometry={nodes.Plane080_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.05, 5.31, 2.28]} rotation={[0.27, 0.23, 2.04]} scale={0.04}>
                        <mesh geometry={nodes.Plane081_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.04, 5.33, 2.49]} rotation={[0.52, 0.13, 1.84]} scale={0.04}>
                        <mesh geometry={nodes.Plane082_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.05, 5.24, 2.27]} rotation={[-0.51, 0.3, -2.22]} scale={0.04}>
                        <mesh geometry={nodes.Plane083_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.17, 5.3, 2.24]} rotation={[-0.24, -0.53, -0.61]} scale={0.04}>
                        <mesh geometry={nodes.Plane084_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.26, 5.3, 2.46]} rotation={[-0.25, 0.48, -2.59]} scale={0.04}>
                        <mesh geometry={nodes.Plane085_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.24, 5.29, 2.25]} rotation={[-0.28, 0.21, -2.43]} scale={0.04}>
                        <mesh geometry={nodes.Plane086_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.25, 5.32, 2.31]} rotation={[0.18, 0.29, 2.77]} scale={0.04}>
                        <mesh geometry={nodes.Plane087_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.2, 5.27, 2.34]} rotation={[-0.43, -0.3, -1.28]} scale={0.04}>
                        <mesh geometry={nodes.Plane088_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.21, 5.35, 2.42]} rotation={[0.48, -0.23, 1.43]} scale={0.04}>
                        <mesh geometry={nodes.Plane089_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.18, 5.31, 2.41]} rotation={[0.09, -0.6, 0.15]} scale={0.04}>
                        <mesh geometry={nodes.Plane090_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.2, 5.31, 2.2]} rotation={[0.02, -0.14, 0.13]} scale={[0, 0, 0.22]}>
                        <mesh geometry={nodes.Cylinder035_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.13, 5.2, 2.2]} rotation={[0.14, 0, 1.54]} scale={[0, 0, 0.22]}>
                        <mesh geometry={nodes.Cylinder036_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.13, 5.21, 2.41]} rotation={[0.6, -0.02, 1.54]} scale={0.04}>
                        <mesh geometry={nodes.Plane091_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.17, 5.19, 2.42]} rotation={[0.33, 0.42, 2.72]} scale={0.04}>
                        <mesh geometry={nodes.Plane092_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.09, 5.19, 2.34]} rotation={[0.26, -0.45, 0.26]} scale={0.04}>
                        <mesh geometry={nodes.Plane093_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.15, 5.15, 2.31]} rotation={[-0.27, 0.22, -2.04]} scale={0.04}>
                        <mesh geometry={nodes.Plane094_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.11, 5.16, 2.25]} rotation={[-0.26, -0.24, -1.08]} scale={0.04}>
                        <mesh geometry={nodes.Plane095_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.12, 5.14, 2.46]} rotation={[-0.52, -0.14, -1.28]} scale={0.04}>
                        <mesh geometry={nodes.Plane096_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.11, 5.22, 2.24]} rotation={[0.51, -0.29, 0.94]} scale={0.04}>
                        <mesh geometry={nodes.Plane097_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.13, 5.28, 2.09]} rotation={[0, 0, 1.54]} scale={0.13}>
                        <mesh geometry={nodes.Plane098_0.geometry} material={materials.Dirt} />
                    </group>
                    <group position={[-1.13, 5.28, 1.98]} rotation={[0, 0, 1.54]} scale={[0.15, 0.15, 0.12]}>
                        <mesh geometry={nodes.Cylinder037_0.geometry} material={materials.Flowerpot} />
                    </group>
                    <group position={[5.54, 0.96, 2.33]} scale={[0.14, 0.14, 2.6]}>
                        <mesh geometry={nodes.Cube096_0.geometry} material={materials.material} />
                    </group>
                    <group position={[5.54, 3.25, 2.33]} scale={[0.14, 0.14, 2.6]}>
                        <mesh geometry={nodes.Cube097_0.geometry} material={materials.material} />
                    </group>
                    <group position={[5.54, 2.1, 4.78]} rotation={[Math.PI / 2, 0, 0]} scale={[0.14, 0.14, 1.28]}>
                        <mesh geometry={nodes.Cube098_0.geometry} material={materials.material} />
                    </group>
                    <group position={[1.13, 3.87, 1.71]} rotation={[-0.1, 0, 0.4]} scale={[0.32, 0.57, 0.32]}>
                        <mesh geometry={nodes.Sphere006_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[1.38, 3.72, 1.87]} rotation={[-0.28, 0.39, 0.08]} scale={[0.1, 0.03, 0.1]}>
                        <mesh geometry={nodes.Sphere007_0.geometry} material={materials.Laptop_donker} />
                    </group>
                    <group position={[1.07, 3.59, 1.88]} rotation={[0.24, -0.41, 0.73]} scale={[0.1, 0.03, 0.1]}>
                        <mesh geometry={nodes.Sphere008_0.geometry} material={materials.Laptop_donker} />
                    </group>
                    <group position={[1.39, 3.57, 1.77]} rotation={[-0.1, 0, 0.63]} scale={0.03}>
                        <mesh geometry={nodes.NurbsPath003_0.geometry} material={materials.Laptop_donker} />
                    </group>
                    <group position={[1.17, 3.5, 1.78]} rotation={[-0.1, 0, 0.18]} scale={0.03}>
                        <mesh geometry={nodes.NurbsPath004_0.geometry} material={materials.Laptop_donker} />
                    </group>
                    <group position={[1.28, 3.54, 1.7]} rotation={[1.47, 0.27, 0]} scale={0.04}>
                        <mesh geometry={nodes.Cylinder038_0.geometry} material={materials.Laptop_donker} />
                    </group>
                    <group position={[1.13, 3.86, 1.6]} rotation={[-0.1, 0, 0.4]} scale={0.32}>
                        <mesh geometry={nodes.NurbsPath005_0.geometry} material={materials.Laptop_donker} />
                    </group>
                    <group position={[-5.36, 5.35, 0.36]} scale={[0.19, 0.17, 0.14]}>
                        <mesh geometry={nodes.Cube108_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[-2.99, 5.35, 0.36]} scale={[0.19, 0.17, 0.14]}>
                        <mesh geometry={nodes.Cube109_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[-2.99, 4.09, 0.36]} scale={[0.19, 0.17, 0.14]}>
                        <mesh geometry={nodes.Cube110_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[-5.39, 4.09, 0.36]} scale={[0.19, 0.17, 0.14]}>
                        <mesh geometry={nodes.Cube111_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[-4.18, 3.81, 0.77]} rotation={[0, 0, -Math.PI / 2]} scale={[0.04, 0.41, 0.03]}>
                        <mesh geometry={nodes.Cube112_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[-4.18, 3.81, 1.32]} rotation={[0, 0, -Math.PI / 2]} scale={[0.04, 0.41, 0.03]}>
                        <mesh geometry={nodes.Cube113_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[-4.18, 3.81, 1.92]} rotation={[0, 0, -Math.PI / 2]} scale={[0.04, 0.41, 0.03]}>
                        <mesh geometry={nodes.Cube114_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[-4.18, 3.81, 2.47]} rotation={[0, 0, -Math.PI / 2]} scale={[0.04, 0.41, 0.03]}>
                        <mesh geometry={nodes.Cube115_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[-4.18, 4.73, 1.61]} scale={[1.42, 0.84, 1.18]}>
                        <mesh geometry={nodes.Cube116_0.geometry} material={materials.Bedframe} />
                    </group>
                    <group position={[-5.68, 0.4, 5.54]} rotation={[Math.PI / 2, 0, 0]} scale={[0.09, 0.09, 2.23]}>
                        <mesh geometry={nodes.Cylinder039_0.geometry} material={materials.material} />
                    </group>
                    <group position={[-5.63, 0.39, 4.74]} rotation={[0, Math.PI / 2, 0]} scale={[0.84, 2, 1]}>
                        <mesh geometry={nodes.Plane099_0.geometry} material={materials.Gordijn} />
                    </group>
                    <group position={[-5.68, 0.4, 3.85]} rotation={[Math.PI / 2, 0, 0]} scale={[0.07, 0.07, 2.02]}>
                        <mesh geometry={nodes.Cylinder040_0.geometry} material={materials.material} />
                    </group>
                    <group position={[-5.7, 2.56, 4.59]} rotation={[-Math.PI, 0, 0]} scale={[0.03, 0.03, 0.96]}>
                        <mesh geometry={nodes.Cylinder041_0.geometry} material={materials.Root} />
                    </group>
                    <group position={[-4.78, 5.09, 2.78]} rotation={[-0.32, -0.14, 0.81]} scale={[0.23, 0.01, 0.23]}>
                        <mesh geometry={nodes.Cube117_0.geometry} material={materials.Vloer} />
                    </group>
                    <group position={[-4.9, 5.02, 3.18]} rotation={[-1.55, 1.16, 1.19]} scale={[0.33, 0.02, 0.4]}>
                        <mesh geometry={nodes.Cube118_0.geometry} material={materials.Vloer} />
                        <mesh geometry={nodes.Cube118_1.geometry} material={materials.Foto4} />
                    </group>
                    <group position={[-4.73, -0.28, 0.85]} rotation={[0.25, 0, 0]} scale={0.62}>
                        <mesh geometry={nodes.NurbsPath007_0.geometry} material={materials.Laptop_donker} />
                    </group>
                    <group position={[-4.73, -0.2, 0.67]} rotation={[0.25, 0, -Math.PI]} scale={[0.62, 0.15, 0.45]}>
                        <mesh geometry={nodes.Cube120_0.geometry} material={materials.Dekbed} />
                        <mesh geometry={nodes.Cube120_1.geometry} material={materials.Foto4} />
                    </group>
                    <group position={[-2.99, 4.98, 3.96]} rotation={[-0.29, 0.46, -2.09]} scale={[0.01, 0.01, 0.13]}>
                        <mesh geometry={nodes.Cylinder050_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-2.94, 5.03, 4.08]} rotation={[2.86, -0.37, 0.61]} scale={[-0.03, 0.03, 0.01]}>
                        <mesh geometry={nodes.Sphere021_0.geometry} material={materials.Laptop_licht} />
                    </group>
                    <group position={[-2.88, 5.1, 4.05]} rotation={[-0.28, 0.37, 2.54]} scale={0.04}>
                        <mesh geometry={nodes.Plane144_0.geometry} material={materials.Dekbed} />
                    </group>
                    <group position={[-2.85, 5.02, 4.06]} rotation={[-0.28, 0.37, 1.61]} scale={0.04}>
                        <mesh geometry={nodes.Plane145_0.geometry} material={materials.Dekbed} />
                    </group>
                    <group position={[-2.91, 4.95, 4.11]} rotation={[-0.28, 0.37, 0.33]} scale={0.04}>
                        <mesh geometry={nodes.Plane146_0.geometry} material={materials.Dekbed} />
                    </group>
                    <group position={[-2.99, 4.99, 4.13]} rotation={[-0.28, 0.37, -0.9]} scale={0.04}>
                        <mesh geometry={nodes.Plane147_0.geometry} material={materials.Dekbed} />
                    </group>
                    <group position={[-2.98, 5.09, 4.09]} rotation={[-0.28, 0.37, -2.33]} scale={0.04}>
                        <mesh geometry={nodes.Plane148_0.geometry} material={materials.Dekbed} />
                    </group>
                    <group position={[-2.95, 5.02, 4.07]} rotation={[2.86, -0.37, 0.61]} scale={[-0.03, 0.03, 0.02]}>
                        <mesh geometry={nodes.Sphere022_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.08, 5.05, 4.62]} rotation={[2.8, -0.31, 0.42]} scale={[-0.03, 0.03, 0.02]}>
                        <mesh geometry={nodes.Sphere023_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.12, 5.11, 4.65]} rotation={[-0.35, 0.31, -2.15]} scale={0.04}>
                        <mesh geometry={nodes.Plane149_0.geometry} material={materials.Dekbed} />
                    </group>
                    <group position={[-3.12, 5.02, 4.68]} rotation={[-0.35, 0.31, -0.72]} scale={0.04}>
                        <mesh geometry={nodes.Plane150_0.geometry} material={materials.Dekbed} />
                    </group>
                    <group position={[-3.02, 4.99, 4.66]} rotation={[-0.35, 0.31, 0.51]} scale={0.04}>
                        <mesh geometry={nodes.Plane151_0.geometry} material={materials.Dekbed} />
                    </group>
                    <group position={[-2.99, 5.07, 4.62]} rotation={[-0.35, 0.31, 1.8]} scale={0.04}>
                        <mesh geometry={nodes.Plane152_0.geometry} material={materials.Dekbed} />
                    </group>
                    <group position={[-3.03, 5.14, 4.6]} rotation={[-0.35, 0.31, 2.72]} scale={0.04}>
                        <mesh geometry={nodes.Plane153_0.geometry} material={materials.Dekbed} />
                    </group>
                    <group position={[-3.07, 5.06, 4.63]} rotation={[2.8, -0.31, 0.42]} scale={[-0.03, 0.03, 0.01]}>
                        <mesh geometry={nodes.Sphere024_0.geometry} material={materials.Laptop_licht} />
                    </group>
                    <group position={[-3.12, 5, 4.52]} rotation={[-0.37, 0.39, -1.89]} scale={[0.01, 0.01, 0.13]}>
                        <mesh geometry={nodes.Cylinder051_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.53, 5.08, 4.19]} rotation={[-0.19, -0.51, 0.08]} scale={[0.01, 0.01, 0.13]}>
                        <mesh geometry={nodes.Cylinder052_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.6, 5.09, 4.31]} rotation={[3.03, 0.45, -1.6]} scale={[-0.03, 0.03, 0.01]}>
                        <mesh geometry={nodes.Sphere025_0.geometry} material={materials.Laptop_licht} />
                    </group>
                    <group position={[-3.69, 5.08, 4.28]} rotation={[-0.11, -0.45, -1.54]} scale={0.04}>
                        <mesh geometry={nodes.Plane154_0.geometry} material={materials.Dekbed} />
                    </group>
                    <group position={[-3.65, 5.16, 4.29]} rotation={[-0.11, -0.45, -2.46]} scale={0.04}>
                        <mesh geometry={nodes.Plane155_0.geometry} material={materials.Dekbed} />
                    </group>
                    <group position={[-3.56, 5.17, 4.33]} rotation={[-0.11, -0.45, 2.54]} scale={0.04}>
                        <mesh geometry={nodes.Plane156_0.geometry} material={materials.Dekbed} />
                    </group>
                    <group position={[-3.54, 5.07, 4.35]} rotation={[-0.11, -0.45, 1.31]} scale={0.04}>
                        <mesh geometry={nodes.Plane157_0.geometry} material={materials.Dekbed} />
                    </group>
                    <group position={[-3.62, 5.02, 4.32]} rotation={[-0.11, -0.45, -0.12]} scale={0.04}>
                        <mesh geometry={nodes.Plane158_0.geometry} material={materials.Dekbed} />
                    </group>
                    <group position={[-3.59, 5.09, 4.29]} rotation={[3.03, 0.45, -1.6]} scale={[-0.03, 0.03, 0.02]}>
                        <mesh geometry={nodes.Sphere026_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.55, 4.52, 4.32]} rotation={[-2.7, -0.05, 2.79]} scale={[-0.03, 0.03, 0.02]}>
                        <mesh geometry={nodes.Sphere027_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.48, 4.51, 4.34]} rotation={[0.44, 0.05, 1.76]} scale={0.04}>
                        <mesh geometry={nodes.Plane159_0.geometry} material={materials.Dekbed} />
                    </group>
                    <group position={[-3.55, 4.57, 4.38]} rotation={[0.44, 0.05, -3.09]} scale={0.04}>
                        <mesh geometry={nodes.Plane160_0.geometry} material={materials.Dekbed} />
                    </group>
                    <group position={[-3.63, 4.52, 4.36]} rotation={[0.44, 0.05, -1.86]} scale={0.04}>
                        <mesh geometry={nodes.Plane161_0.geometry} material={materials.Dekbed} />
                    </group>
                    <group position={[-3.6, 4.44, 4.32]} rotation={[0.44, 0.05, -0.57]} scale={0.04}>
                        <mesh geometry={nodes.Plane162_0.geometry} material={materials.Dekbed} />
                    </group>
                    <group position={[-3.52, 4.42, 4.3]} rotation={[0.44, 0.05, 0.35]} scale={0.04}>
                        <mesh geometry={nodes.Plane163_0.geometry} material={materials.Dekbed} />
                    </group>
                    <group position={[-3.55, 4.51, 4.33]} rotation={[-2.7, -0.05, 2.79]} scale={[-0.03, 0.03, 0.01]}>
                        <mesh geometry={nodes.Sphere028_0.geometry} material={materials.Laptop_licht} />
                    </group>
                    <group position={[-3.56, 4.58, 4.21]} rotation={[0.52, 0.01, 2]} scale={[0.01, 0.01, 0.13]}>
                        <mesh geometry={nodes.Cylinder053_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.51, 4.82, 3.97]} rotation={[0.46, -0.3, 1.09]} scale={0.11}>
                        <mesh geometry={nodes.Plane164_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.56, 4.61, 4.62]} rotation={[-0.6, -0.26, -1.22]} scale={0.11}>
                        <mesh geometry={nodes.Plane165_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.48, 4.62, 4.01]} rotation={[-0.32, -0.34, -0.99]} scale={0.11}>
                        <mesh geometry={nodes.Plane166_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.61, 4.6, 4.18]} rotation={[-0.37, 0.11, -1.96]} scale={0.11}>
                        <mesh geometry={nodes.Plane167_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.46, 4.75, 4.26]} rotation={[0.23, -0.5, 0.4]} scale={0.11}>
                        <mesh geometry={nodes.Plane168_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.7, 4.74, 4.46]} rotation={[0.18, 0.38, 2.86]} scale={0.11}>
                        <mesh geometry={nodes.Plane169_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.59, 4.82, 4.43]} rotation={[0.52, -0.02, 1.68]} scale={0.11}>
                        <mesh geometry={nodes.Plane170_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.54, 4.73, 3.86]} rotation={[0.06, -0.07, 1.66]} scale={[0.01, 0.01, 0.64]}>
                        <mesh geometry={nodes.Cylinder054_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.46, 5.13, 3.86]} rotation={[-0.04, -0.08, 0.47]} scale={[0.01, 0.01, 0.64]}>
                        <mesh geometry={nodes.Cylinder055_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.39, 5.21, 4.43]} rotation={[0.19, -0.49, 0.54]} scale={0.11}>
                        <mesh geometry={nodes.Plane171_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.51, 5.28, 4.46]} rotation={[0.42, -0.02, 1.71]} scale={0.11}>
                        <mesh geometry={nodes.Plane172_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.4, 5.07, 4.26]} rotation={[-0.4, -0.38, -0.92]} scale={0.11}>
                        <mesh geometry={nodes.Plane173_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.6, 5.15, 4.18]} rotation={[-0.03, 0.38, 3.13]} scale={0.11}>
                        <mesh geometry={nodes.Plane174_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.53, 5.04, 4.01]} rotation={[-0.44, 0.15, -2.08]} scale={0.11}>
                        <mesh geometry={nodes.Plane175_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.57, 5.11, 4.62]} rotation={[-0.51, 0.42, -2.21]} scale={0.11}>
                        <mesh geometry={nodes.Plane176_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.37, 5.13, 3.97]} rotation={[-0.13, -0.53, -0.2]} scale={0.11}>
                        <mesh geometry={nodes.Plane177_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.35, 4.92, 3.35]} scale={[0.41, 0.41, 0.62]}>
                        <mesh geometry={nodes.Cylinder056_0.geometry} material={materials.Flowerpot} />
                    </group>
                    <group position={[-3.12, 4.86, 3.97]} rotation={[-0.29, -0.36, -0.7]} scale={0.11}>
                        <mesh geometry={nodes.Plane178_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.27, 4.88, 4.62]} rotation={[-0.2, 0.65, -2.7]} scale={0.11}>
                        <mesh geometry={nodes.Plane179_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.3, 4.84, 4.01]} rotation={[-0.27, 0.38, -2.51]} scale={0.11}>
                        <mesh geometry={nodes.Plane180_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.3, 4.96, 4.19]} rotation={[0.23, 0.41, 2.61]} scale={0.11}>
                        <mesh geometry={nodes.Plane181_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.16, 4.79, 4.25]} rotation={[-0.45, -0.12, -1.33]} scale={0.11}>
                        <mesh geometry={nodes.Plane182_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.14, 5.02, 4.47]} rotation={[0.44, -0.15, 1.25]} scale={0.11}>
                        <mesh geometry={nodes.Plane183_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.08, 4.91, 4.43]} rotation={[0, -0.46, 0]} scale={0.11}>
                        <mesh geometry={nodes.Plane184_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-3.2, 4.91, 3.86]} scale={[0.01, 0.01, 0.64]}>
                        <mesh geometry={nodes.Cylinder057_0.geometry} material={materials.Plant1} />
                    </group>
                    <group position={[-1.24, 5.08, 1.44]} rotation={[-1.57, 0.35, -3.14]} scale={[0.15, 0.06, 0.19]}>
                        <mesh geometry={nodes.Cube121_0.geometry} material={materials.Vloer} />
                        <mesh geometry={nodes.Cube121_1.geometry} material={materials.material} />
                    </group>
                    <group position={[-5.54, -4.82, 4.28]} scale={[0.18, 0.09, 0.31]}>
                        <mesh geometry={nodes.Cube123_0.geometry} material={materials.Vloer} />
                        <mesh geometry={nodes.Cube123_1.geometry} material={materials.material} />
                    </group>
                    <group position={[-5.54, -4.98, 4.16]} scale={[0.18, 0.05, 0.2]}>
                        <mesh geometry={nodes.Cube124_0.geometry} material={materials.Kussen} />
                        <mesh geometry={nodes.Cube124_1.geometry} material={materials.material} />
                    </group>
                    <group position={[-5.52, -2.38, 4.18]} scale={[0.18, 0.07, 0.21]}>
                        <mesh geometry={nodes.Cube125_0.geometry} material={materials.Dekbed} />
                        <mesh geometry={nodes.Cube125_1.geometry} material={materials.material} />
                    </group>
                    <group position={[-5.54, -2.51, 4.16]} scale={[0.18, 0.05, 0.2]}>
                        <mesh geometry={nodes.Cube127_0.geometry} material={materials.Kussen} />
                        <mesh geometry={nodes.Cube127_1.geometry} material={materials.material} />
                    </group>
                    <group position={[-4.54, -1.28, 2.05]} rotation={[-1.57, -0.95, 1.57]} scale={[0.01, 0.01, 0.12]}>
                        <mesh geometry={nodes.Cylinder058_0.geometry} material={materials.Donker} />
                        <mesh geometry={nodes.Cylinder058_1.geometry} material={materials.Bedframe} />
                        <mesh geometry={nodes.Cylinder058_2.geometry} material={materials.Dekbed} />
                    </group>
                    <mesh geometry={nodes.Cube128_0.geometry} material={materials.Material} />
                    <group position={[0.22, -0.3, 0]} rotation={[0, 0, -0.2]}>
                        <mesh geometry={nodes.Cube129_0.geometry} material={materials.Material} />
                    </group>
                </group>
            </group>
        </group>

    )
}

export default CatRoom