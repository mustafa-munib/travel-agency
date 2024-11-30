import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="p-3 bg-indigo-100 rounded-full">
        <Icon className="w-8 h-8 text-indigo-600" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">{title}</h3>
      <p className="mt-2 text-gray-600 text-center leading-relaxed">{description}</p>
    </div>
  );
};