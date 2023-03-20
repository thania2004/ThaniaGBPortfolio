import React from 'react';
import { OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';



const SphereI = ({ bgImage, link }) => {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    
<SphereContainer onClick={handleClick}>
<Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={1} />
      <directionalLight position={[2, 7, 3]} />
      <Sphere args={[size, 100, 200]} scale={3}>
        <meshBasicMaterial attach="material" map={new THREE.TextureLoader().load(bgImage)} color="rgb(255,181,0)" />
      </Sphere>
    </Canvas>
  
    
      <SphereStyled bgImage={bgImage} />
    </SphereContainer>
  );
};



    
     


export default SphereI;
