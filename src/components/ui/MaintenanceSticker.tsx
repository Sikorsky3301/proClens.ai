import React from 'react';
import { Wrench } from 'lucide-react';

export function MaintenanceSticker() {
  return (
    <div className="fixed right-4 top-24 z-50">
      <div className="bg-yellow-400 text-black px-4 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate-float">
        <div className="flex items-center space-x-2">
          <Wrench className="h-5 w-5" />
          <span className="font-medium">Under Maintenance</span>
        </div>
        <div className="text-xs mt-1 text-yellow-800">
          We're making improvements!
        </div>
      </div>
    </div>
  );
}