import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  avatar: string;
  rating: number;
  text: string;
  destination: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, avatar, rating, text, destination }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center mb-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div className="mr-4">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{destination}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
};