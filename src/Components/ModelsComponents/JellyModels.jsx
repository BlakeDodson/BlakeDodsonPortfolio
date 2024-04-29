/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/Models/Jelly.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Float } from '@react-three/drei'
export function JellyModels(props) {
  const { nodes, materials } = useGLTF('Models/Jelly.gltf')
  return (
    <group {...props} dispose={null}>

      <Float 
       speed={2} // Slower speed for a more gentle effect
       rotationIntensity={-1} // Keeping your original rotation intensity
       floatIntensity={3} // Increased intensity for a more noticeable effect
       floatingRange={[.2, .22]} 
      >
      <mesh geometry={nodes.JellyFish006.geometry} material={materials['Material.001']} position={[-0.285, 3.715, 5.023]} rotation={[-Math.PI, 1.134, -Math.PI]} scale={0} />
      </Float>

      <Float 
       speed={2} // Slower speed for a more gentle effect
       rotationIntensity={1} // Keeping your original rotation intensity
       floatIntensity={2} // Increased intensity for a more noticeable effect
       floatingRange={[.2, .22]} 
      >

      <mesh geometry={nodes.JellyFish004.geometry} material={materials['Material.001']} position={[0.897, 6.217, 3.019]} rotation={[-0.046, 0.435, 0.045]} scale={0.001} />
      </Float>
   
      <Float 
       speed={2} // Slower speed for a more gentle effect
       rotationIntensity={2} // Keeping your original rotation intensity
       floatIntensity={3} // Increased intensity for a more noticeable effect
       floatingRange={[.2, .22]} 
      >
      <mesh geometry={nodes.JellyFish003.geometry} material={materials['Material.001']} position={[-1.693, 7.126, 3.587]} rotation={[0, 0.436, 0]} scale={0.001} />
      </Float>


      <Float 
       speed={2} // Slower speed for a more gentle effect
       rotationIntensity={-0.1} // Keeping your original rotation intensity
       floatIntensity={0.1} // Increased intensity for a more noticeable effect
       floatingRange={[.2, .22]} 
      >
      <mesh geometry={nodes.JellyFish006.geometry} material={materials['Material.001']} position={[-1.285, 4.715, 7.023]} rotation={[-Math.PI, 1.134, -Math.PI]} scale={0} />
      </Float>


      <Float 
       speed={1.5} // Slower speed for a more gentle effect
       rotationIntensity={2} // Keeping your original rotation intensity
       floatIntensity={3} // Increased intensity for a more noticeable effect
       floatingRange={[1, 2]} 
      >
      <mesh geometry={nodes.JellyFish004.geometry} material={materials['Material.001']} position={[3.897, 3.217, 4.019]} rotation={[-0.046, 0.435, 0.045]} scale={0.001} />
      </Float>


      <Float 
       speed={1.5} // Slower speed for a more gentle effect
       rotationIntensity={2} // Keeping your original rotation intensity
       floatIntensity={1} // Increased intensity for a more noticeable effect
       floatingRange={[1, 2]} 
      >
      <mesh geometry={nodes.JellyFish003.geometry} material={materials['Material.001']} position={[-5.693, 4.126, 1.587]} rotation={[0, 0.436, 0]} scale={0.001} />
      </Float>

    </group>
  )
}

useGLTF.preload('Models/Jelly.gltf')
