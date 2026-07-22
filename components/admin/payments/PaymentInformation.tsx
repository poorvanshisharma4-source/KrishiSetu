interface PaymentInformationProps {
  payment: {
    id: string;
    contractId: string;
    farmer: string;
    buyer: string;
    amount: string;
    status: string;
  };
}


export default function PaymentInformation({
  payment,
}: PaymentInformationProps) {


  return (
    <div className="mt-6 bg-white rounded-xl shadow-sm border p-6">


      <h2 className="text-xl font-semibold mb-6">
        Payment Information
      </h2>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


        <div>
          <p className="text-gray-500">
            Payment ID
          </p>

          <p className="font-medium">
            {payment.id}
          </p>
        </div>



        <div>
          <p className="text-gray-500">
            Contract ID
          </p>

          <p className="font-medium">
            {payment.contractId}
          </p>
        </div>



        <div>
          <p className="text-gray-500">
            Farmer
          </p>

          <p className="font-medium">
            {payment.farmer}
          </p>
        </div>



        <div>
          <p className="text-gray-500">
            Buyer
          </p>

          <p className="font-medium">
            {payment.buyer}
          </p>
        </div>



        <div>
          <p className="text-gray-500">
            Amount
          </p>

          <p className="font-medium">
            {payment.amount}
          </p>
        </div>



        <div>
          <p className="text-gray-500">
            Payment Method
          </p>

          <p className="font-medium">
            Bank Transfer
          </p>
        </div>



        <div>
          <p className="text-gray-500">
            Transaction Date
          </p>

          <p className="font-medium">
            21 July 2026
          </p>
        </div>



        <div>
          <p className="text-gray-500">
            Status
          </p>


          <span
            className={`inline-block mt-1 px-3 py-1 rounded-full text-sm font-medium ${
              payment.status === "Completed"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {payment.status}
          </span>

        </div>


      </div>


    </div>
  );
}