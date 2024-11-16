import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Fleet Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Customer Experience',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000'
  },
  {
    id: 4,
    name: 'David Park',
    position: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000'
  }
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083"
            alt="Luxury car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Delivering exceptional luxury car rental experiences since 2010
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Our Story */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Founded in 2010, AutoLuxe has been at the forefront of luxury car rentals,
                  providing exceptional vehicles and service to our distinguished clients.
                  Our journey began with a simple vision: to make luxury accessible.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our commitment to excellence and attention to detail has made us the
                  preferred choice for those seeking premium automotive experiences. We've
                  built our reputation on trust, quality, and unparalleled service.
                </p>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070"
                  alt="Our showroom"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in vehicle quality and customer service,
                ensuring every rental exceeds expectations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Continuously updating our fleet with the latest luxury vehicles and
                implementing cutting-edge rental solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Reliability</h3>
              <p className="text-gray-600">
                Ensuring a seamless and dependable rental experience every time,
                backed by our 24/7 customer support.
              </p>
            </div>
          </div>

          {/* Team */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="text-center group">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 text-sm">{member.position}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center bg-gray-900 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Luxury?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our growing family of satisfied clients and experience the AutoLuxe difference.
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium
                             hover:bg-gray-100 transition-colors">
              Contact Us Today
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
