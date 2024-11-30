import React from "react";
import { Mail, Phone, Instagram, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
	return (
		<footer id='contact' className='bg-gray-900 text-white py-12'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div className='text-right'>
						<h3 className='text-xl font-bold mb-4'>تماس با ما</h3>
						<div className='space-y-2'>
							<div className='flex items-center justify-end space-x-2 rtl:space-x-reverse'>
								<span>mustafahussaini754@gmail.com</span>
								<Mail className='w-5 h-5' />
							</div>
							<div className='flex items-center justify-end space-x-2 rtl:space-x-reverse'>
								<span>+93795442304</span>
								<Phone className='w-5 h-5' />
							</div>
						</div>
					</div>
					<div className='text-right'>
						<h3 className='text-xl font-bold mb-4'>شبکه‌های اجتماعی</h3>
						<div className='flex justify-end space-x-4 rtl:space-x-reverse'>
							<a href='#' className='hover:text-indigo-400 transition-colors'>
								<Instagram className='w-6 h-6' />
							</a>
							<a href='#' className='hover:text-indigo-400 transition-colors'>
								<Twitter className='w-6 h-6' />
							</a>
							<a href='#' className='hover:text-indigo-400 transition-colors'>
								<Facebook className='w-6 h-6' />
							</a>
						</div>
					</div>
				</div>
				<div className='mt-8 pt-8 border-t border-gray-800 text-center'>
					<p className='text-gray-400'>© ۱۴۰۳ سفرنامه. تمامی حقوق محفوظ است.</p>
					<p className='text-gray-400 mt-2'>
						طراحی و توسعه توسط{" "}
						<span className='text-emerald-400'>مصطفی حسینی</span>
					</p>
				</div>
			</div>
		</footer>
	);
};
