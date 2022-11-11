import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import Rabbit from '../components/Rabbit'

function Forest(props) {
    // const { nodes, materials } = useGLTF('/models/rooms/winter_forest.glb')
    const { nodes, materials } = useGLTF('./winter_forest.glb')
    return (
        <group>
            <Rabbit />
            <group {...props} dispose={null} position={[0, -20, -70]}>
                <group rotation={[-Math.PI / 2, 0, 0.7]} scale={15}>
                    <group position={[-6.24, -3.92, -0.99]} scale={[18.48, 18.48, 77.28]}>
                        <mesh geometry={nodes.Plane038_0.geometry} material={materials['Material.025']} />
                    </group>
                    <group position={[4.08, 1.01, 5.9]} rotation={[-0.17, -0.08, 1.64]} />
                    <group position={[1.12, 3.44, 11.42]} rotation={[-0.57, 0.28, 1.83]} />
                    <group position={[-5.52, 3.17, 0.03]} scale={0.63}>
                        <mesh geometry={nodes.Cube038_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube038_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-10.76, -8.94, 0.03]} rotation={[0, 0, 0.98]} scale={0.63}>
                        <mesh geometry={nodes.Cube039_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube039_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-8.29, 2.63, 0.01]} rotation={[0, 0, -3.11]} scale={0.54}>
                        <mesh geometry={nodes.Cube042_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube042_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-10.2, 1.49, 0.01]} rotation={[0, 0, -2.21]} scale={0.61}>
                        <mesh geometry={nodes.Cube047_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube047_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-6.42, -8.51, 0.03]} rotation={[0, 0, -0.97]} scale={0.66}>
                        <mesh geometry={nodes.Cube048_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube048_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-6.05, -12.16, 0.03]} rotation={[0, 0, -1.72]} scale={0.75}>
                        <mesh geometry={nodes.Cube049_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube049_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-9.95, -8.25, -0.13]} scale={0.41}>
                        <mesh geometry={nodes.Cube050_0.geometry} material={materials['Material.004']} />
                    </group>
                    <group position={[-9.32, -8.89, 0.3]} rotation={[0.07, 0.22, 0.31]} scale={0.41}>
                        <mesh geometry={nodes.Cube051_0.geometry} material={materials['Material.004']} />
                    </group>
                    <group position={[-8.48, -8.44, -0.22]} rotation={[0, 0.05, 0.23]} scale={0.34}>
                        <mesh geometry={nodes.Cube052_0.geometry} material={materials['Material.004']} />
                    </group>
                    <group position={[-6.79, -1.36, -0.22]} rotation={[0.05, 0.02, -0.83]} scale={0.34}>
                        <mesh geometry={nodes.Cube053_0.geometry} material={materials['Material.004']} />
                    </group>
                    <group position={[-7.6, -0.85, 0.3]} rotation={[0.22, 0.04, -0.74]} scale={0.41}>
                        <mesh geometry={nodes.Cube054_0.geometry} material={materials['Material.004']} />
                    </group>
                    <group position={[-7.35, 0.02, -0.13]} rotation={[0, 0, -1.06]} scale={0.41}>
                        <mesh geometry={nodes.Cube055_0.geometry} material={materials['Material.004']} />
                    </group>
                    <group position={[-6.42, -4.36, -0.01]} scale={9.74}>
                        <mesh geometry={nodes.Plane_0.geometry} material={materials['Material.005']} />
                    </group>
                    <group position={[-28.15, -9.27, -4.15]} rotation={[0.13, -0.32, -0.86]} scale={0.66}>
                        <mesh geometry={nodes.Cube040_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube040_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-21.47, -15.1, -1.73]} rotation={[0.36, -0.56, -3.07]} scale={0.66}>
                        <mesh geometry={nodes.Cube041_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube041_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-23.88, -11.17, -1.96]} rotation={[0.36, -0.56, -3.07]} scale={0.86}>
                        <mesh geometry={nodes.Cube043_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube043_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-25.5, 0.87, -2.55]} rotation={[-0.27, -0.77, 1.71]} scale={0.86}>
                        <mesh geometry={nodes.Cube044_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube044_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-24.95, 5.75, -3.26]} rotation={[-0.05, -0.41, -2.12]} scale={0.66}>
                        <mesh geometry={nodes.Cube046_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube046_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-13.19, -1.51, -0.3]} rotation={[-0.21, 0.01, -1.99]} scale={0.41}>
                        <mesh geometry={nodes.Cube056_0.geometry} material={materials['Material.004']} />
                    </group>
                    <group position={[-14.42, -3.99, 0.15]} rotation={[-0.61, 0.09, -1.72]} scale={0.41}>
                        <mesh geometry={nodes.Cube057_0.geometry} material={materials['Material.004']} />
                    </group>
                    <group position={[-14.07, -4.78, -0.04]} rotation={[0.05, 0.02, -1.73]} scale={0.34}>
                        <mesh geometry={nodes.Cube058_0.geometry} material={materials['Material.004']} />
                    </group>
                    <group position={[-13.43, -7.48, -0.14]} rotation={[-0.21, 0.01, -1.06]} scale={0.33}>
                        <mesh geometry={nodes.Cube059_0.geometry} material={materials['Material.004']} />
                    </group>
                    <group position={[-2.28, -7.31, -0.03]} rotation={[0.07, -0.28, -0.93]} scale={[0.33, 0.33, 0.44]}>
                        <mesh geometry={nodes.Cube061_0.geometry} material={materials['Material.004']} />
                    </group>
                    <group position={[-1.51, -7.01, -0.07]} rotation={[0.01, -0.02, -0.98]} scale={[0.37, 0.37, 0.23]}>
                        <mesh geometry={nodes.Cube062_0.geometry} material={materials['Material.004']} />
                    </group>
                    <group position={[-1.71, -8.07, -0.18]} rotation={[-0.07, -0.12, 0.98]} scale={0.33}>
                        <mesh geometry={nodes.Cube063_0.geometry} material={materials['Material.004']} />
                    </group>
                    <group position={[-0.28, 1.16, -0.07]} rotation={[-0.01, -0.02, -1.94]} scale={[0.37, 0.37, 0.23]}>
                        <mesh geometry={nodes.Cube065_0.geometry} material={materials['Material.004']} />
                    </group>
                    <group position={[-0.96, 1.61, -0.03]} rotation={[-0.19, -0.21, -1.92]} scale={[0.33, 0.33, 0.44]}>
                        <mesh geometry={nodes.Cube066_0.geometry} material={materials['Material.004']} />
                    </group>
                    <group position={[-1.08, 0.16, -0.29]} rotation={[-0.13, -0.01, -1.95]} scale={0.33}>
                        <mesh geometry={nodes.Cube067_0.geometry} material={materials['Material.004']} />
                    </group>
                    <group position={[3.99, 4.72, 0.03]} rotation={[0, 0, 2.1]} scale={0.75}>
                        <mesh geometry={nodes.Cube068_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube068_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[3.15, -11.7, 0.03]} rotation={[0, 0, -2.12]} scale={0.66}>
                        <mesh geometry={nodes.Cube069_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube069_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-0.47, 3.11, 0.03]} rotation={[0, 0, -2.12]} scale={0.46}>
                        <mesh geometry={nodes.Cube070_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube070_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-1.83, 16.09, -3.26]} rotation={[-0.41, -0.04, 2.83]} scale={0.66}>
                        <mesh geometry={nodes.Cube071_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube071_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-11.68, 16.98, -3.71]} rotation={[-0.7, 0.02, 0.51]} scale={0.66}>
                        <mesh geometry={nodes.Cube072_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube072_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-6.7, 15.47, -2.55]} rotation={[-0.81, 0.02, 0.5]} scale={0.86}>
                        <mesh geometry={nodes.Cube073_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube073_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-18.02, 11.05, -1.96]} rotation={[-0.51, -0.43, 1.67]} scale={0.86}>
                        <mesh geometry={nodes.Cube074_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube074_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-21.26, 7.78, -1.73]} rotation={[-0.51, -0.43, 1.67]} scale={0.66}>
                        <mesh geometry={nodes.Cube075_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube075_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-17.18, 15.65, -4.15]} rotation={[-0.29, -0.2, -2.24]} scale={0.66}>
                        <mesh geometry={nodes.Cube076_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube076_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-3.65, -25.68, -4.15]} rotation={[0.32, 0.13, 0.67]} scale={0.66}>
                        <mesh geometry={nodes.Cube077_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube077_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[2.15, -18.97, -1.73]} rotation={[0.59, 0.3, -1.69]} scale={0.66}>
                        <mesh geometry={nodes.Cube078_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube078_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-1.76, -21.4, -1.96]} rotation={[0.59, 0.3, -1.69]} scale={0.86}>
                        <mesh geometry={nodes.Cube079_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube079_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-13.8, -23.07, -2.55]} rotation={[0.79, -0.19, -2.81]} scale={0.86}>
                        <mesh geometry={nodes.Cube080_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube080_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-9.3, -25.69, -3.71]} rotation={[0.68, -0.17, -2.82]} scale={0.66}>
                        <mesh geometry={nodes.Cube081_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube081_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[-18.68, -22.54, -3.26]} rotation={[0.41, -0.05, -0.53]} scale={0.66}>
                        <mesh geometry={nodes.Cube082_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube082_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[11.49, -9.5, -3.71]} rotation={[0.39, 0.6, -1.67]} scale={0.66}>
                        <mesh geometry={nodes.Cube083_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube083_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[7.88, -13.24, -2.55]} rotation={[0.47, 0.68, -1.72]} scale={0.86}>
                        <mesh geometry={nodes.Cube084_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube084_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[9.33, 1.97, -2.42]} rotation={[-0.21, 0.62, -0.2]} scale={0.86}>
                        <mesh geometry={nodes.Cube085_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube085_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[7.67, 3.23, -1.73]} rotation={[-0.21, 0.62, -0.2]} scale={0.66}>
                        <mesh geometry={nodes.Cube086_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube086_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[13.04, -0.88, -4.6]} rotation={[-0.05, 0.34, 2.03]} scale={0.66}>
                        <mesh geometry={nodes.Cube087_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube087_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[8.62, 9.27, -2.55]} rotation={[-0.57, 0.6, -0.2]} scale={0.86}>
                        <mesh geometry={nodes.Cube090_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube090_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[2.6, 13.74, -2.72]} rotation={[-0.27, 0.46, -2.04]} scale={0.86}>
                        <mesh geometry={nodes.Cube091_0.geometry} material={materials['Material.002']} />
                        <mesh geometry={nodes.Cube091_1.geometry} material={materials['0001']} />
                    </group>
                    <group position={[24.61, -7.59, -9.35]} scale={0.67}>
                        <mesh geometry={nodes.Plane003_0.geometry} material={materials['Material.007']} />
                        <mesh geometry={nodes.Plane003_1.geometry} material={materials['Material.006']} />
                    </group>
                    <group position={[-17.4, -5.52, 0.34]} rotation={[0.69, -1.09, -2]} scale={0.83}>
                        <mesh geometry={nodes.Plane004_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[2.46, -8.47, 0.34]} rotation={[1.16, -0.48, -1.38]} scale={0.83}>
                        <mesh geometry={nodes.Plane002_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[-1.15, -8.24, -0.29]} rotation={[-0.07, -0.11, -1]} scale={0.33}>
                        <mesh geometry={nodes.Cube060_0.geometry} material={materials['Material.004']} />
                    </group>
                    <group position={[3.61, -3.03, 0.34]} rotation={[1.16, -0.48, -1.38]} scale={0.83}>
                        <mesh geometry={nodes.Plane005_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[-18.79, -7.38, 0.34]} rotation={[0.94, -0.92, -1.71]} scale={0.83}>
                        <mesh geometry={nodes.Plane006_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[0.5, -10.49, 0.22]} rotation={[1.39, -0.47, -1.37]} scale={0.83}>
                        <mesh geometry={nodes.Plane007_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[5.51, -9.14, 0.34]} rotation={[1.16, -0.48, -1.38]} scale={0.83}>
                        <mesh geometry={nodes.Plane008_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[6.23, -3.54, 0.34]} rotation={[1.16, -0.48, -1.38]} scale={0.83}>
                        <mesh geometry={nodes.Plane009_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[2.22, -0.59, 0.34]} rotation={[1.16, -0.48, -1.38]} scale={0.83}>
                        <mesh geometry={nodes.Plane010_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[5.38, -0.19, 0.34]} rotation={[1.16, -0.48, -1.38]} scale={0.83}>
                        <mesh geometry={nodes.Plane011_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[8.21, -0.71, 0.34]} rotation={[1.16, -0.48, -1.38]} scale={0.83}>
                        <mesh geometry={nodes.Plane012_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[6.23, -11.19, 0.34]} rotation={[1.16, -0.48, -1.38]} scale={0.83}>
                        <mesh geometry={nodes.Plane013_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[8.14, -12.89, 0.34]} rotation={[1.16, -0.48, -1.38]} scale={0.83}>
                        <mesh geometry={nodes.Plane014_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[-15.24, -3.7, 0.34]} rotation={[1.16, -0.48, -1.38]} scale={0.83}>
                        <mesh geometry={nodes.Plane015_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[10.73, -1.5, 0.34]} rotation={[1.16, -0.48, -1.38]} scale={0.83}>
                        <mesh geometry={nodes.Plane016_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[-18.24, -9.29, 0.34]} rotation={[1.2, 0.17, -1.11]} scale={0.83}>
                        <mesh geometry={nodes.Plane017_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[-17.75, -13.91, 0.34]} rotation={[1.21, -0.04, -1.19]} scale={0.83}>
                        <mesh geometry={nodes.Plane018_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[-19.87, -12.46, 0.34]} rotation={[1.15, -0.51, -1.39]} scale={0.83}>
                        <mesh geometry={nodes.Plane019_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[-16.02, -15.64, 0.34]} rotation={[1.2, 0.1, -1.14]} scale={0.83}>
                        <mesh geometry={nodes.Plane020_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[-13.27, -16.31, 0.34]} rotation={[1.13, 0.59, -0.92]} scale={0.83}>
                        <mesh geometry={nodes.Plane021_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[-10.07, -16.64, 0.34]} rotation={[1.1, 0.66, -0.87]} scale={0.83}>
                        <mesh geometry={nodes.Plane022_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[-4.03, -17.93, 0.34]} rotation={[1.1, 0.66, -0.87]} scale={0.83}>
                        <mesh geometry={nodes.Plane023_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[-7.22, -17.6, 0.34]} rotation={[1.13, 0.59, -0.92]} scale={0.83}>
                        <mesh geometry={nodes.Plane024_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[-1.09, -18.68, 0.34]} rotation={[1.13, 0.59, -0.92]} scale={0.83}>
                        <mesh geometry={nodes.Plane025_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[-1.39, -14.31, 0.34]} rotation={[1.1, 0.66, -0.87]} scale={0.83}>
                        <mesh geometry={nodes.Plane026_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[-0.4, -12.28, 0.34]} rotation={[1.1, 0.66, -0.87]} scale={0.83}>
                        <mesh geometry={nodes.Plane027_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[1.75, -13.68, 0.34]} rotation={[1.1, 0.66, -0.87]} scale={0.83}>
                        <mesh geometry={nodes.Plane028_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[1.62, -16.18, 0.34]} rotation={[-0.62, 1.12, 1.07]} scale={0.83}>
                        <mesh geometry={nodes.Plane029_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[-4.08, 2.26, 0.34]} rotation={[-0.24, -1.19, -3]} scale={0.83}>
                        <mesh geometry={nodes.Plane030_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[0.36, 2.26, 0.34]} rotation={[-0.24, -1.19, -3]} scale={0.83}>
                        <mesh geometry={nodes.Plane031_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[-13.53, -0.03, 0.34]} rotation={[-0.24, -1.19, -3]} scale={0.83}>
                        <mesh geometry={nodes.Plane032_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[-10.65, -0.29, 0.34]} rotation={[-0.24, -1.19, -3]} scale={0.83}>
                        <mesh geometry={nodes.Plane033_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[-12.99, 2.47, 0.34]} rotation={[-0.24, -1.19, -3]} scale={0.83}>
                        <mesh geometry={nodes.Plane034_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[6.23, -6.34, 0.34]} rotation={[1.16, -0.48, -1.38]} scale={0.83}>
                        <mesh geometry={nodes.Plane035_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[3.31, -6.34, 0.34]} rotation={[1.16, -0.48, -1.38]} scale={0.83}>
                        <mesh geometry={nodes.Plane036_0.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[-7.17, 1.05, 0.34]} rotation={[-0.24, -1.19, -3]} scale={0.83}>
                        <mesh geometry={nodes.Plane037_0.geometry} material={materials['Material.008']} />
                    </group>
                </group>
            </group>
        </group>

    )
}

export default Forest