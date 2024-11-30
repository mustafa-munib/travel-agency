import React from 'react';
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';

export const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <HeroContent />
        </div>
        <div className="order-1 lg:order-2">
          <HeroImage />
        </div>
      </div>
    </div>
  );
};