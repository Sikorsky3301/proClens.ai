import React from 'react';
import { Container } from '../ui/Container';
import { StepCard } from './StepCard';

const steps = [
  {
    number: '01',
    title: 'Process Collection',
    description: 'ProCLens.ai collects system process data using advanced Python libraries.'
  },
  {
    number: '02',
    title: 'AI Analysis',
    description: 'Our LLM analyzes the collected data to identify patterns and anomalies.'
  },
  {
    number: '03',
    title: 'Insight Generation',
    description: 'Receive detailed insights and recommendations for system optimization.'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Simple yet powerful process analysis in three easy steps.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
}