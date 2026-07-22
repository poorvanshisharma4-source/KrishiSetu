'use client';

import { useState } from "react";
import Link from "next/link";
import { 
  Lock, 
  Bell, 
  Building2, 
  ShieldAlert, 
  KeyRound, 
  Mail, 
  Check, 
  FileText,
  Trash2,
  ArrowLeft
} from "lucide-react";

export default function BuyerSettingsPage() {
  const [activeTab, setActiveTab] = useState<'security' | 'business' | 'notifications' | 'danger'>('security');
  
  // States
  const [buyerMatchAlerts, setBuyerMatchAlerts] = useState(true);
  const [contractAlerts, setContractAlerts] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F6F0] p-6 md:p-10">
      <div className="max-w-6xl mx-auto">

        {/* Back Link */}
        <Link 
          href="/buyer/dashboard" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-emerald-700 mb-6 transition"
        >
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Buyer Account Settings</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage corporate credentials, GST details, security, and invoice preferences.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Sidebar */}
          <div className="md:col-span-4 lg:col-span-3 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm space-y-1">
            
            <button
              onClick={() => setActiveTab('security')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition ${
                activeTab === 'security'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Lock size={18} /> Account & Password
            </button>

            <button
              onClick={() => setActiveTab('business')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition ${
                activeTab === 'business'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Building2 size={18} /> Tax & Business KYC
            </button>

            <button
              onClick={() => setActiveTab('notifications')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition ${
                activeTab === 'notifications'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Bell size={18} /> Procurement Alerts
            </button>

            <div className="pt-2 border-t border-gray-100">
              <button
                onClick={() => setActiveTab('danger')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition ${
                  activeTab === 'danger'
                    ? 'bg-red-500 text-white shadow-sm'
                    : 'text-red-600 hover:bg-red-50'
                }`}
              >
                <ShieldAlert size={18} /> Account Danger Zone
              </button>
            </div>

          </div>

          {/* Right Content Area */}
          <div className="md:col-span-8 lg:col-span-9 bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
            
            {/* SECURITY & LOGIN */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h2 className="text-xl font-bold text-gray-900">Security & Login Details</h2>
                  <p className="text-sm text-gray-500 mt-0.5">Manage password and primary contact email.</p>
                </div>

                <div className="space-y-5 max-w-lg">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Official Work Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                      <input 
                        type="email" 
                        value="procurement@freshmart.com" 
                        disabled
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm font-medium text-gray-500"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Current Password</label>
                    <div className="relative">
                      <KeyRound className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                      <input 
                        type="password" 
                        placeholder="••••••••" 
                        className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-emerald-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">New Password</label>
                    <div className="relative">
                      <KeyRound className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                      <input 
                        type="password" 
                        placeholder="Enter new strong password" 
                        className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-emerald-700"
                      />
                    </div>
                  </div>

                  <button className="mt-4 flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm px-6 py-3 rounded-xl transition shadow-sm">
                    <Check size={16} /> Save Security Changes
                  </button>
                </div>
              </div>
            )}

            {/* BUSINESS & TAX */}
            {activeTab === 'business' && (
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h2 className="text-xl font-bold text-gray-900">Business Verification & GST</h2>
                  <p className="text-sm text-gray-500 mt-0.5">Update company tax identification for automated invoicing.</p>
                </div>

                <div className="space-y-5 max-w-lg">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">GSTIN Number</label>
                    <div className="relative">
                      <FileText className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                      <input 
                        type="text" 
                        defaultValue="23AAAAA0000A1Z5" 
                        className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm uppercase font-semibold focus:outline-none focus:border-emerald-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Company Trade License No.</label>
                    <input 
                      type="text" 
                      defaultValue="TRD-897621-MP" 
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-emerald-700"
                    />
                  </div>

                  <button className="mt-4 flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm px-6 py-3 rounded-xl transition shadow-sm">
                    <Check size={16} /> Update Tax Info
                  </button>
                </div>
              </div>
            )}

            {/* PROCUREMENT ALERTS */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h2 className="text-xl font-bold text-gray-900">Procurement Alerts</h2>
                  <p className="text-sm text-gray-500 mt-0.5">Configure email and order notifications for sourcing.</p>
                </div>

                <div className="space-y-4">
                  {/* Option 1 */}
                  <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">New Farmer Match Alerts 🌱</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Get notified when farmers post crop listings matching your active procurement requirements.
                      </p>
                    </div>

                    <button
                      onClick={() => setBuyerMatchAlerts(!buyerMatchAlerts)}
                      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                        buyerMatchAlerts ? 'bg-emerald-700 justify-end' : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="bg-white w-4 h-4 rounded-full shadow-md"></div>
                    </button>
                  </div>

                  {/* Option 2 */}
                  <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Contract Acceptance & PDF Confirmations 📑</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Receive instant contract copies as soon as a farmer signs or accepts your offer.
                      </p>
                    </div>

                    <button
                      onClick={() => setContractAlerts(!contractAlerts)}
                      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                        contractAlerts ? 'bg-emerald-700 justify-end' : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="bg-white w-4 h-4 rounded-full shadow-md"></div>
                    </button>
                  </div>

                  {/* Option 3 */}
                  <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Weekly Market Sourcing Digest</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Get a summary email of newly listed crop yields in your targeted regions.
                      </p>
                    </div>

                    <button
                      onClick={() => setWeeklyDigest(!weeklyDigest)}
                      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                        weeklyDigest ? 'bg-emerald-700 justify-end' : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="bg-white w-4 h-4 rounded-full shadow-md"></div>
                    </button>
                  </div>

                </div>
              </div>
            )}

            {/* DANGER ZONE */}
            {activeTab === 'danger' && (
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h2 className="text-xl font-bold text-red-600">Account Danger Zone</h2>
                  <p className="text-sm text-gray-500 mt-0.5">Manage corporate account status.</p>
                </div>

                <div className="p-5 rounded-xl border border-red-100 bg-red-50/40 space-y-4">
                  <div>
                    <h3 className="font-bold text-red-900 text-sm">Deactivate Corporate Buyer Account</h3>
                    <p className="text-xs text-red-600 mt-1">
                      Deactivating will pause all active procurement requests and remove your listings from the farmer matching feed.
                    </p>
                  </div>

                  <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition shadow-sm">
                    <Trash2 size={16} /> Deactivate Account
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}