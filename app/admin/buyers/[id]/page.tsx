"use client";

import { buyers } from "@/data/buyers";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BuyerDetailPage() {

  const params = useParams();
  const id = params.id as string;

 const buyer = buyers.find((item) => item.id === id);

const [status, setStatus] = useState(
  buyer?.status || "Pending"
);
const [showModal, setShowModal] = useState(false);
const [selectedStatus, setSelectedStatus] = useState("");

if (!buyer) {
  return <div>Buyer not found</div>;
}

  const handleStatusChange = () => {
  setStatus(selectedStatus);
  setShowModal(false);
};

  return (
    <div className="p-10 bg-[#F8F6F0] min-h-screen">
       <Link
  href="/admin/buyers"
  className="inline-flex items-center gap-2 text-[#2E7D32] hover:text-green-700 font-medium mb-5"
>
  <ArrowLeft className="w-5 h-5" />
  Back
</Link>
      <h1 className="text-3xl font-bold">
        Buyer Details
      </h1>
      {/* Buyer Profile Card */}
<div className="mt-8 bg-white rounded-xl shadow p-6">

  <div className="flex items-start gap-8">

    <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-3xl font-bold text-green-700">
      {buyer.name
        .split(" ")
        .map((word) => word[0])
        .join("")}
    </div>

    <div className="flex flex-col gap-2">

      <h2 className="text-2xl font-bold text-gray-900">
        {buyer.name}
      </h2>

      <div className="flex gap-3 mt-2">

  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
    ✓ Verified Buyer
  </span>

  <span
    className={`px-3 py-1 rounded-full text-sm font-medium ${
      status === "Approved"
        ? "bg-green-100 text-green-700"
        : status === "Pending"
        ? "bg-yellow-100 text-yellow-700"
        : status === "Rejected"
        ? "bg-red-100 text-red-700"
        : "bg-gray-200 text-gray-700"
        
    }`}
  >
    Status: {status}
  </span>

</div>

      <p className="text-gray-600">
        <span className="font-semibold text-gray-800">
          Company:
        </span>{" "}
        {buyer.company || "Individual Buyer"}
      </p>

      <p className="text-gray-600">
        <span className="font-semibold text-gray-800">
          Location:
        </span>{" "}
        {buyer.location}
      </p>

      <div className="text-gray-600">

  <p className="font-semibold text-gray-800">
    Trust Score
  </p>

  <div className="flex items-center gap-3 mt-2">

    <div className="w-40 h-2 bg-gray-200 rounded-full">
      <div
        className="h-2 bg-green-600 rounded-full"
        style={{
          width: buyer.trustScore,
        }}
      ></div>
    </div>

    <span className="text-green-700 font-bold">
      {buyer.trustScore}
    </span>

  </div>

</div>

    </div>

  </div>

</div>
{/* Personal Information */}
<div className="mt-8 bg-white rounded-xl shadow p-6">

  <h2 className="text-xl font-bold">
    Personal Information
  </h2>

  <div className="mt-5 grid grid-cols-2 gap-5">

    <div>
      <p className="text-gray-500">Full Name</p>
      <p className="font-semibold">{buyer.name}</p>
    </div>

    <div>
      <p className="text-gray-500">Email</p>
      <p className="font-semibold">{buyer.email}</p>
    </div>

    <div>
      <p className="text-gray-500">Phone</p>
      <p className="font-semibold">{buyer.phone}</p>
    </div>

    <div>
      <p className="text-gray-500">Address</p>
      <p className="font-semibold">{buyer.address}</p>
    </div>

  </div>

</div>
{/* Business Information */}
<div className="mt-8 bg-white rounded-xl shadow p-6">

  <h2 className="text-xl font-bold">
    Business Information
  </h2>

  <div className="mt-5 grid grid-cols-2 gap-5">

    <div>
      <p className="text-gray-500">Required Crop</p>
      <p className="font-semibold">{buyer.requiredCrop}</p>
    </div>

    <div>
      <p className="text-gray-500">Budget</p>
      <p className="font-semibold">{buyer.budget}</p>
    </div>

    <div>
      <p className="text-gray-500">Preferred Location</p>
      <p className="font-semibold">{buyer.preferredLocation}</p>
    </div>

    <div>
      <p className="text-gray-500">Purchase Frequency</p>
      <p className="font-semibold">{buyer.purchaseFrequency}</p>
    </div>

  </div>

</div>
{/* Verification */}
<div className="mt-8 bg-white rounded-xl shadow p-6">

  <h2 className="text-xl font-bold">
    Verification
  </h2>

  <div className="mt-5 space-y-4">

    <div className="flex justify-between">
      <p>Email Verification</p>
      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
        {buyer.verification.email}
      </span>
    </div>

    <div className="flex justify-between">
      <p>Phone Verification</p>
      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
        {buyer.verification.phone}
      </span>
    </div>

    <div className="flex justify-between">
      <p>GST Verification</p>
      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
        {buyer.verification.gst}
      </span>
    </div>

  </div>

</div>
{/* Contract History */}
<div className="mt-8 bg-white rounded-xl shadow p-6">

  <h2 className="text-xl font-bold">
    Contract History
  </h2>

  <div className="mt-5">

    {buyer.contractHistory?.map((contract, index) => (
      <div
        key={index}
        className="flex justify-between items-center border-b py-4"
      >
        <div>
          <p className="font-semibold">
            {contract.farmer}
          </p>

          <p className="text-gray-500 text-sm">
            {contract.crop} • {contract.quantity}
          </p>
        </div>

        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
          {contract.status}
        </span>

      </div>
    ))}

  </div>

</div>
{/* Recent Requirements */}
<div className="mt-8 bg-white rounded-xl shadow p-6">

  <h2 className="text-xl font-bold">
    Recent Requirements
  </h2>

  <div className="mt-5 space-y-4">

    {buyer.recentRequirements?.map((requirement, index) => (
      <div
        key={index}
        className="border rounded-lg p-4"
      >

        <div className="flex justify-between">
          <p className="font-semibold">
            {requirement.crop}
          </p>

          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
            {requirement.status}
          </span>
        </div>

        <p className="text-gray-500 mt-2">
          Quantity: {requirement.quantity}
        </p>

        <p className="text-gray-500">
  Required Crop: {requirement.crop}
</p>

      </div>
    ))}

  </div>

</div>
{/* Trust Score Breakdown */}

<div className="mt-8 bg-white rounded-xl shadow p-6">

  <h2 className="text-xl font-bold">
    Trust Score Breakdown
  </h2>

  <div className="mt-5 space-y-4">


    <div>
      <div className="flex justify-between mb-1">

        <p className="text-gray-700 font-medium">
          Verification Score
        </p>

        <span className="font-semibold text-green-700">
          {buyer.trustBreakdown.verification}
        </span>

      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-green-600 h-2 rounded-full w-[95%]"></div>
      </div>

    </div>



    <div>
      <div className="flex justify-between mb-1">

        <p className="text-gray-700 font-medium">
          Contract Reliability
        </p>

        <span className="font-semibold text-green-700">
          90%
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
          92%
        </span>

      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-green-600 h-2 rounded-full w-[92%]"></div>
      </div>

    </div>


  </div>

</div>
{/* Admin Actions */}
<div className="mt-8 bg-white rounded-xl shadow p-6">

  <h2 className="text-xl font-bold">
    Admin Actions
  </h2>

  <div className="mt-5 flex gap-4">

    

  <button
  onClick={() => {
  setSelectedStatus("Approved");
  setShowModal(true);
}}    className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
  >
    Approve Buyer
  </button>
 
  <button
  onClick={() => {
    setSelectedStatus("Rejected");
    setShowModal(true);
  }}
  className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
>
  Reject Buyer
</button>

  <button
    onClick={() => {
  setSelectedStatus("Suspended");
  setShowModal(true);
}}
    className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
  >
    Suspend Buyer
  </button>

</div>

  

</div>
{/* Confirmation Modal */}

{showModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

    <div className="bg-white rounded-xl p-6 w-96 shadow-lg">

      <h2 className="text-xl font-bold text-gray-900">
        Confirm Action
      </h2>

      <p className="mt-3 text-gray-600">
        Are you sure you want to change buyer status to {selectedStatus}?
      </p>

      <div className="mt-6 flex justify-end gap-3">

        <button
          onClick={() => setShowModal(false)}
          className="px-4 py-2 bg-gray-200 rounded-lg"
        >
          Cancel
        </button>

        <button
          onClick={handleStatusChange}
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
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