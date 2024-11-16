import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const services = [
  {
    id: 1,
    title: 'Airport Transfer',
    description: 'Luxury airport transfers with professional chauffeurs.',
    image: 'https://images.unsplash.com/photo-1490642914619-7955a3fd483c?q=80&w=2070',
    features: ['Meet & Greet', 'Flight Tracking', 'Door-to-Door Service']
  },
  {
    id: 2,
    title: 'Wedding Service',
    description: 'Make your special day even more memorable.',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070',
    features: ['Decorated Vehicles', 'Professional Chauffeur', 'Photo Opportunities']
  },
  {
    id: 3,
    title: 'Corporate Travel',
    description: 'Premium transportation for business professionals.',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073',
    features: ['Wi-Fi Equipped', 'Corporate Accounts', 'Priority Service']
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          <img
            src="https://images.unsplash.com/photo-1490642914619-7955a3fd483c?q=80&w=2070"
            alt="Luxury Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Experience luxury transportation tailored to your needs with our comprehensive range of services.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl
                          transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-200">{service.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <p key={index} className="text-gray-600 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </p>
                    ))}
                  </div>
                  <button className="w-full bg-gray-900 text-white py-3 rounded-xl
                                   hover:bg-gray-800 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gray-900 text-white py-16 mt-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Luxury?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to book your premium transportation service
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium
                             hover:bg-gray-100 transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
