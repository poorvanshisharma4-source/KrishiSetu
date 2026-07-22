interface PaymentHeroProps {
  payment: {
    id: string;
    amount: string;
    contractId: string;
    status: string;
  };
}


export default function PaymentHero({
  payment,
}: PaymentHeroProps) {

  return (
    <div className="bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] rounded-xl p-6 text-white">


      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">


        <div>

          <p className="text-green-100">
            Payment ID
          </p>

          <h1 className="text-3xl font-bold">
            {payment.id}
          </h1>


          <p className="mt-2 text-green-100">
            Contract: {payment.contractId}
          </p>

        </div>



        <div className="text-left md:text-right">


          <p className="text-green-100">
            Amount
          </p>


          <h2 className="text-3xl font-bold">
            {payment.amount}
          </h2>



          <span
            className={`inline-block mt-3 px-4 py-1 rounded-full text-sm font-medium ${
              payment.status === "Completed"
                ? "bg-white text-green-700"
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