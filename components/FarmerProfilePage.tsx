<<<<<<< HEAD
'use client';

import { useState } from 'react';
import {
  User,
  MapPin,
  Building,
  Key,
  CreditCard,
  Shield,
  Award,
  Edit2,
  Bell,
  ChevronDown,
  Check,
  AlertCircle,
} from 'lucide-react';

interface FormState {
  fullName: string;
  phone: string;
  aadhaar: string;
  landOwnership: string;
  soilHealth: string;
  primaryCrops: string;
  bankName: string;
  ifscCode: string;
  accountNumber: string;
  upiId: string;
}

export default function FarmerProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [trustScore, setTrustScore] = useState(78);

  const [formData, setFormData] = useState<FormState>({
    fullName: 'Rajesh Patel',
    phone: '+91 98765 43210',
    aadhaar: '****  ****  1234',
    landOwnership: '5.2 Acres',
    soilHealth: 'Passed',
    primaryCrops: 'Wheat, Rice, Corn',
    bankName: 'State Bank of India',
    ifscCode: 'SBIN0001234',
    accountNumber: '****  ****  ****  5678',
    upiId: 'rajesh.patel@sbi',
  });

  const [editData, setEditData] = useState<FormState>(formData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(formData);
  };

  const handleSave = () => {
    setFormData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof FormState, value: string) => {
    setEditData(prev => ({ ...prev, [field]: value }));
  };

  const maskAadhaar = (value: string) => {
    if (value.length <= 4) return value;
    return `****  ****  ${value.slice(-4)}`;
  };

  const maskAccount = (value: string) => {
    if (value.length <= 4) return value;
    return `****  ****  ****  ${value.slice(-4)}`;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F0E6' }}>
      {/* Profile Header Card */}
      <div
        className="w-full rounded-b-2xl shadow-md p-8"
        style={{ backgroundColor: '#2E7D32' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-6">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E8F5E9' }}>
                <User size={48} style={{ color: '#2E7D32' }} />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-grow">
              <h1 className="text-4xl font-bold text-white mb-2">
                {formData.fullName}
              </h1>
              <div className="flex items-center gap-2 text-green-50 mb-4">
                <MapPin size={18} />
                <span className="text-lg">Nashik, Maharashtra</span>
              </div>

              {/* Verified Silver Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: '#C0CA33' }}>
                <Award size={18} style={{ color: '#2E7D32' }} />
                <span className="font-semibold text-sm" style={{ color: '#2E7D32' }}>
                  Verified Silver Badge
                </span>
              </div>
            </div>

            {/* Edit Button */}
            {!isEditing && (
              <button
                onClick={handleEdit}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                style={{
                  backgroundColor: '#F5F0E6',
                  color: '#2E7D32',
                }}
              >
                <Edit2 size={18} />
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Personal Details Block */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6 border-l-4" style={{ borderLeftColor: '#8D6E63' }}>
          <div className="flex items-center gap-3 mb-6">
            <User size={24} style={{ color: '#2E7D32' }} />
            <h2 className="text-2xl font-bold" style={{ color: '#2E7D32' }}>
              Personal Details
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#2E7D32' }}>
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.fullName}
                  onChange={e => handleInputChange('fullName', e.target.value)}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: '#8D6E63',
                    color: '#2E7D32',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#2E7D32')}
                  onBlur={e => (e.target.style.borderColor = '#8D6E63')}
                />
              ) : (
                <p className="px-4 py-3 text-gray-800 font-medium">{formData.fullName}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#2E7D32' }}>
                Active Phone Number
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  value={editData.phone}
                  onChange={e => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: '#8D6E63',
                    color: '#2E7D32',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#2E7D32')}
                  onBlur={e => (e.target.style.borderColor = '#8D6E63')}
                />
              ) : (
                <p className="px-4 py-3 text-gray-800 font-medium">{formData.phone}</p>
              )}
            </div>

            {/* Aadhaar Number */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2" style={{ color: '#2E7D32' }}>
                Aadhaar Number (Masked)
              </label>
              {isEditing ? (
                <input
                  type="password"
                  value={editData.aadhaar}
                  onChange={e => handleInputChange('aadhaar', e.target.value)}
                  placeholder="Enter last 4 digits"
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: '#8D6E63',
                    color: '#2E7D32',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#2E7D32')}
                  onBlur={e => (e.target.style.borderColor = '#8D6E63')}
                />
              ) : (
                <div className="flex items-center gap-2 px-4 py-3 text-gray-800 font-medium">
                  <Key size={18} style={{ color: '#8D6E63' }} />
                  {formData.aadhaar}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Farm Information Card */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6 border-l-4" style={{ borderLeftColor: '#2E7D32' }}>
          <div className="flex items-center gap-3 mb-6">
            <Building size={24} style={{ color: '#2E7D32' }} />
            <h2 className="text-2xl font-bold" style={{ color: '#2E7D32' }}>
              Farm Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Land Ownership */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#2E7D32' }}>
                Total Land Ownership
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.landOwnership}
                  onChange={e => handleInputChange('landOwnership', e.target.value)}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: '#8D6E63',
                    color: '#2E7D32',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#2E7D32')}
                  onBlur={e => (e.target.style.borderColor = '#8D6E63')}
                />
              ) : (
                <p className="px-4 py-3 text-gray-800 font-medium">{formData.landOwnership}</p>
              )}
            </div>

            {/* Soil Health Status */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#2E7D32' }}>
                Soil Health Certification
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.soilHealth}
                  onChange={e => handleInputChange('soilHealth', e.target.value)}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: '#8D6E63',
                    color: '#2E7D32',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#2E7D32')}
                  onBlur={e => (e.target.style.borderColor = '#8D6E63')}
                />
              ) : (
                <div className="flex items-center gap-2 px-4 py-3 text-gray-800 font-medium">
                  <Check size={18} style={{ color: '#4CAF50' }} />
                  {formData.soilHealth}
                </div>
              )}
            </div>

            {/* Primary Crops */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2" style={{ color: '#2E7D32' }}>
                Primary Crops Grown
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.primaryCrops}
                  onChange={e => handleInputChange('primaryCrops', e.target.value)}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: '#8D6E63',
                    color: '#2E7D32',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#2E7D32')}
                  onBlur={e => (e.target.style.borderColor = '#8D6E63')}
                />
              ) : (
                <p className="px-4 py-3 text-gray-800 font-medium">{formData.primaryCrops}</p>
              )}
            </div>
          </div>
        </div>

        {/* Banking & Payout Settings Card */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6 border-l-4" style={{ borderLeftColor: '#C0CA33' }}>
          <div className="flex items-center gap-3 mb-6">
            <CreditCard size={24} style={{ color: '#2E7D32' }} />
            <h2 className="text-2xl font-bold" style={{ color: '#2E7D32' }}>
              Banking & Payout Settings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bank Name */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#2E7D32' }}>
                Bank Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.bankName}
                  onChange={e => handleInputChange('bankName', e.target.value)}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: '#8D6E63',
                    color: '#2E7D32',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#2E7D32')}
                  onBlur={e => (e.target.style.borderColor = '#8D6E63')}
                />
              ) : (
                <p className="px-4 py-3 text-gray-800 font-medium">{formData.bankName}</p>
              )}
            </div>

            {/* IFSC Code */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#2E7D32' }}>
                IFSC Code
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.ifscCode}
                  onChange={e => handleInputChange('ifscCode', e.target.value.toUpperCase())}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors uppercase"
                  style={{
                    borderColor: '#8D6E63',
                    color: '#2E7D32',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#2E7D32')}
                  onBlur={e => (e.target.style.borderColor = '#8D6E63')}
                />
              ) : (
                <p className="px-4 py-3 text-gray-800 font-medium">{formData.ifscCode}</p>
              )}
            </div>

            {/* Account Number */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#2E7D32' }}>
                Account Number (Masked)
              </label>
              {isEditing ? (
                <input
                  type="password"
                  value={editData.accountNumber}
                  onChange={e => handleInputChange('accountNumber', e.target.value)}
                  placeholder="Enter last 4 digits"
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: '#8D6E63',
                    color: '#2E7D32',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#2E7D32')}
                  onBlur={e => (e.target.style.borderColor = '#8D6E63')}
                />
              ) : (
                <div className="flex items-center gap-2 px-4 py-3 text-gray-800 font-medium">
                  <Key size={18} style={{ color: '#8D6E63' }} />
                  {formData.accountNumber}
                </div>
              )}
            </div>

            {/* UPI ID */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#2E7D32' }}>
                UPI ID
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.upiId}
                  onChange={e => handleInputChange('upiId', e.target.value.toLowerCase())}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: '#8D6E63',
                    color: '#2E7D32',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#2E7D32')}
                  onBlur={e => (e.target.style.borderColor = '#8D6E63')}
                />
              ) : (
                <p className="px-4 py-3 text-gray-800 font-medium">{formData.upiId}</p>
              )}
            </div>
          </div>
        </div>

        {/* Trust & Security Card */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6 border-l-4" style={{ borderLeftColor: '#2E7D32' }}>
          <div className="flex items-center gap-3 mb-6">
            <Shield size={24} style={{ color: '#2E7D32' }} />
            <h2 className="text-2xl font-bold" style={{ color: '#2E7D32' }}>
              Trust & Security
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Trust Score */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#2E7D32' }}>
                Trust Score
              </h3>
              <div className="bg-gray-100 rounded-full h-3 overflow-hidden mb-2">
                <div
                  className="h-full transition-all duration-300 rounded-full"
                  style={{
                    width: `${trustScore}%`,
                    backgroundColor: '#2E7D32',
                  }}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold" style={{ color: '#2E7D32' }}>
                  {trustScore}%
                </span>
                <span className="text-sm text-gray-600">Excellent Standing</span>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Based on transaction history, verification status, and compliance metrics
              </p>
            </div>

            {/* Notification Preferences */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#2E7D32' }}>
                Notification Preferences
              </h3>
              <div className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: '#F5F0E6' }}>
                <div className="flex items-center gap-3">
                  <Bell size={20} style={{ color: '#2E7D32' }} />
                  <span className="font-medium text-gray-800">Enable All Notifications</span>
                </div>
                <button
                  onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                    notificationsEnabled ? '' : 'bg-gray-300'
                  }`}
                  style={{ backgroundColor: notificationsEnabled ? '#2E7D32' : '#D0D0D0' }}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                      notificationsEnabled ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Receive updates on payments, contract settlements, and account security
              </p>
            </div>
          </div>

          {/* Trust History Link */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <button className="flex items-center gap-2 font-semibold hover:gap-3 transition-all" style={{ color: '#2E7D32' }}>
              <span>View Trust Score History</span>
              <ChevronDown size={18} className="rotate-90" style={{ color: '#2E7D32' }} />
            </button>
          </div>
        </div>

        {/* Edit Actions */}
        {isEditing && (
          <div className="flex gap-4 justify-end mb-10">
            <button
              onClick={handleCancel}
              className="px-8 py-3 rounded-lg font-semibold border-2 transition-all hover:scale-105"
              style={{
                borderColor: '#8D6E63',
                color: '#8D6E63',
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-8 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: '#2E7D32' }}
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
=======
'use client';

import { useState } from 'react';
import {
  User,
  MapPin,
  Building,
  Key,
  CreditCard,
  Shield,
  Award,
  Edit2,
  Bell,
  ChevronDown,
  Check,
  AlertCircle,
} from 'lucide-react';

interface FormState {
  fullName: string;
  phone: string;
  aadhaar: string;
  landOwnership: string;
  soilHealth: string;
  primaryCrops: string;
  bankName: string;
  ifscCode: string;
  accountNumber: string;
  upiId: string;
}

export default function FarmerProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [trustScore, setTrustScore] = useState(78);

  const [formData, setFormData] = useState<FormState>({
    fullName: 'Rajesh Patel',
    phone: '+91 98765 43210',
    aadhaar: '****  ****  1234',
    landOwnership: '5.2 Acres',
    soilHealth: 'Passed',
    primaryCrops: 'Wheat, Rice, Corn',
    bankName: 'State Bank of India',
    ifscCode: 'SBIN0001234',
    accountNumber: '****  ****  ****  5678',
    upiId: 'rajesh.patel@sbi',
  });

  const [editData, setEditData] = useState<FormState>(formData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(formData);
  };

  const handleSave = () => {
    setFormData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof FormState, value: string) => {
    setEditData(prev => ({ ...prev, [field]: value }));
  };

  const maskAadhaar = (value: string) => {
    if (value.length <= 4) return value;
    return `****  ****  ${value.slice(-4)}`;
  };

  const maskAccount = (value: string) => {
    if (value.length <= 4) return value;
    return `****  ****  ****  ${value.slice(-4)}`;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F0E6' }}>
      {/* Profile Header Card */}
      <div
        className="w-full rounded-b-2xl shadow-md p-8"
        style={{ backgroundColor: '#2E7D32' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-6">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E8F5E9' }}>
                <User size={48} style={{ color: '#2E7D32' }} />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-grow">
              <h1 className="text-4xl font-bold text-white mb-2">
                {formData.fullName}
              </h1>
              <div className="flex items-center gap-2 text-green-50 mb-4">
                <MapPin size={18} />
                <span className="text-lg">Nashik, Maharashtra</span>
              </div>

              {/* Verified Silver Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: '#C0CA33' }}>
                <Award size={18} style={{ color: '#2E7D32' }} />
                <span className="font-semibold text-sm" style={{ color: '#2E7D32' }}>
                  Verified Silver Badge
                </span>
              </div>
            </div>

            {/* Edit Button */}
            {!isEditing && (
              <button
                onClick={handleEdit}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                style={{
                  backgroundColor: '#F5F0E6',
                  color: '#2E7D32',
                }}
              >
                <Edit2 size={18} />
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Personal Details Block */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6 border-l-4" style={{ borderLeftColor: '#8D6E63' }}>
          <div className="flex items-center gap-3 mb-6">
            <User size={24} style={{ color: '#2E7D32' }} />
            <h2 className="text-2xl font-bold" style={{ color: '#2E7D32' }}>
              Personal Details
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#2E7D32' }}>
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.fullName}
                  onChange={e => handleInputChange('fullName', e.target.value)}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: '#8D6E63',
                    color: '#2E7D32',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#2E7D32')}
                  onBlur={e => (e.target.style.borderColor = '#8D6E63')}
                />
              ) : (
                <p className="px-4 py-3 text-gray-800 font-medium">{formData.fullName}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#2E7D32' }}>
                Active Phone Number
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  value={editData.phone}
                  onChange={e => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: '#8D6E63',
                    color: '#2E7D32',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#2E7D32')}
                  onBlur={e => (e.target.style.borderColor = '#8D6E63')}
                />
              ) : (
                <p className="px-4 py-3 text-gray-800 font-medium">{formData.phone}</p>
              )}
            </div>

            {/* Aadhaar Number */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2" style={{ color: '#2E7D32' }}>
                Aadhaar Number (Masked)
              </label>
              {isEditing ? (
                <input
                  type="password"
                  value={editData.aadhaar}
                  onChange={e => handleInputChange('aadhaar', e.target.value)}
                  placeholder="Enter last 4 digits"
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: '#8D6E63',
                    color: '#2E7D32',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#2E7D32')}
                  onBlur={e => (e.target.style.borderColor = '#8D6E63')}
                />
              ) : (
                <div className="flex items-center gap-2 px-4 py-3 text-gray-800 font-medium">
                  <Key size={18} style={{ color: '#8D6E63' }} />
                  {formData.aadhaar}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Farm Information Card */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6 border-l-4" style={{ borderLeftColor: '#2E7D32' }}>
          <div className="flex items-center gap-3 mb-6">
            <Building size={24} style={{ color: '#2E7D32' }} />
            <h2 className="text-2xl font-bold" style={{ color: '#2E7D32' }}>
              Farm Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Land Ownership */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#2E7D32' }}>
                Total Land Ownership
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.landOwnership}
                  onChange={e => handleInputChange('landOwnership', e.target.value)}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: '#8D6E63',
                    color: '#2E7D32',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#2E7D32')}
                  onBlur={e => (e.target.style.borderColor = '#8D6E63')}
                />
              ) : (
                <p className="px-4 py-3 text-gray-800 font-medium">{formData.landOwnership}</p>
              )}
            </div>

            {/* Soil Health Status */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#2E7D32' }}>
                Soil Health Certification
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.soilHealth}
                  onChange={e => handleInputChange('soilHealth', e.target.value)}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: '#8D6E63',
                    color: '#2E7D32',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#2E7D32')}
                  onBlur={e => (e.target.style.borderColor = '#8D6E63')}
                />
              ) : (
                <div className="flex items-center gap-2 px-4 py-3 text-gray-800 font-medium">
                  <Check size={18} style={{ color: '#4CAF50' }} />
                  {formData.soilHealth}
                </div>
              )}
            </div>

            {/* Primary Crops */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2" style={{ color: '#2E7D32' }}>
                Primary Crops Grown
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.primaryCrops}
                  onChange={e => handleInputChange('primaryCrops', e.target.value)}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: '#8D6E63',
                    color: '#2E7D32',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#2E7D32')}
                  onBlur={e => (e.target.style.borderColor = '#8D6E63')}
                />
              ) : (
                <p className="px-4 py-3 text-gray-800 font-medium">{formData.primaryCrops}</p>
              )}
            </div>
          </div>
        </div>

        {/* Banking & Payout Settings Card */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6 border-l-4" style={{ borderLeftColor: '#C0CA33' }}>
          <div className="flex items-center gap-3 mb-6">
            <CreditCard size={24} style={{ color: '#2E7D32' }} />
            <h2 className="text-2xl font-bold" style={{ color: '#2E7D32' }}>
              Banking & Payout Settings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bank Name */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#2E7D32' }}>
                Bank Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.bankName}
                  onChange={e => handleInputChange('bankName', e.target.value)}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: '#8D6E63',
                    color: '#2E7D32',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#2E7D32')}
                  onBlur={e => (e.target.style.borderColor = '#8D6E63')}
                />
              ) : (
                <p className="px-4 py-3 text-gray-800 font-medium">{formData.bankName}</p>
              )}
            </div>

            {/* IFSC Code */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#2E7D32' }}>
                IFSC Code
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.ifscCode}
                  onChange={e => handleInputChange('ifscCode', e.target.value.toUpperCase())}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors uppercase"
                  style={{
                    borderColor: '#8D6E63',
                    color: '#2E7D32',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#2E7D32')}
                  onBlur={e => (e.target.style.borderColor = '#8D6E63')}
                />
              ) : (
                <p className="px-4 py-3 text-gray-800 font-medium">{formData.ifscCode}</p>
              )}
            </div>

            {/* Account Number */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#2E7D32' }}>
                Account Number (Masked)
              </label>
              {isEditing ? (
                <input
                  type="password"
                  value={editData.accountNumber}
                  onChange={e => handleInputChange('accountNumber', e.target.value)}
                  placeholder="Enter last 4 digits"
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: '#8D6E63',
                    color: '#2E7D32',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#2E7D32')}
                  onBlur={e => (e.target.style.borderColor = '#8D6E63')}
                />
              ) : (
                <div className="flex items-center gap-2 px-4 py-3 text-gray-800 font-medium">
                  <Key size={18} style={{ color: '#8D6E63' }} />
                  {formData.accountNumber}
                </div>
              )}
            </div>

            {/* UPI ID */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#2E7D32' }}>
                UPI ID
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.upiId}
                  onChange={e => handleInputChange('upiId', e.target.value.toLowerCase())}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
                  style={{
                    borderColor: '#8D6E63',
                    color: '#2E7D32',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#2E7D32')}
                  onBlur={e => (e.target.style.borderColor = '#8D6E63')}
                />
              ) : (
                <p className="px-4 py-3 text-gray-800 font-medium">{formData.upiId}</p>
              )}
            </div>
          </div>
        </div>

        {/* Trust & Security Card */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-6 border-l-4" style={{ borderLeftColor: '#2E7D32' }}>
          <div className="flex items-center gap-3 mb-6">
            <Shield size={24} style={{ color: '#2E7D32' }} />
            <h2 className="text-2xl font-bold" style={{ color: '#2E7D32' }}>
              Trust & Security
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Trust Score */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#2E7D32' }}>
                Trust Score
              </h3>
              <div className="bg-gray-100 rounded-full h-3 overflow-hidden mb-2">
                <div
                  className="h-full transition-all duration-300 rounded-full"
                  style={{
                    width: `${trustScore}%`,
                    backgroundColor: '#2E7D32',
                  }}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold" style={{ color: '#2E7D32' }}>
                  {trustScore}%
                </span>
                <span className="text-sm text-gray-600">Excellent Standing</span>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Based on transaction history, verification status, and compliance metrics
              </p>
            </div>

            {/* Notification Preferences */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#2E7D32' }}>
                Notification Preferences
              </h3>
              <div className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: '#F5F0E6' }}>
                <div className="flex items-center gap-3">
                  <Bell size={20} style={{ color: '#2E7D32' }} />
                  <span className="font-medium text-gray-800">Enable All Notifications</span>
                </div>
                <button
                  onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                    notificationsEnabled ? '' : 'bg-gray-300'
                  }`}
                  style={{ backgroundColor: notificationsEnabled ? '#2E7D32' : '#D0D0D0' }}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                      notificationsEnabled ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Receive updates on payments, contract settlements, and account security
              </p>
            </div>
          </div>

          {/* Trust History Link */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <button className="flex items-center gap-2 font-semibold hover:gap-3 transition-all" style={{ color: '#2E7D32' }}>
              <span>View Trust Score History</span>
              <ChevronDown size={18} className="rotate-90" style={{ color: '#2E7D32' }} />
            </button>
          </div>
        </div>

        {/* Edit Actions */}
        {isEditing && (
          <div className="flex gap-4 justify-end mb-10">
            <button
              onClick={handleCancel}
              className="px-8 py-3 rounded-lg font-semibold border-2 transition-all hover:scale-105"
              style={{
                borderColor: '#8D6E63',
                color: '#8D6E63',
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-8 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: '#2E7D32' }}
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
>>>>>>> 8d282be6528be5fa383e82fa7a58c9ffcd476c18
}