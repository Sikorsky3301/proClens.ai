import React from 'react';
import { Brain, Cpu, Lock, Zap } from 'lucide-react';
import { Container } from '../ui/Container';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    title: 'AI-Powered Analysis',
    description: 'Advanced machine learning algorithms analyze system processes in real-time.',
    Icon: Brain,
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Process Optimization',
    description: 'Identify bottlenecks and optimize system performance automatically.',
    Icon: Cpu,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Secure Monitoring',
    description: 'Enterprise-grade security ensures your system data stays protected.',
    Icon: Lock,
    gradient: 'from-emerald-500 to-green-500'
  },
  {
    title: 'Instant Insights',
    description: 'Get actionable insights and recommendations in seconds.',
    Icon: Zap,
    gradient: 'from-orange-500 to-yellow-500'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 relative">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
            Powerful Features
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to understand and optimize your system processes.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title} 
              {...feature} 
              className="hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}