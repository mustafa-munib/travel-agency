import React from 'react';
import { Star, MapPin, Wifi, Coffee, Car } from 'lucide-react';

interface HotelCardProps {
  name: string;
  image: string;
  location: string;
  rating: number;
  price: string;
  amenities: string[];
}

export const HotelCard: React.FC<HotelCardProps> = ({
  name,
  image,
  location,
  rating,
  price,
  amenities
}) => {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'wifi': return <Wifi className="w-4 h-4" />;
      case 'parking': return <Car className="w-4 h-4" />;
      case 'breakfast': return <Coffee className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded-lg flex items-center space-x-1 rtl:space-x-reverse">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 ml-2" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="text-gray-600">
              {getAmenityIcon(amenity)}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-emerald-600 font-bold">{price}</span>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
            رزرو اتاق
          </button>
        </div>
      </div>
    </div>
  );
};