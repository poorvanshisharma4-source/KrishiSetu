"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { requirements } from "@/data/requirements";

import RequirementHero from "@/components/admin/requirements/RequirementHero";
import RequirementInformation from "@/components/admin/requirements/RequirementInformation";
import BuyerDetails from "@/components/admin/requirements/BuyerDetails";
import RequirementTimeline from "@/components/admin/requirements/RequirementTimeline";
import AdminActions from "@/components/admin/requirements/AdminActions";

export default function RequirementDetailPage() {
  const params = useParams();

  const requirement = requirements.find(
    (item) => item.id === params.id
  );

  if (!requirement) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Requirement Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="p-6">

      {/* Back Button */}
      <Link
        href="/admin/requirements"
        className="inline-flex items-center gap-2 text-[#2E7D32] hover:text-green-700 font-medium mb-4"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </Link>

      {/* Requirement Header */}
      <RequirementHero
        requirement={requirement}
      />

      {/* Requirement Information */}
      <RequirementInformation
        requirement={requirement}
      />

      {/* Buyer Details */}
      <BuyerDetails
        requirement={requirement}
      />

      {/* Requirement Timeline */}
      <RequirementTimeline
        requirement={requirement}
      />

      {/* Admin Actions */}
      <AdminActions />

    </div>
  );
}