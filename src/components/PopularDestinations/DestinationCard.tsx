import React from 'react';

interface DestinationCardProps {
  title: string;
  image: string;
  description: string;
  price: string;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ title, image, description, price }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-emerald-600 font-bold">{price}</span>
          <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all">
            رزرو
          </button>
        </div>
      </div>
    </div>
  );
};