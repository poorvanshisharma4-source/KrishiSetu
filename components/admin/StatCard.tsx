import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
  iconColor: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
  iconColor,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>

          <h2 className="text-3xl font-bold mt-2 text-gray-800">
            {value}
          </h2>
        </div>

        <div className={`${color} p-4 rounded-2xl`}>
          <Icon className={`w-7 h-7 ${iconColor}`} />
        </div>
      </div>
    </div>
  );
}