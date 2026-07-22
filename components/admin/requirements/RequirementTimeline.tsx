interface RequirementTimelineProps {
  requirement: {
    createdAt: string;
    status: string;
  };
}


export default function RequirementTimeline({
  requirement,
}: RequirementTimelineProps) {


  const timeline = [
    {
      title: "Requirement Created",
      date: requirement.createdAt,
      completed: true,
    },
    {
      title: "Buyer Requirement Submitted",
      date: "Completed",
      completed: true,
    },
    {
      title: "Farmers Matched",
      date:
        requirement.status === "Active"
          ? "Completed"
          : "Pending",
      completed: requirement.status === "Active",
    },
    {
      title: "Contract Created",
      date:
        requirement.status === "Active"
          ? "Pending"
          : "Waiting",
      completed: false,
    },
  ];


  return (
    <div className="mt-6 bg-white rounded-xl shadow-sm border p-6">


      <h2 className="text-xl font-semibold mb-6">
        Requirement Timeline
      </h2>



      <div className="space-y-6">


        {timeline.map((item, index) => (

          <div
            key={index}
            className="flex items-start gap-4"
          >


            <div
              className={`w-4 h-4 rounded-full mt-1 ${
                item.completed
                  ? "bg-green-600"
                  : "bg-gray-300"
              }`}
            />


            <div>

              <p className="font-medium">
                {item.title}
              </p>


              <p className="text-sm text-gray-500">
                {item.date}
              </p>

            </div>


          </div>

        ))}


      </div>


    </div>
  );
}