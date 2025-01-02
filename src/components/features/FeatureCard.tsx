import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  gradient: string;
  className?: string;
  style?: React.CSSProperties;
}

export function FeatureCard({ 
  title, 
  description, 
  Icon, 
  gradient,
  className = '',
  style 
}: FeatureCardProps) {
  return (
    <div 
      className={`relative group ${className}`}
      style={style}
    >
      <div className="h-full p-6 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/10">
        <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${gradient}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="mt-6 text-xl font-semibold text-gray-900">
          {title}
        </h3>
        <p className="mt-4 text-gray-600">
          {description}
        </p>
        <div className="absolute inset-0 rounded-2xl transition-colors duration-300 group-hover:bg-gray-50/50 -z-10" />
      </div>
    </div>
  );
}