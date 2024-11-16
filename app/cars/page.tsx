'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const vehicles = [
  {
    id: 1,
    name: 'BMW M5',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070',
    price: '99',
    category: 'Luxury Sedan',
    specs: ['600 HP', '0-60 in 3.2s', 'Premium Sound System', 'Heated Seats']
  },
  {
    id: 2,
    name: 'Porsche 911',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070',
    price: '149',
    category: 'Sports Car',
    specs: ['450 HP', '0-60 in 3.0s', 'Sport Mode', 'Carbon Fiber Interior']
  },
  {
    id: 3,
    name: 'Mercedes GLE',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071',
    price: '129',
    category: 'SUV',
    specs: ['375 HP', 'AWD', 'Panoramic Roof', '7 Seats']
  },
  {
    id: 4,
    name: 'Audi RS7',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070',
    price: '139',
    category: 'Luxury Sedan',
    specs: ['591 HP', '0-60 in 3.5s', 'Bang & Olufsen Sound', 'Air Suspension']
  },
  {
    id: 5,
    name: 'Lamborghini Huracán',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2070',
    price: '299',
    category: 'Sports Car',
    specs: ['630 HP', '0-60 in 2.9s', 'Track Mode', 'Carbon Ceramic Brakes']
  },
  {
    id: 6,
    name: 'Range Rover',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070',
    price: '159',
    category: 'SUV',
    specs: ['395 HP', 'Terrain Response', 'Premium Interior', 'Air Suspension']
  },
];

const categories = ['All Vehicles', 'Luxury Sedan', 'Sports Car', 'SUV'];

export default function CarsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Vehicles');

  const filteredVehicles = vehicles.filter(vehicle =>
    selectedCategory === 'All Vehicles' ? true : vehicle.category === selectedCategory
  );

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083"
            alt="Luxury cars"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Fleet</h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Choose from our extensive collection of premium vehicles, each maintained to the highest standards of luxury and performance.
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="sticky top-20 bg-white border-b z-30">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex gap-4 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 whitespace-nowrap
                    ${selectedCategory === category
                      ? 'bg-gray-900 text-white'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl
                          transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm text-blue-600 font-medium">{vehicle.category}</p>
                      <h3 className="text-2xl font-semibold text-gray-900">{vehicle.name}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">from</p>
                      <p className="text-2xl font-bold text-gray-900">${vehicle.price}</p>
                      <p className="text-sm text-gray-500">/day</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {vehicle.specs.map((spec, index) => (
                      <p key={index} className="text-sm text-gray-600 flex items-center gap-1">
                        <span className="text-blue-600">•</span> {spec}
                      </p>
                    ))}
                  </div>
                  <button className="w-full bg-gray-900 text-white py-3 rounded-xl
                                   hover:bg-gray-800 transition-colors">
                    Reserve Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
