'use client';

import Image from 'next/image';
import { MapPin, ShieldCheck, Pencil, Building2 } from 'lucide-react';

export default function BuyerHero({ buyer }: { buyer?: any }) {
  const buyerName = buyer?.name ?? buyer?.fullName ?? 'Rahul Sharma';
  const profileImage = buyer?.profileImage || buyer?.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg';
  const company = buyer?.companyName ?? buyer?.businessName ?? 'Sharma Agro Traders';
  const businessType = buyer?.businessType ?? 'Wholesale Buyer';
  const gstNumber = buyer?.gstNumber ?? '22AAAAA1234A1Z5';
  const companyAddress = buyer?.companyAddress ?? buyer?.address ?? 'Indore, Madhya Pradesh';
  const location =
    buyer?.companyAddress ||
    (buyer?.district || buyer?.state
      ? `${buyer?.district ?? ''}${buyer?.district && buyer?.state ? ', ' : ''}${buyer?.state ?? ''}`
      : 'Indore, Madhya Pradesh');
  const trustScore = buyer?.trustScore ?? 92;

  const trustBadge =
    trustScore >= 91
      ? '💎 Platinum Trusted Buyer'
      : trustScore >= 71
      ? '🏅 Gold Trusted Buyer'
      : trustScore >= 41
      ? '🥈 Silver Trusted Buyer'
      : '🥉 Bronze Trusted Buyer';

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Photo upload UI is kept purely cosmetic until backend upload support exists.
    e.preventDefault();
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden border">

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 p-8">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          {/* Left Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">

            <Image
              src={profileImage}
              alt="Buyer"
              width={120}
              height={120}
              className="rounded-full border-4 border-white object-cover"
            />
            <label className="mt-3 cursor-pointer bg-white text-amber-700 px-4 py-2 rounded-xl text-sm font-medium">

  Change Photo

  <input
    type="file"
    accept="image/*"
    className="hidden"
    onChange={handleImageChange}
  />

</label>

            <div>

              <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start">

                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                  {buyerName}
                </h1>

                <span className="bg-green-500 text-white text-sm px-4 py-1 rounded-full">
                  Verified Buyer
                </span>

              </div>

              {/* Company Optional */}
              {company && (
                <div className="flex items-center gap-2 text-white mt-3 justify-center sm:justify-start">
                  <Building2 size={18} />
                  <span>{company}</span>
                </div>
              )}

              <div className="mt-4 space-y-2 text-amber-100 text-sm">

  <p>
    <span className="font-semibold text-white">Business Type:</span>{" "}
    {businessType}
  </p>

  <p>
    <span className="font-semibold text-white">GST:</span>{" "}
    {gstNumber}
  </p>

  <p>
    <span className="font-semibold text-white">Address:</span>{" "}
    {companyAddress}
  </p>

</div>

              <button
                className="mt-4 flex items-center gap-2 bg-white text-amber-700 px-5 py-2 rounded-xl font-medium hover:bg-amber-50 transition"
              >
                <Pencil size={16} />
                Edit Profile
              </button>

              <div className="flex items-center gap-2 text-amber-100 mt-3 justify-center sm:justify-start">
                <MapPin size={18} />
                {location}
              </div>

              {/* Info Cards */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-6">

                <div className="bg-white/15 backdrop-blur-md px-5 py-3 rounded-xl">
                  <p className="text-amber-100 text-sm">Member Since</p>
                  <h3 className="text-white font-bold">Jan 2025</h3>
                </div>

                <div className="bg-white/15 backdrop-blur-md px-5 py-3 rounded-xl">
                  <p className="text-amber-100 text-sm">Buyer Type</p>
                  <h3 className="text-white font-bold">{buyerType}</h3>
                </div>

                <div className="bg-white/15 backdrop-blur-md px-5 py-3 rounded-xl">
                  <p className="text-amber-100 text-sm">Completed Orders</p>
                  <h3 className="text-white font-bold">126</h3>
                </div>

              </div>

            </div>

          </div>

          {/* Trust Score */}
          <div className="bg-white rounded-2xl p-6 w-full sm:w-64 text-center shadow-lg">

            <ShieldCheck
              className="mx-auto text-amber-600"
              size={45}
            />

            <h2 className="font-semibold mt-3">
              Trust Score
            </h2>

            <div className="text-5xl font-bold text-amber-600 mt-2">
              {trustScore}
            </div>

            <p className="text-gray-500">
              out of 100
            </p>

            <div className="mt-4">

              <div className="h-3 bg-gray-200 rounded-full">

                <div
                  className="h-3 bg-amber-500 rounded-full"
                  style={{ width: `${trustScore}%` }}
                />

              </div>

            </div>

            <div className="mt-4 bg-amber-100 text-amber-700 rounded-full py-2 text-sm font-medium">
              {trustBadge}
            </div>

            <p className="text-xs text-gray-500 mt-3">
              Trusted by verified farmers on KrishiSetu
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}