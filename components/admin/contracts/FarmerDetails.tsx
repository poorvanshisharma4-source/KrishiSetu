export default function FarmerDetails() {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">

      <h2 className="text-xl font-semibold mb-4">
        Farmer Details
      </h2>

      <div className="space-y-4">

        <div>
          <p className="text-sm text-gray-500">
            Name
          </p>
          <p className="font-medium">
            Rahul Sharma
          </p>
        </div>


        <div>
          <p className="text-sm text-gray-500">
            Village
          </p>
          <p className="font-medium">
            Sehore, Madhya Pradesh
          </p>
        </div>


        <div>
          <p className="text-sm text-gray-500">
            Phone
          </p>
          <p className="font-medium">
            +91 9876543210
          </p>
        </div>

      </div>

    </div>
  );
}