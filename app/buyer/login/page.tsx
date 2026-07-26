'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Lock,
  Phone,
  User,
  Sprout,
  Building2,
  CheckCircle,
  Eye,
  EyeOff,
} from 'lucide-react'
import Link from 'next/link'
import api from '@/lib/api'
import { useLanguage } from '@/components/LanguageContext'

export default function BuyerLoginPage() {
  const router = useRouter()
  const { t } = useLanguage()

  const [isRegister, setIsRegister] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    companyName: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      let response

      if (isRegister) {
        response = await api.post('/auth/register', {
          name: formData.name,
          email: `${formData.phone}@buyer.krishisetu.local`,
          phone: formData.phone,
          password: formData.password,
          role: 'buyer',
          village: '',
          district: '',
          state: '',
          companyName: formData.companyName,
        })

        if (response.success) {
          alert(
            response.message ||
              t('buyerLogin.registrationSuccess')
          )

          setIsRegister(false)
        } else {
          alert(
            response.message ||
              t('buyerLogin.registrationFailed')
          )
        }
      } else {
        response = await api.post('/auth/login', {
          phone: formData.phone,
          password: formData.password,
        })

        if (response.success) {
          localStorage.setItem('token', response.token)
          localStorage.setItem(
            'user',
            JSON.stringify(response.user)
          )

          const redirectPath =
            response.user?.role === 'farmer'
              ? '/farmer/dashboard'
              : response.user?.role === 'admin'
                ? '/admin/dashboard'
                : '/buyer/dashboard'

          alert(
            response.message ||
              t('buyerLogin.loginSuccess')
          )

          router.push(redirectPath)
        } else {
          alert(
            response.message ||
              t('buyerLogin.loginFailed')
          )
        }
      }
    } catch (error: any) {
      console.error(error)

      const message =
        error?.response?.data?.message ||
        error?.message ||
        t('buyerLogin.somethingWentWrong')

      alert(message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col justify-center bg-[#F5F0E6] py-12 font-sans sm:px-6 lg:px-8">

      {/* Back Button */}
      <div className="absolute left-6 top-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-medium text-[#2E7D32] transition-all hover:text-[#1b4d1e]"
        >
          <ArrowLeft size={20} />

          {t('buyerLogin.backToHome')}
        </Link>
      </div>

      {/* Header */}
      <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">

        <div className="mb-4 flex items-center justify-center gap-2 text-3xl font-bold text-[#2E7D32]">

          <Sprout className="h-9 w-9 rounded-xl bg-[#A5D6A7] p-1.5 text-[#2E7D32]" />

          <span>
            KrishiSetu
          </span>

        </div>

        <h2 className="text-3xl font-extrabold text-[#2E7D32]">
          {isRegister
            ? t('buyerLogin.joinAsBuyer')
            : t('buyerLogin.welcomeBack')}
        </h2>

        <p className="mt-2 text-sm text-[#8D6E63]">
          {isRegister
            ? t('buyerLogin.registerDescription')
            : t('buyerLogin.loginDescription')}
        </p>

      </div>

      {/* Form */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">

        <div className="rounded-2xl border border-[#A5D6A7]/30 bg-white px-4 py-8 shadow-xl sm:px-10">

          {/* Toggle */}
          <div className="mb-6 flex rounded-xl bg-[#F5F0E6] p-1">

            <button
              type="button"
              onClick={() => setIsRegister(false)}
              className={`w-1/2 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                !isRegister
                  ? 'bg-[#2E7D32] text-white shadow'
                  : 'text-[#8D6E63] hover:text-[#2E7D32]'
              }`}
            >
              {t('buyerLogin.login')}
            </button>

            <button
              type="button"
              onClick={() => setIsRegister(true)}
              className={`w-1/2 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                isRegister
                  ? 'bg-[#2E7D32] text-white shadow'
                  : 'text-[#8D6E63] hover:text-[#2E7D32]'
              }`}
            >
              {t('buyerLogin.register')}
            </button>

          </div>

          <form
            className="space-y-5"
            onSubmit={handleSubmit}
          >

            {/* Name */}
            {isRegister && (
              <div>

                <label className="mb-1 block text-sm font-medium text-[#8D6E63]">
                  {t('buyerLogin.fullName')}
                </label>

                <div className="relative">

                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <User size={18} />
                  </span>

                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-gray-300 bg-[#F5F0E6]/30 py-2.5 pl-10 pr-4 text-black outline-none focus:ring-2 focus:ring-[#2E7D32]"
                    placeholder={t(
                      'buyerLogin.enterFullName'
                    )}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                  />

                </div>

              </div>
            )}

            {/* Phone */}
            <div>

              <label className="mb-1 block text-sm font-medium text-[#8D6E63]">
                {t('buyerLogin.phoneNumber')}
              </label>

              <div className="relative">

                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <Phone size={18} />
                </span>

                <input
                  type="tel"
                  required
                  maxLength={10}
                  className="w-full rounded-xl border border-gray-300 bg-[#F5F0E6]/30 py-2.5 pl-10 pr-4 text-black outline-none focus:ring-2 focus:ring-[#2E7D32]"
                  placeholder={t(
                    'buyerLogin.enterPhone'
                  )}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                />

              </div>

            </div>

            {/* Password */}
            <div>

              <label className="mb-1 block text-sm font-medium text-[#8D6E63]">
                {t('buyerLogin.password')}
              </label>

              <div className="relative">

                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <Lock size={18} />
                </span>

                <input
                  type={
                    showPassword
                      ? 'text'
                      : 'password'
                  }
                  required
                  className="w-full rounded-xl border border-gray-300 bg-[#F5F0E6]/30 py-2.5 pl-10 pr-10 text-black outline-none focus:ring-2 focus:ring-[#2E7D32]"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>

            {/* Company */}
            {isRegister && (
              <div>

                <label className="mb-1 block text-sm font-medium text-[#8D6E63]">
                  {t('buyerLogin.companyName')}
                </label>

                <div className="relative">

                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <Building2 size={18} />
                  </span>

                  <input
                    type="text"
                    className="w-full rounded-xl border border-gray-300 bg-[#F5F0E6]/30 py-2.5 pl-10 pr-4 text-black outline-none focus:ring-2 focus:ring-[#2E7D32]"
                    placeholder={t(
                      'buyerLogin.businessName'
                    )}
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        companyName: e.target.value,
                      })
                    }
                  />

                </div>

              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl bg-[#2E7D32] px-4 py-3 font-medium text-white transition-all hover:bg-[#1b4d1e] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading
                ? t('buyerLogin.loading')
                : isRegister
                  ? t('buyerLogin.completeRegistration')
                  : t('buyerLogin.signIn')}
            </button>

          </form>

          {/* Footer */}
          <div className="mt-6 flex justify-center gap-4 border-t pt-6 text-xs text-gray-500">

            <span className="flex items-center gap-1">
              <CheckCircle
                size={14}
                className="text-[#2E7D32]"
              />

              {t('buyerLogin.secureTrade')}
            </span>

            <span className="flex items-center gap-1">
              <CheckCircle
                size={14}
                className="text-[#2E7D32]"
              />

              {t('buyerLogin.verifiedUsers')}
            </span>

          </div>

        </div>

      </div>

    </div>
  )
}