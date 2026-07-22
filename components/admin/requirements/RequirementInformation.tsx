interface RequirementInformationProps {
  requirement: {
    id: string;
    crop: string;
    quantity: string;
    location: string;
    status: string;
    expectedDelivery: string;
    createdAt: string;
  };
}


export default function RequirementInformation({
  requirement,
}: RequirementInformationProps) {

  return (
    <div className="mt-6 bg-white rounded-xl shadow-sm border p-6">


      <h2 className="text-xl font-semibold mb-6">
        Requirement Information
      </h2>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


        <div>
          <p className="text-gray-500">
            Requirement ID
          </p>

          <p className="font-medium">
            {requirement.id}
          </p>
        </div>



        <div>
          <p className="text-gray-500">
            Crop
          </p>

          <p className="font-medium">
            {requirement.crop}
          </p>
        </div>



        <div>
          <p className="text-gray-500">
            Quantity
          </p>

          <p className="font-medium">
            {requirement.quantity}
          </p>
        </div>



        <div>
          <p className="text-gray-500">
            Location
          </p>

          <p className="font-medium">
            {requirement.location}
          </p>
        </div>



        <div>
          <p className="text-gray-500">
            Crop Category
          </p>

          <p className="font-medium">
            Food Crop
          </p>
        </div>



        <div>
          <p className="text-gray-500">
            Expected Delivery
          </p>

          <p className="font-medium">
            {requirement.expectedDelivery}
          </p>
        </div>



        <div>
          <p className="text-gray-500">
            Created Date
          </p>

          <p className="font-medium">
            {requirement.createdAt}
          </p>
        </div>



        <div>
          <p className="text-gray-500">
            Status
          </p>


          <span
            className={`inline-block mt-1 px-3 py-1 rounded-full text-sm font-medium ${
              requirement.status === "Active"
                ? "bg-green-100 text-green-700"
                : requirement.status === "Pending"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {requirement.status}
          </span>

        </div>


      </div>


    </div>
  );
}