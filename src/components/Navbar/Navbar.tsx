import React, { useState } from 'react';
import { Plane, Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Plane className="h-8 w-8 text-emerald-600 rotate-45" />
            <span className="text-xl font-bold text-gray-900">سفرنامه</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <a href="#hero" className="text-gray-700 hover:text-emerald-600 px-3 py-2">خانه</a>
              <a href="#features" className="text-gray-700 hover:text-emerald-600 px-3 py-2">ویژگی‌ها</a>
              <a href="#destinations" className="text-gray-700 hover:text-emerald-600 px-3 py-2">مقصد‌ها</a>
              <a href="#hotels" className="text-gray-700 hover:text-emerald-600 px-3 py-2">هتل‌ها</a>
              <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 px-3 py-2">نظرات</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 px-3 py-2">تماس</a>
            </div>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </nav>
  );
};