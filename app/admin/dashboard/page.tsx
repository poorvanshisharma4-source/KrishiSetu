"use client";

import DashboardHeader from "@/components/admin/DashboardHeader";
import StatsGrid from "@/components/admin/StatsGrid";
import QuickActions from "@/components/admin/QuickActions";
import RecentActivity from "@/components/admin/RecentActivity";
import PendingApprovals from "@/components/admin/PendingApprovals";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex bg-[#F5F0E6]">
  

  <div className="flex-1 p-6">
    <div className="max-w-7xl mx-auto">

      <DashboardHeader />
      <StatsGrid />
      <QuickActions />
      <RecentActivity />
      <PendingApprovals />

    </div>
  </div>
</div>
  );
}