"use client";

import { ShoppingBag, Calendar, PackageCheck } from "lucide-react";

export default function BuyerPurchaseHistory() {
  const purchases = [
    {
      crop: "Wheat",
      farmer: "Ramesh Kumar",
      quantity: "250 Quintals",
      date: "12 July 2026",
      status: "Delivered",
    },
    {
      crop: "Tomato",
      farmer: "Ajay Singh",
      quantity: "120 Quintals",
      date: "30 June 2026",
      status: "Delivered",
    },
    {
      crop: "Soybean",
      farmer: "Mohan Patel",
      quantity: "300 Quintals",
      date: "18 June 2026",
      status: "Completed",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">

      <div className="flex items-center gap-3 mb-6">
        <div className="bg-green-100 p-3 rounded-xl">
          <ShoppingBag className="text-green-700" size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Purchase History
          </h2>

          <p className="text-gray-500 text-sm">
            Recent procurement records
          </p>
        </div>
      </div>

      <div className="space-y-4">

        {purchases.map((item, index) => (

          <div
            key={index}
            className="border rounded-xl p-5 hover:shadow-md transition"
          >

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

              <div>

                <h3 className="text-lg font-bold">
                  {item.crop}
                </h3>

                <p className="text-gray-600">
                  Farmer: {item.farmer}
                </p>

                <p className="text-gray-600">
                  Quantity: {item.quantity}
                </p>

              </div>

              <div className="flex flex-col md:items-end gap-2">

                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar size={16} />
                  {item.date}
                </div>

                <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full">

                  <PackageCheck size={16} />

                  {item.status}

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}