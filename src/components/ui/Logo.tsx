import React from 'react';
import { Brain } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className="flex items-center">
      <Brain className="h-8 w-8 text-indigo-400" />
      <span className={`ml-2 text-xl font-bold ${className}`}>ProCLens.ai</span>
    </div>
  );
}