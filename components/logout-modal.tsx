'use client'

import React from 'react'
import { LogOut, AlertTriangle } from 'lucide-react'

interface LogoutModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export function LogoutModal({ isOpen, onClose, onConfirm }: LogoutModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-sm p-6 border border-gray-100 shadow-xl text-center animate-in zoom-in-95 duration-200">
        
        {/* Top Warning Icon */}
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-50 mb-4">
          <AlertTriangle className="h-6 w-6 text-red-600" />
        </div>

        {/* Heading Titles */}
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Are you sure you want to logout?
        </h3>
        <p className="text-xs text-[#8D6E63] font-medium mb-6 px-2">
          You will need to enter your credentials again to access your KrishiSetu dashboard panels.
        </p>

        {/* Buttons Row */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-1/2 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-xl text-sm hover:bg-gray-50 transition-colors outline-none"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="w-1/2 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl text-sm shadow-md transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-1.5 outline-none"
          >
            <LogOut size={16} />
            Yes, Logout
          </button>
        </div>
      </div>
    </div>
  )
}