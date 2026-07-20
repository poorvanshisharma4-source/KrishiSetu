"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, ShieldCheck, Pencil } from "lucide-react";

export default function FarmerHero() {

  const [showEdit, setShowEdit] = useState(false);

  const [farmerName, setFarmerName] = useState("Ramesh Patil");
  const [location, setLocation] = useState("Sehore, Madhya Pradesh");
  const [experience, setExperience] = useState("8 Years");
  const [land, setLand] = useState("5.2 Acres");
  const [water, setWater] = useState("Borewell");


  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden border">

      <div className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 p-8">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">


          {/* Left */}

          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">


            <Image
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
              alt="Farmer"
              width={120}
              height={120}
              className="rounded-full border-4 border-white object-cover"
            />



            <div>


              <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start">


                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                  {farmerName}
                </h1>


                <span className="bg-green-500 text-white text-sm px-4 py-1 rounded-full">
                  Verified Farmer
                </span>


              </div>



              <button
                onClick={() => setShowEdit(true)}
                className="mt-4 flex items-center gap-2 bg-white text-green-700 px-5 py-2 rounded-xl font-medium hover:bg-green-50 transition"
              >

                <Pencil size={16} />

                Edit Profile

              </button>




              <div className="flex items-center gap-2 text-green-100 mt-3">

                <MapPin size={18} />

                {location}

              </div>




              <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-6">


                <div className="bg-white/15 backdrop-blur-md px-5 py-3 rounded-xl">

                  <p className="text-green-100 text-sm">
                    Member Since
                  </p>

                  <h3 className="text-white font-bold">
                    Jan 2024
                  </h3>

                </div>



                <div className="bg-white/15 backdrop-blur-md px-5 py-3 rounded-xl">

                  <p className="text-green-100 text-sm">
                    Experience
                  </p>

                  <h3 className="text-white font-bold">
                    {experience}
                  </h3>

                </div>



                <div className="bg-white/15 backdrop-blur-md px-5 py-3 rounded-xl">

                  <p className="text-green-100 text-sm">
                    Land Owned
                  </p>

                  <h3 className="text-white font-bold">
                    {land}
                  </h3>

                </div>


              </div>


            </div>


          </div>






          {/* Right Trust Score */}


          <div className="bg-white rounded-2xl p-6 w-full sm:w-64 text-center shadow-lg">


            <ShieldCheck
              className="mx-auto text-green-700"
              size={45}
            />


            <h2 className="font-semibold mt-3">
              Trust Score
            </h2>


            <div className="text-5xl font-bold text-green-700 mt-2">
              86
            </div>


            <p className="text-gray-500">
              out of 100
            </p>



            <div className="mt-4">

              <div className="h-3 bg-gray-200 rounded-full">

                <div
                  className="h-3 bg-green-600 rounded-full"
                  style={{ width:"86%" }}
                />

              </div>

            </div>



            <div className="mt-4 bg-green-100 text-green-700 rounded-full py-2 text-sm font-medium">
              🏅 Gold Trusted Farmer
            </div>


            <p className="text-xs text-gray-500 mt-3">
              Trusted by verified buyers on KrishiSetu
            </p>


          </div>


        </div>

      </div>






      {/* Edit Modal */}


      {showEdit && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">


          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">


            <h2 className="text-xl font-bold mb-5">
              Edit Farmer Profile
            </h2>



            <div className="space-y-4">


              <input
                value={farmerName}
                onChange={(e)=>setFarmerName(e.target.value)}
                placeholder="Farmer Name"
                className="w-full border rounded-xl p-3"
              />



              <input
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
                placeholder="Location"
                className="w-full border rounded-xl p-3"
              />



              <input
                value={experience}
                onChange={(e)=>setExperience(e.target.value)}
                placeholder="Experience"
                className="w-full border rounded-xl p-3"
              />



              <input
                value={land}
                onChange={(e)=>setLand(e.target.value)}
                placeholder="Land Owned"
                className="w-full border rounded-xl p-3"
              />



              <input
                value={water}
                onChange={(e)=>setWater(e.target.value)}
                placeholder="Water Source"
                className="w-full border rounded-xl p-3"
              />




              <button
                onClick={() => setShowEdit(false)}
                className="w-full bg-green-700 text-white py-3 rounded-xl"
              >
                Save Changes
              </button>




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


    </div>
  );
}