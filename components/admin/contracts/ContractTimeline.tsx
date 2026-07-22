export default function ContractTimeline() {
  const timeline = [
    {
      title: "Requirement Posted",
      date: "10 July 2026",
      status: "Completed",
    },
    {
      title: "Farmer Matched",
      date: "12 July 2026",
      status: "Completed",
    },
    {
      title: "Agreement Created",
      date: "15 July 2026",
      status: "Completed",
    },
    {
      title: "Security Deposit Locked",
      date: "16 July 2026",
      status: "Completed",
    },
    {
      title: "Crop Delivery",
      date: "15 October 2026",
      status: "Upcoming",
    },
    {
      title: "Payment Released",
      date: "After Delivery",
      status: "Pending",
    },
  ];

  return (
    <div className="mt-6 bg-white rounded-xl shadow-sm border p-6">

      <h2 className="text-xl font-semibold mb-6">
        Contract Timeline
      </h2>

      <div className="space-y-6">

        {timeline.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4"
          >

            {/* Circle */}
            <div
              className={`w-4 h-4 rounded-full mt-1 ${
                item.status === "Completed"
                  ? "bg-green-600"
                  : "bg-gray-300"
              }`}
            />

            {/* Content */}
            <div>
              <p className="font-semibold">
                {item.title}
              </p>

              <p className="text-sm text-gray-500">
                {item.date}
              </p>

              <p
                className={`text-sm mt-1 ${
                  item.status === "Completed"
                    ? "text-green-600"
                    : "text-gray-500"
                }`}
              >
                {item.status}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}