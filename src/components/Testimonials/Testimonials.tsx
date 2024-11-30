import React from 'react';
import { TestimonialCard } from './TestimonialCard';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "احمد کریمی",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      rating: 5,
      text: "سفر به بامیان تجربه‌ای فراموش نشدنی بود. مجسمه‌های بودا و دریاچه بند امیر فوق‌العاده هستند.",
      destination: "سفر به بامیان"
    },
    {
      name: "مریم رحیمی",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      rating: 5,
      text: "راهنمای تور در هرات بسیار حرفه‌ای بود و با تاریخ و فرهنگ شهر کاملاً آشنا بود.",
      destination: "سفر به هرات"
    },
    {
      name: "محمود حسینی",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      rating: 5,
      text: "دره پنجشیر زیباترین منظره‌ای بود که تا به حال دیده‌ام. حتماً دوباره سفر خواهم کرد.",
      destination: "سفر به پنجشیر"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-bl from-emerald-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">تجربه‌های مسافران</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};