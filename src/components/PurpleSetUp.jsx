/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 purpleSetUp.gltf --transform
Author: Korra (https://sketchfab.com/Korpselene)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sallee-6-props-ff2e9985c03a4d789ea5ca4a5e3dd181
Title: Sallee 6 Props
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export  default function Model(props) {
  const { nodes, materials } = useGLTF('/purpleSetUp-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Desk3_Desk1_0.geometry} material={materials.Desk1} />
      <mesh geometry={nodes.Laptop2_Laptop1_0.geometry} material={materials.Laptop1} />
      <mesh geometry={nodes.Speaker3_Speaker_0.geometry} material={materials.Speaker} />
      <mesh geometry={nodes.DrawingTablet2_DrawingTablet_0.geometry} material={materials.DrawingTablet} />
      <mesh geometry={nodes.PHone1_Phone_0.geometry} material={materials.Phone} />
      <mesh geometry={nodes.HeadPhones1_Headphones_0.geometry} material={materials.Headphones} position={[0, -0.09, 0]} />
      <mesh geometry={nodes.Speaker4_Speaker_0.geometry} material={materials.Speaker} />
    </group>
  )
}

useGLTF.preload('/purpleSetUp-transformed.glb')
