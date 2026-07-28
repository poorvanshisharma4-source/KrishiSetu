// 'use client';

// import { useSearchParams, useRouter } from 'next/navigation';
// import { useState } from 'react';
// import {
//   ArrowLeft,
//   CheckCircle,
//   FileText,
//   MapPin,
//   Star,
//   Sprout,
//   Tractor,
// } from 'lucide-react';

// export default function FarmerRequestPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const [sent, setSent] = useState(false);

//   const farmerId = searchParams.get('farmer');

//   const farmers = [
//     {
//       id: '1',
//       name: 'Ramesh Kumar',
//       crop: 'Wheat Farmer',
//       location: 'Indore, MP',
//       land: '8 Acres',
//       trust: '4.9',
//     },
//     {
//       id: '2',
//       name: 'Mohan Patel',
//       crop: 'Wheat Farmer',
//       location: 'Dewas, MP',
//       land: '6 Acres',
//       trust: '4.8',
//     },
//     {
//       id: '3',
//       name: 'Ajay Singh',
//       crop: 'Wheat Farmer',
//       location: 'Ujjain, MP',
//       land: '5 Acres',
//       trust: '4.7',
//     },
//   ];

//   const farmer = farmers.find(
//     (item) => item.id === farmerId
//   );

//   if (!farmer) {
//     return (
//       <div className="p-10 text-center">
//         Farmer not found
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#F5F0E6] p-6">
//       <div className="max-w-3xl mx-auto">

//         {/* Back Button */}
//         <button
//           onClick={() => router.back()}
//           className="flex items-center gap-2 text-green-700 mb-6 hover:underline"
//         >
//           <ArrowLeft size={20} />
//           Back
//         </button>

//         {/* Request Card */}
//         <div className="bg-white rounded-2xl shadow p-8">

//           {/* Header */}
//           <div className="flex items-center gap-3 mb-6">

//             <div className="bg-green-100 p-3 rounded-full">
//               <FileText
//                 size={32}
//                 className="text-green-700"
//               />
//             </div>

//             <div>
//               <h1 className="text-2xl font-bold text-gray-800">
//                 Farmer Request
//               </h1>

//               <p className="text-gray-600">
//                 Send collaboration request to farmer
//               </p>
//             </div>

//           </div>

//           {/* Selected Farmer */}
//           <div className="bg-green-50 rounded-xl p-5 mb-6">

//             <h2 className="text-lg font-bold text-gray-800 mb-3">
//               Selected Farmer
//             </h2>

//             <div className="space-y-2 text-gray-700">

//               <p className="flex items-center gap-2">
//                 <Sprout size={18} />
//                 {farmer.name}
//               </p>

//               <p className="flex items-center gap-2">
//                 <Tractor size={18} />
//                 {farmer.crop} | {farmer.land}
//               </p>

//               <p className="flex items-center gap-2">
//                 <MapPin size={18} />
//                 {farmer.location}
//               </p>

//               <p className="flex items-center gap-2">
//                 <Star size={18} />
//                 Trust Score: {farmer.trust}
//               </p>

//             </div>

//           </div>

//           {/* Contract Farming Request */}
//           <div className="border rounded-xl p-5">

//             <h2 className="font-semibold text-lg mb-3">
//               Contract Farming Request
//             </h2>

//             <p className="text-gray-600">
//               Your crop requirement request will be sent to this farmer.
//               Farmer can accept or reject the request.
//             </p>

//           </div>

//           {/* Send Request Button */}
//           <button
//             onClick={() => setSent(true)}
//             className="mt-6 w-full bg-green-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-green-800"
//           >
//             <CheckCircle size={18} />
//             Send Request
//           </button>

//           {/* Success Message */}
//           {sent && (
//             <div className="mt-5 bg-green-100 text-green-800 p-4 rounded-xl text-center font-semibold">
//               ✅ Request sent successfully to farmer!
//             </div>
//           )}

//         </div>

//       </div>
//     </div>
//   );
// }

'use client';

export const dynamic = 'force-dynamic';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, Suspense } from 'react';
import {
  ArrowLeft,
  CheckCircle,
  FileText,
  MapPin,
  Star,
  Sprout,
  Tractor,
} from 'lucide-react';

function FarmerRequestContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [sent, setSent] = useState(false);

  const farmerId = searchParams.get('farmer');

  const farmers = [
    {
      id: '1',
      name: 'Ramesh Kumar',
      crop: 'Wheat Farmer',
      location: 'Indore, MP',
      land: '8 Acres',
      trust: '4.9',
    },
    {
      id: '2',
      name: 'Mohan Patel',
      crop: 'Wheat Farmer',
      location: 'Dewas, MP',
      land: '6 Acres',
      trust: '4.8',
    },
    {
      id: '3',
      name: 'Ajay Singh',
      crop: 'Wheat Farmer',
      location: 'Ujjain, MP',
      land: '5 Acres',
      trust: '4.7',
    },
  ];

  const farmer = farmers.find((item) => item.id === farmerId);

  if (!farmer) {
    return (
      <div className="p-10 text-center text-gray-700">
        Farmer not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F0E6] p-6">
      <div className="mx-auto max-w-3xl">

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-2 text-green-700 hover:underline"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        {/* Request Card */}
        <div className="rounded-2xl bg-white p-8 shadow">

          {/* Header */}
          <div className="mb-6 flex items-center gap-3">

            <div className="rounded-full bg-green-100 p-3">
              <FileText
                size={32}
                className="text-green-700"
              />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Farmer Request
              </h1>

              <p className="text-gray-600">
                Send collaboration request to farmer
              </p>
            </div>

          </div>

          {/* Selected Farmer */}
          <div className="mb-6 rounded-xl bg-green-50 p-5">

            <h2 className="mb-3 text-lg font-bold text-gray-800">
              Selected Farmer
            </h2>

            <div className="space-y-2 text-gray-700">

              <p className="flex items-center gap-2">
                <Sprout size={18} />
                {farmer.name}
              </p>

              <p className="flex items-center gap-2">
                <Tractor size={18} />
                {farmer.crop} | {farmer.land}
              </p>

              <p className="flex items-center gap-2">
                <MapPin size={18} />
                {farmer.location}
              </p>

              <p className="flex items-center gap-2">
                <Star size={18} />
                Trust Score: {farmer.trust}
              </p>

            </div>

          </div>

          {/* Contract Farming Request */}
          <div className="rounded-xl border p-5">

            <h2 className="mb-3 text-lg font-semibold">
              Contract Farming Request
            </h2>

            <p className="text-gray-600">
              Your crop requirement request will be sent to this farmer.
              Farmer can accept or reject the request.
            </p>

          </div>

          {/* Send Request Button */}
          <button
            onClick={() => setSent(true)}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 py-3 text-white hover:bg-green-800"
          >
            <CheckCircle size={18} />
            Send Request
          </button>

          {/* Success Message */}
          {sent && (
            <div className="mt-5 rounded-xl bg-green-100 p-4 text-center font-semibold text-green-800">
              ✅ Request sent successfully to farmer!
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

// Default export wrapped in Suspense boundary
export default function FarmerRequestPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading Request...</div>}>
      <FarmerRequestContent />
    </Suspense>
  );
}