"use client";

import { useState } from "react";
import { contracts } from "@/data/contracts";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function ContractsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const totalContracts = contracts.length;

const activeContracts = contracts.filter(
  (contract) => contract.status === "Active"
).length;

const completedContracts = contracts.filter(
  (contract) => contract.status === "Completed"
).length;

const pendingContracts = contracts.filter(
  (contract) => contract.status === "Pending"
).length;
const filteredContracts = contracts.filter((contract) => {
    const totalContracts = contracts.length;

const activeContracts = contracts.filter(
  (contract) => contract.status === "Active"
).length;

const completedContracts = contracts.filter(
  (contract) => contract.status === "Completed"
).length;

const pendingContracts = contracts.filter(
  (contract) => contract.status === "Pending"
).length;
  const matchesSearch =
    contract.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contract.farmer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contract.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contract.crop.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesStatus =
    statusFilter === "All Status" ||
    contract.status === statusFilter;

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
        Contracts Management
      </h1>

      <p className="mt-2 text-gray-600">
        Manage all farmer-buyer contracts here.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
  <div className="bg-white rounded-xl shadow-sm border p-6">
    <p className="text-sm text-gray-500">Total Contracts</p>
    <h2 className="text-3xl font-bold mt-2">
  {totalContracts}
</h2>
  </div>

  <div className="bg-white rounded-xl shadow-sm border p-6">
    <p className="text-sm text-gray-500">Active Contracts</p>
    <h2 className="text-3xl font-bold mt-2 text-green-600">
  {activeContracts}
</h2>
  </div>

  <div className="bg-white rounded-xl shadow-sm border p-6">
    <p className="text-sm text-gray-500">Completed Contracts</p>
    <h2 className="text-3xl font-bold mt-2 text-blue-600">
  {completedContracts}
</h2>
  </div>

  <div className="bg-white rounded-xl shadow-sm border p-6">
    <p className="text-sm text-gray-500">Pending Contracts</p>
    <h2 className="text-3xl font-bold mt-2 text-yellow-600">
  {pendingContracts}
</h2>
  </div>
</div>

<div className="mt-8 flex flex-col md:flex-row gap-4 justify-between">
  <input
    type="text"
    placeholder="Search by Contract ID, Farmer, Buyer..."
    value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full md:w-96 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
  />

  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
  >
    <option>All Status</option>
    <option>Active</option>
    <option>Pending</option>
    <option>Completed</option>
    <option>Cancelled</option>
  </select>
</div>
<div className="mt-8 bg-white rounded-xl shadow-sm border overflow-x-auto">
  <table className="min-w-full">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-6 py-3 text-left text-sm font-semibold">Contract ID</th>
        <th className="px-6 py-3 text-left text-sm font-semibold">Farmer</th>
        <th className="px-6 py-3 text-left text-sm font-semibold">Buyer</th>
        <th className="px-6 py-3 text-left text-sm font-semibold">Crop</th>
        <th className="px-6 py-3 text-left text-sm font-semibold">Quantity</th>
        <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
        <th className="px-6 py-3 text-left text-sm font-semibold">
  Duration
</th>
        <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
        <th className="px-6 py-3 text-center text-sm font-semibold">Action</th>
      </tr>
    </thead>

    <tbody>
  {filteredContracts.length > 0 ? (
    filteredContracts.map((contract) => (
  <tr key={contract.id} className="border-t hover:bg-gray-50">
    <td className="px-6 py-4">{contract.id}</td>
    <td className="px-6 py-4">{contract.farmer}</td>
    <td className="px-6 py-4">
  <p className="font-medium">{contract.buyer}</p>
  <p className="text-sm text-gray-500">{contract.company}</p>
</td>
    <td className="px-6 py-4">{contract.crop}</td>
    <td className="px-6 py-4">{contract.quantity}</td>
    <td className="px-6 py-4">
  {contract.amount}
</td>

<td className="px-6 py-4">
  {contract.duration}
</td>


    <td className="px-6 py-4">
      <span
  className={`px-3 py-1 rounded-full text-sm font-medium ${
    contract.status === "Active"
      ? "bg-green-100 text-green-700"
      : contract.status === "Pending"
      ? "bg-yellow-100 text-yellow-700"
      : contract.status === "Completed"
      ? "bg-blue-100 text-blue-700"
      : "bg-red-100 text-red-700"
  }`}
>
  {contract.status}
</span>
    </td>
    <td className="px-6 py-4 text-center">
      <Link
  href={`/admin/contracts/${contract.id}`}
className="bg-green-100 text-green-700 hover:bg-green-200 px-4 py-2 rounded-lg inline-block font-medium"
>
  View
</Link>
    </td>
      </tr>
    ))
  ) : (
    <tr>
      <td
        colSpan={9}
        className="text-center py-10 text-gray-500"
      >
        No Contracts Found
      </td>
    </tr>
  )}
</tbody>
  </table>
</div>
    </div>
  );
}