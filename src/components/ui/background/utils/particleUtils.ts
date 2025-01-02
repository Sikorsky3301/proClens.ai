import { Particle } from '../types';

export const createParticle = (width: number, height: number): Particle => ({
  x: Math.random() * width,
  y: Math.random() * height,
  size: Math.random() * 2 + 0.5,
  speedX: (Math.random() - 0.5) * 0.3,
  speedY: (Math.random() - 0.5) * 0.3,
  opacity: Math.random() * 0.3 + 0.1
});

export const updateParticle = (particle: Particle, width: number, height: number): void => {
  particle.x += particle.speedX;
  particle.y += particle.speedY;

  if (particle.x < 0 || particle.x > width) particle.speedX *= -1;
  if (particle.y < 0 || particle.y > height) particle.speedY *= -1;
};