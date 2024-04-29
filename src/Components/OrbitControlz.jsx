import React, { useRef } from "react";
import { useFrame, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

extend({ OrbitControls });

// Controls  rotate//
const OrbitControlz = () => {
  const orbitRef = useRef();
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const rotationSpeed = 0.07; 
    if (orbitRef.current) {
      orbitRef.current.setAzimuthalAngle(Math.sin(rotationSpeed * elapsedTime) * Math.PI / 4);
    }
  });

  return (
    <OrbitControls
      ref={orbitRef}
      minAzimuthAngle={-Math.PI / 7.3}
      maxAzimuthAngle={Math.PI / 4.8}
      minPolarAngle={Math.PI / 3.4}
      maxPolarAngle={Math.PI / 2.4}
      enableZoom={false}
    />
  );
};

export default OrbitControlz