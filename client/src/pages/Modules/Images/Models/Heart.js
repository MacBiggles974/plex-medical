/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Michel Paschalis (https://sketchfab.com/michel.paschalis)
license: SKETCHFAB Standard (https://sketchfab.com/licenses)
source: https://sketchfab.com/3d-models/animation-human-heart-775d6629622740de8a5ed61a959c7506
title: [Animation] Human Heart
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/heart.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="2c06a2852f894eb3bc2d9156135bf826fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="heart_01" rotation={[0.01, 0, 0]} scale={0.39}>
                  <mesh name="0" geometry={nodes['0'].geometry} material={materials.Material_57} morphTargetDictionary={nodes['0'].morphTargetDictionary} morphTargetInfluences={nodes['0'].morphTargetInfluences} />
                </group>
                <group name="heart_02" rotation={[0.01, 0, 0]} scale={0.39}>
                  <mesh name="1" geometry={nodes['1'].geometry} material={materials.Material_57} morphTargetDictionary={nodes['1'].morphTargetDictionary} morphTargetInfluences={nodes['1'].morphTargetInfluences} />
                </group>
                <group name="heart_03" rotation={[0.01, 0, 0]} scale={0.39}>
                  <mesh name="heart_03_Material_#57_0" geometry={nodes['heart_03_Material_#57_0'].geometry} material={materials.Material_57} />
                </group>
                <group name="miAreaLightomni002" position={[3.06, -264.64, 58.83]} rotation={[-Math.PI / 2, 0, 0]} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/heart.glb')
