"use client";

import { buyers } from "@/data/buyers";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function BuyersPage() {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const activeBuyers = buyers.filter(
  (buyer) => buyer.status === "Active"
).length;

const pendingBuyers = buyers.filter(
  (buyer) => buyer.status === "Pending"
).length;
    const filteredBuyers = buyers.filter((buyer) => {
  const matchesSearch =
    (
      buyer.name +
      buyer.company +
      buyer.location +
      buyer.requiredCrop
    )
      .toLowerCase()
      .includes(search.toLowerCase());

  const matchesStatus =
    statusFilter === "All" ||
    buyer.status === statusFilter;

  return matchesSearch && matchesStatus;
});
 return (
  <div className="p-10 bg-[#F8F6F0] min-h-screen">
    <Link
  href="/admin/dashboard"
  className="inline-flex items-center gap-2 text-[#2E7D32] hover:text-green-700 font-medium mb-5"
>
  <ArrowLeft className="w-5 h-5" />
  Back to Dashboard
</Link>

    {/* Header */}
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Buyers Management
      </h1>

      <p className="text-gray-500 mt-2">
        Manage all registered buyers here.
      </p>
    </div>

    {/* Stats Cards */}
<div className="flex gap-6 mb-8">

  <div className="bg-white rounded-xl shadow p-6">
    <p className="text-gray-500">
      Total Buyers
    </p>

    <h2 className="text-3xl font-bold text-green-700">
      {buyers.length}
    </h2>
  </div>


  <div className="bg-white rounded-xl shadow p-6">
    <p className="text-gray-500">
      Active Buyers
    </p>

    <h2 className="text-3xl font-bold text-green-700">
      {activeBuyers}
    </h2>
  </div>


  <div className="bg-white rounded-xl shadow p-6">
    <p className="text-gray-500">
      Pending Buyers
    </p>

    <h2 className="text-3xl font-bold text-yellow-600">
      {pendingBuyers}
    </h2>
  </div>

</div>

    {/* Search */}
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search buyers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-green-500"  
            />
    </div>

    <div className="mb-6">

  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    className="px-4 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-green-500"
  >

    <option value="All">
      All Buyers
    </option>

    <option value="Active">
      Active
    </option>

    <option value="Pending">
      Pending
    </option>

  </select>

</div>

    {/* Buyers Table */}
<div className="bg-white rounded-xl shadow overflow-x-auto">

  <table className="w-full">

    <thead className="bg-green-50 text-gray-700">
      <tr>
        <th className="p-4 text-left font-semibold">Buyer Name</th>
        <th className="p-4 text-left font-semibold">Location</th>
        <th className="p-4 text-left font-semibold">Required Crop</th>
        <th className="p-4 text-left font-semibold">Status</th>
        <th className="p-4 text-left font-semibold">Trust Score</th>
        <th className="p-4 text-left font-semibold">Action</th>
      </tr>
    </thead>

    <tbody>
        {filteredBuyers.length === 0 && (
  <tr>
    <td
      colSpan={6}
      className="p-6 text-center text-gray-500"
    >
      No buyers found
    </td>
  </tr>
)}
      {filteredBuyers.map((buyer) => (
  
          <tr
  key={buyer.id}
  className="border-t hover:bg-green-50 transition"
>

            <td className="p-4">{buyer.name}</td>

            <td className="p-4">{buyer.location}</td>

            <td className="p-4">{buyer.requiredCrop}</td>

            <td className="p-4">
              <span
  className={`px-3 py-1 rounded-full text-sm ${
    buyer.status === "Active"
      ? "bg-green-100 text-green-700"
      : buyer.status === "Pending"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700"
  }`}
>
  {buyer.status}
</span>
            </td>

            <td className="p-4">
              <span className="font-bold text-green-700">
                {buyer.trustScore}
              </span>
            </td>

            <td className="p-4">
              <Link
  href={`/admin/buyers/${buyer.id}`}
  className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
>
  View
</Link>
            </td>

          </tr>
        ))}
    </tbody>

  </table>

</div>

  </div>
);
}