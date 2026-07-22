"use client";

import { requirements } from "@/data/requirements";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RequirementsPage() {
  const [reqs] = useState(requirements);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredRequirements = reqs.filter((item) => {
    const matchesSearch =
      item.crop.toLowerCase().includes(search.toLowerCase()) ||
      item.buyer.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || item.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6">
      <Link
        href="/admin/dashboard"
        className="inline-flex items-center gap-2 text-[#2E7D32] hover:text-green-700 font-medium mb-4"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Dashboard
      </Link>

      <h1 className="text-3xl font-bold text-gray-800">
        Requirements Management
      </h1>

      <p className="mt-2 text-gray-600">
        Manage buyer crop requirements here.
      </p>



      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">


        <div className="bg-white border rounded-xl p-5 shadow-sm">
          <p className="text-gray-500">
            Total Requirements
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {reqs.length}
          </h2>
        </div>



        <div className="bg-white border rounded-xl p-5 shadow-sm">
          <p className="text-gray-500">
            Active
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {
              reqs.filter(
                (item) => item.status === "Active"
              ).length
            }
          </h2>
        </div>



        <div className="bg-white border rounded-xl p-5 shadow-sm">
          <p className="text-gray-500">
            Pending
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {
              reqs.filter(
                (item) => item.status === "Pending"
              ).length
            }
          </h2>
        </div>


      </div>



      {/* Search & Filter */}


      <div className="mt-8 flex flex-col md:flex-row gap-4">


        <input
          type="text"
          placeholder="Search by crop or buyer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-3 w-full md:w-1/2"
        />



        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded-lg px-4 py-3 w-full md:w-48"
        >

          <option value="All">
            All Status
          </option>


          <option value="Active">
            Active
          </option>


          <option value="Pending">
            Pending
          </option>


        </select>


      </div>




      {/* Table */}


      <div className="mt-8 bg-white rounded-xl border shadow-sm overflow-hidden">


        <table className="w-full">


          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">
                Crop
              </th>


              <th className="p-4 text-left">
                Buyer
              </th>


              <th className="p-4 text-left">
                Quantity
              </th>


              <th className="p-4 text-left">
                Location
              </th>


              <th className="p-4 text-left">
                Status
              </th>


              <th className="p-4 text-left">
                Action
              </th>


            </tr>

          </thead>



          <tbody>

  {filteredRequirements.length === 0 ? (

    <tr>
      <td
        colSpan={6}
        className="p-6 text-center text-gray-500"
      >
        No requirements found
      </td>
    </tr>

  ) : (

    filteredRequirements.map((requirement) => (

      <tr
        key={requirement.id}
        className="border-t"
      >

        <td className="p-4">
          {requirement.crop}
        </td>

        <td className="p-4">
          {requirement.buyer}
        </td>

        <td className="p-4">
          {requirement.quantity}
        </td>

        <td className="p-4">
          {requirement.location}
        </td>

        <td className="p-4">
          <span
  className={`px-3 py-1 rounded-full text-sm font-medium ${
    requirement.status === "Active"
      ? "bg-green-100 text-green-700"
      : requirement.status === "Pending"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700"
  }`}
>
  {requirement.status}
</span>
        </td>

        <td className="p-4">
          <Link
            href={`/admin/requirements/${requirement.id}`}
            className="text-green-700 font-medium"
          >
            View
          </Link>
        </td>

      </tr>

    ))

  )}

</tbody>


        </table>


      </div>


    </div>
  );
}