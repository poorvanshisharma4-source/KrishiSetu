'use client';

import { useState } from "react";
import { 
  Lock, 
  Bell, 
  ShieldAlert, 
  KeyRound, 
  Smartphone, 
  Check, 
  Trash2
} from "lucide-react";

export default function FarmerSettingsPage() {
  const [activeTab, setActiveTab] = useState<'security' | 'notifications' | 'danger'>('notifications');
  
  // States adjusted for KrishiSetu Direct Contracting Model
  const [buyerMatchAlerts, setBuyerMatchAlerts] = useState(true);
  const [contractAlerts, setContractAlerts] = useState(true);
  const [whatsappAlerts, setWhatsappAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(true);

  return (
    <div className="min-h-screen bg-[#F8F6F0] p-6 md:p-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage your password and notification alerts.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Sidebar */}
          <div className="md:col-span-4 lg:col-span-3 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm space-y-1">
            
            <button
              onClick={() => setActiveTab('security')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition cursor-pointer ${
                activeTab === 'security'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Lock size={18} /> Security & Password
            </button>

            <button
              onClick={() => setActiveTab('notifications')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition cursor-pointer ${
                activeTab === 'notifications'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Bell size={18} /> Notification Alerts
            </button>

            <div className="pt-2 border-t border-gray-100">
              <button
                onClick={() => setActiveTab('danger')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition cursor-pointer ${
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
            
            {/* NOTIFICATIONS TAB */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h2 className="text-xl font-bold text-gray-900">Notification Preferences</h2>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Choose how you want to receive buyer requests and contract updates.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* AI Match Alert */}
                  <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">AI Buyer Match Alerts 🌱</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Get instant notifications when AI matches your crop listings with active buyers.
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

                  {/* Contract Status Alert */}
                  <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Contract & Payment Alerts 📑</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Get updates when a buyer accepts your offer, signs a contract, or releases payment.
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

                  {/* WhatsApp Alerts */}
                  <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">WhatsApp Direct Messages</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Receive direct contract status and buyer messages directly on WhatsApp.
                      </p>
                    </div>

                    <button
                      onClick={() => setWhatsappAlerts(!whatsappAlerts)}
                      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                        whatsappAlerts ? 'bg-emerald-700 justify-end' : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="bg-white w-4 h-4 rounded-full shadow-md"></div>
                    </button>
                  </div>

                  {/* Offline SMS Updates */}
                  <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">SMS Offline Updates</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Receive critical deal confirmations via offline SMS when internet is weak.
                      </p>
                    </div>

                    <button
                      onClick={() => setSmsAlerts(!smsAlerts)}
                      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                        smsAlerts ? 'bg-emerald-700 justify-end' : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="bg-white w-4 h-4 rounded-full shadow-md"></div>
                    </button>
                  </div>

                </div>
              </div>
            )}

            {/* SECURITY TAB */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h2 className="text-xl font-bold text-gray-900">Security Settings</h2>
                  <p className="text-sm text-gray-500 mt-0.5">Update your login password and primary contact number.</p>
                </div>

                <div className="space-y-5 max-w-lg">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Registered Phone Number</label>
                    <div className="flex gap-3">
                      <div className="relative flex-1">
                        <Smartphone className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                        <input 
                          type="text" 
                          value="+91 9876543210" 
                          disabled 
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm font-medium text-gray-500"
                        />
                      </div>
                      <button className="px-4 py-2.5 text-xs font-bold text-emerald-700 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition cursor-pointer">
                        Change
                      </button>
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
                        placeholder="Enter new password" 
                        className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-emerald-700"
                      />
                    </div>
                  </div>

                  <button className="mt-4 flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm px-6 py-3 rounded-xl transition shadow-sm cursor-pointer">
                    <Check size={16} /> Save Security Changes
                  </button>
                </div>
              </div>
            )}

            {/* DANGER ZONE TAB */}
            {activeTab === 'danger' && (
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h2 className="text-xl font-bold text-red-600">Account Danger Zone</h2>
                  <p className="text-sm text-gray-500 mt-0.5">Actions here are permanent and cannot be undone.</p>
                </div>

                <div className="p-5 rounded-xl border border-red-100 bg-red-50/40 space-y-4">
                  <div>
                    <h3 className="font-bold text-red-900 text-sm">Delete KrishiSetu Account</h3>
                    <p className="text-xs text-red-600 mt-1">
                      Once you delete your account, all your crop listings, active contracts, and ratings will be erased permanently.
                    </p>
                  </div>

                  <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition shadow-sm cursor-pointer">
                    <Trash2 size={16} /> Delete My Farmer Account
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