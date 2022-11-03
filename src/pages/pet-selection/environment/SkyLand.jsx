import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import SF from '../components/SF';

function SkyLand(props) {
  const { nodes, materials } = useGLTF('/models/rooms/sky_land.glb')
  return (
    <group>
      <SF />

      <group {...props} dispose={null} scale={17} position={[-10, -155, -40]}>
        <group rotation={[-Math.PI / 2, 0, 0.5]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, 11.76, 0]} rotation={[0, 0, -Math.PI]}>
              <group position={[-3.2, 1.41, -2.09]} rotation={[-Math.PI, -1.48, -Math.PI]} scale={0.43}>
                <mesh geometry={nodes.pasted__pasted__polySurface19507_pasted__lambert2_0.geometry} material={materials.pasted__lambert2} />
                <mesh geometry={nodes.pasted__pasted__polySurface19507_lambert1_0.geometry} material={materials.lambert1} />
              </group>
              <group position={[-1.14, 1.85, 2.06]} rotation={[0, 0.39, 0]} scale={0.21}>
                <mesh geometry={nodes.Columna_low4_Columna_low_0.geometry} material={materials.Columna_low} />
                <mesh geometry={nodes.Columna_low4_rama_columna_0.geometry} material={materials.rama_columna} />
              </group>
              <group position={[2.32, 1.85, 2.62]} rotation={[0, 0.39, 0]} scale={0.21}>
                <mesh geometry={nodes.Columna_low2_Columna_low_0.geometry} material={materials.Columna_low} />
                <mesh geometry={nodes.Columna_low2_rama_columna_0.geometry} material={materials.rama_columna} />
              </group>
              <group position={[1.51, 1.85, 0.78]} rotation={[0, 0.39, 0]} scale={0.21}>
                <mesh geometry={nodes.Columna_low3_Columna_low_0.geometry} material={materials.Columna_low} />
                <mesh geometry={nodes.Columna_low3_rama_columna_0.geometry} material={materials.rama_columna} />
              </group>
              <group position={[2.89, 2.5, 0]} rotation={[Math.PI, 0.05, 0]} scale={0.07}>
                <mesh geometry={nodes.grassPlantsM_2_pasto_0.geometry} material={materials.pasto} />
              </group>
              <group position={[-5.35, 1.45, 1.35]} rotation={[0, 1.29, 0]} scale={0.43}>
                <mesh geometry={nodes.pasted__pasted__polySurface19509_pasted__lambert2_0.geometry} material={materials.pasted__lambert2} />
                <mesh geometry={nodes.pasted__pasted__polySurface19509_lambert1_0.geometry} material={materials.lambert1} />
              </group>
              <group position={[-3.46, 2.48, 2.13]} rotation={[Math.PI, -0.62, 0]} scale={0.05}>
                <mesh geometry={nodes.PlantsM_7_pasto_0.geometry} material={materials.pasto} />
              </group>
              <group position={[-3.25, 2.5, 2.62]} rotation={[Math.PI, -1.18, 0]} scale={0.07}>
                <mesh geometry={nodes.PlantsM_6_pasto_0.geometry} material={materials.pasto} />
              </group>
              <group position={[4.13, 2.48, 1.48]} rotation={[Math.PI, 0, 0]} scale={0.05}>
                <mesh geometry={nodes.PlantsM_5_pasto_0.geometry} material={materials.pasto} />
              </group>
              <group position={[4.13, 2.5, 1.97]} rotation={[Math.PI, 0, 0]} scale={0.07}>
                <mesh geometry={nodes.PlantsM_4_pasto_0.geometry} material={materials.pasto} />
              </group>
              <group position={[2.89, 2.53, -2.78]} rotation={[Math.PI, 0.31, 0]} scale={0.04}>
                <mesh geometry={nodes.PlantsM_3_pasto_0.geometry} material={materials.pasto} />
              </group>
              <group position={[2.89, 2.5, -2.42]} rotation={[Math.PI, 0.44, 0]} scale={0.07}>
                <mesh geometry={nodes.PlantsM_2_pasto_0.geometry} material={materials.pasto} />
              </group>
              <group position={[2.26, 1.29, -1.51]} rotation={[0, 1.29, 0]} scale={0.43}>
                <mesh geometry={nodes.pasted__pasted__polySurface19502_pasted__lambert2_0.geometry} material={materials.pasted__lambert2} />
                <mesh geometry={nodes.pasted__pasted__polySurface19502_lambert1_0.geometry} material={materials.lambert1} />
              </group>
              {/* Земля */}
              <group position={[0, 7, 0]} rotation={[0, 0, Math.PI]} scale={0.012}>
                <mesh geometry={nodes.Land_low_Land_low_0.geometry} material={materials.Land_low} />
              </group>
              <group position={[3.95, 1.33, 0.94]} rotation={[-Math.PI, -0.36, -Math.PI]} scale={0.43}>
                <mesh geometry={nodes.pasted__pasted__polySurface19501_pasted__lambert2_0.geometry} material={materials.pasted__lambert2} />
                <mesh geometry={nodes.pasted__pasted__polySurface19501_lambert1_0.geometry} material={materials.lambert1} />
              </group>
              <group position={[-0.73, 1.29, -3.32]} rotation={[0, 1.29, 0]} scale={0.43}>
                <mesh geometry={nodes.pasted__pasted__polySurface19505_pasted__lambert2_0.geometry} material={materials.pasted__lambert2} />
                <mesh geometry={nodes.pasted__pasted__polySurface19505_lambert1_0.geometry} material={materials.lambert1} />
              </group>
              <group position={[3.86, 1.5, 3.28]} rotation={[-Math.PI, 0.6, -Math.PI]} scale={0.36}>
                <mesh geometry={nodes.pasted__pasted__polySurface19503_pasted__lambert2_0.geometry} material={materials.pasted__lambert2} />
                <mesh geometry={nodes.pasted__pasted__polySurface19503_lambert1_0.geometry} material={materials.lambert1} />
              </group>
              <group position={[-4.31, 2.51, -1.37]} rotation={[0, -1.52, Math.PI]} scale={0.04}>
                <mesh geometry={nodes.PlantsM_10_pasto_0.geometry} material={materials.pasto} />
              </group>
              <group position={[-3.33, 2.5, -1.82]} rotation={[Math.PI, -1.18, 0]} scale={0.07}>
                <mesh geometry={nodes.PlantsM_9_pasto_0.geometry} material={materials.pasto} />
              </group>
              <group position={[-4.02, 2.47, -1.38]} rotation={[0, -1.52, Math.PI]} scale={0.05}>
                <mesh geometry={nodes.PlantsM_8_pasto_0.geometry} material={materials.pasto} />
              </group>
              <group position={[-0.74, 2.53, -4.1]} rotation={[Math.PI, 0.75, 0]} scale={0.04}>
                <mesh geometry={nodes.PlantsM_13_pasto_0.geometry} material={materials.pasto} />
              </group>
              <group position={[-0.88, 2.53, -3.83]} rotation={[Math.PI, 0.75, 0]} scale={0.04}>
                <mesh geometry={nodes.PlantsM_12_pasto_0.geometry} material={materials.pasto} />
              </group>
              <group position={[-0.96, 2.53, -4]} rotation={[Math.PI, 0.31, 0]} scale={0.04}>
                <mesh geometry={nodes.PlantsM_11_pasto_0.geometry} material={materials.pasto} />
              </group>
              <group position={[0.08, 2.46, 1.16]} rotation={[0, 0.4, 0]} scale={[0.33, 0.11, 0.25]}>
                <mesh geometry={nodes.pSphere4_piedra_0.geometry} material={materials.piedra} />
              </group>
              <group position={[3.33, 2.46, 0]} scale={[0.17, 0.1, 0.17]}>
                <mesh geometry={nodes.pSphere1_piedra_0.geometry} material={materials.piedra} />
              </group>
              <group position={[0.24, 2.46, 1.52]} rotation={[0, 0.4, 0]} scale={[0.21, 0.07, 0.16]}>
                <mesh geometry={nodes.pSphere5_piedra_0.geometry} material={materials.piedra} />
              </group>
              <group position={[-2.28, 1.29, 4.45]} rotation={[0, 1.29, 0]} scale={0.43}>
                <mesh geometry={nodes.pasted__pasted__polySurface19508_pasted__lambert2_0.geometry} material={materials.pasted__lambert2} />
                <mesh geometry={nodes.pasted__pasted__polySurface19508_lambert1_0.geometry} material={materials.lambert1} />
              </group>
              <group position={[-0.66, 2.36, -0.24]} rotation={[0, -1.1, Math.PI]} scale={1.42}>
                <mesh geometry={nodes.Base_piedra_low_Base_piedra_low_0.geometry} material={materials.Base_piedra_low} />
              </group>
              <group position={[-1.94, 1.55, -3.25]} rotation={[-Math.PI, -0.38, -Math.PI]} scale={0.43}>
                <mesh geometry={nodes.pasted__pasted__polySurface19506_pasted__lambert2_0.geometry} material={materials.pasted__lambert2} />
                <mesh geometry={nodes.pasted__pasted__polySurface19506_lambert1_0.geometry} material={materials.lambert1} />
              </group>
              <group position={[-2.72, 2.46, 2.78]} rotation={[0, 0.4, 0]} scale={[0.18, 0.07, 0.16]}>
                <mesh geometry={nodes.pSphere6_piedra_0.geometry} material={materials.piedra} />
              </group>
              <group position={[-4.81, 2.46, 0.62]} rotation={[0, 0.4, 0]} scale={[0.31, 0.12, 0.28]}>
                <mesh geometry={nodes.pSphere7_piedra_0.geometry} material={materials.piedra} />
              </group>
              <group position={[0.73, 2.46, -3.9]} scale={[0.17, 0.1, 0.17]}>
                <mesh geometry={nodes.pSphere2_piedra_0.geometry} material={materials.piedra} />
              </group>
              <group position={[0.92, 2.46, -3.69]} scale={[0.08, 0.05, 0.08]}>
                <mesh geometry={nodes.pSphere3_piedra_0.geometry} material={materials.piedra} />
              </group>
              <group position={[-0.23, 1.85, 3.66]} rotation={[0, 0.39, 0]} scale={0.21}>
                <mesh geometry={nodes.Columna_low5_Columna_low_0.geometry} material={materials.Columna_low} />
                <mesh geometry={nodes.Columna_low5_rama_columna_0.geometry} material={materials.rama_columna} />
              </group>
            </group>
            <group position={[0.6, 9.87, -0.31]} rotation={[-0.21, 0.74, -3]} scale={0.48}>
              <mesh geometry={nodes.espada_samuraipCube2_lambert4_0.geometry} material={materials.lambert4} />
            </group>
          </group>
        </group>
      </group>
    </group>

  )
}

export default SkyLand