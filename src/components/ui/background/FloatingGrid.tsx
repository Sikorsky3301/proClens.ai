import React from 'react';

export function FloatingGrid() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] animate-float" />
    </div>
  );
}