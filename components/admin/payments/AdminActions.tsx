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
          Current Payment Status
        </p>


        <span
          className={`inline-block mt-2 px-4 py-2 rounded-full text-sm font-medium ${
            status === "Completed"
              ? "bg-green-100 text-green-700"
              : status === "Hold"
              ? "bg-red-100 text-red-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status}
        </span>

      </div>




      <div className="flex flex-wrap gap-4">


        <button
          onClick={() => setStatus("Completed")}
          className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
        >
          Release Payment
        </button>



        <button
          onClick={() => setStatus("Hold")}
          className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
        >
          Hold Payment
        </button>



        <button
          onClick={() => setStatus("Pending")}
          className="px-5 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-800"
        >
          Reset Status
        </button>


      </div>


    </div>
  );
}