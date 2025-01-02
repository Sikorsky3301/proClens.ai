import React from 'react';
import { Terminal, LineChart, Sparkles } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      <Container>
        <div className="text-center relative z-10">
          <div className="inline-block">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4 inline-flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              New Features Released
            </span>
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
            Understand Your System
            <span className="block mt-2">Like Never Before</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            ProCLens.ai analyzes your system processes using advanced AI to provide meaningful insights
            and optimize performance in real-time.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              <span>Try it Free</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Button>
            <Button size="lg" variant="secondary" className="group">
              Watch Demo
              <span className="ml-2 opacity-0 group-hover:opacity-100">▶</span>
            </Button>
          </div>
        </div>
        <div className="mt-16 flex justify-center space-x-6 relative">
          <Terminal className="h-16 w-16 text-indigo-600 animate-float" style={{ animationDelay: '0s' }} />
          <LineChart className="h-16 w-16 text-indigo-600 animate-float" style={{ animationDelay: '0.2s' }} />
        </div>
      </Container>
    </section>
  );
}