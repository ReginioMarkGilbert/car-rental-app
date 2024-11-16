'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function DashboardPage() {
  const router = useRouter();
  const user = {
    firstName: 'Jon',
    lastName: 'Doe',
    email: 'starlord0222@gmail.com',
    memberSince: 'March 2024',
    points: 1500,
    plan: 'Premium Member'
  };

  const recentBookings = [
    {
      id: 1,
      vehicle: 'BMW M5',
      date: '2024-03-15',
      status: 'Upcoming',
      price: '$99/day',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070'
    },
    {
      id: 2,
      vehicle: 'Porsche 911',
      date: '2024-03-20',
      status: 'Pending',
      price: '$149/day',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100">
        {/* Hero Section with Content Spacing */}
        <section className="bg-gray-900">
          {/* Hero Background */}
          <div className="relative h-[250px]">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083"
                alt="Luxury cars"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            </div>
          </div>

          {/* Welcome Text */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="py-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Welcome back, {user.firstName}!
              </h1>
              <p className="text-xl text-gray-200">
                Manage your bookings and explore our premium fleet.
              </p>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="max-w-7xl mx-auto px-4 -mt-8 pb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Profile</h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm">
                  Edit
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="font-medium text-gray-900">{user.firstName} {user.lastName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">{user.email}</p>
                </div>
                <button className="w-full bg-gray-900 text-white py-2.5 rounded-xl
                                hover:bg-gray-800 transition-colors">
                  View Profile
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <button
                  onClick={() => router.push('/cars')}
                  className="w-full bg-blue-600 text-white py-2.5 rounded-xl
                           hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  Book a Vehicle
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
                <button className="w-full bg-white text-gray-900 py-2.5 rounded-xl border border-gray-200
                                hover:bg-gray-50 transition-colors">
                  View Bookings
                </button>
                <button className="w-full bg-white text-gray-900 py-2.5 rounded-xl border border-gray-200
                                hover:bg-gray-50 transition-colors">
                  Contact Support
                </button>
              </div>
            </div>

            {/* Membership Card */}
            <div className="bg-gray-900 rounded-2xl p-6 text-white shadow-sm">
              <h2 className="text-xl font-semibold text-white mb-6">Membership Status</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400">Current Plan</p>
                  <p className="font-medium text-white">{user.plan}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Member Since</p>
                  <p className="font-medium text-white">{user.memberSince}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Points Balance</p>
                  <p className="text-2xl font-medium text-white">{user.points} pts</p>
                </div>
                <button className="w-full bg-gray-800 text-white py-2.5 rounded-xl border border-gray-700
                                hover:bg-gray-700 transition-colors">
                  View Benefits
                </button>
              </div>
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="mt-6 bg-white rounded-2xl shadow-sm">
            <div className="p-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Recent Bookings</h2>
              <button className="text-blue-600 hover:text-blue-700">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 text-xs uppercase">
                  <tr>
                    <th className="px-6 py-3 text-left text-gray-500">Vehicle</th>
                    <th className="px-6 py-3 text-left text-gray-500">Date</th>
                    <th className="px-6 py-3 text-left text-gray-500">Status</th>
                    <th className="px-6 py-3 text-left text-gray-500">Price</th>
                    <th className="px-6 py-3 text-left text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img
                            className="h-10 w-10 rounded-lg object-cover mr-3"
                            src={booking.image}
                            alt={booking.vehicle}
                          />
                          <span className="font-medium text-gray-900">{booking.vehicle}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-500">{booking.date}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full
                          ${booking.status === 'Upcoming'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'}`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-500">{booking.price}</td>
                      <td className="px-6 py-4">
                        <button className="text-blue-600 hover:text-blue-900">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
