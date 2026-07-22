interface BuyerDetailsProps {
  requirement: {
    buyer: string;
    buyerId: string;
    location: string;
  };
}


export default function BuyerDetails({
  requirement,
}: BuyerDetailsProps) {

  return (
    <div className="mt-6 bg-white rounded-xl shadow-sm border p-6">


      <h2 className="text-xl font-semibold mb-6">
        Buyer Details
      </h2>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


        <div>
          <p className="text-gray-500">
            Buyer Name
          </p>

          <p className="font-medium">
            {requirement.buyer}
          </p>
        </div>



        <div>
          <p className="text-gray-500">
            Buyer ID
          </p>

          <p className="font-medium">
            {requirement.buyerId}
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
            Buyer Type
          </p>

          <p className="font-medium">
            Wholesale Buyer
          </p>
        </div>



        <div>
          <p className="text-gray-500">
            Verification Status
          </p>

          <span className="inline-block mt-1 px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
            Verified
          </span>
        </div>


      </div>


    </div>
  );
}