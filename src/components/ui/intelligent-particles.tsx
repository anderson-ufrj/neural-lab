'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleSystemProps {
  count?: number;
  mouseAttraction?: number;
}

export function IntelligentParticles({ 
  count = 300, 
  mouseAttraction = 2
}: ParticleSystemProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const { pointer, viewport } = useThree();

  // Initialize particles with deterministic positions
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Use deterministic positions based on index
      const angle = (i / count) * Math.PI * 2;
      const radius = 5 + (i % 5);
      const height = (i % 20) - 10;
      
      pos[i * 3] = Math.cos(angle) * radius + (i % 3 - 1) * 2;
      pos[i * 3 + 1] = height + (i % 7 - 3);
      pos[i * 3 + 2] = Math.sin(angle) * radius + (i % 5 - 2);
    }
    
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const positionAttribute = pointsRef.current.geometry.attributes.position;
    const mouse3D = new THREE.Vector3(
      (pointer.x * viewport.width) / 2,
      (pointer.y * viewport.height) / 2,
      0
    );

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      const particlePos = new THREE.Vector3(
        positionAttribute.array[i3] as number,
        positionAttribute.array[i3 + 1] as number,
        positionAttribute.array[i3 + 2] as number
      );

      // Mouse interaction
      const mouseDistance = particlePos.distanceTo(mouse3D);
      const mouseInfluence = Math.max(0, 1 - mouseDistance / mouseAttraction);
      
      if (mouseInfluence > 0) {
        const direction = mouse3D.clone().sub(particlePos).normalize();
        particlePos.add(direction.multiplyScalar(mouseInfluence * 0.01));
      }

      // Organic movement
      const time = state.clock.elapsedTime;
      particlePos.x += Math.sin(time * 2 + i) * 0.002;
      particlePos.y += Math.cos(time * 1.5 + i) * 0.002;
      particlePos.z += Math.sin(time * 3 + i) * 0.001;

      // Update positions
      positionAttribute.array[i3] = particlePos.x;
      positionAttribute.array[i3 + 1] = particlePos.y;
      positionAttribute.array[i3 + 2] = particlePos.z;
    }

    positionAttribute.needsUpdate = true;
    pointsRef.current.rotation.y += 0.001;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#60a5fa"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        alphaTest={0.001}
      />
    </points>
  );
}

// Swarm Intelligence Component
export function ParticleSwarm() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.002;
  });

  return (
    <group ref={groupRef}>
      <IntelligentParticles count={200} mouseAttraction={3} />
      
      <group position={[0, 0, -2]}>
        <IntelligentParticles count={100} mouseAttraction={1.5} />
      </group>
      
      <group position={[0, 0, 2]}>
        <IntelligentParticles count={150} mouseAttraction={2.5} />
      </group>
    </group>
  );
}

// Data Stream Effect
export function DataStreamParticles() {
  const streamRef = useRef<THREE.Points>(null);
  const particleCount = 100;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Deterministic stream positions
      pos[i * 3] = ((i % 20) - 10) + (i % 3 - 1) * 2;
      pos[i * 3 + 1] = ((i % 40) / 20) - 1;
      pos[i * 3 + 2] = ((i % 10) - 5) + (i % 2 - 0.5);
    }

    return pos;
  }, []);

  useFrame((state) => {
    if (!streamRef.current) return;

    const positionAttribute = streamRef.current.geometry.attributes.position;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Flow movement
      positionAttribute.array[i3] += Math.sin(time + i * 0.1) * 0.01;
      positionAttribute.array[i3 + 1] += 0.02;
      positionAttribute.array[i3 + 2] += Math.cos(time + i * 0.1) * 0.005;

      // Reset particles that go too high (deterministic reset)
      if ((positionAttribute.array[i3 + 1] as number) > 10) {
        positionAttribute.array[i3 + 1] = -10;
        positionAttribute.array[i3] = ((i % 20) - 10) + (i % 3 - 1) * 2;
        positionAttribute.array[i3 + 2] = ((i % 10) - 5) + (i % 2 - 0.5);
      }
    }

    positionAttribute.needsUpdate = true;
  });

  return (
    <points ref={streamRef}>
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
        size={0.03}
        color="#3b82f6"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}