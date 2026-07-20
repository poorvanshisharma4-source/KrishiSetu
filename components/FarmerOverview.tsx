"use client";

export default function FarmerOverview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* About Farmer */}
      <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-6">

        <h2 className="text-xl font-bold mb-4">
          About Me
        </h2>

        <p className="text-gray-600 leading-7">
          I am a dedicated farmer from Sehore, Madhya Pradesh.
          I grow high-quality crops using modern farming techniques
          and believe in long-term partnerships with buyers.
        </p>

        <div className="mt-6 space-y-3">

          <div className="flex justify-between">
            <span className="text-gray-500">Mobile</span>
            <span className="font-medium">
              +91 9876543210
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Email</span>
            <span className="font-medium">
              ramesh@gmail.com
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Address</span>
            <span className="font-medium">
              Sehore, Madhya Pradesh
            </span>
          </div>

        </div>

      </div>


      {/* Land Details */}
      <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-6">

        <h2 className="text-xl font-bold mb-4">
          Land Details
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div className="border rounded-xl p-4">
            <p className="text-gray-500 text-sm">
              Total Land
            </p>
            <h3 className="font-bold text-2xl">
              5.2 Acres
            </h3>
          </div>


          <div className="border rounded-xl p-4">
            <p className="text-gray-500 text-sm">
              Soil Type
            </p>
            <h3 className="font-bold">
              Black Soil
            </h3>
          </div>


          <div className="border rounded-xl p-4">
            <p className="text-gray-500 text-sm">
              Water Source
            </p>
            <h3 className="font-bold">
              Borewell
            </h3>
          </div>


          <div className="border rounded-xl p-4">
            <p className="text-gray-500 text-sm">
              Organic Farming
            </p>
            <h3 className="font-bold text-green-600">
              Yes
            </h3>
          </div>

        </div>

      </div>

    </div>
  );
}