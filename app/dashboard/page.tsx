'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function DashboardPage() {
  const router = useRouter();
  // In a real app, you'd get this from your auth state management
  const user = {
    firstName: 'Jon',
    lastName: 'Doe',
    email: 'starlord0222@gmail.com',
    // Add more user details as needed
  };

  const recentBookings = [
    {
      id: 1,
      vehicle: 'BMW M5',
      date: '2024-03-15',
      status: 'Upcoming',
      price: '$99/day'
    },
    // Add more bookings as needed
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">
              Welcome back, {user.firstName}!
            </h1>
            <p className="text-gray-300">
              Manage your bookings and explore our premium fleet.
            </p>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* User Profile Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{user.firstName} {user.lastName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>
                <button
                  className="w-full mt-4 bg-gray-900 text-white py-2 rounded-xl
                           hover:bg-gray-800 transition-colors"
                >
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button
                  onClick={() => router.push('/cars')}
                  className="w-full bg-blue-600 text-white py-2 rounded-xl
                           hover:bg-blue-700 transition-colors"
                >
                  Book a Vehicle
                </button>
                <button className="w-full border border-gray-300 py-2 rounded-xl
                                 hover:bg-gray-50 transition-colors">
                  View Bookings
                </button>
                <button className="w-full border border-gray-300 py-2 rounded-xl
                                 hover:bg-gray-50 transition-colors">
                  Support
                </button>
              </div>
            </div>

            {/* Membership Status */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-sm text-white">
              <h2 className="text-xl font-semibold mb-4">Membership Status</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-300">Current Plan</p>
                  <p className="font-medium">Premium Member</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Member Since</p>
                  <p className="font-medium">March 2024</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Points Balance</p>
                  <p className="font-medium">1,500 pts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Recent Bookings</h2>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Vehicle</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Price</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentBookings.map((booking) => (
                      <tr key={booking.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {booking.vehicle}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {booking.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {booking.price}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-blue-600 hover:text-blue-800">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
