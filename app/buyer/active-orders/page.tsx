'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Truck,
  Package,
  CheckCircle2,
  MapPin,
  ArrowRight,
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
  <div className={`${bgColor} rounded-lg p-6 flex items-start gap-4 shadow-sm`}>
    <div className="text-green-600">{icon}</div>
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
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
          {/* Step Circle */}
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
              step.completed
                ? 'bg-green-100 text-green-700 border-2 border-green-500'
                : step.active
                  ? 'bg-blue-100 text-blue-700 border-2 border-blue-500 animate-pulse'
                  : 'bg-gray-100 text-gray-500 border-2 border-gray-300'
            }`}
          >
            {step.completed ? (
              <CheckCircle2 size={20} />
            ) : (
              <span>{index + 1}</span>
            )}
          </div>
          {/* Step Label */}
          <p
            className={`text-xs text-center mt-2 font-medium ${
              step.completed
                ? 'text-green-700'
                : step.active
                  ? 'text-blue-700'
                  : 'text-gray-500'
            }`}
          >
            {step.label}
          </p>
        </div>

        {/* Connector Line */}
        {index < steps.length - 1 && (
          <div
            className={`h-1 flex-1 -mx-2 transition-all duration-300 ${
              step.completed ? 'bg-green-400' : 'bg-gray-300'
            }`}
          />
        )}
      </React.Fragment>
    ))}
  </div>
);

const TrackingCard: React.FC<{ order: TrackingOrder }> = ({ order }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
    {/* Header */}
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-lg font-bold text-gray-900">{order.orderId}</h3>
        <p className="text-sm text-gray-600 font-medium">{order.cropName}</p>
      </div>
      <div className="bg-green-50 px-3 py-1 rounded-full">
        <span className="text-xs font-semibold text-green-700">In Transit</span>
      </div>
    </div>

    {/* Divider */}
    <div className="h-px bg-gray-200 mb-4" />

    {/* Farmer & Location Info */}
    <div className="space-y-3 mb-6">
      <div className="flex items-start gap-3">
        <Package size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-xs text-gray-500">Supplier</p>
          <p className="text-sm font-medium text-gray-900">{order.farmer}</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <MapPin size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-xs text-gray-500">Pickup Location</p>
          <p className="text-sm font-medium text-gray-900">{order.location}</p>
        </div>
      </div>
    </div>

    {/* Stepper Timeline */}
    <StepperProgressTimeline steps={order.steps} />

    {/* Divider */}
    <div className="h-px bg-gray-200 my-4" />

    {/* Logistics Info */}
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-start gap-3">
        <Clock size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-xs text-gray-500">Est. Arrival</p>
          <p className="text-sm font-semibold text-gray-900">{order.eta}</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Truck size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-xs text-gray-500">Vehicle #</p>
          <p className="text-sm font-semibold text-gray-900">
            {order.vehicleNumber}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function ActiveOrdersDashboard() {
  const router = useRouter();

  const handleExitToDashboard = () => {
    router.push('/buyer/dashboard');
  };

  // Mock data for summary stats
  const summaryStats = [
    {
      icon: <Truck size={28} />,
      label: 'Total Orders in Transit',
      value: 2,
      bgColor: 'bg-green-50',
    },
    {
      icon: <CheckCircle2 size={28} />,
      label: 'Quality Checks Passed',
      value: 4,
      bgColor: 'bg-blue-50',
    },
    {
      icon: <Package size={28} />,
      label: 'Dispatched Today',
      value: 1,
      bgColor: 'bg-amber-50',
    },
  ];

  // Mock data for tracking orders
  const trackingOrders: TrackingOrder[] = [
    {
      id: '1',
      orderId: '#ORD-9821',
      cropName: 'Fresh Spinach',
      farmer: 'Rajesh Kumar',
      location: 'Delhi Mandi',
      eta: 'Today, 3:45 PM',
      vehicleNumber: 'DL-01-AB-4567',
      steps: [
        { id: 1, label: 'Harvested', completed: true, active: false },
        { id: 2, label: 'Quality Inspected', completed: true, active: false },
        { id: 3, label: 'In Transit', completed: false, active: true },
        { id: 4, label: 'Warehouse Arrived', completed: false, active: false },
      ],
    },
    {
      id: '2',
      orderId: '#ORD-9820',
      cropName: 'Organic Tomatoes',
      farmer: 'Priya Singh',
      location: 'Nashik Mandi',
      eta: 'Tomorrow, 9:30 AM',
      vehicleNumber: 'MH-02-CD-8901',
      steps: [
        { id: 1, label: 'Harvested', completed: true, active: false },
        { id: 2, label: 'Quality Inspected', completed: true, active: false },
        { id: 3, label: 'In Transit', completed: false, active: true },
        { id: 4, label: 'Warehouse Arrived', completed: false, active: false },
      ],
    },
    {
      id: '3',
      orderId: '#ORD-9819',
      cropName: 'Capsicum Mix',
      farmer: 'Arjun Patel',
      location: 'Pune Mandi',
      eta: 'Tomorrow, 5:15 PM',
      vehicleNumber: 'MH-03-EF-2345',
      steps: [
        { id: 1, label: 'Harvested', completed: true, active: false },
        { id: 2, label: 'Quality Inspected', completed: true, active: false },
        { id: 3, label: 'In Transit', completed: false, active: true },
        { id: 4, label: 'Warehouse Arrived', completed: false, active: false },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header with Exit Button */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Active Orders</h1>
          <p className="text-gray-600 mt-2">Real-time tracking of orders in transit</p>
        </div>
        <button
          onClick={handleExitToDashboard}
          className="flex items-center gap-2 px-6 py-2.5 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 hover:shadow-md active:scale-95 transition-all duration-200 ease-out"
        >
          Exit to Buyer Dashboard
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Summary Stats */}
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

      {/* Tracking Cards */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Orders in Logistics
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {trackingOrders.map((order) => (
            <TrackingCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}