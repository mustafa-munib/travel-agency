import React from 'react';
import { Compass, Sun, Umbrella, Camera } from 'lucide-react';

export const TravelTips = () => {
  const tips = [
    {
      icon: Compass,
      title: "برنامه‌ریزی مسیر",
      text: "قبل از سفر، مسیر خود را با دقت برنامه‌ریزی کنید"
    },
    {
      icon: Sun,
      title: "بهترین فصل",
      text: "آب و هوای مقصد را بررسی و بهترین زمان سفر را انتخاب کنید"
    },
    {
      icon: Umbrella,
      title: "تجهیزات ضروری",
      text: "فهرستی از وسایل ضروری تهیه و با خود همراه داشته باشید"
    },
    {
      icon: Camera,
      title: "ثبت خاطرات",
      text: "از لحظات خاص سفر خود عکس و فیلم تهیه کنید"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-tr from-emerald-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">نکات سفر</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <tip.icon className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
              <h3 className="text-xl font-semibold text-center mb-3">{tip.title}</h3>
              <p className="text-gray-600 text-center">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};