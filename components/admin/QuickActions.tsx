import {
  UserCheck,
  ShoppingBag,
  FileText,
  Bell,
  BarChart3,
  AlertTriangle,
} from "lucide-react";

const actions = [
  {
    title: "Verify Farmers",
    description: "Approve pending farmer accounts",
    icon: UserCheck,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Manage Buyers",
    description: "View & manage buyers",
    icon: ShoppingBag,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Contracts",
    description: "Review active contracts",
    icon: FileText,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Analytics",
    description: "Platform insights",
    icon: BarChart3,
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Notifications",
    description: "Send announcements",
    icon: Bell,
    color: "bg-orange-100 text-orange-700",
  },
  {
    title: "Complaints",
    description: "Resolve disputes",
    icon: AlertTriangle,
    color: "bg-red-100 text-red-700",
  },
];

export default function QuickActions() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-[#2E7D32] mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {actions.map((action, index) => {
          const Icon = action.icon;

          return (
            <button
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${action.color}`}
              >
                <Icon className="w-7 h-7" />
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                {action.title}
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                {action.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}