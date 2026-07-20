import {
  ShoppingBag,
  Users,
  FileCheck,
  Star,
} from "lucide-react";

export default function BuyerStats() {
  const stats = [
    {
      title: "Completed Orders",
      value: "126",
      icon: FileCheck,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Connected Farmers",
      value: "34",
      icon: Users,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Active Requirements",
      value: "8",
      icon: ShoppingBag,
      color: "bg-amber-100 text-amber-700",
    },
    {
      title: "Average Rating",
      value: "4.9",
      icon: Star,
      color: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm border p-5 hover:shadow-md transition"
        >
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                {stat.title}
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {stat.value}
              </h2>
            </div>

            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center ${stat.color}`}
            >
              <stat.icon size={26} />
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}