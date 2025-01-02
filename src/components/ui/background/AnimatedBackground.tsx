import React from 'react';
import { GradientLayer } from './GradientLayer';
import { FloatingGrid } from './FloatingGrid';
import { ParticleField } from './ParticleField';

export function AnimatedBackground() {
  return (
    <>
      <GradientLayer />
      <FloatingGrid />
      <ParticleField />
    </>
  );
}