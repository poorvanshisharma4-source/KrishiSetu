"use client";

import {
User,
Mail,
Phone,
MapPin,
Building2,
Briefcase,
FileText,
} from "lucide-react";
import { useLanguage } from '@/components/LanguageContext'

export default function BuyerCompanyDetails({
buyer,
}: {
buyer?: any;
}) {
const { t } = useLanguage();

const buyerInfo = {
fullName: buyer?.name ?? "Rahul Sharma",
email: buyer?.email ?? "[rahul@gmail.com](mailto:rahul@gmail.com)",
phone: buyer?.phone ?? "+91 9876543210",
location:
buyer?.companyAddress ??
(buyer?.district || buyer?.state
? `${buyer?.district ?? ""}${
            buyer?.district && buyer?.state ? ", " : ""
          }${buyer?.state ?? ""}`
: "Indore, Madhya Pradesh"),
companyName: buyer?.companyName ?? "",
businessType: buyer?.businessType ?? "",
gstNumber: buyer?.gstNumber ?? "",
companyAddress:
buyer?.companyAddress ?? buyer?.address ?? "",
};

return ( <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
{/* Buyer Information */} <div className="rounded-2xl border bg-white p-6 shadow-sm"> <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-gray-900"> <User className="text-amber-600" />
{t("buyerInformation")} </h2>

```
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <User className="text-amber-600" />

        <div>
          <p className="text-sm text-gray-500">
            {t("fullName")}
          </p>

          <h3 className="font-semibold text-gray-900">
            {buyerInfo.fullName}
          </h3>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Mail className="text-amber-600" />

        <div>
          <p className="text-sm text-gray-500">
            {t("email")}
          </p>

          <h3 className="font-semibold text-gray-900">
            {buyerInfo.email}
          </h3>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Phone className="text-amber-600" />

        <div>
          <p className="text-sm text-gray-500">
            {t("phoneNumber")}
          </p>

          <h3 className="font-semibold text-gray-900">
            {buyerInfo.phone}
          </h3>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <MapPin className="text-amber-600" />

        <div>
          <p className="text-sm text-gray-500">
            {t("location")}
          </p>

          <h3 className="font-semibold text-gray-900">
            {buyerInfo.location}
          </h3>
        </div>
      </div>
    </div>
  </div>

  {/* Company Details */}
  <div className="rounded-2xl border bg-white p-6 shadow-sm">
    <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-gray-900">
      <Building2 className="text-amber-600" />

      {t("companyDetails")}

      <span className="ml-2 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-500">
        {t("optional")}
      </span>
    </h2>

    {buyerInfo.companyName ? (
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <Building2 className="text-amber-600" />

          <div>
            <p className="text-sm text-gray-500">
              {t("companyName")}
            </p>

            <h3 className="font-semibold text-gray-900">
              {buyerInfo.companyName}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Briefcase className="text-amber-600" />

          <div>
            <p className="text-sm text-gray-500">
              {t("businessType")}
            </p>

            <h3 className="font-semibold text-gray-900">
              {buyerInfo.businessType || t("notAvailable")}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FileText className="text-amber-600" />

          <div>
            <p className="text-sm text-gray-500">
              {t("gstNumber")}
            </p>

            <h3 className="font-semibold text-gray-900">
              {buyerInfo.gstNumber || t("notAvailable")}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="text-amber-600" />

          <div>
            <p className="text-sm text-gray-500">
              {t("companyAddress")}
            </p>

            <h3 className="font-semibold text-gray-900">
              {buyerInfo.companyAddress || t("notAvailable")}
            </h3>
          </div>
        </div>
      </div>
    ) : (
      <div className="flex h-full flex-col items-center justify-center py-10">
        <Building2
          size={60}
          className="text-gray-300"
        />

        <h3 className="mt-4 font-semibold text-gray-700">
          {t("noCompanyAdded")}
        </h3>

        <p className="mt-2 text-center text-sm text-gray-500">
          {t("individualBuyerMessage")}
        </p>
      </div>
    )}
  </div>
</div>
);
}
