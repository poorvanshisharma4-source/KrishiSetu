"use client";

import { useState } from "react";

export default function AdminActions() {
  const [status, setStatus] = useState("");

  return (
    <div className="mt-6 bg-white rounded-xl shadow-sm border p-6">

      <h2 className="text-xl font-semibold mb-6">
        Admin Actions
      </h2>


      <div className="flex flex-wrap gap-4">

        <button
          onClick={() => setStatus("Contract Approved")}
          className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
        >
          Approve Contract
        </button>


        <button
          onClick={() => setStatus("Contract Cancelled")}
          className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
        >
          Cancel Contract
        </button>


        <button
          onClick={() => setStatus("Agreement Viewed")}
          className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
        >
          View Agreement
        </button>

      </div>


      {status && (
        <p className="mt-4 text-sm text-gray-600">
          Action: {status}
        </p>
      )}

    </div>
  );
}