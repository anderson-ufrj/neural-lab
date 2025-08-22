'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Float, Sphere } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { Vector3, AdditiveBlending, BufferGeometry } from 'three';
import * as THREE from 'three';
import { ParticleSwarm, DataStreamParticles } from './intelligent-particles';

interface NeuronProps {
  position: [number, number, number];
}

function Neuron({ position }: NeuronProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { viewport, pointer } = useThree();
  
  useFrame((state) => {
    if (meshRef.current) {
      // Subtle floating animation
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.002;
      
      // Interactive glow based on mouse proximity
      const worldMouse = new Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      );
      
      const distance = meshRef.current.position.distanceTo(worldMouse);
      const scale = Math.max(0.8, Math.min(1.5, 3 / (distance + 1)));
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} position={position} args={[0.05, 16, 16]}>
        <meshStandardMaterial
          color="#60a5fa"
          emissive="#1e40af"
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Float>
  );
}

function ConnectionLines({ neurons, connections }: { neurons: Vector3[]; connections: number[][] }) {
  
  const connectionLines = useMemo(() => {
    const lines: React.ReactElement[] = [];
    
    connections.forEach((nodeConnections, nodeIndex) => {
      nodeConnections.forEach((connectedIndex) => {
        if (nodeIndex < connectedIndex) { // Avoid duplicate lines
          const start = neurons[nodeIndex];
          const end = neurons[connectedIndex];
          const distance = start.distanceTo(end);
          
          if (distance < 2) { // Only draw close connections
            const points = [start, end];
            const geometry = new BufferGeometry().setFromPoints(points);
            
            const opacity = Math.max(0.1, 1 - distance / 2);
            
            lines.push(
              <line key={`${nodeIndex}-${connectedIndex}`}>
                <bufferGeometry attach="geometry" {...geometry} />
                <lineBasicMaterial
                  attach="material"
                  color="#3b82f6"
                  transparent
                  opacity={opacity * 0.6}
                  blending={AdditiveBlending}
                />
              </line>
            );
          }
        }
      });
    });
    
    return lines;
  }, [neurons, connections]);

  return <>{connectionLines}</>;
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null!);
  const particleCount = 200;
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particlesPosition}
          itemSize={3}
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.01}
        color="#64748b"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={AdditiveBlending}
      />
    </points>
  );
}

function NeuralNetworkScene() {
  
  // Generate neurons in 3D space with deterministic positions
  const neurons = useMemo(() => {
    const neuronPositions: Vector3[] = [];
    const neuronCount = 50;
    
    // Use deterministic positions based on index to avoid hydration issues
    for (let i = 0; i < neuronCount; i++) {
      const angle1 = (i / neuronCount) * Math.PI * 2;
      const angle2 = ((i * 7) % neuronCount / neuronCount) * Math.PI;
      const radius = 3 + (i % 3);
      
      neuronPositions.push(
        new Vector3(
          Math.cos(angle1) * Math.sin(angle2) * radius,
          Math.sin(angle1) * Math.sin(angle2) * radius,
          Math.cos(angle2) * radius
        )
      );
    }
    
    return neuronPositions;
  }, []);
  
  // Generate connections based on proximity
  const connections = useMemo(() => {
    return neurons.map((neuron, index) => {
      const nearbyNeurons: number[] = [];
      neurons.forEach((otherNeuron, otherIndex) => {
        if (index !== otherIndex) {
          const distance = neuron.distanceTo(otherNeuron);
          // Use deterministic connection logic based on indices
          if (distance < 2 && (index + otherIndex) % 3 === 0) {
            nearbyNeurons.push(otherIndex);
          }
        }
      });
      return nearbyNeurons;
    });
  }, [neurons]);


  return (
    <>
      {/* Ambient lighting for depth */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#60a5fa" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#3b82f6" />
      
      {/* Neural Network Nodes */}
      {neurons.map((position, index) => (
        <Neuron
          key={index}
          position={[position.x, position.y, position.z]}
        />
      ))}
      
      {/* Connection Lines */}
      <ConnectionLines neurons={neurons} connections={connections} />
      
      {/* Background Particles */}
      <ParticleField />
      
      {/* Intelligent Particle Systems */}
      <ParticleSwarm />
      <group position={[8, 0, -5]}>
        <DataStreamParticles />
      </group>
      <group position={[-8, 0, -5]}>
        <DataStreamParticles />
      </group>
      
      {/* Floating Text */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
        <Text
          position={[0, 3, -2]}
          fontSize={0.5}
          color="#60a5fa"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-bold.woff"
        >
          NEURAL LAB
        </Text>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Text
          position={[0, -3, -2]}
          fontSize={0.2}
          color="#64748b"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-regular.woff"
        >
          Artificial Intelligence Laboratory
        </Text>
      </Float>
      
      {/* Interactive Controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

export function NeuralNetwork3D() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ 
          position: [0, 0, 8], 
          fov: 60,
          near: 0.1,
          far: 1000 
        }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        style={{ 
          background: 'transparent',
          width: '100%',
          height: '100%'
        }}
        className="w-full h-full"
      >
        <NeuralNetworkScene />
      </Canvas>
      
      {/* Debug overlay */}
      <div className="absolute bottom-4 left-4 text-xs text-white/50 bg-black/20 p-2 rounded">
        3D Canvas Active
      </div>
    </div>
  );
}