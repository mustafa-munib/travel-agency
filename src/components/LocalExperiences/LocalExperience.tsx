import React from 'react';
import { Coffee, Music, ShoppingBag, Utensils } from 'lucide-react';

export const LocalExperiences = () => {
  const experiences = [
    {
      icon: Coffee,
      title: "چای خانه‌های سنتی",
      description: "تجربه نوشیدن چای سبز افغانی در فضای سنتی"
    },
    {
      icon: Utensils,
      title: "آشپزی محلی",
      description: "یادگیری پخت غذاهای سنتی افغانستان"
    },
    {
      icon: ShoppingBag,
      title: "بازارهای محلی",
      description: "خرید صنایع دستی و قالین‌های اصیل افغانی"
    },
    {
      icon: Music,
      title: "موسیقی محلی",
      description: "شنیدن موسیقی سنتی و رقص اتن"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-tl from-emerald-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">تجربه‌های محلی</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <exp.icon className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
              <h3 className="text-xl font-semibold text-center mb-3">{exp.title}</h3>
              <p className="text-gray-600 text-center">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};