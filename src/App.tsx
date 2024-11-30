import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features/Features';
import { PopularDestinations } from './components/PopularDestinations/PopularDestinations';
import { Hotels } from './components/Hotels/Hotels';
import { LocalExperiences } from './components/LocalExperiences/LocalExperience';
import { Testimonials } from './components/Testimonials/Testimonials';
import { TravelTips } from './components/TravelTips/TravelTips';
import { Newsletter } from './components/Newsletter/Newsletter';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen" dir="rtl">
      <Navbar />
      <main>
        <section id="hero" className="bg-gradient-to-r from-emerald-50 to-cyan-50">
          <Hero />
        </section>
        <Features />
        <PopularDestinations />
        <Hotels />
        <LocalExperiences />
        <Testimonials />
        <TravelTips />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;