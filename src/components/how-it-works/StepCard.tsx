import React from 'react';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="relative">
      <div className="absolute h-full w-px bg-gray-200 left-8 top-8 -z-10 md:hidden" />
      <div className="flex items-start">
        <span className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-600 text-white text-xl font-bold">
          {number}
        </span>
        <div className="ml-6">
          <h3 className="text-xl font-medium text-gray-900">{title}</h3>
          <p className="mt-2 text-base text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
}