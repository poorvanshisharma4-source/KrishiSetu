// 'use client';

// import Image from 'next/image';
// import { MapPin, ShieldCheck, Pencil, Building2 } from 'lucide-react';
// import { useLanguage } from '@/components/LanguageContext';

// export default function BuyerHero({ buyer }: { buyer?: any }) {
// const { t } = useLanguage();

// const buyerName =
// buyer?.name ?? buyer?.fullName ?? 'Rahul Sharma';

// const profileImage =
// buyer?.profileImage ||
// buyer?.avatar ||
// 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg';

// const company =
// buyer?.companyName ??
// buyer?.businessName ??
// 'Sharma Agro Traders';

// // const businessType =
// // buyer?.businessType ?? 'Wholesale Buyer';

// // const gstNumber =
// // buyer?.gstNumber ?? '22AAAAA1234A1Z5';

// const companyAddress =
// buyer?.companyAddress ??
// buyer?.address ??
// 'Indore, Madhya Pradesh';

// const location =
// buyer?.companyAddress ||
// (buyer?.district || buyer?.state
// ? `${buyer?.district ?? ''}${
//           buyer?.district && buyer?.state ? ', ' : ''
//         }${buyer?.state ?? ''}`
// : 'Indore, Madhya Pradesh');

// // const trustScore = buyer?.trustScore ?? 92;

// // const trustBadge =
// // trustScore >= 91
// // ? t('platinumTrustedBuyer')
// // : trustScore >= 71
// // ? t('goldTrustedBuyer')
// // : trustScore >= 41
// // ? t('silverTrustedBuyer')
// // : t('bronzeTrustedBuyer');

// const handleImageChange = (
// e: React.ChangeEvent<HTMLInputElement>
// ) => {
// // Photo upload UI is kept cosmetic until backend upload support exists.
// e.preventDefault();
// };

// return ( <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
// {/* Hero Banner */} <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 p-8"> <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
// {/* Left Section */} <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left"> <div className="flex flex-col items-center">
// <Image
// src={profileImage}
// alt={t('buyer')}
// width={120}
// height={120}
// className="rounded-full border-4 border-white object-cover"
// />

// ```
//           <label className="mt-3 cursor-pointer rounded-xl bg-white px-4 py-2 text-sm font-medium text-amber-700 transition hover:bg-amber-50">
//             {t('changePhoto')}

//             <input
//               type="file"
//               accept="image/*"
//               className="hidden"
//               onChange={handleImageChange}
//             />
//           </label>
//         </div>

//         <div>
//           <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
//             <h1 className="text-3xl font-bold text-white sm:text-4xl">
//               {buyerName}
//             </h1>
// {/* 
//             <span className="rounded-full bg-green-500 px-4 py-1 text-sm text-white">
//               {t('verifiedBuyer')}
//             </span> */}
//           </div>

//           {/* Company */}
//           {company && (
//             <div className="mt-3 flex items-center justify-center gap-2 text-white sm:justify-start">
//               <Building2 size={18} />
//               <span>{company}</span>
//             </div>
//           )}

//           {/* Business Details */}
//           {/* <div className="mt-4 space-y-2 text-sm text-amber-100">
//             <p>
//               <span className="font-semibold text-white">
//                 {t('businessType')}:
//               </span>{' '}
//               {businessType}
//             </p> */}
// {/* 
//             <p>
//               <span className="font-semibold text-white">
//                 {t('gst')}:
//               </span>{' '}
//               {gstNumber}
//             </p> */}

//             <p>
//               <span className="font-semibold text-white">
//                 {t('address')}:
//               </span>{' '}
//               {companyAddress}
//             </p>
//           </div>

//           <button className="mt-4 flex items-center gap-2 rounded-xl bg-white px-5 py-2 font-medium text-amber-700 transition hover:bg-amber-50">
//             <Pencil size={16} />
//             {t('editProfile')}
//           </button>

//           <div className="mt-3 flex items-center justify-center gap-2 text-amber-100 sm:justify-start">
//             <MapPin size={18} />
//             {location}
//           </div>

//           {/* Info Cards */}
//           <div className="mt-6 flex flex-wrap justify-center gap-4 sm:justify-start">
//             <div className="rounded-xl bg-white/15 px-5 py-3 backdrop-blur-md">
//               <p className="text-sm text-amber-100">
//                 {t('memberSince')}
//               </p>

//               <h3 className="font-bold text-white">
//                 Jan 2025
//               </h3>
//             </div>

//             <div className="rounded-xl bg-white/15 px-5 py-3 backdrop-blur-md">
//               <p className="text-sm text-amber-100">
//                 {t('buyerType')}
//               </p>

//               <h3 className="font-bold text-white">
//                 {buyer?.role || t('buyer')}
//               </h3>
//             </div>

//             <div className="rounded-xl bg-white/15 px-5 py-3 backdrop-blur-md">
//               <p className="text-sm text-amber-100">
//                 {t('completedOrders')}
//               </p>

//               <h3 className="font-bold text-white">
//                 126
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Trust Score */}
//       {/* <div className="w-full rounded-2xl bg-white p-6 text-center shadow-lg sm:w-64">
//         <ShieldCheck
//           className="mx-auto text-amber-600"
//           size={45}
//         />

//         <h2 className="mt-3 font-semibold text-gray-900">
//           {t('trustScore')}
//         </h2>

//         <div className="mt-2 text-5xl font-bold text-amber-600">
//           {trustScore}
//         </div>

//         <p className="text-gray-500">
//           {t('outOf100')}
//         </p>

//         <div className="mt-4">
//           <div className="h-3 rounded-full bg-gray-200">
//             <div
//               className="h-3 rounded-full bg-amber-500"
//               style={{
//                 width: `${Math.min(
//                   Math.max(trustScore, 0),
//                   100
//                 )}%`,
//               }}
//             />
//           </div>
//         </div>

//         <div className="mt-4 rounded-full bg-amber-100 py-2 text-sm font-medium text-amber-700">
//           {trustBadge}
//         </div>

//         <p className="mt-3 text-xs text-gray-500">
//           {t('trustedByVerifiedFarmers')}
//         </p>
//       </div>
//     </div>
//   </div>
// </div>
// ); */}
// }

'use client';

import Image from 'next/image';
import { MapPin, Pencil, Building2 } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function BuyerHero({ buyer }: { buyer?: any }) {
  const { t } = useLanguage();

  const buyerName =
    buyer?.name ??
    buyer?.fullName ??
    'Buyer';
  
  const firstLetter = buyerName?.charAt(0)?.toUpperCase() || "B";

  const company =
    buyer?.companyName ??
    '';

  const address =
    buyer?.address ||
    '';

  const location =
    buyer?.district || buyer?.state
      ? `${buyer?.district ?? ''}${
          buyer?.district && buyer?.state ? ', ' : ''
        }${buyer?.state ?? ''}`
      : '';

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
  };

  return (
    <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 p-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row">

          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border-4 border-white bg-orange-50 flex items-center justify-center">
              <span className="text-6xl font-bold text-orange-500">
                {firstLetter}
             </span>
            </div>
            

            <label className="mt-3 cursor-pointer rounded-xl bg-white px-4 py-2 text-sm font-medium text-amber-700 hover:bg-amber-50">
              {t('changePhoto')}

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* Buyer Info */}
          <div>
            <h1 className="text-3xl font-bold text-white">
              {buyerName}
            </h1>

            {company && (
              <div className="mt-3 flex items-center gap-2 text-white">
                <Building2 size={18} />
                <span>{company}</span>
              </div>
            )}

            {address && (
              <p className="mt-3 text-white">
                <span className="font-semibold">
                  {t('address')}:
                </span>{' '}
                {address}
              </p>
            )}

            <button className="mt-4 flex items-center gap-2 rounded-xl bg-white px-5 py-2 font-medium text-amber-700 hover:bg-amber-50">
              <Pencil size={16} />
              {t('editProfile')}
            </button>

            {location && (
              <div className="mt-3 flex items-center gap-2 text-amber-100">
                <MapPin size={18} />
                {location}
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-4">

  {/* Member Since */}
  <div className="rounded-xl bg-white/15 px-5 py-3 backdrop-blur-md">
    <p className="text-sm text-amber-100">
      Member Since
    </p>

    <h3 className="font-bold text-white">
      {buyer?.createdAt
        ? new Date(buyer.createdAt).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })
        : "N/A"}
    </h3>
  </div>

  {/* Phone */}
  <div className="rounded-xl bg-white/15 px-5 py-3 backdrop-blur-md">
    <p className="text-sm text-amber-100">
      Phone
    </p>

    <h3 className="font-bold text-white">
      {buyer?.phone || "N/A"}
    </h3>
  </div>

  {/* Company */}
  <div className="rounded-xl bg-white/15 px-5 py-3 backdrop-blur-md">
    <p className="text-sm text-amber-100">
      Company
    </p>

    <h3 className="font-bold text-white">
      {buyer?.companyName || "Individual"}
    </h3>
  </div>

</div>

          </div>
        </div>
      </div>
    </div>
  );
}

