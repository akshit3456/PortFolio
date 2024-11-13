import React, { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import placeScene from '../assets/3d/plane.glb';

const Plane = ({ isRotating, ...props }) => {
  // Corrected destructuring to include `animations`
  const { scene, animations } = useGLTF(placeScene);
  const ref = useRef();
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating && actions['Take 001']) {
      actions['Take 001'].play();
    } else {
      actions['Take 001'].stop();
    }
  }, [actions, isRotating]);

  return (
    <primitive object={scene} ref={ref} {...props} />
  );
};

export default Plane;
