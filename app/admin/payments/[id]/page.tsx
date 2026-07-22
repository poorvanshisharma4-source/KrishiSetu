"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { payments } from "@/data/payments";

import PaymentHero from "@/components/admin/payments/PaymentHero";
import PaymentInformation from "@/components/admin/payments/PaymentInformation";
import PaymentTimeline from "@/components/admin/payments/PaymentTimeline";
import AdminActions from "@/components/admin/payments/AdminActions";

export default function PaymentDetailPage() {
  const params = useParams();

  const payment = payments.find(
    (item) => item.id === params.id
  );

  if (!payment) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">
          Payment Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="p-6">

      {/* Back Button */}
      <Link
        href="/admin/payments"
        className="inline-flex items-center gap-2 text-[#2E7D32] hover:text-green-700 font-medium mb-4"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </Link>

      <PaymentHero payment={payment} />

      <PaymentInformation payment={payment} />

      <PaymentTimeline payment={payment} />

      <AdminActions />

    </div>
  );
}