/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 zapato.gltf --transform
Author: Marcokiyo (https://sketchfab.com/Marcokiyo)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/muestra-zapatos-46c6e255fb0647748571f50e79477cc9
Title: Muestra Zapatos
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/zapato-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Zapato} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Zapato} />
      </group>
    </group>
  )
}

useGLTF.preload('/zapato-transformed.glb')
