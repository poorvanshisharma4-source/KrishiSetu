export default function BuyerDetails() {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">

      <h2 className="text-xl font-semibold mb-4">
        Buyer Details
      </h2>

      <div className="space-y-4">

        <div>
          <p className="text-sm text-gray-500">
            Buyer Name
          </p>
          <p className="font-medium">
            Rahul Verma
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Company
          </p>
          <p className="font-medium">
            FreshMart Pvt Ltd
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Location
          </p>
          <p className="font-medium">
            Indore, Madhya Pradesh
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Contact
          </p>
          <p className="font-medium">
            +91 9123456780
          </p>
        </div>

      </div>

    </div>
  );
}