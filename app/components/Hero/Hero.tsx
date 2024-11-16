import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30 z-10" />

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transform hover:scale-100 transition-transform duration-[2s]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070')",
        }}
      />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Premium Car Rental
          <span className="block mt-2 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
            Redefined
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
          Experience luxury and comfort on your journey with our curated collection of premium vehicles
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <Link
            href="/cars"
            className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium
                     hover:bg-gray-100 transition-colors duration-300 min-w-[200px]
                     flex items-center justify-center gap-2"
          >
            Browse Cars
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="border border-white text-white px-8 py-4 rounded-full font-medium
                     hover:bg-white hover:text-gray-900 transition-all duration-300 min-w-[200px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
