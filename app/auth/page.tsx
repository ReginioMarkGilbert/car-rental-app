'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

interface FormData {
   firstName: string;
   lastName: string;
   email: string;
   password: string;
}

interface FormErrors {
   firstName?: string;
   lastName?: string;
   email?: string;
   password?: string;
}

export default function AuthPage() {
   const router = useRouter();
   const [isSignIn, setIsSignIn] = useState(true);
   const [showPassword, setShowPassword] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [formData, setFormData] = useState<FormData>({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
   });
   const [errors, setErrors] = useState<FormErrors>({});

   const validateForm = (): boolean => {
      const newErrors: FormErrors = {};

      if (!isSignIn) {
         if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
         }
         if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
         }
      }

      if (!formData.email.trim()) {
         newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
         newErrors.email = 'Please enter a valid email';
      }

      if (!formData.password) {
         newErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
         newErrors.password = 'Password must be at least 6 characters';
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
         ...prev,
         [name]: value
      }));
      // Clear error when user starts typing
      if (errors[name as keyof FormErrors]) {
         setErrors(prev => ({
            ...prev,
            [name]: undefined
         }));
      }
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateForm()) return;

      setIsLoading(true);
      try {
         const response = await fetch('/api/auth', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               type: isSignIn ? 'signin' : 'signup',
               ...formData,
            }),
         });

         const data = await response.json();

         if (!response.ok) {
            throw new Error(data.error || 'Authentication failed');
         }

         // Handle successful auth
         if (isSignIn) {
            console.log('Successfully signed in:', data.user);
         } else {
            console.log('Successfully signed up');
         }

         // Redirect to dashboard instead of home
         router.push('/dashboard');
      } catch (error: any) {
         console.error('Auth error:', error);
         setErrors({
            email: error.message || 'Authentication failed. Please try again.'
         });
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <>
         <Navbar />
         <main className="pt-20 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-16">
               <div className="flex flex-col lg:flex-row gap-16 items-center">
                  {/* Left Side - Image and Text */}
                  <div className="flex-1 w-full lg:max-w-xl">
                     <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
                        <img
                           src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070"
                           alt="Luxury car"
                           className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center z-20 p-8">
                           <div>
                              <h2 className="text-3xl font-bold text-white mb-4">
                                 {isSignIn ? 'Welcome Back!' : 'Join AutoLuxe'}
                              </h2>
                              <p className="text-gray-200 max-w-md">
                                 {isSignIn
                                    ? 'Access your account to manage your reservations and explore our premium fleet.'
                                    : 'Create an account to start your luxury journey with AutoLuxe.'}
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Right Side - Auth Form */}
                  <div className="flex-1 w-full lg:max-w-xl">
                     <div className="bg-white p-8 rounded-2xl shadow-sm">
                        {/* Form Header */}
                        <div className="text-center mb-8">
                           <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {isSignIn ? 'Sign In' : 'Create Account'}
                           </h3>
                           <p className="text-gray-600">
                              {isSignIn
                                 ? "Don't have an account? "
                                 : "Already have an account? "}
                              <button
                                 onClick={() => {
                                    setIsSignIn(!isSignIn);
                                    setErrors({});
                                    setFormData({
                                       firstName: '',
                                       lastName: '',
                                       email: '',
                                       password: '',
                                    });
                                 }}
                                 className="text-blue-600 hover:text-blue-700 font-medium"
                              >
                                 {isSignIn ? 'Sign Up' : 'Sign In'}
                              </button>
                           </p>
                        </div>

                        {/* Auth Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                           {!isSignIn && (
                              <div className="grid grid-cols-2 gap-4">
                                 <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                       First Name
                                    </label>
                                    <input
                                       type="text"
                                       name="firstName"
                                       value={formData.firstName}
                                       onChange={handleInputChange}
                                       className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                   bg-gray-50 hover:bg-white transition-colors text-gray-900
                                   ${errors.firstName ? 'border-red-500' : ''}`}
                                       placeholder="John"
                                    />
                                    {errors.firstName && (
                                       <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                                    )}
                                 </div>
                                 <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                       Last Name
                                    </label>
                                    <input
                                       type="text"
                                       name="lastName"
                                       value={formData.lastName}
                                       onChange={handleInputChange}
                                       className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                   bg-gray-50 hover:bg-white transition-colors text-gray-900
                                   ${errors.lastName ? 'border-red-500' : ''}`}
                                       placeholder="Doe"
                                    />
                                    {errors.lastName && (
                                       <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                                    )}
                                 </div>
                              </div>
                           )}

                           <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                 Email
                              </label>
                              <input
                                 type="email"
                                 name="email"
                                 value={formData.email}
                                 onChange={handleInputChange}
                                 className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                               bg-gray-50 hover:bg-white transition-colors text-gray-900
                               ${errors.email ? 'border-red-500' : ''}`}
                                 placeholder="john@example.com"
                              />
                              {errors.email && (
                                 <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                              )}
                           </div>

                           <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                 Password
                              </label>
                              <div className="relative">
                                 <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                 bg-gray-50 hover:bg-white transition-colors text-gray-900
                                 ${errors.password ? 'border-red-500' : ''}`}
                                    placeholder="••••••••"
                                 />
                                 <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                 >
                                    {showPassword ? (
                                       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                       </svg>
                                    ) : (
                                       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                       </svg>
                                    )}
                                 </button>
                              </div>
                              {errors.password && (
                                 <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                              )}
                           </div>

                           {isSignIn && (
                              <div className="flex items-center justify-between">
                                 <div className="flex items-center">
                                    <input
                                       type="checkbox"
                                       className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label className="ml-2 block text-sm text-gray-700">
                                       Remember me
                                    </label>
                                 </div>
                                 <Link
                                    href="/auth/forgot-password"
                                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                                 >
                                    Forgot password?
                                 </Link>
                              </div>
                           )}

                           <button
                              type="submit"
                              disabled={isLoading}
                              className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800
                             transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                           >
                              {isLoading ? (
                                 <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Processing...</span>
                                 </>
                              ) : (
                                 <>
                                    {isSignIn ? 'Sign In' : 'Create Account'}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                 </>
                              )}
                           </button>
                        </form>

                        <div className="relative my-8">
                           <div className="absolute inset-0 flex items-center">
                              <div className="w-full border-t border-gray-200"></div>
                           </div>
                           <div className="relative flex justify-center text-sm">
                              <span className="px-4 bg-white text-gray-500">or continue with</span>
                           </div>
                        </div>

                        {/* Social Auth Buttons */}
                        <div className="space-y-3">
                           <button disabled className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors opacity-50 cursor-not-allowed">
                              <img src="/google.svg" alt="Google" className="w-5 h-5" />
                              <span className="text-gray-700 font-medium">Continue with Google</span>
                           </button>
                           <button disabled className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors opacity-50 cursor-not-allowed">
                              <img src="/apple.svg" alt="Apple" className="w-5 h-5" />
                              <span className="text-gray-700 font-medium">Continue with Apple</span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </main>
         <Footer />
      </>
   );
}
