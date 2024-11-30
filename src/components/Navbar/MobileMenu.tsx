import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm md:hidden">
      <div className="fixed inset-y-0 left-0 w-3/4 bg-white shadow-xl">
        <div className="p-4 flex justify-end">
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="px-4 py-2 space-y-4">
          <a href="#hero" onClick={onClose} className="block py-2 text-gray-700 hover:text-emerald-600">خانه</a>
          <a href="#features" onClick={onClose} className="block py-2 text-gray-700 hover:text-emerald-600">ویژگی‌ها</a>
          <a href="#destinations" onClick={onClose} className="block py-2 text-gray-700 hover:text-emerald-600">مقصد‌ها</a>
          <a href="#hotels" onClick={onClose} className="block py-2 text-gray-700 hover:text-emerald-600">هتل‌ها</a>
          <a href="#testimonials" onClick={onClose} className="block py-2 text-gray-700 hover:text-emerald-600">نظرات</a>
          <a href="#contact" onClick={onClose} className="block py-2 text-gray-700 hover:text-emerald-600">تماس</a>
        </div>
      </div>
    </div>
  );
};