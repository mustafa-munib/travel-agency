import React from 'react';
import { DestinationCard } from './DestinationCard';

export const PopularDestinations = () => {
  const destinations = [
    {
      title: "بامیان",
      image: "https://images.unsplash.com/photo-1590934789999-22534ef56517",
      description: "بودای بامیان و دره‌های زیبا با چشم‌اندازهای طبیعی",
      price: "از ۱۵,۰۰۰ افغانی"
    },
    {
      title: "هرات",
      image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72",
      description: "مسجد جامع تاریخی و معماری اسلامی",
      price: "از ۱۲,۰۰۰ افغانی"
    },
    {
      title: "کابل",
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded",
      description: "پایتخت افغانستان با بازارهای سنتی و موزه‌ها",
      price: "از ۱۰,۰۰۰ افغانی"
    },
    {
      title: "مزار شریف",
      image: "https://images.unsplash.com/photo-1590934789999-22534ef56517",
      description: "مسجد آبی و جشنواره گل سرخ",
      price: "از ۱۳,۰۰۰ افغانی"
    },
    {
      title: "غزنی",
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded",
      description: "شهر تاریخی با مناره‌های باستانی",
      price: "از ۱۱,۰۰۰ افغانی"
    },
    {
      title: "پنجشیر",
      image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72",
      description: "دره‌های سرسبز و کوه‌های هندوکش",
      price: "از ۱۴,۰۰۰ افغانی"
    }
  ];

  return (
    <section id="destinations" className="py-16 bg-gradient-to-br from-emerald-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">مقصدهای محبوب افغانستان</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
};