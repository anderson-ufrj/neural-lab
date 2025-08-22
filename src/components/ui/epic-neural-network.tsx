'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo, useState } from 'react';
import * as THREE from 'three';

// Epic Neuron with glow effect
function EpicNeuron({ position, index }: { position: [number, number, number]; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [isActive, setIsActive] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current && glowRef.current) {
      const time = state.clock.elapsedTime;
      
      // Breathing effect
      const scale = 1 + Math.sin(time * 3 + index * 0.5) * 0.3;
      meshRef.current.scale.setScalar(scale);
      glowRef.current.scale.setScalar(scale * 2);
      
      // Random activation
      if (Math.sin(time * 2 + index) > 0.8) {
        setIsActive(true);
      } else if (Math.sin(time * 2 + index) < -0.8) {
        setIsActive(false);
      }
      
      // Color change when active
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      if (isActive) {
        material.emissiveIntensity = 0.8;
        material.emissive.setHex(0x00ff88);
      } else {
        material.emissiveIntensity = 0.2;
        material.emissive.setHex(0x1e40af);
      }
    }
  });

  return (
    <group position={position}>
      {/* Glow effect */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial 
          color={isActive ? "#00ff88" : "#60a5fa"} 
          transparent 
          opacity={0.2}
        />
      </mesh>
      
      {/* Main neuron */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.08, 20, 20]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#1e40af"
          emissiveIntensity={0.2}
          metalness={0.1}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

// Epic connection with data flow
function DataFlow({ start, end, index }: { start: THREE.Vector3; end: THREE.Vector3; index: number }) {
  const particleRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (particleRef.current) {
      const time = state.clock.elapsedTime;
      
      // Moving particle along the line
      const progress = (Math.sin(time * 2 + index * 0.7) + 1) / 2;
      const position = new THREE.Vector3().lerpVectors(start, end, progress);
      particleRef.current.position.copy(position);
      
      // Particle glow
      const particleMaterial = particleRef.current.material as THREE.MeshBasicMaterial;
      particleMaterial.opacity = Math.sin(time * 8 + index) * 0.5 + 0.5;
    }
  });

  const geometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints([start, end]);
  }, [start, end]);

  return (
    <group>
      {/* Connection line */}
      <line>
        <bufferGeometry attach="geometry" {...geometry} />
        <lineBasicMaterial
          color="#00ffff"
          transparent
          opacity={0.4}
          linewidth={2}
        />
      </line>
      
      {/* Data particle */}
      <mesh ref={particleRef}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial 
          color="#00ffff" 
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}

// Matrix-style background
function MatrixBackground() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 1000;

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      // Green matrix colors
      const intensity = Math.random();
      col[i * 3] = intensity * 0.2;     // R
      col[i * 3 + 1] = intensity;       // G
      col[i * 3 + 2] = intensity * 0.3; // B
    }
    
    return { positions: pos, colors: col };
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
      pointsRef.current.rotation.x += 0.0005;
      
      // Animate individual particles
      const positions = pointsRef.current.geometry.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        positions.array[i * 3 + 1] += Math.sin(state.clock.elapsedTime + i * 0.01) * 0.001;
      }
      positions.needsUpdate = true;
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
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Mouse interaction particles
function InteractiveParticles() {
  const { pointer, viewport } = useThree();
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position;
      const mouse3D = new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      );

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const particlePos = new THREE.Vector3(
          positions.array[i3],
          positions.array[i3 + 1],
          positions.array[i3 + 2]
        );

        const distance = particlePos.distanceTo(mouse3D);
        if (distance < 2) {
          const force = mouse3D.clone().sub(particlePos).normalize().multiplyScalar(0.02);
          particlePos.add(force);
          
          positions.array[i3] = particlePos.x;
          positions.array[i3 + 1] = particlePos.y;
          positions.array[i3 + 2] = particlePos.z;
        }
      }
      positions.needsUpdate = true;
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
        size={0.05}
        color="#ff6b6b"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// Main Epic Scene
function EpicNeuralScene() {
  // Create more sophisticated neuron layout
  const neurons = useMemo(() => {
    const positions: THREE.Vector3[] = [];
    
    // Central core neurons
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      positions.push(new THREE.Vector3(
        Math.cos(angle) * 1.5,
        Math.sin(i * 0.3) * 0.5,
        Math.sin(angle) * 1.5
      ));
    }
    
    // Outer ring neurons
    for (let i = 0; i < 16; i++) {
      const angle = (i / 16) * Math.PI * 2;
      const radius = 3 + Math.sin(i * 0.4);
      positions.push(new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(i * 0.2) * 2,
        Math.sin(angle) * radius
      ));
    }
    
    // Random scattered neurons
    for (let i = 0; i < 12; i++) {
      positions.push(new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 8
      ));
    }
    
    return positions;
  }, []);

  // Create smart connections
  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < neurons.length; i++) {
      for (let j = i + 1; j < neurons.length; j++) {
        const distance = neurons[i].distanceTo(neurons[j]);
        if (distance < 3 && Math.random() > 0.7) {
          lines.push({ start: neurons[i], end: neurons[j] });
        }
      }
    }
    return lines;
  }, [neurons]);

  return (
    <>
      {/* Epic Lighting */}
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 5]} intensity={1} color="#00ffff" />
      <pointLight position={[5, 5, 0]} intensity={0.8} color="#ff6b6b" />
      <pointLight position={[-5, -5, 0]} intensity={0.6} color="#8b5cf6" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        intensity={2}
        color="#ffffff"
        castShadow
      />
      
      {/* Epic Neurons */}
      {neurons.map((position, index) => (
        <EpicNeuron
          key={index}
          position={[position.x, position.y, position.z]}
          index={index}
        />
      ))}
      
      {/* Data Flow Connections */}
      {connections.map((connection, index) => (
        <DataFlow
          key={index}
          start={connection.start}
          end={connection.end}
          index={index}
        />
      ))}
      
      {/* Background Effects */}
      <MatrixBackground />
      <InteractiveParticles />
    </>
  );
}

export function EpicNeuralNetwork() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute top-4 left-4 text-white bg-gradient-to-r from-purple-600 to-cyan-600 p-3 z-50 rounded-lg shadow-lg">
        <div className="text-lg font-bold">🚀 EPIC NEURAL NETWORK</div>
        <div className="text-sm opacity-90">36 neurons • Smart connections • Interactive particles</div>
        <div className="text-xs opacity-70">Move your mouse around!</div>
      </div>
      
      <Canvas
        camera={{ position: [0, 2, 8], fov: 75 }}
        style={{ 
          width: '100%', 
          height: '100%',
          background: 'radial-gradient(circle at center, #0f0f23 0%, #000000 100%)'
        }}
        shadows
      >
        <EpicNeuralScene />
      </Canvas>
    </div>
  );
}