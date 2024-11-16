'use client';
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function ContactPage() {
   return (
      <>
         <Navbar />
         <main className="pt-20 bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[40vh] bg-gray-900">
               <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
               <img
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070"
                  alt="Luxury cars"
                  className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto px-4 w-full">
                     <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
                     <p className="text-xl text-gray-200 max-w-2xl">
                        Get in touch with us for any inquiries about our services or to make a reservation.
                     </p>
                  </div>
               </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
               <div className="grid md:grid-cols-2 gap-16 items-start">
                  {/* Contact Form */}
                  <div className="bg-white p-8 rounded-2xl shadow-sm h-fit">
                     <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h2>
                     <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                           <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                 First Name
                              </label>
                              <input
                                 type="text"
                                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                               bg-gray-50 hover:bg-white transition-colors"
                                 placeholder="John"
                              />
                           </div>
                           <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                 Last Name
                              </label>
                              <input
                                 type="text"
                                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                               bg-gray-50 hover:bg-white transition-colors"
                                 placeholder="Doe"
                              />
                           </div>
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-2">
                              Email
                           </label>
                           <input
                              type="email"
                              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                             bg-gray-50 hover:bg-white transition-colors"
                              placeholder="john@example.com"
                           />
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-2">
                              Message
                           </label>
                           <textarea
                              rows={4}
                              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                             bg-gray-50 hover:bg-white transition-colors"
                              placeholder="How can we help you?"
                           ></textarea>
                        </div>
                        <button
                           type="submit"
                           className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800
                           transition-colors flex items-center justify-center gap-2"
                        >
                           Send Message
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                           </svg>
                        </button>
                     </form>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-8 sticky top-24">
                     <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Us</h3>
                        <p className="text-gray-600">
                           1234 Luxury Drive<br />
                           Beverly Hills, CA 90210
                        </p>
                     </div>

                     <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                        <div className="space-y-2">
                           <p className="text-gray-600 flex items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                              </svg>
                              Phone: (555) 123-4567
                           </p>
                           <p className="text-gray-600 flex items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                              </svg>
                              Email: info@autoluxe.com
                           </p>
                        </div>
                     </div>

                     <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
                        <div className="space-y-2">
                           <p className="text-gray-600 flex items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Monday - Friday: 9:00 AM - 6:00 PM
                           </p>
                           <p className="text-gray-600 flex items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Saturday: 10:00 AM - 4:00 PM
                           </p>
                           <p className="text-gray-600 flex items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Sunday: Closed
                           </p>
                        </div>
                     </div>

                     {/* Map */}
                     <div className="rounded-2xl overflow-hidden shadow-sm h-[300px]">
                        <iframe
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.43209866904753!3d34.09042349484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1709004001185!5m2!1sen!2sus"
                           width="100%"
                           height="100%"
                           style={{ border: 0 }}
                           allowFullScreen
                           loading="lazy"
                           referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </main>
         <Footer />
      </>
   );
}
