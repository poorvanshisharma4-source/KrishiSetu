"use client";

import { useState } from "react";


export default function AdminActions() {

  const [status, setStatus] = useState("Pending");


  return (
    <div className="mt-6 bg-white rounded-xl shadow-sm border p-6">


      <h2 className="text-xl font-semibold mb-6">
        Admin Actions
      </h2>



      <div className="mb-6">

        <p className="text-gray-500">
          Current Status
        </p>


        <span
          className={`inline-block mt-2 px-4 py-2 rounded-full text-sm font-medium ${
            status === "Approved"
              ? "bg-green-100 text-green-700"
              : status === "Rejected"
              ? "bg-red-100 text-red-700"
              : status === "Completed"
              ? "bg-blue-100 text-blue-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status}
        </span>

      </div>



      <div className="flex flex-wrap gap-4">


        <button
          onClick={() => setStatus("Approved")}
          className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
        >
          Approve Requirement
        </button>



        <button
          onClick={() => setStatus("Rejected")}
          className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
        >
          Reject Requirement
        </button>



        <button
          onClick={() => setStatus("Completed")}
          className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          Mark Completed
        </button>


      </div>


    </div>
  );
}