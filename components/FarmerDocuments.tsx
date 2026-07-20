"use client";

export default function FarmerDocuments() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* Payment Summary */}
      <div className="bg-white rounded-2xl border shadow-sm p-6">

        <h2 className="text-xl font-bold mb-5">
          Payment Summary
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between">
            <span className="text-gray-500">
              Wallet Balance
            </span>
            <span className="font-bold text-green-600">
              ₹12,450
            </span>
          </div>


          <div className="flex justify-between">
            <span className="text-gray-500">
              Pending Payments
            </span>
            <span className="font-bold text-orange-500">
              ₹18,600
            </span>
          </div>


          <div className="flex justify-between">
            <span className="text-gray-500">
              Total Earnings
            </span>
            <span className="font-bold text-blue-600">
              ₹1,24,500
            </span>
          </div>

        </div>

      </div>


      {/* Documents */}
      <div className="bg-white rounded-2xl border shadow-sm p-6">

        <h2 className="text-xl font-bold mb-5">
          Documents
        </h2>

        <div className="space-y-3">


          <div className="flex justify-between border rounded-xl p-3">
            <span>
              📄 Aadhaar Card
            </span>

            <span className="text-green-600 font-medium">
              Verified
            </span>
          </div>


          <div className="flex justify-between border rounded-xl p-3">
            <span>
              🏡 Land Record
            </span>

            <span className="text-green-600 font-medium">
              Verified
            </span>
          </div>


          <div className="flex justify-between border rounded-xl p-3">
            <span>
              🏦 Bank Passbook
            </span>

            <span className="text-green-600 font-medium">
              Verified
            </span>
          </div>


        </div>

      </div>

    </div>
  );
}