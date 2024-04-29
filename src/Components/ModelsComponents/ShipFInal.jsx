

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ShipFinal(props) {
  const { nodes, materials } = useGLTF('/Models/ShipFinal.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.503, 0.571, 0.339]} rotation={[-0.001, 4.5, -0.001]} scale={1.5}>
        <mesh geometry={nodes.Cube012.geometry} material={materials.Pirate_Boat_MainColor} />
        <mesh geometry={nodes.Cube012_1.geometry} material={materials.Pirate_Boat_SecondColor} />
        <mesh geometry={nodes.Cube012_2.geometry} material={materials.Pirate_Boat_RoomCabin} />
        <mesh geometry={nodes.Cube012_3.geometry} material={materials.Pirate_Boat_Glass} />
        <mesh geometry={nodes.Cube012_4.geometry} material={materials.Pirate_Boat_FLoor} />
        <mesh geometry={nodes.Cube012_5.geometry} material={materials.Pirate_Boat_Black_Cannon} />
        <mesh geometry={nodes.Cube012_6.geometry} material={materials.Pirate_Boat_Brown_EstructureCannon} />
        <mesh geometry={nodes.Cube012_7.geometry} material={materials.Pirate_Boat_Black} />
        <mesh geometry={nodes.Cube012_8.geometry} material={materials.Pirate_Boat_Grey_Metal} />
        <mesh geometry={nodes.Cube012_9.geometry} material={materials.Pirate_Boat_Torch} />
        <mesh geometry={nodes.Cube012_10.geometry} material={materials.Pirate_Boat_Sail} />
        <mesh geometry={nodes.Cube012_11.geometry} material={materials.Pirate_Boat_Yellow_Metal} />
        <mesh geometry={nodes.Cube012_12.geometry} material={materials.Pirate_Boat_Barrel} />
        <mesh geometry={nodes.Cube012_13.geometry} material={materials.Pirate_Boat_Rope} />
      </group>
    </group>
  )
}

useGLTF.preload('/Models/ShipFinal.glb')
