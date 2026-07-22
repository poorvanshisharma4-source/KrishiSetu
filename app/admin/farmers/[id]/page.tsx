"use client";
import { farmers } from "@/data/farmers";
import { useState, use } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function FarmerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = use(params);

const farmer = farmers.find((item) => item.id === id);

const [status, setStatus] = useState(
  farmer?.status || "Pending"
);
const [showModal, setShowModal] = useState(false);
const [selectedStatus, setSelectedStatus] = useState("");
const handleStatusChange = (newStatus: string) => {
  setStatus(newStatus);
};

if (!farmer) {
  return <div>Farmer not found</div>;
}

  return (
    <div className="p-10 bg-[#F8F6F0] min-h-screen">

     <Link
  href="/admin/farmers"
  className="inline-flex items-center gap-2 text-[#2E7D32] hover:text-green-700 font-medium mb-5"
>
  <ArrowLeft className="w-5 h-5" />
  Back
</Link>

<h1 className="text-3xl font-bold">
  Farmer Details
</h1>

      {/* Farmer Profile Card */}
      <div className="mt-8 bg-white rounded-xl shadow p-6">

        <div className="flex items-start gap-8">

          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-3xl font-bold text-green-700">
            {farmer.name
              .split(" ")
              .map((word) => word[0])
              .join("")}
          </div>


          <div className="flex flex-col gap-2">

            <h2 className="text-2xl font-bold text-gray-900">
              {farmer.name}
            </h2>

            <span className="inline-block mt-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              ✓ Verified Farmer
            </span>

            <span
  className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
    status === "Approved"
      ? "bg-green-100 text-green-700"
      : status === "Pending"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700"
  }`}
>
  Status: {status}
</span>


            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">
                Location:
              </span>{" "}
              {farmer.location}
            </p>


            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">
                Crop:
              </span>{" "}
              {farmer.crop}
            </p>


            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">
                Land:
              </span>{" "}
              {farmer.land}
            </p>


            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">
                Trust Score:
              </span>{" "}
              <span className="text-green-700 font-bold">
                {farmer.trustScore}
              </span>
            </p>

          </div>

        </div>

      </div>


      {/* Personal Information */}
      <div className="mt-8 bg-white rounded-xl shadow p-6">

        <h2 className="text-xl font-bold text-gray-900">
          Personal Information
        </h2>


        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">


          <div>
            <p className="text-sm text-gray-500">
              Full Name
            </p>
            <p className="font-semibold text-gray-800">
              {farmer.name}
            </p>
          </div>


          <div>
            <p className="text-sm text-gray-500">
              Location
            </p>
            <p className="font-semibold text-gray-800">
              {farmer.location}
            </p>
          </div>


          <div>
            <p className="text-sm text-gray-500">
              Phone
            </p>
            <p className="font-semibold text-gray-800">
              {farmer.phone}
            </p>
          </div>


          <div>
            <p className="text-sm text-gray-500">
              Land Size
            </p>
            <p className="font-semibold text-gray-800">
              {farmer.landSize}
            </p>
          </div>


        </div>

      </div>



      {/* Farming Details */}
      <div className="mt-8 bg-white rounded-xl shadow p-6">

        <h2 className="text-xl font-bold text-gray-900">
          Farming Details
        </h2>


        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">


          <div>
            <p className="text-sm text-gray-500">
              Main Crops
            </p>
            <p className="font-semibold text-gray-800">
              {farmer.crops}
            </p>
          </div>


          <div>
            <p className="text-sm text-gray-500">
              Farming Experience
            </p>
            <p className="font-semibold text-gray-800">
              {farmer.experience}
            </p>
          </div>


          <div>
            <p className="text-sm text-gray-500">
              Water Availability
            </p>
            <p className="font-semibold text-gray-800">
              {farmer.waterAvailability}
            </p>
          </div>


        </div>

      </div>
      {/* Documents & Verification */}

<div className="mt-8 bg-white rounded-xl shadow p-6">

  <h2 className="text-xl font-bold text-gray-900">
    Documents & Verification
  </h2>


  <div className="mt-5 space-y-4">


    <div className="flex justify-between items-center">
      <p className="text-gray-700 font-medium">
        Aadhaar Verification
      </p>

      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
        {farmer.aadhaarStatus}
      </span>
    </div>



    <div className="flex justify-between items-center">
      <p className="text-gray-700 font-medium">
        Land Document
      </p>

      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
        {farmer.landDocumentStatus}
      </span>
    </div>



    <div className="flex justify-between items-center">
      <p className="text-gray-700 font-medium">
        Bank Verification
      </p>

      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
        {farmer.bankStatus}
      </span>
    </div>


  </div>

</div>
{/* Trust Score Breakdown */}

<div className="mt-8 bg-white rounded-xl shadow p-6">

  <h2 className="text-xl font-bold text-gray-900">
    Trust Score Breakdown
  </h2>


  <div className="mt-5 space-y-4">


    <div>
      <div className="flex justify-between mb-1">
        <p className="text-gray-700 font-medium">
          Document Verification
        </p>
        <span className="font-semibold text-green-700">
          {farmer.trustBreakdown.document}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-green-600 h-2 rounded-full w-full"></div>
      </div>
    </div>



    <div>
      <div className="flex justify-between mb-1">
        <p className="text-gray-700 font-medium">
          Delivery Reliability
        </p>
        <span className="font-semibold text-green-700">
          {farmer.trustBreakdown.delivery}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-green-600 h-2 rounded-full w-[90%]"></div>
      </div>
    </div>



    <div>
      <div className="flex justify-between mb-1">
        <p className="text-gray-700 font-medium">
          Buyer Ratings
        </p>
        <span className="font-semibold text-green-700">
          {farmer.trustBreakdown.rating}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-green-600 h-2 rounded-full w-[95%]"></div>
      </div>
    </div>


  </div>

</div>
{/* Admin Actions */}

<div className="mt-8 bg-white rounded-xl shadow p-6">

  <h2 className="text-xl font-bold text-gray-900">
    Admin Actions
  </h2>


  <div className="mt-5 flex flex-wrap gap-4">

    <button
  onClick={() => {
    setSelectedStatus("Approved");
    setShowModal(true);
  }}
  className="px-5 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700"
>
  Approve Farmer
</button>


    <button
  onClick={() => {
    setSelectedStatus("Rejected");
    setShowModal(true);
  }}
  className="px-5 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600"
>
  Reject Farmer
</button>


    <button
  onClick={() => {
    setSelectedStatus("Suspended");
    setShowModal(true);
  }}
  className="px-5 py-2 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-900"
>
  Suspend Account
</button>

  </div>

</div>
{/* Contract History */}

<div className="mt-8 bg-white rounded-xl shadow p-6">

  <h2 className="text-xl font-bold text-gray-900">
    Contract History
  </h2>

  <div className="mt-5 space-y-4">

    <div className="border rounded-lg p-4">

      <p className="font-semibold text-gray-800">
        Wheat Contract
      </p>

      <p className="text-gray-500 mt-1">
        Buyer: FreshMart Pvt. Ltd.
      </p>

      <p className="text-gray-500">
        Quantity: 50 Tons
      </p>

      <span className="inline-block mt-3 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
        Completed
      </span>

    </div>

  </div>

</div>
{/* Recent Requirements */}

<div className="mt-8 bg-white rounded-xl shadow p-6">

  <h2 className="text-xl font-bold text-gray-900">
    Recent Requirements
  </h2>

  <div className="mt-5">

    <div className="border rounded-lg p-4">

      <p className="font-semibold text-gray-800">
        Wheat Requirement
      </p>

      <p className="text-gray-500 mt-1">
        Quantity: 100 Tons
      </p>

      <p className="text-gray-500">
        Buyer: FreshMart Pvt. Ltd.
      </p>

      <span className="inline-block mt-3 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
        Matched
      </span>

    </div>

  </div>

</div>
{showModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white rounded-xl shadow-xl p-6 w-[400px]">

      <h2 className="text-xl font-bold text-gray-900">
        Confirm Action
      </h2>

      <p className="mt-3 text-gray-600">
        Are you sure you want to change farmer status to{" "}
        <span className="font-bold">
          {selectedStatus}
        </span>
        ?
      </p>


      <div className="mt-6 flex justify-end gap-3">

        <button
          onClick={() => setShowModal(false)}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
        >
          Cancel
        </button>


        <button
          onClick={() => {
            handleStatusChange(selectedStatus);
            setShowModal(false);
          }}
          className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
        >
          Confirm
        </button>

      </div>

    </div>

  </div>
)}
    </div>
  );
}