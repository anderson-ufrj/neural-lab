'use client';

import { Suspense, useState } from 'react';
import { NeuralNetwork3D } from './neural-network-3d';
import { SimpleNeuralTest } from './simple-neural-test';
import { WorkingNeuralNetwork } from './working-neural-network';
import { EpicNeuralNetwork } from './epic-neural-network';
import { FamousParticleNetwork } from './famous-particle-network';
import { EngineeringNeuralNetwork } from './engineering-neural-network';

// Fallback 2D version for compatibility
function FallbackNeuralNetwork() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-30">
      <div className="text-blue-400 text-sm animate-pulse">
        Loading Neural Network...
      </div>
    </div>
  );
}

export function NeuralNetwork() {
  const [use3D, setUse3D] = useState(true);
  const [mode, setMode] = useState<'engineering' | 'simple' | 'neural' | 'famous' | 'epic' | 'complex'>('engineering');

  if (!use3D) {
    return <FallbackNeuralNetwork />;
  }

  const nextMode = () => {
    if (mode === 'engineering') setMode('simple');
    else if (mode === 'simple') setMode('neural');
    else if (mode === 'neural') setMode('famous');
    else if (mode === 'famous') setMode('epic');
    else if (mode === 'epic') setMode('complex');
    else setMode('engineering');
  };

  const getCurrentComponent = () => {
    switch (mode) {
      case 'engineering': return <EngineeringNeuralNetwork />;
      case 'simple': return <SimpleNeuralTest />;
      case 'neural': return <WorkingNeuralNetwork />;
      case 'famous': return <FamousParticleNetwork />;
      case 'epic': return <EpicNeuralNetwork />;
      case 'complex': return <NeuralNetwork3D />;
      default: return <EngineeringNeuralNetwork />;
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {/* 3D Controls - Visible for debugging */}
      <div className="absolute top-4 right-4 z-50 space-y-2 bg-black/20 p-2 rounded">
        <button
          onClick={() => setUse3D(!use3D)}
          className="block px-2 py-1 bg-blue-500/50 text-blue-100 rounded text-xs hover:bg-blue-500/70"
        >
          Toggle 3D: {use3D ? 'ON' : 'OFF'}
        </button>
        <button
          onClick={nextMode}
          className="block px-2 py-1 bg-green-500/50 text-green-100 rounded text-xs hover:bg-green-500/70"
        >
          Mode: {mode.toUpperCase()}
        </button>
        <div className="text-xs text-white/70">
          Neural Lab 3D Active
        </div>
      </div>

      <Suspense fallback={<FallbackNeuralNetwork />}>
        {getCurrentComponent()}
      </Suspense>
    </div>
  );
}