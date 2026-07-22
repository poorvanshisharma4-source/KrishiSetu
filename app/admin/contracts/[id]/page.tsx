"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import ContractHero from "@/components/admin/contracts/ContractHero";
import ContractInformation from "@/components/admin/contracts/ContractInformation";
import FarmerDetails from "@/components/admin/contracts/FarmerDetails";
import BuyerDetails from "@/components/admin/contracts/BuyerDetails";
import PaymentDetails from "@/components/admin/contracts/PaymentDetails";
import ContractTimeline from "@/components/admin/contracts/ContractTimeline";
import AdminActions from "@/components/admin/contracts/AdminActions";

import { contracts } from "@/data/contracts";

export default function ContractDetailPage() {
  const params = useParams();

  const contract = contracts.find(
    (item) => item.id === String(params.id)
  );

  if (!contract) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Contract Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="p-6">

      {/* Back Button */}
      <Link
        href="/admin/contracts"
        className="inline-flex items-center gap-2 text-[#2E7D32] hover:text-green-700 font-medium mb-4"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </Link>

      {/* Contract Header */}
      <ContractHero contractId={String(params.id)} />

      {/* Contract Information */}
      <ContractInformation contract={contract} />

      {/* Farmer & Buyer Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <FarmerDetails />
        <BuyerDetails />
      </div>

      {/* Payment Details */}
      <PaymentDetails />

      {/* Timeline */}
      <ContractTimeline />

      {/* Admin Actions */}
      <AdminActions />

    </div>
  );
}