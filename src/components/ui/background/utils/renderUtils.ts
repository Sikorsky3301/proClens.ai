import { Particle } from '../types';

export const drawParticle = (
  ctx: CanvasRenderingContext2D,
  particle: Particle
): void => {
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
  ctx.fill();
};

export const connectParticles = (
  ctx: CanvasRenderingContext2D,
  particles: Particle[]
): void => {
  const MAX_DISTANCE = 150;
  
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < MAX_DISTANCE) {
        const opacity = 0.1 * (1 - distance / MAX_DISTANCE);
        ctx.beginPath();
        ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
};