import {React,Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/island'
import Sky from '../models/sky'

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
    POPUP
</div> */}

const Home = () => {
    const adjustIslandForScreenSize = () =>{
      let screenScale = null;
      let screenPosition = null;
      let screenRotation = [0.1,4.7,0];
      
      if (window.innerWidth<768){
        screenScale = [0.9,0.9,0.9];
        screenPosition = [0,-6.5,-43];
      } else{
        screenScale = [1,1,1];
        screenPosition = [0,-6.5,-43];
      }
      return [screenScale,screenPosition,screenRotation];
    }

    const [islandScale,islandPosition,islandRotation] = adjustIslandForScreenSize();

  return (
    <div>
      <section className='w-full h-screen relative'>
        <Canvas 
        className='w-full h-screen bg-transparent'
        camera={{near:0.1, far:1000 }}
        >
        <Suspense fallback={<Loader/>}>

        {/* Light coming from far distance like sun */}
            <directionalLight position={[1,1,1]} intensity={1.5}/> 

            {/* eluminates all objects in the scene equally without casting shadows. */}
            <ambientLight intensity={0.5}/>

            {/* emits light from all direction from one point */}
            {/* Need in this case because of sun */}
            <pointLight />

            {/* same as pointlight but triangle form */}
            {/* Need in this case because of sun */}
            <spotLight/>

            {/* eluminate the scene with gradient  */}
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={0.5}/>

            <Sky/>
            <Island
              position = {islandPosition}
              scale = {islandScale}
              rotation = {islandRotation}
            />
        </Suspense>
        </Canvas>
      </section>
    </div>
  )
}

export default Home
