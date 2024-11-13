import { useGLTF } from '@react-three/drei'
import React from 'react'
import skyScene from '../assets/3d/sky.glb';
import {useRef} from 'react'
import { useFrame } from '@react-three/fiber';

const sky = ({isRotating}) => {
    const sky = useGLTF(skyScene)
    const skyRef = useRef();

    useFrame((_, delta)=>{
      if (isRotating){
        skyRef.current.rotation.y += 0.3 * delta;
      }
    })

  return (
    <mesh ref = {skyRef}>
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default sky
