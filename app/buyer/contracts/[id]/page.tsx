'use client';

import { useState } from 'react';
import { ArrowLeft, ShieldCheck, User, Sprout, Building2, Truck, FileText } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';

export default function ContractDetailsPage() {

  const router = useRouter();
   const params = useParams();

  const contractId = params.id as string;
  const contracts = {
  "CON-BUY-7892": {
    farmer: "Ramesh Kumar",
    location: "Nashik, MH",
    crop: "Organic Tomatoes",
    quantity: "500 kg",
    price: "₹28/kg",
    value: "₹14,000"
  },

  "CON-BUY-7891": {
    farmer: "Priya Sharma",
    location: "Pune, MH",
    crop: "Fresh Spinach",
    quantity: "750 kg",
    price: "₹32/kg",
    value: "₹24,000"
  },

  "CON-BUY-7890": {
    farmer: "Vikram Singh",
    location: "Indore, MP",
    crop: "Premium Carrots",
    quantity: "1200 kg",
    price: "₹18/kg",
    value: "₹21,600"
  }
};

const contract = contracts[contractId as keyof typeof contracts];

const [transportBy, setTransportBy] = useState('');

if (!contract) {
  return (
    <div className="p-10 text-center">
      Contract not found
    </div>
  );
}

  return (
    <div className="min-h-screen bg-[#F5F0E6] p-6">

      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => router.push('/buyer/contracts')}
          className="flex items-center gap-2 text-gray-700 hover:text-green-700 mb-6"
        >
          <ArrowLeft size={18} />
          Back to Contracts
        </button>


        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

          <div className="flex justify-between items-center">

            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Contract Details
              </h1>

              <p className="text-gray-500 mt-2">
                Contract ID: {contractId}
              </p>
            </div>


            <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
              <ShieldCheck size={18}/>
              Active
            </div>

          </div>

        </div>


        {/* Buyer & Farmer Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">


          {/* Buyer Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6">

            <div className="flex items-center gap-2 mb-4">
              <Building2 className="text-green-700"/>
              <h2 className="text-xl font-bold">
                Buyer Details
              </h2>
            </div>

            <p className="text-gray-600">
              Company Name
            </p>

            <p className="font-semibold text-lg">
              FreshMart Pvt Ltd
            </p>

            <p className="text-gray-600 mt-2">
              Location: Indore, MP
            </p>

          </div>



          {/* Farmer Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6">

            <div className="flex items-center gap-2 mb-4">
              <User className="text-green-700"/>
              <h2 className="text-xl font-bold">
                Farmer Details
              </h2>
            </div>

            <p className="text-gray-600">
              Farmer Name
            </p>

            <p className="font-semibold text-lg">
  {contract?.farmer}
</p>

            <p className="text-gray-600 mt-2">
             Location: {contract?.location}
            </p>

          </div>


        </div>



        {/* Crop Details */}
        <div className="bg-white rounded-2xl shadow-sm p-6">

          <div className="flex items-center gap-2 mb-4">
            <Sprout className="text-green-700"/>
            <h2 className="text-xl font-bold">
              Crop Details
            </h2>
          </div>


          <div className="grid md:grid-cols-3 gap-4">

            <div>
              <p className="text-gray-500 text-sm">
                Crop Type
              </p>
              <p className="font-semibold">
                {contract?.crop}
              </p>
            </div>


            <div>
              <p className="text-gray-500 text-sm">
                Quantity
              </p>
              <p className="font-semibold">
                {contract?.quantity}
              </p>
            </div>


            <div>
              <p className="text-gray-500 text-sm">
                Price
              </p>
              <p className="font-semibold text-green-700">
                {contract?.price}
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

  <p className="text-gray-600 mb-4">
    Who will arrange transportation?
  </p>

  <div className="flex gap-4">

    <button
      onClick={() => setTransportBy('Farmer')}
      className={`px-5 py-3 rounded-xl border font-semibold ${
        transportBy === 'Farmer'
        ? 'bg-green-100 border-green-600 text-green-700'
        : 'border-gray-300 text-gray-700'
      }`}
    >
      🚜 Farmer
    </button>


    <button
      onClick={() => setTransportBy('Buyer')}
      className={`px-5 py-3 rounded-xl border font-semibold ${
        transportBy === 'Buyer'
        ? 'bg-green-100 border-green-600 text-green-700'
        : 'border-gray-300 text-gray-700'
      }`}
    >
      🏢 Buyer
    </button>

  </div>


  {transportBy && (
    <div className="mt-5 bg-gray-50 rounded-xl p-4">

      <p className="text-sm text-gray-500">
        Transportation Responsibility
      </p>

      <p className="font-bold text-green-700">
        {transportBy} will arrange delivery
      </p>

    </div>
  )}
  {/* Transport Information */}

{transportBy && (
  <div className="mt-4 grid md:grid-cols-3 gap-4">

    <div className="bg-gray-50 rounded-xl p-4">
      <p className="text-sm text-gray-500">
        Pickup Location
      </p>
      <p className="font-semibold text-gray-900">
        Nashik, Maharashtra
      </p>
    </div>


    <div className="bg-gray-50 rounded-xl p-4">
      <p className="text-sm text-gray-500">
        Delivery Location
      </p>
      <p className="font-semibold text-gray-900">
        Indore, Madhya Pradesh
      </p>
    </div>


    <div className="bg-gray-50 rounded-xl p-4">
      <p className="text-sm text-gray-500">
        Delivery Status
      </p>
      <p className="font-semibold text-amber-600">
        Pending
      </p>
    </div>


  </div>
)}

</div>
{/* Payment Details */}

<div className="bg-white rounded-2xl shadow-sm p-6 mt-6">

  <div className="flex items-center gap-2 mb-5">
    <ShieldCheck className="text-green-700" />

    <h2 className="text-xl font-bold">
      Payment Details
    </h2>
  </div>


  <div className="grid md:grid-cols-3 gap-4">


    <div className="bg-gray-50 rounded-xl p-4">
      <p className="text-sm text-gray-500">
        Contract Value
      </p>

      <p className="font-bold text-lg text-green-700">
        {contract?.value}
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

      <p className="font-semibold text-gray-900">
        After Delivery
      </p>
    </div>


  </div>

</div>




{/* Contract Timeline */}

<div className="bg-white rounded-2xl shadow-sm p-6 mt-6">

  <div className="flex items-center gap-2 mb-5">

    <FileText className="text-green-700" />

    <h2 className="text-xl font-bold">
      Contract Timeline
    </h2>

  </div>



  <div className="space-y-4">


    <div className="flex items-center gap-3">
      <div className="w-3 h-3 bg-green-600 rounded-full"></div>

      <p className="font-semibold">
        Contract Created
      </p>
    </div>



    <div className="flex items-center gap-3">
      <div className="w-3 h-3 bg-green-600 rounded-full"></div>

      <p className="font-semibold">
        Farmer Accepted Contract
      </p>
    </div>



    <div className="flex items-center gap-3">
      <div className="w-3 h-3 bg-green-600 rounded-full"></div>

      <p className="font-semibold">
        Crop Growing Phase
      </p>
    </div>



    <div className="flex items-center gap-3">

      <div className="w-3 h-3 bg-amber-500 rounded-full"></div>

      <p className="font-semibold">
        Transportation Arranged
      </p>

    </div>




    <div className="flex items-center gap-3">

      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>

      <p className="font-semibold text-gray-500">
        Crop Delivered
      </p>

    </div>



    <div className="flex items-center gap-3">

      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>

      <p className="font-semibold text-gray-500">
        Final Payment Completed
      </p>

    </div>


  </div>


</div>



      </div>

    </div>
  );
}