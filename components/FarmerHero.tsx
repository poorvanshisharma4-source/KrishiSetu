<<<<<<< HEAD
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, ShieldCheck, Pencil } from 'lucide-react'
import { useLanguage } from '@/components/LanguageContext'

export default function FarmerHero() {
  const { t } = useLanguage()

  const [showEdit, setShowEdit] = useState(false)

  const [farmerName, setFarmerName] = useState('Ramesh Patil')
  const [location, setLocation] = useState('Sehore, Madhya Pradesh')
  const [experience, setExperience] = useState('8 Years')
  const [land, setLand] = useState('5.2 Acres')
  const [water, setWater] = useState('Borewell')
=======
// "use client";

// import { useEffect , useState } from "react";
// import Image from "next/image";
// import { MapPin, ShieldCheck, Pencil } from "lucide-react";

// interface FarmerHeroProps {
//   user?: any;
// }

// export default function FarmerHero({ user }: FarmerHeroProps) {

//    console.log("FarmerHero Rendered");
//   console.log("USER DATA:", user);

//   const [showEdit, setShowEdit] = useState(false);
//   const [farmerName, setFarmerName] = useState("");
//   const [location, setLocation] = useState("");
//   const [experience, setExperience] = useState("");
//   const [land, setLand] = useState("");
//   const [water, setWater] = useState("");

//   return (
//     <div className="bg-white rounded-3xl shadow-sm overflow-hidden border">

//       <div className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 p-8">

//         <div className="flex flex-col lg:flex-row justify-between items-center gap-8">


//           {/* Left */}

//           <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">


//             <Image
//               src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
//               alt="Farmer"
//               width={120}
//               height={120}
//               className="rounded-full border-4 border-white object-cover"
//             />



//             <div>


//               <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start">


//                 <h1 className="text-3xl sm:text-4xl font-bold text-white">
//                   {farmerName}
//                 </h1>


//                 <span className="bg-green-500 text-white text-sm px-4 py-1 rounded-full">
//                   Verified Farmer
//                 </span>


//               </div>



//               <button
//                 onClick={() => setShowEdit(true)}
//                 className="mt-4 flex items-center gap-2 bg-white text-green-700 px-5 py-2 rounded-xl font-medium hover:bg-green-50 transition"
//               >

//                 <Pencil size={16} />

//                 Edit Profile

//               </button>




//               <div className="flex items-center gap-2 text-green-100 mt-3">

//                 <MapPin size={18} />

//                 {location}

//               </div>




//               <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-6">


//                 <div className="bg-white/15 backdrop-blur-md px-5 py-3 rounded-xl">

//                   <p className="text-green-100 text-sm">
//                     Member Since
//                   </p>

//                   <h3 className="text-white font-bold">
//                     Jan 2024
//                   </h3>

//                 </div>



//                 <div className="bg-white/15 backdrop-blur-md px-5 py-3 rounded-xl">

//                   <p className="text-green-100 text-sm">
//                     Experience
//                   </p>

//                   <h3 className="text-white font-bold">
//                     {experience}
//                   </h3>

//                 </div>



//                 <div className="bg-white/15 backdrop-blur-md px-5 py-3 rounded-xl">

//                   <p className="text-green-100 text-sm">
//                     Land Owned
//                   </p>

//                   <h3 className="text-white font-bold">
//                     {land}
//                   </h3>

//                 </div>


//               </div>


//             </div>


//           </div>






//           {/* Right Trust Score */}


//           <div className="bg-white rounded-2xl p-6 w-full sm:w-64 text-center shadow-lg">


//             <ShieldCheck
//               className="mx-auto text-green-700"
//               size={45}
//             />


//             <h2 className="font-semibold mt-3">
//               Trust Score
//             </h2>


//             <div className="text-5xl font-bold text-green-700 mt-2">
//               86
//             </div>


//             <p className="text-gray-500">
//               out of 100
//             </p>



//             <div className="mt-4">

//               <div className="h-3 bg-gray-200 rounded-full">

//                 <div
//                   className="h-3 bg-green-600 rounded-full"
//                   style={{ width:"86%" }}
//                 />

//               </div>

//             </div>



//             <div className="mt-4 bg-green-100 text-green-700 rounded-full py-2 text-sm font-medium">
//               🏅 Gold Trusted Farmer
//             </div>


//             <p className="text-xs text-gray-500 mt-3">
//               Trusted by verified buyers on KrishiSetu
//             </p>


//           </div>


//         </div>

//       </div>






//       {/* Edit Modal */}


//       {showEdit && (

//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">


//           <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">


//             <h2 className="text-xl font-bold mb-5">
//               Edit Farmer Profile
//             </h2>



//             <div className="space-y-4">


//               <input
//                 value={farmerName}
//                 onChange={(e)=>setFarmerName(e.target.value)}
//                 placeholder="Farmer Name"
//                 className="w-full border rounded-xl p-3"
//               />



//               <input
//                 value={location}
//                 onChange={(e)=>setLocation(e.target.value)}
//                 placeholder="Location"
//                 className="w-full border rounded-xl p-3"
//               />



//               <input
//                 value={experience}
//                 onChange={(e)=>setExperience(e.target.value)}
//                 placeholder="Experience"
//                 className="w-full border rounded-xl p-3"
//               />



//               <input
//                 value={land}
//                 onChange={(e)=>setLand(e.target.value)}
//                 placeholder="Land Owned"
//                 className="w-full border rounded-xl p-3"
//               />



//               <input
//                 value={water}
//                 onChange={(e)=>setWater(e.target.value)}
//                 placeholder="Water Source"
//                 className="w-full border rounded-xl p-3"
//               />




//               <button
//                 onClick={() => setShowEdit(false)}
//                 className="w-full bg-green-700 text-white py-3 rounded-xl"
//               >
//                 Save Changes
//               </button>




//               <button
//                 onClick={() => setShowEdit(false)}
//                 className="w-full border py-3 rounded-xl"
//               >
//                 Cancel
//               </button>



//             </div>


//           </div>


//         </div>

//       )}


//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, ShieldCheck, Pencil } from "lucide-react";

interface FarmerHeroProps {
  user?: any;
}

export default function FarmerHero({ user }: FarmerHeroProps) {
  const [showEdit, setShowEdit] = useState(false);

  const [farmerName, setFarmerName] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [land, setLand] = useState("");
  const [water, setWater] = useState("");

  useEffect(() => {
    if (user) {
      setFarmerName(user.name || "");

      setLocation(
        [user.village, user.district, user.state]
          .filter(Boolean)
          .join(", ")
      );

      setExperience(
        user.farmingExperience
          ? `${user.farmingExperience} Years`
          : ""
      );

      setLand(
        user.landSize
          ? `${user.landSize} Acres`
          : ""
      );

      setWater(user.waterAvailability || "");
    }
  }, [user]);
>>>>>>> 3229c3309a3c5af8cb0fc78fd747b3fdd8589175

  return (
    <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
      <div className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 p-8">
<<<<<<< HEAD
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Left */}
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
=======

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">

>>>>>>> 3229c3309a3c5af8cb0fc78fd747b3fdd8589175
            <Image
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
              alt="Farmer"
              width={120}
              height={120}
              loading="eager"
              
              className="rounded-full border-4 border-white object-cover"
            />

            <div>
<<<<<<< HEAD
              <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                <h1 className="text-3xl font-bold text-white sm:text-4xl">
                  {farmerName}
                </h1>

                <span className="rounded-full bg-green-500 px-4 py-1 text-sm text-white">
                  {t('farmerHero.verifiedFarmer')}
                </span>
=======

              <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start">

                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                  {farmerName || "Farmer"}
                </h1>

                <span className="bg-green-500 text-white text-sm px-4 py-1 rounded-full">
                  Verified Farmer
                </span>

>>>>>>> 3229c3309a3c5af8cb0fc78fd747b3fdd8589175
              </div>

              <button
                onClick={() => setShowEdit(true)}
                className="mt-4 flex items-center gap-2 rounded-xl bg-white px-5 py-2 font-medium text-green-700 transition hover:bg-green-50"
              >
                <Pencil size={16} />
<<<<<<< HEAD
                {t('farmerHero.editProfile')}
              </button>

              <div className="mt-3 flex items-center gap-2 text-green-100">
                <MapPin size={18} />
                {location}
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-4 sm:justify-start">
                <div className="rounded-xl bg-white/15 px-5 py-3 backdrop-blur-md">
                  <p className="text-sm text-green-100">
                    {t('farmerHero.memberSince')}
=======
                Edit Profile
              </button>

              <div className="flex items-center gap-2 text-green-100 mt-3">
                <MapPin size={18} />
                {location || "Location not available"}
              </div>

              <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-6">

                <div className="bg-white/15 backdrop-blur-md px-5 py-3 rounded-xl">
                  <p className="text-green-100 text-sm">
                    Member Since
>>>>>>> 3229c3309a3c5af8cb0fc78fd747b3fdd8589175
                  </p>

                  <h3 className="font-bold text-white">
                    Jan 2024
                  </h3>
                </div>

<<<<<<< HEAD
                <div className="rounded-xl bg-white/15 px-5 py-3 backdrop-blur-md">
                  <p className="text-sm text-green-100">
                    {t('farmerHero.experience')}
                  </p>

                  <h3 className="font-bold text-white">
                    {experience}
                  </h3>
                </div>

                <div className="rounded-xl bg-white/15 px-5 py-3 backdrop-blur-md">
                  <p className="text-sm text-green-100">
                    {t('farmerHero.landOwned')}
                  </p>

                  <h3 className="font-bold text-white">
                    {land}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Trust Score */}
          <div className="w-full rounded-2xl bg-white p-6 text-center shadow-lg sm:w-64">
=======
                <div className="bg-white/15 backdrop-blur-md px-5 py-3 rounded-xl">
                  <p className="text-green-100 text-sm">
                    Experience
                  </p>

                  <h3 className="text-white font-bold">
                    {experience || "-"}
                  </h3>
                </div>

                <div className="bg-white/15 backdrop-blur-md px-5 py-3 rounded-xl">
                  <p className="text-green-100 text-sm">
                    Land Owned
                  </p>

                  <h3 className="text-white font-bold">
                    {land || "-"}
                  </h3>
                </div>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-2xl p-6 w-full sm:w-64 text-center shadow-lg">

>>>>>>> 3229c3309a3c5af8cb0fc78fd747b3fdd8589175
            <ShieldCheck
              className="mx-auto text-green-700"
              size={45}
            />

<<<<<<< HEAD
            <h2 className="mt-3 font-semibold">
              {t('farmerHero.trustScore')}
            </h2>

            <div className="mt-2 text-5xl font-bold text-green-700">
=======
            <h2 className="font-semibold mt-3">
              Trust Score
            </h2>

            <div className="text-5xl font-bold text-green-700 mt-2">
>>>>>>> 3229c3309a3c5af8cb0fc78fd747b3fdd8589175
              86
            </div>

            <p className="text-gray-500">
              {t('farmerHero.outOf')}
            </p>

            <div className="mt-4">
<<<<<<< HEAD
              <div className="h-3 rounded-full bg-gray-200">
                <div
                  className="h-3 rounded-full bg-green-600"
                  style={{ width: '86%' }}
=======
              <div className="h-3 bg-gray-200 rounded-full">
                <div
                  className="h-3 bg-green-600 rounded-full"
                  style={{ width: "86%" }}
>>>>>>> 3229c3309a3c5af8cb0fc78fd747b3fdd8589175
                />
              </div>
            </div>

<<<<<<< HEAD
            <div className="mt-4 rounded-full bg-green-100 py-2 text-sm font-medium text-green-700">
              {t('farmerHero.goldTrustedFarmer')}
            </div>

            <p className="mt-3 text-xs text-gray-500">
              {t('farmerHero.trustedBy')}
            </p>
          </div>
=======
            <div className="mt-4 bg-green-100 text-green-700 rounded-full py-2 text-sm font-medium">
              🏅 Gold Trusted Farmer
            </div>

            <p className="text-xs text-gray-500 mt-3">
              Trusted by verified buyers on KrishiSetu
            </p>

          </div>

>>>>>>> 3229c3309a3c5af8cb0fc78fd747b3fdd8589175
        </div>
      </div>

<<<<<<< HEAD
      {/* Edit Modal */}
      {showEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="mx-4 w-full max-w-md rounded-2xl bg-white p-6">
            <h2 className="mb-5 text-xl font-bold">
              {t('farmerHero.editFarmerProfile')}
            </h2>

            <div className="space-y-4">
              <input
                value={farmerName}
                onChange={(e) => setFarmerName(e.target.value)}
                placeholder={t('farmerHero.farmerName')}
                className="w-full rounded-xl border p-3"
=======
      {showEdit && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">

            <h2 className="text-xl font-bold mb-5">
              Edit Farmer Profile
            </h2>

            <div className="space-y-4">

              <input
                value={farmerName}
                onChange={(e) => setFarmerName(e.target.value)}
                className="w-full border rounded-xl p-3"
>>>>>>> 3229c3309a3c5af8cb0fc78fd747b3fdd8589175
              />

              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
<<<<<<< HEAD
                placeholder={t('farmerHero.location')}
                className="w-full rounded-xl border p-3"
=======
                className="w-full border rounded-xl p-3"
>>>>>>> 3229c3309a3c5af8cb0fc78fd747b3fdd8589175
              />

              <input
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
<<<<<<< HEAD
                placeholder={t('farmerHero.experience')}
                className="w-full rounded-xl border p-3"
=======
                className="w-full border rounded-xl p-3"
>>>>>>> 3229c3309a3c5af8cb0fc78fd747b3fdd8589175
              />

              <input
                value={land}
                onChange={(e) => setLand(e.target.value)}
<<<<<<< HEAD
                placeholder={t('farmerHero.landOwned')}
                className="w-full rounded-xl border p-3"
=======
                className="w-full border rounded-xl p-3"
>>>>>>> 3229c3309a3c5af8cb0fc78fd747b3fdd8589175
              />

              <input
                value={water}
                onChange={(e) => setWater(e.target.value)}
<<<<<<< HEAD
                placeholder={t('farmerHero.waterSource')}
                className="w-full rounded-xl border p-3"
              />

              <button
                onClick={() => setShowEdit(false)}
                className="w-full rounded-xl bg-green-700 py-3 text-white"
              >
                {t('farmerHero.saveChanges')}
              </button>

=======
                className="w-full border rounded-xl p-3"
              />

>>>>>>> 3229c3309a3c5af8cb0fc78fd747b3fdd8589175
              <button
                onClick={() => setShowEdit(false)}
                className="w-full rounded-xl border py-3"
              >
                {t('farmerHero.cancel')}
              </button>
<<<<<<< HEAD
            </div>
          </div>
        </div>
      )}
=======

              <button
                onClick={() => setShowEdit(false)}
                className="w-full border py-3 rounded-xl"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}

>>>>>>> 3229c3309a3c5af8cb0fc78fd747b3fdd8589175
    </div>
  )
}