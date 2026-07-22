"use client";

import { payments } from "@/data/payments";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PaymentsPage() {
  return (
    <div className="p-6">

      {/* Back Button */}
      <Link
        href="/admin/dashboard"
        className="inline-flex items-center gap-2 text-[#2E7D32] hover:text-green-700 font-medium mb-4"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Dashboard
      </Link>

      <h1 className="text-3xl font-bold text-gray-800">
        Payments Management
      </h1>

      <p className="mt-2 text-gray-600">
        Manage all farmer-buyer payments here.
      </p>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

        <div className="bg-white border rounded-xl p-5 shadow-sm">
          <p className="text-gray-500">
            Total Payments
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {payments.length}
          </h2>
        </div>

        <div className="bg-white border rounded-xl p-5 shadow-sm">
          <p className="text-gray-500">
            Completed
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {
              payments.filter(
                (item) => item.status === "Completed"
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
              payments.filter(
                (item) => item.status === "Pending"
              ).length
            }
          </h2>
        </div>

      </div>

      {/* Table */}

      <div className="mt-8 bg-white rounded-xl border shadow-sm overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">
                Contract ID
              </th>

              <th className="p-4 text-left">
                Farmer
              </th>

              <th className="p-4 text-left">
                Buyer
              </th>

              <th className="p-4 text-left">
                Amount
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

            {payments.map((payment) => (

              <tr
                key={payment.id}
                className="border-t"
              >

                <td className="p-4">
                  {payment.contractId}
                </td>

                <td className="p-4">
                  {payment.farmer}
                </td>

                <td className="p-4">
                  {payment.buyer}
                </td>

                <td className="p-4">
                  {payment.amount}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      payment.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {payment.status}
                  </span>

                </td>

                <td className="p-4">

                  <Link
                    href={`/admin/payments/${payment.id}`}
                    className="text-green-700 font-medium"
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