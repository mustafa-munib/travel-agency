import React from 'react';
import { Plane } from 'lucide-react';

export const HeroImage = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] bg-cover bg-center rounded-2xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80"
        alt="Travel Scene"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
        <Plane className="absolute bottom-6 right-6 w-12 h-12 text-white/80 rotate-45" />
      </div>
    </div>
  );
};