'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Calendar, MapPin, Tag, Loader2, PackageCheck } from 'lucide-react';
import api from '@/lib/api';

interface Requirement {
  _id?: string;
  id?: string;
  cropName: string;
  quantity: number;
  unit: string;
  expectedPrice: number;
  requiredBy: string;
  location: string;
  description?: string;
  createdAt?: string;
}

export default function MyRequirementsPage() {
  const router = useRouter();
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchRequirements = async () => {
      try {
        setLoading(true);
        setErrorMessage(null);

        const response = await api.get('/requirements');
        const rawData = response?.data ?? response;
        const data = rawData?.data || rawData?.requirements || rawData || [];

        if (isMounted) {
          setRequirements(Array.isArray(data) ? data : []);
        }
      } catch (err: any) {
        const message =
          err instanceof Error
            ? err.message
            : 'Unable to load your requirements. Please try again.';
        console.warn('Could not fetch requirements:', message);
        if (isMounted) {
          setRequirements([]);
          setErrorMessage(message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchRequirements();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium transition-colors cursor-pointer"
      >
        <ArrowLeft size={20} />
        Back to Dashboard
      </button>

      {/* Header Section */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">My Posted Requirements</h1>
        <p className="text-sm text-gray-500 mt-1">
          View all your active crop requirements and procurement demands.
        </p>
      </div>

      {/* Content Area */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-100 space-y-3">
          <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
          <p className="text-sm font-medium text-gray-500">Loading your requirements...</p>
        </div>
      ) : errorMessage ? (
        <div className="bg-white rounded-2xl border border-red-100 p-12 text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto text-red-600">
            <PackageCheck size={32} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Unable to Load Requirements</h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto mt-1">
              {errorMessage}
            </p>
          </div>
        </div>
      ) : requirements.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-600">
            <PackageCheck size={32} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">No Requirements Posted Yet</h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto mt-1">
              There are currently no requirements found for your account.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requirements.map((item) => (
            <div
              key={item._id || item.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold text-gray-900 capitalize">{item.cropName}</h3>
                  <span className="bg-amber-50 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full border border-amber-200">
                    Active
                  </span>
                </div>

                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <Tag size={15} className="text-amber-600" />
                    <span>
                      Quantity: <strong className="text-gray-900">{item.quantity} {item.unit}</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-amber-600 font-bold text-sm">₹</span>
                    <span>
                      Target Price: <strong className="text-gray-900">₹{item.expectedPrice} / {item.unit}</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={15} className="text-amber-600" />
                    <span className="truncate">{item.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar size={15} className="text-amber-600" />
                    <span>Deadline: {item.requiredBy ? new Date(item.requiredBy).toLocaleDateString() : 'N/A'}</span>
                  </div>
                </div>

                {item.description && (
                  <p className="text-xs text-gray-500 bg-gray-50 p-3 rounded-xl line-clamp-2">
                    "{item.description}"
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}