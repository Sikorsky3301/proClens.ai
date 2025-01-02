import React from 'react';

export function GradientLayer() {
  return (
    <div className="fixed inset-0 -z-20">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
    </div>
  );
}