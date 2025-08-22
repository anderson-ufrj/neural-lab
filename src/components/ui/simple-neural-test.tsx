'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function TestCube() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#60a5fa" />
    </mesh>
  );
}

function TestSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#3b82f6" emissive="#1e40af" emissiveIntensity={0.2} />
    </mesh>
  );
}

export function SimpleNeuralTest() {
  return (
    <div className="absolute inset-0 w-full h-full bg-black/10">
      <div className="absolute top-4 left-4 text-white bg-red-500 p-2 z-50">
        SIMPLE 3D TEST - Should see rotating cube and bouncing sphere
      </div>
      
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ 
          width: '100%', 
          height: '100%',
          background: 'linear-gradient(45deg, #0f172a, #1e293b)'
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <TestCube />
        <TestSphere />
      </Canvas>
    </div>
  );
}