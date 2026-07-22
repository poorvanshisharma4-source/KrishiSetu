export default function ContractInformation({ contract }: any) {
  return (
    <div className="mt-6 bg-white rounded-xl shadow-sm border p-6">
      <h2 className="text-xl font-semibold mb-6">
        Contract Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div>
          <p className="text-sm text-gray-500">
            Farmer
          </p>
          <p className="font-semibold mt-1">
            {contract.farmer}
          </p>
        </div>


        <div>
          <p className="text-sm text-gray-500">
            Buyer
          </p>
          <p className="font-semibold mt-1">
            {contract.buyer}
          </p>
        </div>


        <div>
          <p className="text-sm text-gray-500">
            Crop
          </p>
          <p className="font-semibold mt-1">
            {contract.crop}
          </p>
        </div>


        <div>
          <p className="text-sm text-gray-500">
            Quantity
          </p>
          <p className="font-semibold mt-1">
            {contract.quantity}
          </p>
        </div>


        <div>
          <p className="text-sm text-gray-500">
            Contract Amount
          </p>
          <p className="font-semibold mt-1 text-green-600">
            ₹{contract.amount}
          </p>
        </div>


        <div>
          <p className="text-sm text-gray-500">
            Duration
          </p>
          <p className="font-semibold mt-1">
            {contract.duration}
          </p>
        </div>

      </div>
    </div>
  );
}