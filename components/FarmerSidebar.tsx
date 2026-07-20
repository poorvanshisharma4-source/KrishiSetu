import Link from 'next/link';
import {
  FileText,
  MessageSquare,
  Sprout,
  BarChart3,
  LogOut,
  LayoutDashboard,
  ShoppingBag,
  Settings,
} from 'lucide-react';

export function FarmerSidebar() {
  return (
    <div className="lg:w-64 flex-shrink-0">
      <div className="bg-white rounded-2xl shadow-sm p-4 sticky top-24 border border-gray-100">
        <nav className="space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all text-gray-600 hover:bg-[#F5F0E6] hover:text-[#2E7D32]"
            >
              <item.icon className="w-5 h-5" />
              <span className="font-semibold text-sm">{item.label}</span>
            </Link>
          ))}

          <div className="border-t border-gray-100 mt-4 pt-4">
            <button
              type="button"
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all text-left font-semibold text-sm outline-none"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

// 🟢 FIXED: अब इस लिस्ट के अंदर 'Incoming Requests' हमेशा के लिए जुड़ चुका है
const sidebarItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', path: '/farmer/dashboard' },
  { id: 'my-crops', icon: Sprout, label: 'My Crops', path: '/farmer/my-crops' },
  { id: 'contracts', icon: FileText, label: 'My Contracts', path: '/farmer/contracts' },
  { id: 'requirements', icon: ShoppingBag, label: 'Buyer Requirements', path: '/farmer/requirements' },
  { id: 'requests', icon: FileText, label: 'Incoming Requests', path: '/farmer/requests' }, // 👈 ये रहा आपका चमचमाता हुआ बटन!
  { id: 'analytics', icon: BarChart3, label: 'AI Analytics', path: '/farmer/ai' },
  { id: 'messages', icon: MessageSquare, label: 'Messages', path: '/farmer/messages' },
  { id: 'profile', icon: Settings, label: 'Profile', path: '/farmer/profile' },
];
