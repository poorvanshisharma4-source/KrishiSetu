// // 'use client';

// // import { useState } from 'react';
// // import { useRouter } from 'next/navigation';
// // import {
// //   ArrowLeft,
// //   ShieldCheck,
// //   User,
// //   Building2,
// //   Sprout,
// //   Truck,
// //   Wallet,
// //   Clock,
// //   FileText,
// //   CalendarDays,
// //   CheckCircle2,
// //   Award,
// //   Phone,
// // } from 'lucide-react';

// // export default function FarmerContractDetailPage() {

// //   const router = useRouter();

// //   const [transportBy, setTransportBy] = useState('Buyer');

// //   return (

// //     <div className="min-h-screen bg-[#F5F0E6] p-6">

// //       <div className="max-w-6xl mx-auto">

// //         {/* Back Button */}

// //         <button
// //           onClick={() => router.push('/farmer/contracts')}
// //           className="flex items-center gap-2 text-gray-700 hover:text-green-700 mb-6"
// //         >
// //           <ArrowLeft size={18} />
// //           Back to Contracts
// //         </button>


// //         {/* Header */}

// //         <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

// //           <div className="flex justify-between items-center flex-wrap gap-4">

// //             <div>

// //               <h1 className="text-3xl font-bold text-gray-900">
// //                 Contract Details
// //               </h1>

// //               <p className="text-gray-500 mt-2">
// //                 Contract ID : CNT-2024-001
// //               </p>

// //             </div>

// //             <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">

// //               <ShieldCheck size={18} />

// //               Active Contract

// //             </div>

// //           </div>

// //         </div>



// //         {/* Buyer + Farmer */}

// //         <div className="grid md:grid-cols-2 gap-6 mb-6">

// //           {/* Buyer */}

// //           <div className="bg-white rounded-2xl shadow-sm p-6">

// //             <div className="flex items-center gap-2 mb-5">

// //               <Building2 className="text-green-700" />

// //               <h2 className="text-xl font-bold">
// //                 Buyer Details
// //               </h2>

// //             </div>

// //             <div className="space-y-3">

// //               <div>

// //                 <p className="text-sm text-gray-500">
// //                   Company
// //                 </p>

// //                 <p className="font-semibold">
// //                   Premium Grains Ltd
// //                 </p>

// //               </div>

// //               <div>

// //                 <p className="text-sm text-gray-500">
// //                   Buyer Name
// //                 </p>

// //                 <p className="font-semibold">
// //                   Amit Sharma
// //                 </p>

// //               </div>

// //               <div>

// //                 <p className="text-sm text-gray-500">
// //                   Location
// //                 </p>

// //                 <p className="font-semibold">
// //                   Indore, Madhya Pradesh
// //                 </p>

// //               </div>

// //             </div>

// //           </div>



// //           {/* Farmer */}

// //           <div className="bg-white rounded-2xl shadow-sm p-6">

// //             <div className="flex items-center gap-2 mb-5">

// //               <User className="text-green-700" />

// //               <h2 className="text-xl font-bold">
// //                 Farmer Details
// //               </h2>

// //             </div>

// //             <div className="space-y-3">

// //               <div>

// //                 <p className="text-sm text-gray-500">
// //                   Farmer Name
// //                 </p>

// //                 <p className="font-semibold">
// //                   Ramesh Kumar
// //                 </p>

// //               </div>

// //               <div>

// //                 <p className="text-sm text-gray-500">
// //                   Village
// //                 </p>

// //                 <p className="font-semibold">
// //                   Dewas
// //                 </p>

// //               </div>

// //               <div>

// //                 <p className="text-sm text-gray-500">
// //                   State
// //                 </p>

// //                 <p className="font-semibold">
// //                   Madhya Pradesh
// //                 </p>

// //               </div>

// //             </div>

// //           </div>

// //         </div>
// //                 {/* Crop Details */}

// //         <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

// //           <div className="flex items-center gap-2 mb-5">

// //             <Sprout className="text-green-700" />

// //             <h2 className="text-xl font-bold">
// //               Crop Details
// //             </h2>

// //           </div>

// //           <div className="grid md:grid-cols-3 gap-5">

// //             <div>

// //               <p className="text-sm text-gray-500">
// //                 Crop Name
// //               </p>

// //               <p className="font-semibold">
// //                 Organic Tomatoes
// //               </p>

// //             </div>

// //             <div>

// //               <p className="text-sm text-gray-500">
// //                 Quantity
// //               </p>

// //               <p className="font-semibold">
// //                 500 kg
// //               </p>

// //             </div>

// //             <div>

// //               <p className="text-sm text-gray-500">
// //                 Locked Price
// //               </p>

// //               <p className="font-semibold text-green-700">
// //                 ₹28 / kg
// //               </p>

// //             </div>

// //           </div>

// //         </div>



// //         {/* Transportation Details */}

// //         <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

// //           <div className="flex items-center gap-2 mb-5">

// //             <Truck className="text-green-700" />

// //             <h2 className="text-xl font-bold">
// //               Transportation Details
// //             </h2>

// //           </div>

// //           <div className="grid md:grid-cols-2 gap-5">

// //             <div>

// //               <p className="text-sm text-gray-500">
// //                 Transportation By
// //               </p>

// //               <p className="font-semibold text-green-700">
// //                 {transportBy}
// //               </p>

// //             </div>

// //             <div>

// //               <p className="text-sm text-gray-500">
// //                 Delivery Status
// //               </p>

// //               <p className="font-semibold text-amber-600">
// //                 Pending Pickup
// //               </p>

// //             </div>

// //           </div>

// //         </div>



// //         {/* Delivery Details */}

// //         <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

// //           <div className="flex items-center gap-2 mb-5">

// //             <Truck className="text-green-700" />

// //             <h2 className="text-xl font-bold">
// //               Delivery Details
// //             </h2>

// //           </div>

// //           <div className="grid md:grid-cols-3 gap-5">

// //             <div>

// //               <p className="text-sm text-gray-500">
// //                 Pickup Date
// //               </p>

// //               <p className="font-semibold">
// //                 15 August 2026
// //               </p>

// //             </div>

// //             <div>

// //               <p className="text-sm text-gray-500">
// //                 Expected Delivery
// //               </p>

// //               <p className="font-semibold">
// //                 17 August 2026
// //               </p>

// //             </div>

// //             <div>

// //               <p className="text-sm text-gray-500">
// //                 Delivery Address
// //               </p>

// //               <p className="font-semibold">
// //                 FreshMart Warehouse, Indore
// //               </p>

// //             </div>

// //           </div>

// //         </div>
// //                 {/* Payment Details */}

// //         <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

// //           <div className="flex items-center gap-2 mb-5">

// //             <Wallet className="text-green-700" />

// //             <h2 className="text-xl font-bold">
// //               Payment Details
// //             </h2>

// //           </div>

// //           <div className="grid md:grid-cols-3 gap-5">

// //             <div className="bg-gray-50 rounded-xl p-4">

// //               <p className="text-sm text-gray-500">
// //                 Contract Value
// //               </p>

// //               <p className="text-xl font-bold text-green-700">
// //                 ₹14,000
// //               </p>

// //             </div>

// //             <div className="bg-gray-50 rounded-xl p-4">

// //               <p className="text-sm text-gray-500">
// //                 Payment Status
// //               </p>

// //               <p className="font-semibold text-amber-600">
// //                 Secured
// //               </p>

// //             </div>

// //             <div className="bg-gray-50 rounded-xl p-4">

// //               <p className="text-sm text-gray-500">
// //                 Settlement
// //               </p>

// //               <p className="font-semibold">
// //                 After Successful Delivery
// //               </p>

// //             </div>

// //           </div>

// //         </div>



// //         {/* Contract Timeline */}

// //         <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

// //           <div className="flex items-center gap-2 mb-5">

// //             <Clock className="text-green-700" />

// //             <h2 className="text-xl font-bold">
// //               Contract Timeline
// //             </h2>

// //           </div>

// //           <div className="space-y-4">

// //             <div className="flex items-center gap-4">
// //               <div className="w-3 h-3 rounded-full bg-green-600"></div>
// //               <p>Contract Accepted</p>
// //             </div>

// //             <div className="flex items-center gap-4">
// //               <div className="w-3 h-3 rounded-full bg-green-600"></div>
// //               <p>Crop Growing</p>
// //             </div>

// //             <div className="flex items-center gap-4">
// //               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
// //               <p>Ready for Pickup</p>
// //             </div>

// //             <div className="flex items-center gap-4">
// //               <div className="w-3 h-3 rounded-full bg-gray-300"></div>
// //               <p>Payment Settlement</p>
// //             </div>

// //           </div>

// //         </div>



// //         {/* Documents */}

// //         <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

// //           <div className="flex items-center gap-2 mb-5">

// //             <FileText className="text-green-700" />

// //             <h2 className="text-xl font-bold">
// //               Documents
// //             </h2>

// //           </div>

// //           <div className="space-y-3">

// //             <div className="flex justify-between items-center border rounded-xl p-4">

// //               <div>

// //                 <p className="font-semibold">
// //                   Contract Agreement.pdf
// //                 </p>

// //                 <p className="text-sm text-gray-500">
// //                   Signed Agreement
// //                 </p>

// //               </div>

// //               <button className="px-4 py-2 rounded-lg bg-[#2E7D32] text-white hover:bg-green-800">
// //                 Download
// //               </button>

// //             </div>

// //           </div>

// //         </div>
// //                 {/* Crop Details */}
// //         <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">

// //           <div className="flex items-center gap-2 mb-5">
// //             <Sprout className="text-green-700" />

// //             <h2 className="text-xl font-bold">
// //               Crop Details
// //             </h2>
// //           </div>

// //           <div className="grid md:grid-cols-3 gap-6">

// //             <div>
// //               <p className="text-sm text-gray-500">
// //                 Crop Name
// //               </p>

// //               <p className="font-semibold">
// //                 Organic Wheat
// //               </p>
// //             </div>

// //             <div>
// //               <p className="text-sm text-gray-500">
// //                 Quantity
// //               </p>

// //               <p className="font-semibold">
// //                 500 Kg
// //               </p>
// //             </div>

// //             <div>
// //               <p className="text-sm text-gray-500">
// //                 Price
// //               </p>

// //               <p className="font-semibold text-green-700">
// //                 ₹28 / Kg
// //               </p>
// //             </div>

// //             <div>
// //               <p className="text-sm text-gray-500">
// //                 Sowing Date
// //               </p>

// //               <p className="font-semibold">
// //                 15 June 2026
// //               </p>
// //             </div>

// //             <div>
// //               <p className="text-sm text-gray-500">
// //                 Harvest Date
// //               </p>

// //               <p className="font-semibold">
// //                 25 October 2026
// //               </p>
// //             </div>

// //             <div>
// //               <p className="text-sm text-gray-500">
// //                 Quality
// //               </p>

// //               <p className="font-semibold text-green-700">
// //                 Grade A
// //               </p>
// //             </div>

// //           </div>

// //         </div>
// //                 {/* Transportation Details */}
// //         <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">

// //           <div className="flex items-center gap-2 mb-5">
// //             <Truck className="text-green-700" />

// //             <h2 className="text-xl font-bold">
// //               Transportation Details
// //             </h2>
// //           </div>

// //           <div className="grid md:grid-cols-2 gap-6">

// //             <div>
// //               <p className="text-sm text-gray-500">
// //                 Transportation By
// //               </p>

// //               <p className="font-semibold">
// //                 Buyer
// //               </p>
// //             </div>

// //             <div>
// //               <p className="text-sm text-gray-500">
// //                 Vehicle Type
// //               </p>

// //               <p className="font-semibold">
// //                 Refrigerated Truck
// //               </p>
// //             </div>

// //             <div>
// //               <p className="text-sm text-gray-500">
// //                 Pickup Location
// //               </p>

// //               <p className="font-semibold">
// //                 Farmer's Warehouse
// //               </p>
// //             </div>

// //             <div>
// //               <p className="text-sm text-gray-500">
// //                 Transportation Status
// //               </p>

// //               <p className="font-semibold text-green-700">
// //                 Scheduled
// //               </p>
// //             </div>

// //           </div>

// //         </div>
// //                 {/* Delivery Details */}
// //         <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">

// //           <div className="flex items-center gap-2 mb-5">
// //             <CalendarDays className="text-green-700" />

// //             <h2 className="text-xl font-bold">
// //               Delivery Details
// //             </h2>
// //           </div>

// //           <div className="grid md:grid-cols-2 gap-6">

// //             <div>
// //               <p className="text-sm text-gray-500">
// //                 Expected Delivery Date
// //               </p>

// //               <p className="font-semibold">
// //                 10 November 2026
// //               </p>
// //             </div>

// //             <div>
// //               <p className="text-sm text-gray-500">
// //                 Delivery Status
// //               </p>

// //               <p className="font-semibold text-amber-600">
// //                 Pending
// //               </p>
// //             </div>

// //             <div>
// //               <p className="text-sm text-gray-500">
// //                 Delivery Address
// //               </p>

// //               <p className="font-semibold">
// //                 FreshMart Warehouse, Indore
// //               </p>
// //             </div>

// //             <div>
// //               <p className="text-sm text-gray-500">
// //                 Delivery Mode
// //               </p>

// //               <p className="font-semibold">
// //                 Road Transport
// //               </p>
// //             </div>

// //           </div>

// //         </div>
// //                 {/* Payment Details */}
// //         <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">

// //           <div className="flex items-center gap-2 mb-5">
// //             <Wallet className="text-green-700" />

// //             <h2 className="text-xl font-bold">
// //               Payment Details
// //             </h2>
// //           </div>

// //           <div className="grid md:grid-cols-3 gap-6">

// //             <div className="bg-gray-50 rounded-xl p-4">
// //               <p className="text-sm text-gray-500">
// //                 Total Contract Value
// //               </p>

// //               <p className="font-bold text-xl text-green-700">
// //                 ₹14,000
// //               </p>
// //             </div>

// //             <div className="bg-gray-50 rounded-xl p-4">
// //               <p className="text-sm text-gray-500">
// //                 Payment Status
// //               </p>

// //               <p className="font-semibold text-amber-600">
// //                 Secured
// //               </p>
// //             </div>

// //             <div className="bg-gray-50 rounded-xl p-4">
// //               <p className="text-sm text-gray-500">
// //                 Settlement
// //               </p>

// //               <p className="font-semibold">
// //                 After Successful Delivery
// //               </p>
// //             </div>

// //           </div>

// //         </div>
// //                 {/* Contract Terms & Conditions */}
// //         <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">

// //           <div className="flex items-center gap-2 mb-5">
// //             <FileText className="text-green-700" />

// //             <h2 className="text-xl font-bold">
// //               Contract Terms & Conditions
// //             </h2>
// //           </div>

// //           <div className="space-y-4">

// //             <div className="flex items-start gap-3">
// //               <CheckCircle2 className="text-green-600 mt-1" size={18} />
// //               <p className="text-gray-700">
// //                 The farmer agrees to deliver the agreed quantity and quality of crops.
// //               </p>
// //             </div>

// //             <div className="flex items-start gap-3">
// //               <CheckCircle2 className="text-green-600 mt-1" size={18} />
// //               <p className="text-gray-700">
// //                 The buyer agrees to make payment immediately after successful delivery verification.
// //               </p>
// //             </div>

// //             <div className="flex items-start gap-3">
// //               <CheckCircle2 className="text-green-600 mt-1" size={18} />
// //               <p className="text-gray-700">
// //                 Transportation responsibility will be followed as agreed in the contract.
// //               </p>
// //             </div>

// //             <div className="flex items-start gap-3">
// //               <CheckCircle2 className="text-green-600 mt-1" size={18} />
// //               <p className="text-gray-700">
// //                 Any dispute will be resolved through the KrishiSetu platform.
// //               </p>
// //             </div>

// //           </div>

// //         </div>
// //                 {/* Quality Requirements */}
// //         <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">

// //           <div className="flex items-center gap-2 mb-5">
// //             <Award className="text-green-700" />

// //             <h2 className="text-xl font-bold">
// //               Quality Requirements
// //             </h2>
// //           </div>

// //           <div className="grid md:grid-cols-2 gap-6">

// //             <div>
// //               <p className="text-sm text-gray-500">
// //                 Required Grade
// //               </p>

// //               <p className="font-semibold">
// //                 Grade A
// //               </p>
// //             </div>

// //             <div>
// //               <p className="text-sm text-gray-500">
// //                 Moisture Level
// //               </p>

// //               <p className="font-semibold">
// //                 Below 12%
// //               </p>
// //             </div>

// //             <div>
// //               <p className="text-sm text-gray-500">
// //                 Packaging
// //               </p>

// //               <p className="font-semibold">
// //                 50 Kg HDPE Bags
// //               </p>
// //             </div>

// //             <div>
// //               <p className="text-sm text-gray-500">
// //                 Inspection
// //               </p>

// //               <p className="font-semibold text-green-700">
// //                 On Delivery
// //               </p>
// //             </div>

// //           </div>

// //         </div>
// //                 {/* Contact & Actions */}
// //         <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">

// //           <div className="flex items-center gap-2 mb-5">
// //             <Phone className="text-green-700" />

// //             <h2 className="text-xl font-bold">
// //               Contact & Actions
// //             </h2>
// //           </div>

// //           <div className="grid md:grid-cols-2 gap-6 mb-8">

// //             <div>
// //               <p className="text-sm text-gray-500">
// //                 Buyer Contact
// //               </p>

// //               <p className="font-semibold">
// //                 +91 98765 43210
// //               </p>
// //             </div>

// //             <div>
// //               <p className="text-sm text-gray-500">
// //                 Buyer Email
// //               </p>

// //               <p className="font-semibold">
// //                 buyer@freshmart.com
// //               </p>
// //             </div>

// //           </div>

// //           <div className="flex flex-wrap gap-4">

// //             <button className="bg-[#2E7D32] hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition">
// //               Download Contract
// //             </button>

// //             <button className="border border-[#2E7D32] text-[#2E7D32] hover:bg-green-50 px-6 py-3 rounded-xl font-semibold transition">
// //               Contact Buyer
// //             </button>

// //             <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition">
// //               Raise Issue
// //             </button>

// //           </div>

// //         </div>

// //         </div>

// //         </div>

// //   );
// // }

// 'use client'

// import { useRouter } from 'next/navigation'
// import {
//   ArrowLeft,
//   ShieldCheck,
//   User,
//   Building2,
//   Sprout,
//   Truck,
//   Wallet,
//   Clock,
//   FileText,
//   CalendarDays,
//   CheckCircle2,
//   Award,
//   Phone,
// } from 'lucide-react'

// export default function FarmerContractDetailPage() {
//   const router = useRouter()

//   return (
//     <div className="min-h-screen bg-[#F5F0E6] p-6">
//       <div className="max-w-6xl mx-auto space-y-6">
        
//         {/* Back Button */}
//         <button
//           onClick={() => router.push('/farmer/contracts')}
//           className="flex items-center gap-2 text-gray-700 hover:text-emerald-700 transition font-medium"
//         >
//           <ArrowLeft size={18} />
//           Back to Contracts
//         </button>

//         {/* Header */}
//         <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200/60">
//           <div className="flex justify-between items-center flex-wrap gap-4">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">Contract Details</h1>
//               <p className="text-gray-500 mt-1">Contract ID: <span className="font-semibold text-gray-800">CNT-2024-001</span></p>
//             </div>
//             <div className="flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-semibold text-sm">
//               <ShieldCheck size={18} />
//               Active Contract
//             </div>
//           </div>
//         </div>

//         {/* Buyer + Farmer Details */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {/* Buyer Card */}
//           <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200/60">
//             <div className="flex items-center gap-2 mb-4 text-emerald-700">
//               <Building2 size={22} />
//               <h2 className="text-xl font-bold text-gray-900">Buyer Details</h2>
//             </div>
//             <div className="space-y-3">
//               <div>
//                 <p className="text-xs text-gray-400 font-semibold uppercase">Company</p>
//                 <p className="font-semibold text-gray-800">Premium Grains Ltd</p>
//               </div>
//               <div>
//                 <p className="text-xs text-gray-400 font-semibold uppercase">Buyer Name</p>
//                 <p className="font-semibold text-gray-800">Amit Sharma</p>
//               </div>
//               <div>
//                 <p className="text-xs text-gray-400 font-semibold uppercase">Location</p>
//                 <p className="font-semibold text-gray-800">Indore, Madhya Pradesh</p>
//               </div>
//             </div>
//           </div>

//           {/* Farmer Card */}
//           <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200/60">
//             <div className="flex items-center gap-2 mb-4 text-emerald-700">
//               <User size={22} />
//               <h2 className="text-xl font-bold text-gray-900">Farmer Details</h2>
//             </div>
//             <div className="space-y-3">
//               <div>
//                 <p className="text-xs text-gray-400 font-semibold uppercase">Farmer Name</p>
//                 <p className="font-semibold text-gray-800">Ramesh Kumar</p>
//               </div>
//               <div>
//                 <p className="text-xs text-gray-400 font-semibold uppercase">Village</p>
//                 <p className="font-semibold text-gray-800">Dewas</p>
//               </div>
//               <div>
//                 <p className="text-xs text-gray-400 font-semibold uppercase">State</p>
//                 <p className="font-semibold text-gray-800">Madhya Pradesh</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Crop Details */}
//         <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200/60">
//           <div className="flex items-center gap-2 mb-5 text-emerald-700">
//             <Sprout size={22} />
//             <h2 className="text-xl font-bold text-gray-900">Crop Details</h2>
//           </div>
//           <div className="grid md:grid-cols-3 gap-6">
//             <div>
//               <p className="text-xs text-gray-400 font-semibold uppercase">Crop Name</p>
//               <p className="font-semibold text-gray-800">Basmati Rice</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400 font-semibold uppercase">Quantity</p>
//               <p className="font-semibold text-gray-800">2000 Kg</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400 font-semibold uppercase">Price</p>
//               <p className="font-bold text-emerald-700">₹45 / Kg</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400 font-semibold uppercase">Sowing Date</p>
//               <p className="font-semibold text-gray-800">15 June 2026</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400 font-semibold uppercase">Harvest Date</p>
//               <p className="font-semibold text-gray-800">25 October 2026</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400 font-semibold uppercase">Quality</p>
//               <p className="font-semibold text-emerald-700">Grade A</p>
//             </div>
//           </div>
//         </div>

//         {/* Transportation Details */}
//         <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200/60">
//           <div className="flex items-center gap-2 mb-5 text-emerald-700">
//             <Truck size={22} />
//             <h2 className="text-xl font-bold text-gray-900">Transportation Details</h2>
//           </div>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <p className="text-xs text-gray-400 font-semibold uppercase">Transportation By</p>
//               <p className="font-semibold text-emerald-700">Buyer</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400 font-semibold uppercase">Vehicle Type</p>
//               <p className="font-semibold text-gray-800">Refrigerated Truck</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400 font-semibold uppercase">Pickup Location</p>
//               <p className="font-semibold text-gray-800">Farmer's Warehouse</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400 font-semibold uppercase">Transportation Status</p>
//               <p className="font-semibold text-emerald-700">Scheduled</p>
//             </div>
//           </div>
//         </div>

//         {/* Delivery Details */}
//         <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200/60">
//           <div className="flex items-center gap-2 mb-5 text-emerald-700">
//             <CalendarDays size={22} />
//             <h2 className="text-xl font-bold text-gray-900">Delivery Details</h2>
//           </div>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <p className="text-xs text-gray-400 font-semibold uppercase">Expected Delivery Date</p>
//               <p className="font-semibold text-gray-800">10 November 2026</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400 font-semibold uppercase">Delivery Status</p>
//               <p className="font-semibold text-amber-600">Pending</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400 font-semibold uppercase">Delivery Address</p>
//               <p className="font-semibold text-gray-800">FreshMart Warehouse, Indore</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400 font-semibold uppercase">Delivery Mode</p>
//               <p className="font-semibold text-gray-800">Road Transport</p>
//             </div>
//           </div>
//         </div>

//         {/* Payment Details */}
//         <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200/60">
//           <div className="flex items-center gap-2 mb-5 text-emerald-700">
//             <Wallet size={22} />
//             <h2 className="text-xl font-bold text-gray-900">Payment Details</h2>
//           </div>
//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="bg-gray-50 rounded-xl p-4">
//               <p className="text-xs text-gray-400 font-semibold uppercase">Total Contract Value</p>
//               <p className="font-extrabold text-2xl text-emerald-700 mt-1">₹90,000</p>
//             </div>
//             <div className="bg-gray-50 rounded-xl p-4">
//               <p className="text-xs text-gray-400 font-semibold uppercase">Payment Status</p>
//               <p className="font-bold text-amber-600 mt-1">Secured in Escrow</p>
//             </div>
//             <div className="bg-gray-50 rounded-xl p-4">
//               <p className="text-xs text-gray-400 font-semibold uppercase">Settlement</p>
//               <p className="font-semibold text-gray-800 mt-1">After Delivery Verification</p>
//             </div>
//           </div>
//         </div>

//         {/* Contract Timeline */}
//         <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200/60">
//           <div className="flex items-center gap-2 mb-5 text-emerald-700">
//             <Clock size={22} />
//             <h2 className="text-xl font-bold text-gray-900">Contract Timeline</h2>
//           </div>
//           <div className="space-y-4">
//             <div className="flex items-center gap-4">
//               <div className="w-3 h-3 rounded-full bg-emerald-600" />
//               <p className="text-sm font-semibold text-gray-800">Contract Accepted</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="w-3 h-3 rounded-full bg-emerald-600" />
//               <p className="text-sm font-semibold text-gray-800">Crop Growing</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="w-3 h-3 rounded-full bg-amber-500" />
//               <p className="text-sm font-semibold text-gray-800">Ready for Pickup</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="w-3 h-3 rounded-full bg-gray-300" />
//               <p className="text-sm font-semibold text-gray-400">Payment Settlement</p>
//             </div>
//           </div>
//         </div>

//         {/* Quality Requirements */}
//         <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200/60">
//           <div className="flex items-center gap-2 mb-5 text-emerald-700">
//             <Award size={22} />
//             <h2 className="text-xl font-bold text-gray-900">Quality Requirements</h2>
//           </div>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <p className="text-xs text-gray-400 font-semibold uppercase">Required Grade</p>
//               <p className="font-semibold text-gray-800">Grade A</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400 font-semibold uppercase">Moisture Level</p>
//               <p className="font-semibold text-gray-800">Below 12%</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400 font-semibold uppercase">Packaging</p>
//               <p className="font-semibold text-gray-800">50 Kg HDPE Bags</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400 font-semibold uppercase">Inspection</p>
//               <p className="font-semibold text-emerald-700">On Delivery</p>
//             </div>
//           </div>
//         </div>

//         {/* Terms & Conditions */}
//         <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200/60">
//           <div className="flex items-center gap-2 mb-5 text-emerald-700">
//             <FileText size={22} />
//             <h2 className="text-xl font-bold text-gray-900">Contract Terms & Conditions</h2>
//           </div>
//           <div className="space-y-3">
//             {[
//               'The farmer agrees to deliver the agreed quantity and quality of crops.',
//               'The buyer agrees to make payment immediately after successful delivery verification.',
//               'Transportation responsibility will be followed as agreed in the contract.',
//               'Any dispute will be resolved through the KrishiSetu platform.',
//             ].map((term, i) => (
//               <div key={i} className="flex items-start gap-3">
//                 <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
//                 <p className="text-sm text-gray-700">{term}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Contact & Actions */}
//         <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200/60">
//           <div className="flex items-center gap-2 mb-5 text-emerald-700">
//             <Phone size={22} />
//             <h2 className="text-xl font-bold text-gray-900">Contact & Actions</h2>
//           </div>
//           <div className="grid md:grid-cols-2 gap-6 mb-8">
//             <div>
//               <p className="text-xs text-gray-400 font-semibold uppercase">Buyer Contact</p>
//               <p className="font-semibold text-gray-800">+91 98765 43210</p>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400 font-semibold uppercase">Buyer Email</p>
//               <p className="font-semibold text-gray-800">buyer@freshmart.com</p>
//             </div>
//           </div>
//           <div className="flex flex-wrap gap-4">
//             <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-xl font-semibold transition">
//               Download Contract
//             </button>
//             <button className="border border-emerald-700 text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-xl font-semibold transition">
//               Contact Buyer
//             </button>
//             <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition">
//               Raise Issue
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }
  
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import api from '@/lib/api';
import { useLanguage } from '@/components/LanguageContext';
import {
  ArrowLeft,
  ShieldCheck,
  User,
  Phone,
  AlertTriangle,
  Loader2,
} from 'lucide-react';

interface ContractDetail {
  _id: string;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  price?: number;
  quantity?: number;
  cropName?: string;
  createdAt: string;
  farmer?: { _id: string; name: string; phone: string };
  buyer?: { _id: string; name: string; phone: string };
  requirement?: {
    cropName?: string;
    targetPrice?: number;
    quantity?: number;
    location?: string;
  };
}

export default function FarmerContractDetailPage() {
  const { t } = useLanguage()
  const searchParams = useSearchParams();
  const router = useRouter();
  const contractId = searchParams.get('id');

  const [contract, setContract] = useState<ContractDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [updating, setUpdating] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (contractId) {
      fetchContractDetail(contractId);
    } else {
      setError('Contract ID missing in URL');
      setLoading(false);
    }
  }, [contractId]);

  const fetchContractDetail = async (id: string) => {
    try {
      setLoading(true);
      setError('');
      // Using existing custom fetch client
      const res = await api.get(`/contracts/${id}`);
      if (res && res.success) {
        setContract(res.data);
      } else {
        setError('Failed to fetch contract details');
      }
    } catch (err: any) {
      console.error('Error fetching contract detail:', err);
      setError(err.message || 'Failed to fetch contract details');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (newStatus: string) => {
    if (!contractId) return;
    try {
      setUpdating(true);
      // Using existing custom put method
      const res = await api.put(`/contracts/${contractId}/status`, { status: newStatus });
      if (res && res.success) {
        setContract(res.data);
      }
    } catch (err: any) {
      alert(err.message || 'Failed to update contract status');
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Loader2 className="w-10 h-10 animate-spin text-green-600 mb-3" />
        <p className="text-gray-500">
  {t('farmerContractDetail.fetchingDetails')}
</p>
      </div>
    );
  }

  if (error || !contract) {
    return (
      <div className="p-8 max-w-lg mx-auto text-center mt-20 bg-white rounded-xl shadow-sm">
        <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-3" />
        <h2 className="text-xl font-bold text-gray-800 mb-2">
  {t('farmerContractDetail.errorLoading')}
</h2>
        <p className="text-gray-500 text-sm mb-6">{error || t('farmerContractDetail.contractUnavailable')}</p>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm"
        >
          {t('farmerContractDetail.goBack')}
        </button>
      </div>
    );
  }

  const cropName = contract.cropName || contract.requirement?.cropName || 'Crop Item';
  const price = contract.price || contract.requirement?.targetPrice || 0;
  const quantity = contract.quantity || contract.requirement?.quantity || 0;

  return (
    <div className="p-6 max-w-5xl mx-auto min-h-screen bg-gray-50">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 text-sm font-medium"
      >
        <ArrowLeft size={16} /> {t('farmerContractDetail.backToContracts')}
      </button>

      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-bold text-gray-900">{cropName}</h1>
            <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded">
              #{contract._id}
            </span>
          </div>
          <p className="text-xs text-gray-400">
  {t('farmerContractDetail.createdOn')}: {new Date(contract.createdAt).toLocaleDateString()}
</p>
        </div>

        <div className="flex items-center gap-3">
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase ${
              contract.status === 'active'
                ? 'bg-green-100 text-green-700'
                : contract.status === 'pending'
                ? 'bg-yellow-100 text-yellow-700'
                : contract.status === 'completed'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {contract.status}
          </span>

          {/* Actions */}
          {contract.status === 'pending' && (
            <button
              disabled={updating}
              onClick={() => handleStatusUpdate('active')}
              className="px-4 py-1.5 bg-green-600 text-white text-xs font-semibold rounded-lg hover:bg-green-700 disabled:opacity-50"
            >
              {updating
  ? t('farmerContractDetail.updating')
  : t('farmerContractDetail.acceptStart')}
            </button>
          )}
          {contract.status === 'active' && (
            <button
              disabled={updating}
              onClick={() => handleStatusUpdate('completed')}
              className="px-4 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {updating
  ? t('farmerContractDetail.updating')
  : t('farmerContractDetail.markCompleted')}
            </button>
          )}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-sm space-y-6">
          <h2 className="text-lg font-bold text-gray-900 border-b pb-3">
  {t('farmerContractDetail.contractInformation')}
</h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-xl">
              <span className="text-xs text-gray-400 block mb-1">
  {t('farmerContractDetail.agreedRate')}
</span>
              <span className="text-xl font-bold text-gray-800">₹{price} / kg</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <span className="text-xs text-gray-400 block mb-1">
  {t('farmerContractDetail.totalQuantity')}
</span>
              <span className="text-xl font-bold text-gray-800">{quantity} kg</span>
            </div>
          </div>

          <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-green-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-green-900 text-sm">
  {t('farmerContractDetail.escrowActive')}
</h4>
              <p className="text-xs text-green-700 mt-1">
  {t('farmerContractDetail.payoutProtected')} ₹{(price * quantity).toLocaleString()}
</p>
            </div>
          </div>
        </div>

        {/* Buyer Info */}
        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4 h-fit">
          <h3 className="font-bold text-gray-900 border-b pb-2">
  {t('farmerContractDetail.buyerDetails')}
</h3>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-gray-100 rounded-full">
              <User className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="font-bold text-gray-800 text-sm">{contract.buyer?.name || 'N/A'}</p>
              <p className="text-xs text-gray-400">
  {t('farmerContractDetail.verifiedBuyer')}
</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 pt-2">
            <Phone size={16} className="text-gray-400" />
            <span>
  {contract.buyer?.phone || t('farmerContractDetail.noPhone')}
</span>
          </div>
        </div>
      </div>
    </div>
  );
}