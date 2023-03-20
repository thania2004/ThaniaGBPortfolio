import { OrbitControls, Stage } from '@react-three/drei';
import React from 'react';
import { Canvas } from 'react-three-fiber';
import LogoReact from "./LogoReact";

const Development = () => {
  return (
 <Canvas>
      <Stage>
        <LogoReact environment="city" intensity={0.6}/>
      </Stage>
       <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default Development
