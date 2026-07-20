'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  ShieldCheck,
  User,
  Building2,
  Sprout,
  Truck,
  Wallet,
  Clock,
  FileText,
  CalendarDays,
  CheckCircle2,
  Award,
  Phone,
} from 'lucide-react';

export default function FarmerContractDetailPage() {

  const router = useRouter();

  const [transportBy, setTransportBy] = useState('Buyer');

  return (

    <div className="min-h-screen bg-[#F5F0E6] p-6">

      <div className="max-w-6xl mx-auto">

        {/* Back Button */}

        <button
          onClick={() => router.push('/farmer/contracts')}
          className="flex items-center gap-2 text-gray-700 hover:text-green-700 mb-6"
        >
          <ArrowLeft size={18} />
          Back to Contracts
        </button>


        {/* Header */}

        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

          <div className="flex justify-between items-center flex-wrap gap-4">

            <div>

              <h1 className="text-3xl font-bold text-gray-900">
                Contract Details
              </h1>

              <p className="text-gray-500 mt-2">
                Contract ID : CNT-2024-001
              </p>

            </div>

            <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">

              <ShieldCheck size={18} />

              Active Contract

            </div>

          </div>

        </div>



        {/* Buyer + Farmer */}

        <div className="grid md:grid-cols-2 gap-6 mb-6">

          {/* Buyer */}

          <div className="bg-white rounded-2xl shadow-sm p-6">

            <div className="flex items-center gap-2 mb-5">

              <Building2 className="text-green-700" />

              <h2 className="text-xl font-bold">
                Buyer Details
              </h2>

            </div>

            <div className="space-y-3">

              <div>

                <p className="text-sm text-gray-500">
                  Company
                </p>

                <p className="font-semibold">
                  Premium Grains Ltd
                </p>

              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Buyer Name
                </p>

                <p className="font-semibold">
                  Amit Sharma
                </p>

              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="font-semibold">
                  Indore, Madhya Pradesh
                </p>

              </div>

            </div>

          </div>



          {/* Farmer */}

          <div className="bg-white rounded-2xl shadow-sm p-6">

            <div className="flex items-center gap-2 mb-5">

              <User className="text-green-700" />

              <h2 className="text-xl font-bold">
                Farmer Details
              </h2>

            </div>

            <div className="space-y-3">

              <div>

                <p className="text-sm text-gray-500">
                  Farmer Name
                </p>

                <p className="font-semibold">
                  Ramesh Kumar
                </p>

              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Village
                </p>

                <p className="font-semibold">
                  Dewas
                </p>

              </div>

              <div>

                <p className="text-sm text-gray-500">
                  State
                </p>

                <p className="font-semibold">
                  Madhya Pradesh
                </p>

              </div>

            </div>

          </div>

        </div>
                {/* Crop Details */}

        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

          <div className="flex items-center gap-2 mb-5">

            <Sprout className="text-green-700" />

            <h2 className="text-xl font-bold">
              Crop Details
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-5">

            <div>

              <p className="text-sm text-gray-500">
                Crop Name
              </p>

              <p className="font-semibold">
                Organic Tomatoes
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Quantity
              </p>

              <p className="font-semibold">
                500 kg
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Locked Price
              </p>

              <p className="font-semibold text-green-700">
                ₹28 / kg
              </p>

            </div>

          </div>

        </div>



        {/* Transportation Details */}

        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

          <div className="flex items-center gap-2 mb-5">

            <Truck className="text-green-700" />

            <h2 className="text-xl font-bold">
              Transportation Details
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <div>

              <p className="text-sm text-gray-500">
                Transportation By
              </p>

              <p className="font-semibold text-green-700">
                {transportBy}
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Delivery Status
              </p>

              <p className="font-semibold text-amber-600">
                Pending Pickup
              </p>

            </div>

          </div>

        </div>



        {/* Delivery Details */}

        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

          <div className="flex items-center gap-2 mb-5">

            <Truck className="text-green-700" />

            <h2 className="text-xl font-bold">
              Delivery Details
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-5">

            <div>

              <p className="text-sm text-gray-500">
                Pickup Date
              </p>

              <p className="font-semibold">
                15 August 2026
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Expected Delivery
              </p>

              <p className="font-semibold">
                17 August 2026
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Delivery Address
              </p>

              <p className="font-semibold">
                FreshMart Warehouse, Indore
              </p>

            </div>

          </div>

        </div>
                {/* Payment Details */}

        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

          <div className="flex items-center gap-2 mb-5">

            <Wallet className="text-green-700" />

            <h2 className="text-xl font-bold">
              Payment Details
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-5">

            <div className="bg-gray-50 rounded-xl p-4">

              <p className="text-sm text-gray-500">
                Contract Value
              </p>

              <p className="text-xl font-bold text-green-700">
                ₹14,000
              </p>

            </div>

            <div className="bg-gray-50 rounded-xl p-4">

              <p className="text-sm text-gray-500">
                Payment Status
              </p>

              <p className="font-semibold text-amber-600">
                Secured
              </p>

            </div>

            <div className="bg-gray-50 rounded-xl p-4">

              <p className="text-sm text-gray-500">
                Settlement
              </p>

              <p className="font-semibold">
                After Successful Delivery
              </p>

            </div>

          </div>

        </div>



        {/* Contract Timeline */}

        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

          <div className="flex items-center gap-2 mb-5">

            <Clock className="text-green-700" />

            <h2 className="text-xl font-bold">
              Contract Timeline
            </h2>

          </div>

          <div className="space-y-4">

            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-green-600"></div>
              <p>Contract Accepted</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-green-600"></div>
              <p>Crop Growing</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <p>Ready for Pickup</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <p>Payment Settlement</p>
            </div>

          </div>

        </div>



        {/* Documents */}

        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

          <div className="flex items-center gap-2 mb-5">

            <FileText className="text-green-700" />

            <h2 className="text-xl font-bold">
              Documents
            </h2>

          </div>

          <div className="space-y-3">

            <div className="flex justify-between items-center border rounded-xl p-4">

              <div>

                <p className="font-semibold">
                  Contract Agreement.pdf
                </p>

                <p className="text-sm text-gray-500">
                  Signed Agreement
                </p>

              </div>

              <button className="px-4 py-2 rounded-lg bg-[#2E7D32] text-white hover:bg-green-800">
                Download
              </button>

            </div>

          </div>

        </div>
                {/* Crop Details */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">

          <div className="flex items-center gap-2 mb-5">
            <Sprout className="text-green-700" />

            <h2 className="text-xl font-bold">
              Crop Details
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div>
              <p className="text-sm text-gray-500">
                Crop Name
              </p>

              <p className="font-semibold">
                Organic Wheat
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Quantity
              </p>

              <p className="font-semibold">
                500 Kg
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Price
              </p>

              <p className="font-semibold text-green-700">
                ₹28 / Kg
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Sowing Date
              </p>

              <p className="font-semibold">
                15 June 2026
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Harvest Date
              </p>

              <p className="font-semibold">
                25 October 2026
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Quality
              </p>

              <p className="font-semibold text-green-700">
                Grade A
              </p>
            </div>

          </div>

        </div>
                {/* Transportation Details */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">

          <div className="flex items-center gap-2 mb-5">
            <Truck className="text-green-700" />

            <h2 className="text-xl font-bold">
              Transportation Details
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="text-sm text-gray-500">
                Transportation By
              </p>

              <p className="font-semibold">
                Buyer
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Vehicle Type
              </p>

              <p className="font-semibold">
                Refrigerated Truck
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Pickup Location
              </p>

              <p className="font-semibold">
                Farmer's Warehouse
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Transportation Status
              </p>

              <p className="font-semibold text-green-700">
                Scheduled
              </p>
            </div>

          </div>

        </div>
                {/* Delivery Details */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">

          <div className="flex items-center gap-2 mb-5">
            <CalendarDays className="text-green-700" />

            <h2 className="text-xl font-bold">
              Delivery Details
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="text-sm text-gray-500">
                Expected Delivery Date
              </p>

              <p className="font-semibold">
                10 November 2026
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Delivery Status
              </p>

              <p className="font-semibold text-amber-600">
                Pending
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Delivery Address
              </p>

              <p className="font-semibold">
                FreshMart Warehouse, Indore
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Delivery Mode
              </p>

              <p className="font-semibold">
                Road Transport
              </p>
            </div>

          </div>

        </div>
                {/* Payment Details */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">

          <div className="flex items-center gap-2 mb-5">
            <Wallet className="text-green-700" />

            <h2 className="text-xl font-bold">
              Payment Details
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Total Contract Value
              </p>

              <p className="font-bold text-xl text-green-700">
                ₹14,000
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Payment Status
              </p>

              <p className="font-semibold text-amber-600">
                Secured
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Settlement
              </p>

              <p className="font-semibold">
                After Successful Delivery
              </p>
            </div>

          </div>

        </div>
                {/* Contract Terms & Conditions */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">

          <div className="flex items-center gap-2 mb-5">
            <FileText className="text-green-700" />

            <h2 className="text-xl font-bold">
              Contract Terms & Conditions
            </h2>
          </div>

          <div className="space-y-4">

            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-green-600 mt-1" size={18} />
              <p className="text-gray-700">
                The farmer agrees to deliver the agreed quantity and quality of crops.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-green-600 mt-1" size={18} />
              <p className="text-gray-700">
                The buyer agrees to make payment immediately after successful delivery verification.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-green-600 mt-1" size={18} />
              <p className="text-gray-700">
                Transportation responsibility will be followed as agreed in the contract.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-green-600 mt-1" size={18} />
              <p className="text-gray-700">
                Any dispute will be resolved through the KrishiSetu platform.
              </p>
            </div>

          </div>

        </div>
                {/* Quality Requirements */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">

          <div className="flex items-center gap-2 mb-5">
            <Award className="text-green-700" />

            <h2 className="text-xl font-bold">
              Quality Requirements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="text-sm text-gray-500">
                Required Grade
              </p>

              <p className="font-semibold">
                Grade A
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Moisture Level
              </p>

              <p className="font-semibold">
                Below 12%
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Packaging
              </p>

              <p className="font-semibold">
                50 Kg HDPE Bags
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Inspection
              </p>

              <p className="font-semibold text-green-700">
                On Delivery
              </p>
            </div>

          </div>

        </div>
                {/* Contact & Actions */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">

          <div className="flex items-center gap-2 mb-5">
            <Phone className="text-green-700" />

            <h2 className="text-xl font-bold">
              Contact & Actions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">

            <div>
              <p className="text-sm text-gray-500">
                Buyer Contact
              </p>

              <p className="font-semibold">
                +91 98765 43210
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Buyer Email
              </p>

              <p className="font-semibold">
                buyer@freshmart.com
              </p>
            </div>

          </div>

          <div className="flex flex-wrap gap-4">

            <button className="bg-[#2E7D32] hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition">
              Download Contract
            </button>

            <button className="border border-[#2E7D32] text-[#2E7D32] hover:bg-green-50 px-6 py-3 rounded-xl font-semibold transition">
              Contact Buyer
            </button>

            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition">
              Raise Issue
            </button>

          </div>

        </div>

        </div>

        </div>

  );
}


  