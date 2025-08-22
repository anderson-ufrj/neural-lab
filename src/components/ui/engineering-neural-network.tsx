'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Engineering Block Node
function EngineeringNode({ position, isActive, nodeType }: { 
  position: [number, number, number]; 
  isActive: boolean;
  nodeType: 'input' | 'hidden' | 'output';
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.LineSegments>(null);
  
  useFrame((state) => {
    if (meshRef.current && wireframeRef.current) {
      // Subtle breathing for active nodes
      if (isActive) {
        const scale = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.05;
        meshRef.current.scale.setScalar(scale);
      }
      
      // Update material based on type and state
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      if (isActive) {
        material.emissiveIntensity = 0.3;
      } else {
        material.emissiveIntensity = 0.1;
      }
    }
  });

  const getNodeColor = () => {
    switch (nodeType) {
      case 'input': return '#10b981';   // Green
      case 'hidden': return '#3b82f6';  // Blue  
      case 'output': return '#f59e0b';  // Orange
      default: return '#6b7280';        // Gray
    }
  };

  return (
    <group position={position}>
      {/* Main block */}
      <mesh ref={meshRef}>
        <boxGeometry args={[0.15, 0.15, 0.15]} />
        <meshStandardMaterial
          color={getNodeColor()}
          emissive={getNodeColor()}
          emissiveIntensity={isActive ? 0.3 : 0.1}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
      
      {/* Wireframe outline */}
      <lineSegments ref={wireframeRef}>
        <edgesGeometry args={[new THREE.BoxGeometry(0.16, 0.16, 0.16)]} />
        <lineBasicMaterial color="#ffffff" transparent opacity={0.4} />
      </lineSegments>
      
      {/* Activity indicator */}
      {isActive && (
        <mesh position={[0, 0.12, 0]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      )}
    </group>
  );
}

// Data Connection Line
function DataConnection({ start, end, isActive, weight }: { 
  start: THREE.Vector3; 
  end: THREE.Vector3; 
  isActive: boolean;
  weight: number;
}) {
  const dataRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (dataRef.current) {
      // Data packet animation when active
      if (isActive) {
        const progress = (Math.sin(state.clock.elapsedTime * 3) + 1) / 2;
        const position = new THREE.Vector3().lerpVectors(start, end, progress);
        dataRef.current.position.copy(position);
        dataRef.current.visible = true;
      } else {
        dataRef.current.visible = false;
      }
    }
  });

  const geometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints([start, end]);
  }, [start, end]);

  const lineColor = weight > 0 ? '#10b981' : '#ef4444'; // Green for positive, Red for negative

  return (
    <group>
      <line>
        <bufferGeometry attach="geometry" {...geometry} />
        <lineBasicMaterial
          color={lineColor}
          transparent
          opacity={Math.abs(weight) * 0.8 + 0.2}
          linewidth={Math.abs(weight) * 3 + 1}
        />
      </line>
      
      {/* Data packet */}
      <mesh ref={dataRef}>
        <sphereGeometry args={[0.015, 6, 6]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

// Engineering Grid Background
function EngineeringGrid() {
  const gridRef = useRef<THREE.GridHelper>(null);
  
  useFrame(() => {
    if (gridRef.current) {
      gridRef.current.position.y = -3;
    }
  });

  return (
    <group>
      <gridHelper ref={gridRef} args={[20, 20, '#444444', '#222222']} />
      <gridHelper args={[20, 20, '#444444', '#222222']} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -3]} />
    </group>
  );
}

// Main Engineering Neural Network
function EngineeringNeuralScene() {
  // Neural Network Architecture: 4-6-6-3 (Input-Hidden1-Hidden2-Output)
  const networkStructure = [
    { layer: 0, nodes: 4, type: 'input' as const, x: -4 },
    { layer: 1, nodes: 6, type: 'hidden' as const, x: -1.5 },
    { layer: 2, nodes: 6, type: 'hidden' as const, x: 1.5 },
    { layer: 3, nodes: 3, type: 'output' as const, x: 4 }
  ];

  // Generate node positions
  const nodes = useMemo(() => {
    const nodeList: Array<{
      position: THREE.Vector3;
      type: 'input' | 'hidden' | 'output';
      layer: number;
      index: number;
    }> = [];

    networkStructure.forEach((layer, layerIndex) => {
      const startY = -(layer.nodes - 1) * 0.5;
      for (let i = 0; i < layer.nodes; i++) {
        nodeList.push({
          position: new THREE.Vector3(layer.x, startY + i, 0),
          type: layer.type,
          layer: layerIndex,
          index: i
        });
      }
    });

    return nodeList;
  }, []);

  // Generate connections with weights
  const connections = useMemo(() => {
    const connectionList: Array<{
      start: THREE.Vector3;
      end: THREE.Vector3;
      weight: number;
      from: number;
      to: number;
    }> = [];

    for (let layer = 0; layer < networkStructure.length - 1; layer++) {
      const currentLayerNodes = nodes.filter(n => n.layer === layer);
      const nextLayerNodes = nodes.filter(n => n.layer === layer + 1);

      currentLayerNodes.forEach((startNode, startIdx) => {
        nextLayerNodes.forEach((endNode, endIdx) => {
          connectionList.push({
            start: startNode.position,
            end: endNode.position,
            weight: (Math.random() - 0.5) * 2, // Random weight between -1 and 1
            from: startIdx,
            to: endIdx
          });
        });
      });
    }

    return connectionList;
  }, [nodes]);

  // Simulate network activity
  const [activeNodes, setActiveNodes] = useState<Set<number>>(new Set());
  const [activeConnections, setActiveConnections] = useState<Set<number>>(new Set());

  useFrame((state) => {
    // Simulate forward propagation every 2 seconds
    if (Math.floor(state.clock.elapsedTime) % 3 === 0 && state.clock.elapsedTime % 1 < 0.1) {
      // Activate input nodes first
      const newActiveNodes = new Set<number>();
      const newActiveConnections = new Set<number>();
      
      // Input layer
      nodes.filter(n => n.type === 'input').forEach((_, idx) => {
        newActiveNodes.add(idx);
      });
      
      // Propagate through hidden layers with delay
      setTimeout(() => {
        nodes.filter(n => n.type === 'hidden' && n.layer === 1).forEach((_, idx) => {
          newActiveNodes.add(idx + 4); // Offset for input nodes
        });
        setActiveNodes(new Set(newActiveNodes));
      }, 300);
      
      setTimeout(() => {
        nodes.filter(n => n.type === 'hidden' && n.layer === 2).forEach((_, idx) => {
          newActiveNodes.add(idx + 10); // Offset for previous nodes
        });
        setActiveNodes(new Set(newActiveNodes));
      }, 600);
      
      setTimeout(() => {
        nodes.filter(n => n.type === 'output').forEach((_, idx) => {
          newActiveNodes.add(idx + 16); // Offset for previous nodes
        });
        setActiveNodes(new Set(newActiveNodes));
      }, 900);
      
      setActiveNodes(newActiveNodes);
    }
  });

  return (
    <>
      {/* Engineering Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
      
      {/* Background Grid */}
      <EngineeringGrid />
      
      {/* Neural Network Nodes */}
      {nodes.map((node, index) => (
        <EngineeringNode
          key={index}
          position={[node.position.x, node.position.y, node.position.z]}
          isActive={activeNodes.has(index)}
          nodeType={node.type}
        />
      ))}
      
      {/* Connections */}
      {connections.map((connection, index) => (
        <DataConnection
          key={index}
          start={connection.start}
          end={connection.end}
          isActive={activeConnections.has(index)}
          weight={connection.weight}
        />
      ))}
      
      {/* Layer Labels */}
      <group position={[-4, -3, 0]}>
        <mesh>
          <planeGeometry args={[1, 0.2]} />
          <meshBasicMaterial color="#10b981" transparent opacity={0.8} />
        </mesh>
      </group>
    </>
  );
}

export function EngineeringNeuralNetwork() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute top-4 left-4 text-white bg-gray-900/90 p-4 z-50 rounded border border-gray-700 font-mono">
        <div className="text-sm font-bold text-green-400">⚡ NEURAL NETWORK ARCHITECTURE</div>
        <div className="text-xs text-gray-300 mt-1">
          Input Layer: 4 nodes | Hidden: 6+6 nodes | Output: 3 nodes
        </div>
        <div className="text-xs text-gray-400 mt-1">
          Forward propagation active • Engineering visualization
        </div>
      </div>
      
      <Canvas
        camera={{ position: [8, 4, 8], fov: 60 }}
        style={{ 
          width: '100%', 
          height: '100%',
          background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
        }}
        shadows
      >
        <EngineeringNeuralScene />
      </Canvas>
    </div>
  );
}

// Fix missing useState import
import { useState } from 'react';