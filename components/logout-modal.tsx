'use client'

import React from 'react'
import { LogOut, AlertTriangle } from 'lucide-react'
import { useLanguage } from '@/components/LanguageContext'

interface LogoutModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export function LogoutModal({
  isOpen,
  onClose,
  onConfirm,
}: LogoutModalProps) {
  const { t } = useLanguage()

  if (!isOpen) return null

  return (
    <div className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm duration-200">
      <div className="animate-in zoom-in-95 w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-xl duration-200">
        {/* Top Warning Icon */}
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
          <AlertTriangle className="h-6 w-6 text-red-600" />
        </div>

        {/* Heading Titles */}
        <h3 className="mb-2 text-lg font-bold text-gray-900">
          {t('logoutModal.title')}
        </h3>

        <p className="mb-6 px-2 text-xs font-medium text-[#8D6E63]">
          {t('logoutModal.description')}
        </p>

        {/* Buttons Row */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-1/2 rounded-xl border border-gray-300 py-2.5 text-sm font-semibold text-gray-700 outline-none transition-colors hover:bg-gray-50"
          >
            {t('logoutModal.cancel')}
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="flex w-1/2 transform items-center justify-center gap-1.5 rounded-xl bg-red-600 py-2.5 text-sm font-semibold text-white shadow-md outline-none transition-all hover:-translate-y-0.5 hover:bg-red-700"
          >
            <LogOut size={16} />

            {t('logoutModal.confirm')}
          </button>
        </div>
      </div>
    </div>
  )
}