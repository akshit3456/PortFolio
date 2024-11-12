import React from 'react'
import placeScene from '../assets/3d/plane.glb';
import { useGLTF } from '@react-three/drei';

const Plane = ({isRotating, ...props}) => {
    const {scene,animation} = useGLTF(placeScene);
  return (
    <mesh {...props}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Plane
