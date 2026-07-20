"use client";
import { useState } from "react";

const crops = [
  {
    name: "Wheat",
    emoji: "🌾",
    season: "Rabi Season",
    area: "2 Acres",
    status: "Active",
  },
  {
    name: "Maize",
    emoji: "🌽",
    season: "Kharif Season",
    area: "1.5 Acres",
    status: "Available",
  },
  {
    name: "Onion",
    emoji: "🧅",
    season: "Winter Crop",
    area: "1 Acre",
    status: "Active",
  },
  {
    name: "Tomato",
    emoji: "🍅",
    season: "All Season",
    area: "0.7 Acres",
    status: "Listed",
  },
];


export default function FarmerCrops() {
    const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-xl font-bold">
          Crops I Grow
        </h2>

        <button
  onClick={() => setShowModal(true)}
  className="bg-green-700 text-white px-3 sm:px-4 py-2 rounded-xl text-sm"
>
  + Add Crop
</button>

      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {crops.map((crop) => (

          <div
            key={crop.name}
            className="border rounded-2xl p-4 sm:p-5 hover:shadow-md transition"
          >

            <div className="text-4xl">
              {crop.emoji}
            </div>


            <h3 className="text-lg font-bold mt-3">
              {crop.name}
            </h3>


            <div className="text-sm text-gray-500 mt-3 space-y-1">

              <p>
                🌱 {crop.season}
              </p>

              <p>
                📏 {crop.area}
              </p>

            </div>


            <span className="inline-block mt-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
              {crop.status}
            </span>


          </div>

        ))}

      </div>
      {showModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white rounded-2xl p-6 w-full max-w-md">

      <h2 className="text-xl font-bold mb-5">
        Add New Crop
      </h2>


      <div className="space-y-4">

        <input
          placeholder="Crop Name"
          className="w-full border rounded-xl p-3"
        />

        <input
          placeholder="Season"
          className="w-full border rounded-xl p-3"
        />

        <input
          placeholder="Land Area (Acres)"
          className="w-full border rounded-xl p-3"
        />

        <input
          placeholder="Expected Yield"
          className="w-full border rounded-xl p-3"
        />


        <button
          className="w-full bg-green-700 text-white py-3 rounded-xl"
        >
          Save Crop
        </button>


        <button
          onClick={() => setShowModal(false)}
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