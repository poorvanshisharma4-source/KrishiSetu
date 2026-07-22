"use client";
import { farmers } from "@/data/farmers";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
export default function FarmersPage() {
  const [search, setSearch] = useState("");
  const approvedFarmers = farmers.filter(
  (farmer) => farmer.status === "Approved"
).length;

const pendingFarmers = farmers.filter(
  (farmer) => farmer.status === "Pending"
).length;
  const filteredFarmers = farmers.filter((farmer) =>
  (
    farmer.name +
    farmer.location +
    farmer.crop
  )
    .toLowerCase()
    .includes(search.toLowerCase())
);
  

  return (
    <div className="p-10 bg-[#F8F6F0] min-h-screen">
      <Link
  href="/admin/dashboard"
  className="inline-flex items-center gap-2 text-[#2E7D32] hover:text-green-700 font-medium mb-6"
>
  <ArrowLeft className="w-5 h-5" />
  Back to Dashboard
</Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Farmers Management
        </h1>

        <p className="text-gray-500 mt-2">
          Manage all registered farmers here.
        </p>
      </div>


      {/* Stats Cards */}
<div className="flex gap-6 mb-8">

  <div className="bg-white rounded-xl shadow p-6">
    <p className="text-gray-500">
      Total Farmers
    </p>

    <h2 className="text-3xl font-bold text-green-700">
      {farmers.length}
    </h2>
  </div>


  <div className="bg-white rounded-xl shadow p-6">
    <p className="text-gray-500">
      Approved Farmers
    </p>

    <h2 className="text-3xl font-bold text-green-700">
      {approvedFarmers}
    </h2>
  </div>


  <div className="bg-white rounded-xl shadow p-6">
    <p className="text-gray-500">
      Pending Farmers
    </p>

    <h2 className="text-3xl font-bold text-yellow-600">
      {pendingFarmers}
    </h2>
  </div>

</div>


      {/* Search */}
      <div className="mb-6">
        <input
  type="text"
  placeholder="Search farmers..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-green-500"
/>
      </div>


      {/* Farmers Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full">

          <thead className="bg-green-50">
            <tr>
              <th className="p-4 text-left font-semibold">
                Name
              </th>

              <th className="p-4 text-left font-semibold">
                Location
              </th>

              <th className="p-4 text-left font-semibold">
                Crop
              </th>

              <th className="p-4 text-left font-semibold">
                Status
              </th>
              <th className="p-4 text-left font-semibold">
                Trust Score
              </th>
              <th className="p-4 text-left font-semibold">
                Action
              </th>
            </tr>
          </thead>


          <tbody>
            {filteredFarmers.length === 0 && (
  <tr>
    <td
      colSpan={6}
      className="p-6 text-center text-gray-500"
    >
      No farmers found
    </td>
  </tr>
)}
          {filteredFarmers.map((farmer) => (
              <tr
                key={farmer.id}
                className="border-t hover:bg-green-50 transition"
              >

                <td className="p-4">
                  {farmer.name}
                </td>

                <td className="p-4">
                  {farmer.location}
                </td>

                <td className="p-4">
                  {farmer.crop}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
  farmer.status === "Approved"
    ? "bg-green-100 text-green-700"
    : farmer.status === "Pending"
    ? "bg-yellow-100 text-yellow-700"
    : "bg-red-100 text-red-700"
}`}
                  >
                    {farmer.status}
                  </span>
                </td>

                <td className="p-4">
  <span className="font-bold text-green-700">
    {farmer.trustScore}
  </span>
</td>
                <td className="p-4">
  <Link
  href={`/admin/farmers/${farmer.id}`}
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