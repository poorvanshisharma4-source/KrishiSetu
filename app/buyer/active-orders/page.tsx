
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import { useLanguage } from '@/components/LanguageContext';
import {
  Truck,
  Package,
  CheckCircle2,
  MapPin,
  ArrowLeft,
  Clock,
} from 'lucide-react';

interface OrderStep {
  id: number;
  label: string;
  completed: boolean;
  active: boolean;
}

interface TrackingOrder {
  id: string;
  orderId: string;
  cropName: string;
  farmer: string;
  location: string;
  eta: string;
  vehicleNumber: string;
  steps: OrderStep[];
}

interface SummaryStatProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  bgColor: string;
}

const SummaryStat: React.FC<SummaryStatProps> = ({
  icon,
  label,
  value,
  bgColor,
}) => (
  <div className={`${bgColor} border border-gray-200/60 rounded-xl p-6 flex items-start gap-4 shadow-sm`}>
    <div className="text-emerald-600">{icon}</div>
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="text-3xl font-black text-gray-900 mt-1">{value}</p>
    </div>
  </div>
);

const StepperProgressTimeline: React.FC<{ steps: OrderStep[] }> = ({
  steps,
}) => (
  <div className="flex items-center justify-between gap-2 my-6">
    {steps.map((step, index) => (
      <React.Fragment key={step.id}>
        <div className="flex flex-col items-center flex-1">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
              step.completed
                ? 'bg-emerald-50 text-emerald-700 border-2 border-emerald-500'
                : step.active
                  ? 'bg-blue-50 text-blue-700 border-2 border-blue-500 animate-pulse'
                  : 'bg-gray-50 text-gray-400 border-2 border-gray-200'
            }`}
          >
            {step.completed ? (
              <CheckCircle2 size={18} />
            ) : (
              <span>{index + 1}</span>
            )}
          </div>

          <p
            className={`text-[11px] text-center mt-2 font-bold ${
              step.completed
                ? 'text-emerald-700'
                : step.active
                  ? 'text-blue-700'
                  : 'text-gray-400'
            }`}
          >
            {step.label}
          </p>
        </div>

        {index < steps.length - 1 && (
          <div
            className={`h-1 flex-1 -mx-2 transition-all duration-300 ${
              step.completed ? 'bg-emerald-400' : 'bg-gray-200'
            }`}
          />
        )}
      </React.Fragment>
    ))}
  </div>
);

const TrackingCard: React.FC<{
  order: TrackingOrder;
  t: (key: string) => string;
}> = ({ order, t }) => (
  <div className="bg-white rounded-2xl border border-gray-200/60 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-base font-black text-gray-900">{order.orderId}</h3>
        <p className="text-sm text-emerald-800 font-extrabold mt-0.5">
          {order.cropName}
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
        <span className="text-xs font-bold text-emerald-700">
  Contract Active
</span>
      </div>
    </div>

    <div className="h-px bg-gray-100 mb-4" />

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <div className="flex items-start gap-2.5">
        <Package size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            {t('buyerOrders.supplier')}
          </p>
          <p className="text-sm font-bold text-gray-900">{order.farmer}</p>
        </div>
      </div>

      <div className="flex items-start gap-2.5">
        <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            {t('buyerOrders.pickupLocation')}
          </p>
          <p className="text-sm font-bold text-gray-900">{order.location}</p>
        </div>
      </div>
    </div>

    <StepperProgressTimeline steps={order.steps} />

    <div className="h-px bg-gray-100 my-4" />

    <div className="grid grid-cols-2 gap-4 bg-gray-50/50 p-3 rounded-xl border border-gray-100">
      <div className="flex items-start gap-2.5">
        <Clock size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            {t('buyerOrders.estArrival')}
          </p>
          <p className="text-xs font-extrabold text-gray-900">
            {order.eta}
          </p>
        </div>
      </div>

      <div className="flex items-start gap-2.5">
        <Truck size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            {t('buyerOrders.vehicle')}
          </p>
          <p className="text-xs font-extrabold text-gray-900">
            {order.vehicleNumber}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function ActiveOrdersDashboard() {
  const router = useRouter();
  const { t } = useLanguage();

  const [trackingOrders, setTrackingOrders] = useState<TrackingOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleExitToDashboard = () => {
    router.push('/buyer/dashboard');
  };

  const getOrderSteps = (status: string) => {
    if (status === 'active') {
  return [
    {
      id: 1,
      label: 'Contract Accepted',
      completed: true,
      active: false,
    },
    {
      id: 2,
      label: 'Harvest Pending',
      completed: false,
      active: true,
    },
    {
      id: 3,
      label: 'In Transit',
      completed: false,
      active: false,
    },
    {
      id: 4,
      label: 'Delivered',
      completed: false,
      active: false,
    },
  ];
}

    if (status === 'completed') {
      return [
        {
          id: 1,
          label: t('buyerOrders.harvested'),
          completed: true,
          active: false,
        },
        {
          id: 2,
          label: t('buyerOrders.qualityInspected'),
          completed: true,
          active: false,
        },
        {
          id: 3,
          label: t('buyerOrders.inTransit'),
          completed: true,
          active: false,
        },
        {
          id: 4,
          label: t('buyerOrders.warehouseArrived'),
          completed: true,
          active: false,
        },
      ];
    }

    return [
      {
        id: 1,
        label: t('buyerOrders.harvested'),
        completed: true,
        active: false,
      },
      {
        id: 2,
        label: t('buyerOrders.qualityInspected'),
        completed: status !== 'pending',
        active: status === 'pending',
      },
      {
        id: 3,
        label: t('buyerOrders.inTransit'),
        completed: false,
        active: status === 'active',
      },
      {
        id: 4,
        label: t('buyerOrders.warehouseArrived'),
        completed: false,
        active: false,
      },
    ];
  };

  useEffect(() => {
    const fetchActiveOrders = async () => {
      try {
        const response = await api.get('/contracts');
        const data = response?.data ?? [];
        const contracts = Array.isArray(data) ? data : [];

        const activeContracts = contracts.filter(
          (contract: any) => contract.status === 'active'
        );

        const orders = activeContracts.map((contract: any) => ({
          id: contract._id,
          orderId: contract._id
            ? `#ORD-${contract._id.toString().slice(-6).toUpperCase()}`
            : 'Order',
          cropName: contract.requirement?.cropName ?? 'Produce',
          farmer: contract.farmer?.name ?? 'Farmer',
          location: contract.requirement?.location ?? 'Unknown Location',
          eta: contract.deliveryDate
            ? new Date(contract.deliveryDate).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short',
              })
            : 'TBD',
          vehicleNumber: contract.vehicleNumber ?? 'TBD',
          status: contract.status ?? 'active',
          steps: getOrderSteps(contract.status ?? 'active'),
        }));

        setTrackingOrders(orders);
        setError(null);
      } catch (err: any) {
        console.error('Active orders fetch error:', err);
        setError(err?.message || t('buyerOrders.unableToLoad'));
        setTrackingOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchActiveOrders();
  }, []);

  const summaryStats = [
    {
      icon: <Truck size={24} />,
      label: t('buyerOrders.totalOrdersInTransit'),
      value: trackingOrders.length,
      bgColor: 'bg-white',
    },
    {
      icon: <CheckCircle2 size={24} />,
      label: t('buyerOrders.qualityChecksPassed'),
      value: 4,
      bgColor: 'bg-white',
    },
    {
      icon: <Package size={24} />,
      label: t('buyerOrders.dispatchedToday'),
      value: 1,
      bgColor: 'bg-white',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F0] p-8 text-black">
      <div className="mb-8 space-y-2">
        <button
          onClick={handleExitToDashboard}
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={16} />
          {t('buyerOrders.backToDashboard')}
        </button>

        <h1 className="text-3xl font-black text-gray-900 tracking-tight">
          {t('buyerOrders.title')}
        </h1>

        <p className="text-sm text-gray-500">
          {t('buyerOrders.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {summaryStats.map((stat, index) => (
          <SummaryStat
            key={index}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
            bgColor={stat.bgColor}
          />
        ))}
      </div>

      <div>
        <h2 className="text-lg font-black text-gray-900 mb-4 tracking-tight">
          {t('buyerOrders.ordersInLogistics')}
        </h2>

        {loading ? (
          <div className="rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm text-gray-700">
            {t('buyerOrders.loading')}
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 shadow-sm text-red-700">
            {error}
          </div>
        ) : trackingOrders.length === 0 ? (
          <div className="rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm text-gray-700">
            {t('buyerOrders.noActiveOrders')}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {trackingOrders.map((order) => (
              <TrackingCard
                key={order.id}
                order={order}
                t={t}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}