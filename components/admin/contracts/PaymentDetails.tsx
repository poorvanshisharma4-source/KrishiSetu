export default function PaymentDetails() {
  return (
    <div className="mt-6 bg-white rounded-xl shadow-sm border p-6">

      <h2 className="text-xl font-semibold mb-6">
        Payment Details
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


        <div>
          <p className="text-sm text-gray-500">
            Total Amount
          </p>

          <p className="font-semibold text-green-600 mt-1">
            ₹25,000
          </p>
        </div>


        <div>
          <p className="text-sm text-gray-500">
            Advance Paid
          </p>

          <p className="font-semibold mt-1">
            ₹10,000
          </p>
        </div>


        <div>
          <p className="text-sm text-gray-500">
            Remaining Amount
          </p>

          <p className="font-semibold mt-1 text-red-600">
            ₹15,000
          </p>
        </div>


        <div>
          <p className="text-sm text-gray-500">
            Payment Status
          </p>

          <span className="inline-block mt-1 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">
            Partially Paid
          </span>
        </div>


        <div>
          <p className="text-sm text-gray-500">
            Payment Method
          </p>

          <p className="font-semibold mt-1">
            Bank Transfer
          </p>
        </div>


        <div>
          <p className="text-sm text-gray-500">
            Due Date
          </p>

          <p className="font-semibold mt-1">
            15 Oct 2026
          </p>
        </div>


      </div>

    </div>
  );
}