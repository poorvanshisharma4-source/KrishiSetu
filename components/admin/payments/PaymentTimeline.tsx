interface PaymentTimelineProps {
  payment: {
    status: string;
  };
}


export default function PaymentTimeline({
  payment,
}: PaymentTimelineProps) {


  const timeline = [
    {
      title: "Payment Initiated",
      status: "Completed",
    },
    {
      title: "Security Deposit Locked",
      status: "Completed",
    },
    {
      title: "Payment Verification",
      status:
        payment.status === "Completed"
          ? "Completed"
          : "Pending",
    },
    {
      title: "Amount Released",
      status:
        payment.status === "Completed"
          ? "Completed"
          : "Waiting",
    },
  ];


  return (
    <div className="mt-6 bg-white rounded-xl shadow-sm border p-6">


      <h2 className="text-xl font-semibold mb-6">
        Payment Timeline
      </h2>



      <div className="space-y-6">


        {timeline.map((item, index) => (

          <div
            key={index}
            className="flex items-start gap-4"
          >


            <div
              className={`w-4 h-4 rounded-full mt-1 ${
                item.status === "Completed"
                  ? "bg-green-600"
                  : "bg-gray-300"
              }`}
            />


            <div>

              <p className="font-medium">
                {item.title}
              </p>

              <p className="text-sm text-gray-500">
                {item.status}
              </p>

            </div>


          </div>

        ))}


      </div>


    </div>
  );
}