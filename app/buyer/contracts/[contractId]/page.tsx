'use client';

import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  User,
  Sprout,
  Building2,
  Truck,
  FileText,
} from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';
import api from '@/lib/api';
import { useLanguage } from '@/components/LanguageContext';

interface ContractDetail {
  _id: string;
  status?: string;

  farmer?: {
    name?: string;
    phone?: string;
  };

  buyer?: {
    name?: string;
    phone?: string;
  };

  requirement?: {
    cropName?: string;
    unit?: string;
    location?: string;
    quantity?: number;
    expectedPrice?: number;
  };

  agreedPrice?: number;
  quantity?: number;
  location?: string;
}

export default function ContractDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { t } = useLanguage();

  const contractId = params?.contractId as string;

  const [contract, setContract] = useState<ContractDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [transportBy, setTransportBy] = useState('');

  useEffect(() => {
    const fetchContract = async () => {
      if (!contractId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        const response = await api.get(`/contracts/${contractId}`);
        const data = response?.data?.data ?? response?.data ?? response;

        setContract(data);
        setError(null);
      } catch (err: any) {
        console.error('Contract fetch error:', err);

        setError(
          err?.response?.data?.message ||
            err?.message ||
            t('contractDetails.loadError')
        );
      } finally {
        setLoading(false);
      }
    };

    fetchContract();
  }, [contractId, t]);

  if (loading) {
    return (
      <div className="p-10 text-center">
        {t('contractDetails.loading')}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-center text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  if (!contract) {
    return (
      <div className="p-10 text-center">
        {t('contractDetails.notFound')}
      </div>
    );
  }

  const farmerName =
    contract.farmer?.name || t('contractDetails.farmer');

  const buyerName =
    contract.buyer?.name || t('contractDetails.buyer');

  const farmerLocation =
    contract.requirement?.location ||
    contract.location ||
    t('contractDetails.unknownLocation');

  const cropName =
    contract.requirement?.cropName ||
    t('contractDetails.unknownCrop');

  const quantity =
    contract.quantity ??
    contract.requirement?.quantity ??
    0;

  const quantityLabel =
    quantity > 0
      ? `${quantity} ${contract.requirement?.unit || 'kg'}`
      : t('contractDetails.unknown');

  const price =
    contract.agreedPrice ??
    contract.requirement?.expectedPrice ??
    0;

  const priceLabel =
    price > 0
      ? `₹${price}/kg`
      : 'N/A';

  const totalValue =
    price > 0 && quantity > 0
      ? `₹${(price * quantity).toLocaleString('en-IN')}`
      : 'N/A';

  const contractStatus =
    contract.status || 'active';

  const displayStatus =
    contractStatus.toLowerCase() === 'active'
      ? t('contractDetails.active')
      : contractStatus;

  return (
    <div className="min-h-screen bg-[#F5F0E6] p-6">
      <div className="mx-auto max-w-5xl">

        {/* Back Button */}
        <button
          onClick={() => router.push('/buyer/contracts')}
          className="mb-6 flex items-center gap-2 text-gray-700 hover:text-green-700"
        >
          <ArrowLeft size={18} />
          {t('contractDetails.backToContracts')}
        </button>

        {/* Header Card */}
        <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">

            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {t('contractDetails.title')}
              </h1>

              <p className="mt-2 text-gray-500">
                {t('contractDetails.contractId')}: {contractId}
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700">
              <ShieldCheck size={18} />
              {displayStatus}
            </div>

          </div>
        </div>

        {/* Buyer and Farmer Details */}
        <div className="mb-6 grid gap-6 md:grid-cols-2">

          {/* Buyer Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <div className="mb-4 flex items-center gap-2">
              <Building2 className="text-green-700" />

              <h2 className="text-xl font-bold">
                {t('contractDetails.buyerDetails')}
              </h2>
            </div>

            <p className="text-gray-600">
              {t('contractDetails.buyerName')}
            </p>

            <p className="text-lg font-semibold">
              {buyerName}
            </p>

            <p className="mt-2 text-gray-600">
              {t('contractDetails.phone')}:{' '}
              {contract.buyer?.phone || 'N/A'}
            </p>

          </div>

          {/* Farmer Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <div className="mb-4 flex items-center gap-2">
              <User className="text-green-700" />

              <h2 className="text-xl font-bold">
                {t('contractDetails.farmerDetails')}
              </h2>
            </div>

            <p className="text-gray-600">
              {t('contractDetails.farmerName')}
            </p>

            <p className="text-lg font-semibold">
              {farmerName}
            </p>

            <p className="mt-2 text-gray-600">
              {t('contractDetails.location')}:{' '}
              {farmerLocation}
            </p>

          </div>

        </div>

        {/* Crop Details */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <div className="mb-4 flex items-center gap-2">
            <Sprout className="text-green-700" />

            <h2 className="text-xl font-bold">
              {t('contractDetails.cropDetails')}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">

            <div>
              <p className="text-sm text-gray-500">
                {t('contractDetails.cropType')}
              </p>

              <p className="font-semibold">
                {cropName}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                {t('contractDetails.quantity')}
              </p>

              <p className="font-semibold">
                {quantityLabel}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                {t('contractDetails.price')}
              </p>

              <p className="font-semibold text-green-700">
                {priceLabel}
              </p>
            </div>

          </div>

        </div>

        {/* Transportation Details */}
        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">

          <div className="mb-5 flex items-center gap-2">
            <Truck className="text-green-700" />

            <h2 className="text-xl font-bold">
              {t('contractDetails.transportationDetails')}
            </h2>
          </div>

          <p className="mb-4 text-gray-600">
            {t('contractDetails.transportQuestion')}
          </p>

          <div className="flex gap-4">

            <button
              onClick={() => setTransportBy('Farmer')}
              className={`rounded-xl border px-5 py-3 font-semibold ${
                transportBy === 'Farmer'
                  ? 'border-green-600 bg-green-100 text-green-700'
                  : 'border-gray-300 text-gray-700'
              }`}
            >
              🚜 {t('contractDetails.farmer')}
            </button>

            <button
              onClick={() => setTransportBy('Buyer')}
              className={`rounded-xl border px-5 py-3 font-semibold ${
                transportBy === 'Buyer'
                  ? 'border-green-600 bg-green-100 text-green-700'
                  : 'border-gray-300 text-gray-700'
              }`}
            >
              🏢 {t('contractDetails.buyer')}
            </button>

          </div>

          {transportBy && (
            <>
              {/* Transport Responsibility */}
              <div className="mt-5 rounded-xl bg-gray-50 p-4">

                <p className="text-sm text-gray-500">
                  {t('contractDetails.transportResponsibility')}
                </p>

                <p className="font-bold text-green-700">
                  {transportBy === 'Farmer'
                    ? t('contractDetails.farmerWillArrange')
                    : t('contractDetails.buyerWillArrange')}
                </p>

              </div>

              {/* Transport Information */}
              <div className="mt-4 grid gap-4 md:grid-cols-3">

                <div className="rounded-xl bg-gray-50 p-4">

                  <p className="text-sm text-gray-500">
                    {t('contractDetails.pickupLocation')}
                  </p>

                  <p className="font-semibold text-gray-900">
                    {farmerLocation}
                  </p>

                </div>

                <div className="rounded-xl bg-gray-50 p-4">

                  <p className="text-sm text-gray-500">
                    {t('contractDetails.deliveryLocation')}
                  </p>

                  <p className="font-semibold text-gray-900">
                    {t('contractDetails.buyerLocation')}
                  </p>

                </div>

                <div className="rounded-xl bg-gray-50 p-4">

                  <p className="text-sm text-gray-500">
                    {t('contractDetails.deliveryStatus')}
                  </p>

                  <p className="font-semibold text-amber-600">
                    {t('contractDetails.pending')}
                  </p>

                </div>

              </div>
            </>
          )}

        </div>

        {/* Payment Details */}
        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">

          <div className="mb-5 flex items-center gap-2">
            <ShieldCheck className="text-green-700" />

            <h2 className="text-xl font-bold">
              {t('contractDetails.paymentDetails')}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">

            <div className="rounded-xl bg-gray-50 p-4">

              <p className="text-sm text-gray-500">
                {t('contractDetails.contractValue')}
              </p>

              <p className="text-lg font-bold text-green-700">
                {totalValue}
              </p>

            </div>

            <div className="rounded-xl bg-gray-50 p-4">

              <p className="text-sm text-gray-500">
                {t('contractDetails.paymentStatus')}
              </p>

              <p className="font-semibold text-amber-600">
                {t('contractDetails.secured')}
              </p>

            </div>

            <div className="rounded-xl bg-gray-50 p-4">

              <p className="text-sm text-gray-500">
                {t('contractDetails.settlement')}
              </p>

              <p className="font-semibold text-gray-900">
                {t('contractDetails.afterDelivery')}
              </p>

            </div>

          </div>

        </div>

        {/* Contract Timeline */}
        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">

          <div className="mb-5 flex items-center gap-2">
            <FileText className="text-green-700" />

            <h2 className="text-xl font-bold">
              {t('contractDetails.contractTimeline')}
            </h2>
          </div>

          <div className="space-y-4">

            <div className="flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-green-600" />

              <p className="font-semibold">
                {t('contractDetails.contractCreated')}
              </p>

            </div>

            <div className="flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-green-600" />

              <p className="font-semibold">
                {t('contractDetails.farmerAccepted')}
              </p>

            </div>

            <div className="flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-green-600" />

              <p className="font-semibold">
                {t('contractDetails.cropGrowing')}
              </p>

            </div>

            <div className="flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-amber-500" />

              <p className="font-semibold">
                {t('contractDetails.transportationArranged')}
              </p>

            </div>

            <div className="flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-gray-300" />

              <p className="font-semibold text-gray-500">
                {t('contractDetails.cropDelivered')}
              </p>

            </div>

            <div className="flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-gray-300" />

              <p className="font-semibold text-gray-500">
                {t('contractDetails.finalPayment')}
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}