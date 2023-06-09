/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 monitor.gltf --transform
Author: portgl16 (https://sketchfab.com/portgl16)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/monitor-9f6f9018f14a4dbea1ad1aea0ce89e7c
Title: Monitor
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/monitor-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-1575.7, 30, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube_Case_0.geometry} material={materials.Case} />
        <mesh geometry={nodes.Cube_RenderMonitor_0.geometry} material={materials.RenderMonitor} />
        <mesh geometry={nodes.Cube_USB_0.geometry} material={materials.material} />
      </group>
      <mesh geometry={nodes.Button_Button_Material_0.geometry} material={materials.Button_Material} position={[-695.83, -497.37, 28.55]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Button_two_ButtonTwoMaterial_0.geometry} material={materials.ButtonTwoMaterial} position={[-740.48, -496.83, 27.9]} rotation={[-Math.PI / 2, 0, 0]} scale={[20, 10, 8]} />
      <mesh geometry={nodes.Button_two001_ButtonTwoMaterial001_0.geometry} material={materials.ButtonTwoMaterial} position={[-792.22, -496.83, 27.9]} rotation={[-Math.PI / 2, 0, 0]} scale={[20, 10, 8]} />
    </group>
  )
}

useGLTF.preload('/monitor-transformed.glb')
