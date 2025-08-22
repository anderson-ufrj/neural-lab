'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  connections: number[];
}

// Famous Particle Network Component (inspired by particles.js)
function ParticleNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { pointer, viewport } = useThree();
  
  // Configuration (like particles.js)
  const config = {
    particles: {
      number: { value: 80 },
      color: { value: '#60a5fa' },
      size: { value: 3 },
      move: { 
        speed: 1,
        attract: { enable: true, rotate_x: 600, rotate_y: 1200 }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 }
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#60a5fa',
      opacity: 0.4,
      width: 1
    }
  };

  // Initialize particles
  const particles = useMemo(() => {
    const particleArray: Particle[] = [];
    
    for (let i = 0; i < config.particles.number.value; i++) {
      particleArray.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 5
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.01
        ),
        connections: []
      });
    }
    
    return particleArray;
  }, []);

  // Particle positions for rendering
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(particles.length * 3);
    particles.forEach((particle, i) => {
      positions[i * 3] = particle.position.x;
      positions[i * 3 + 1] = particle.position.y;
      positions[i * 3 + 2] = particle.position.z;
    });
    return positions;
  }, [particles]);

  // Animation loop (like particles.js)
  useFrame(() => {
    if (!pointsRef.current || !linesRef.current) return;

    const mouse3D = new THREE.Vector3(
      (pointer.x * viewport.width) / 2,
      (pointer.y * viewport.height) / 2,
      0
    );

    const positions = pointsRef.current.geometry.attributes.position;
    const linePositions: number[] = [];

    // Update each particle
    particles.forEach((particle, i) => {
      // Move particle
      particle.position.add(particle.velocity);

      // Boundary collision
      if (particle.position.x > 7.5 || particle.position.x < -7.5) {
        particle.velocity.x *= -1;
      }
      if (particle.position.y > 5 || particle.position.y < -5) {
        particle.velocity.y *= -1;
      }
      if (particle.position.z > 2.5 || particle.position.z < -2.5) {
        particle.velocity.z *= -1;
      }

      // Mouse interaction (repulse mode)
      if (config.interactivity.events.onhover.enable) {
        const distance = particle.position.distanceTo(mouse3D);
        if (distance < config.interactivity.modes.repulse.distance / 50) {
          const repulse = mouse3D.clone().sub(particle.position).normalize();
          particle.position.sub(repulse.multiplyScalar(0.02));
        }
      }

      // Update position in buffer
      positions.array[i * 3] = particle.position.x;
      positions.array[i * 3 + 1] = particle.position.y;
      positions.array[i * 3 + 2] = particle.position.z;

      // Create connections (line_linked)
      if (config.line_linked.enable) {
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const distance = particle.position.distanceTo(otherParticle.position);
            if (distance < config.line_linked.distance / 50) {
              linePositions.push(
                particle.position.x, particle.position.y, particle.position.z,
                otherParticle.position.x, otherParticle.position.y, otherParticle.position.z
              );
            }
          }
        });
      }
    });

    positions.needsUpdate = true;

    // Update line connections
    if (linePositions.length > 0) {
      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      linesRef.current.geometry.dispose();
      linesRef.current.geometry = lineGeometry;
    }
  });

  return (
    <group>
      {/* Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length}
            array={particlePositions}
            itemSize={3}
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={config.particles.size.value}
          color={config.particles.color.value}
          transparent
          opacity={0.8}
          sizeAttenuation
          alphaTest={0.001}
        />
      </points>

      {/* Connection Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial
          color={config.line_linked.color}
          transparent
          opacity={config.line_linked.opacity}
        />
      </lineSegments>
    </group>
  );
}

// Scene with lighting
function NetworkScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <ParticleNetwork />
    </>
  );
}

export function FamousParticleNetwork() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute top-4 left-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 p-3 z-50 rounded-lg">
        <div className="text-lg font-bold">⭐ PARTICLES.JS STYLE</div>
        <div className="text-sm opacity-90">80 particles • Interactive connections</div>
        <div className="text-xs opacity-70">Move mouse to repulse particles!</div>
      </div>
      
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ 
          width: '100%', 
          height: '100%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
      >
        <NetworkScene />
      </Canvas>
    </div>
  );
}