import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-black/70 to-black/0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-white">
            AutoLuxe
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/cars" className="text-gray-200 hover:text-white transition-colors">
              Vehicles
            </Link>
            <Link href="/services" className="text-gray-200 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-200 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-200 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="hidden md:block text-white px-4 py-2 rounded-full border border-white/30
                       hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Sign In
            </Link>
            <button className="md:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
