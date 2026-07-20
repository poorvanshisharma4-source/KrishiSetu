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

export default function BuyerCompanyDetails() {
  const buyer = {
    fullName: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    location: "Indore, Madhya Pradesh",

    // Optional Company Details
    companyName: "",
    businessType: "",
    gstNumber: "",
    companyAddress: "",
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* Buyer Information */}
      <div className="bg-white rounded-2xl border shadow-sm p-6">

        <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
          <User className="text-amber-600" />
          Buyer Information
        </h2>

        <div className="space-y-5">

          <div className="flex items-center gap-3">
            <User className="text-amber-600" />
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <h3 className="font-semibold">{buyer.fullName}</h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-amber-600" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <h3 className="font-semibold">{buyer.email}</h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-amber-600" />
            <div>
              <p className="text-sm text-gray-500">Phone Number</p>
              <h3 className="font-semibold">{buyer.phone}</h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-amber-600" />
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <h3 className="font-semibold">{buyer.location}</h3>
            </div>
          </div>

        </div>

      </div>

      {/* Company Details */}
      <div className="bg-white rounded-2xl border shadow-sm p-6">

        <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
          <Building2 className="text-amber-600" />
          Company Details

          <span className="ml-2 text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-500">
            Optional
          </span>

        </h2>

        {buyer.companyName ? (

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <Building2 className="text-amber-600" />
              <div>
                <p className="text-sm text-gray-500">Company Name</p>
                <h3 className="font-semibold">{buyer.companyName}</h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Briefcase className="text-amber-600" />
              <div>
                <p className="text-sm text-gray-500">Business Type</p>
                <h3 className="font-semibold">{buyer.businessType}</h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FileText className="text-amber-600" />
              <div>
                <p className="text-sm text-gray-500">GST Number</p>
                <h3 className="font-semibold">{buyer.gstNumber}</h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-amber-600" />
              <div>
                <p className="text-sm text-gray-500">Company Address</p>
                <h3 className="font-semibold">{buyer.companyAddress}</h3>
              </div>
            </div>

          </div>

        ) : (

          <div className="flex flex-col items-center justify-center h-full py-10">

            <Building2
              size={60}
              className="text-gray-300"
            />

            <h3 className="mt-4 font-semibold text-gray-700">
              No Company Added
            </h3>

            <p className="text-gray-500 text-sm mt-2 text-center">
              This buyer is registered as an individual buyer.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}