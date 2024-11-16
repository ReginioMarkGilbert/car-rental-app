'use client';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn] = useState(pathname.includes('/dashboard')); // Basic check, replace with proper auth state later

  const handleSignOut = () => {
    // Add sign out logic here
    router.push('/');
  };

  const renderAuthButton = () => {
    if (isLoggedIn) {
      return (
        <button
          onClick={handleSignOut}
          className="text-white px-4 py-2 rounded-full border border-white/30
                   hover:bg-white hover:text-gray-900 transition-all duration-300"
        >
          Sign Out
        </button>
      );
    }

    return (
      <Link
        href="/auth"
        className="text-white px-4 py-2 rounded-full border border-white/30
                 hover:bg-white hover:text-gray-900 transition-all duration-300"
      >
        Sign In
      </Link>
    );
  };

  const renderNavLinks = () => {
    if (isLoggedIn) {
      return (
        <>
          <Link href="/dashboard" className="text-gray-200 hover:text-white transition-colors">
            Dashboard
          </Link>
          <Link href="/dashboard/bookings" className="text-gray-200 hover:text-white transition-colors">
            My Bookings
          </Link>
          <Link href="/cars" className="text-gray-200 hover:text-white transition-colors">
            Browse Cars
          </Link>
          <Link href="/dashboard/profile" className="text-gray-200 hover:text-white transition-colors">
            Profile
          </Link>
        </>
      );
    }

    return (
      <>
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
      </>
    );
  };

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-black/70 to-black/0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href={isLoggedIn ? '/dashboard' : '/'} className="text-2xl font-bold text-white">
            AutoLuxe
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {renderNavLinks()}
          </div>

          <div className="flex items-center space-x-4">
            {renderAuthButton()}
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
