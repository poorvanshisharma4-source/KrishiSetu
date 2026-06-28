<<<<<<< HEAD
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Lock,
  Phone,
  User,
  Sprout,
  Building2,
  CheckCircle,
  Eye,
  EyeOff
} from 'lucide-react';
import Link from 'next/link';

export default function BuyerLoginPage() {
  const router = useRouter();

  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    companyName: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔥 Replace this with real API later
    const isSuccess = true;

    if (isSuccess) {
      alert(
        isRegister
          ? 'Buyer Registration Successful!'
          : 'Buyer Login Successful!'
      );

      // 🚀 Redirect to dashboard
      router.push('/buyer/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F0E6] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      
      {/* Back Button */}
      <div className="absolute top-6 left-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#2E7D32] hover:text-[#1b4d1e] font-medium transition-all"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>

      {/* Header */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="flex justify-center items-center gap-2 text-[#2E7D32] font-bold text-3xl mb-4">
          <Sprout className="w-9 h-9 p-1.5 bg-[#A5D6A7] rounded-xl text-[#2E7D32]" />
          <span>KrishiSetu</span>
        </div>

        <h2 className="text-3xl font-extrabold text-[#2E7D32]">
          {isRegister ? 'Join KrishiSetu as Buyer' : 'Welcome Back, Buyer'}
        </h2>

        <p className="mt-2 text-sm text-[#8D6E63]">
          {isRegister
            ? 'Create your account to start sourcing directly from farmers'
            : 'Sign in to access your marketplace and orders'}
        </p>
      </div>

      {/* Form */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl rounded-2xl sm:px-10 border border-[#A5D6A7]/30">

          {/* Toggle */}
          <div className="flex bg-[#F5F0E6] p-1 rounded-xl mb-6">
            <button
              type="button"
              onClick={() => setIsRegister(false)}
              className={`w-1/2 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                !isRegister
                  ? 'bg-[#2E7D32] text-white shadow'
                  : 'text-[#8D6E63] hover:text-[#2E7D32]'
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => setIsRegister(true)}
              className={`w-1/2 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                isRegister
                  ? 'bg-[#2E7D32] text-white shadow'
                  : 'text-[#8D6E63] hover:text-[#2E7D32]'
              }`}
            >
              Register
            </button>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            
            {/* Name */}
            {isRegister && (
              <div>
                <label className="block text-sm font-medium text-[#8D6E63] mb-1">
                  Full Name
                </label>

                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <User size={18} />
                  </span>

                  <input
                    type="text"
                    required
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E7D32] bg-[#F5F0E6]/30 text-black outline-none"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
              </div>
            )}

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-[#8D6E63] mb-1">
                Phone Number
              </label>

              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <Phone size={18} />
                </span>

                <input
                  type="tel"
                  required
                  maxLength={10}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E7D32] bg-[#F5F0E6]/30 text-black outline-none"
                  placeholder="Enter 10 digit number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[#8D6E63] mb-1">
                Password
              </label>

              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <Lock size={18} />
                </span>

                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E7D32] bg-[#F5F0E6]/30 text-black outline-none"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Company */}
            {isRegister && (
              <div>
                <label className="block text-sm font-medium text-[#8D6E63] mb-1">
                  Company Name (Optional)
                </label>

                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <Building2 size={18} />
                  </span>

                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E7D32] bg-[#F5F0E6]/30 text-black outline-none"
                    placeholder="Business name"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        companyName: e.target.value
                      })
                    }
                  />
                </div>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl text-white font-medium bg-[#2E7D32] hover:bg-[#1b4d1e] transition-all"
            >
              {isRegister ? 'Complete Registration' : 'Sign In'}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t flex justify-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <CheckCircle size={14} className="text-[#2E7D32]" />
              Secure Trade
            </span>

            <span className="flex items-center gap-1">
              <CheckCircle size={14} className="text-[#2E7D32]" />
              Verified Users
            </span>
          </div>
        </div>
      </div>
    </div>
  );
=======
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Lock,
  Phone,
  User,
  Sprout,
  Building2,
  CheckCircle,
  Eye,
  EyeOff
} from 'lucide-react';
import Link from 'next/link';

export default function BuyerLoginPage() {
  const router = useRouter();

  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    companyName: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔥 Replace this with real API later
    const isSuccess = true;

    if (isSuccess) {
      alert(
        isRegister
          ? 'Buyer Registration Successful!'
          : 'Buyer Login Successful!'
      );

      // 🚀 Redirect to dashboard
      router.push('/buyer/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F0E6] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      
      {/* Back Button */}
      <div className="absolute top-6 left-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#2E7D32] hover:text-[#1b4d1e] font-medium transition-all"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>

      {/* Header */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="flex justify-center items-center gap-2 text-[#2E7D32] font-bold text-3xl mb-4">
          <Sprout className="w-9 h-9 p-1.5 bg-[#A5D6A7] rounded-xl text-[#2E7D32]" />
          <span>KrishiSetu</span>
        </div>

        <h2 className="text-3xl font-extrabold text-[#2E7D32]">
          {isRegister ? 'Join KrishiSetu as Buyer' : 'Welcome Back, Buyer'}
        </h2>

        <p className="mt-2 text-sm text-[#8D6E63]">
          {isRegister
            ? 'Create your account to start sourcing directly from farmers'
            : 'Sign in to access your marketplace and orders'}
        </p>
      </div>

      {/* Form */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl rounded-2xl sm:px-10 border border-[#A5D6A7]/30">

          {/* Toggle */}
          <div className="flex bg-[#F5F0E6] p-1 rounded-xl mb-6">
            <button
              type="button"
              onClick={() => setIsRegister(false)}
              className={`w-1/2 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                !isRegister
                  ? 'bg-[#2E7D32] text-white shadow'
                  : 'text-[#8D6E63] hover:text-[#2E7D32]'
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => setIsRegister(true)}
              className={`w-1/2 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                isRegister
                  ? 'bg-[#2E7D32] text-white shadow'
                  : 'text-[#8D6E63] hover:text-[#2E7D32]'
              }`}
            >
              Register
            </button>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            
            {/* Name */}
            {isRegister && (
              <div>
                <label className="block text-sm font-medium text-[#8D6E63] mb-1">
                  Full Name
                </label>

                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <User size={18} />
                  </span>

                  <input
                    type="text"
                    required
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E7D32] bg-[#F5F0E6]/30 text-black outline-none"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
              </div>
            )}

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-[#8D6E63] mb-1">
                Phone Number
              </label>

              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <Phone size={18} />
                </span>

                <input
                  type="tel"
                  required
                  maxLength={10}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E7D32] bg-[#F5F0E6]/30 text-black outline-none"
                  placeholder="Enter 10 digit number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[#8D6E63] mb-1">
                Password
              </label>

              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <Lock size={18} />
                </span>

                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E7D32] bg-[#F5F0E6]/30 text-black outline-none"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Company */}
            {isRegister && (
              <div>
                <label className="block text-sm font-medium text-[#8D6E63] mb-1">
                  Company Name (Optional)
                </label>

                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <Building2 size={18} />
                  </span>

                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E7D32] bg-[#F5F0E6]/30 text-black outline-none"
                    placeholder="Business name"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        companyName: e.target.value
                      })
                    }
                  />
                </div>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl text-white font-medium bg-[#2E7D32] hover:bg-[#1b4d1e] transition-all"
            >
              {isRegister ? 'Complete Registration' : 'Sign In'}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t flex justify-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <CheckCircle size={14} className="text-[#2E7D32]" />
              Secure Trade
            </span>

            <span className="flex items-center gap-1">
              <CheckCircle size={14} className="text-[#2E7D32]" />
              Verified Users
            </span>
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> 8d282be6528be5fa383e82fa7a58c9ffcd476c18
}