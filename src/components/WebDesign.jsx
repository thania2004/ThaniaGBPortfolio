
import { OrbitControls, Stage } from '@react-three/drei';
import React from 'react';
import { Canvas } from 'react-three-fiber';
import PurpleSetUp from "./PurpleSetUp";

const WebDesign = () => {
  return (
    <Canvas>
      <Stage>
        <PurpleSetUp />
      </Stage>
       <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default WebDesign
