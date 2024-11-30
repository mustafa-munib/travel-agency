import React from 'react';

export const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center space-y-6 p-8 lg:p-12">
      <h1 className="text-4xl lg:text-5xl font-bold text-right text-gray-900">
        به برنامه‌ریز سفر خوش آمدید
      </h1>
      <p className="text-xl text-right text-gray-600 leading-relaxed">
        سفر بعدی خود را با ما برنامه‌ریزی کنید. ما به شما کمک می‌کنیم تا بهترین مقاصد را کشف کنید و خاطرات فراموش نشدنی بسازید.
      </p>
      <div className="text-right">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 transform hover:scale-105">
          برنامه‌ریزی سفر خود را آغاز کنید
        </button>
      </div>
    </div>
  );
};