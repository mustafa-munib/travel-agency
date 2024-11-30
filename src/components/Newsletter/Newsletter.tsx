import React from 'react';
import { Mail } from 'lucide-react';

export const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-500 to-cyan-500">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <Mail className="w-16 h-16 mx-auto mb-6 text-white/90" />
          <h2 className="text-3xl font-bold mb-4">عضویت در خبرنامه</h2>
          <p className="mb-8 text-white/90">
            برای دریافت آخرین پیشنهادات سفر و تخفیف‌های ویژه در خبرنامه ما عضو شوید
          </p>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="px-6 py-3 rounded-lg text-right text-gray-900 w-full md:w-96"
            />
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              عضویت
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};