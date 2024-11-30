import React from 'react';
import { HotelCard } from './HotelCard';

export const Hotels = () => {
  const hotels = [
    {
      name: "هتل سرینا کابل",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      location: "کابل، افغانستان",
      rating: 4.8,
      price: "از ۲۵,۰۰۰ افغانی",
      amenities: ['wifi', 'parking', 'breakfast']
    },
    {
      name: "هتل بامیان",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      location: "بامیان، افغانستان",
      rating: 4.5,
      price: "از ۱۸,۰۰۰ افغانی",
      amenities: ['wifi', 'breakfast']
    },
    {
      name: "هتل هرات",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      location: "هرات، افغانستان",
      rating: 4.6,
      price: "از ۲۰,۰۰۰ افغانی",
      amenities: ['wifi', 'parking', 'breakfast']
    }
  ];

  return (
    <section id="hotels" className="py-16 bg-gradient-to-br from-emerald-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">هتل‌های برتر</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <HotelCard key={index} {...hotel} />
          ))}
        </div>
      </div>
    </section>
  );
};