import React from 'react';
import { Map, Calendar, Heart, Mountain, Sun, Utensils } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export const Features = () => {
  const features = [
    {
      icon: Map,
      title: "مسیرهای سفر",
      description: "بهترین مسیرهای سفر در افغانستان را کشف کنید"
    },
    {
      icon: Calendar,
      title: "برنامه‌ریزی سفر",
      description: "سفر خود را با توجه به فصل‌های مناسب برنامه‌ریزی کنید"
    },
    {
      icon: Mountain,
      title: "جاذبه‌های طبیعی",
      description: "از کوه‌های هندوکش تا دره‌های سرسبز را تجربه کنید"
    },
    {
      icon: Heart,
      title: "تجربه‌های محلی",
      description: "با فرهنگ و آداب و رسوم محلی آشنا شوید"
    },
    {
      icon: Sun,
      title: "تورهای فصلی",
      description: "از تورهای ویژه فصلی ما بهره‌مند شوید"
    },
    {
      icon: Utensils,
      title: "غذاهای محلی",
      description: "طعم غذاهای اصیل افغانی را بچشید"
    }
  ];

  return (
    <section id="features" className="py-16 bg-gradient-to-tr from-emerald-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">خدمات ما</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};