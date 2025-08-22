'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Simple Neuron Component
function Neuron({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle pulsing animation
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.1);
      
      // Slight floating motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshStandardMaterial
        color="#60a5fa"
        emissive="#1e40af"
        emissiveIntensity={0.3}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

// Connection Line Component
function ConnectionLine({ start, end }: { start: THREE.Vector3; end: THREE.Vector3 }) {
  const geometry = useMemo(() => {
    const points = [start, end];
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [start, end]);

  return (
    <line>
      <bufferGeometry attach="geometry" {...geometry} />
      <lineBasicMaterial
        attach="material"
        color="#3b82f6"
        transparent
        opacity={0.4}
      />
    </line>
  );
}

// Floating Particles
function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 100;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
      pointsRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#64748b"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Main 3D Scene
function NeuralScene() {
  // Create neurons in a more organized pattern
  const neurons = useMemo(() => {
    const positions: THREE.Vector3[] = [];
    const neuronCount = 20;
    
    for (let i = 0; i < neuronCount; i++) {
      const angle = (i / neuronCount) * Math.PI * 2;
      const radius = 2 + Math.sin(i * 0.5);
      const height = (Math.sin(i * 0.3) - 0.5) * 2;
      
      positions.push(new THREE.Vector3(
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
      ));
    }
    return positions;
  }, []);

  // Create connections
  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < neurons.length; i++) {
      for (let j = i + 1; j < neurons.length; j++) {
        const distance = neurons[i].distanceTo(neurons[j]);
        if (distance < 2 && (i + j) % 4 === 0) {
          lines.push({ start: neurons[i], end: neurons[j] });
        }
      }
    }
    return lines;
  }, [neurons]);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#60a5fa" />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#3b82f6" />
      
      {/* Neurons */}
      {neurons.map((position, index) => (
        <Neuron
          key={index}
          position={[position.x, position.y, position.z]}
        />
      ))}
      
      {/* Connections */}
      {connections.map((connection, index) => (
        <ConnectionLine
          key={index}
          start={connection.start}
          end={connection.end}
        />
      ))}
      
      {/* Background Particles */}
      <FloatingParticles />
      
      {/* Title Text */}
      <group position={[0, 0, 0]}>
        <mesh position={[0, 3, 0]}>
          <ringGeometry args={[0.8, 1, 32]} />
          <meshBasicMaterial color="#60a5fa" transparent opacity={0.3} />
        </mesh>
      </group>
    </>
  );
}

export function WorkingNeuralNetwork() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute top-4 left-4 text-white bg-green-500/80 p-2 z-50 rounded">
        🧠 WORKING NEURAL NETWORK - 20 neurons connected!
      </div>
      
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        style={{ 
          width: '100%', 
          height: '100%',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
        }}
      >
        <NeuralScene />
      </Canvas>
    </div>
  );
}