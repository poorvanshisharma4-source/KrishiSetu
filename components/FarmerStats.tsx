'use client'

import {
  FileText,
  Wallet,
  Star,
  Users,
  CheckCircle2,
} from 'lucide-react'
import { useLanguage } from '@/components/LanguageContext'
import { useEffect, useState } from 'react'
import api from '@/lib/api'

export default function FarmerStats() {
  const { t } = useLanguage()
  const [activeContracts, setActiveContracts] = useState(0)
  const [completedContracts, setCompletedContracts] = useState(0)
  const [totalEarnings, setTotalEarnings] = useState(0)
  useEffect(() => {
  const fetchContracts = async () => {
    try {
      const res = await api.get("/contracts");
      console.log("CONTRACT RESPONSE:", res);

      if (res.success) {
        
        const active = res.data.filter(
          (contract: any) => contract.status === "active"
        ).length;

        setActiveContracts(active);

        const completed = res.data.filter(
  (contract: any) => contract.status === "completed"
).length;

setCompletedContracts(completed);


const earnings = res.data
  .filter(
    (contract: any) =>
      contract.status === "active" ||
      contract.status === "completed"
  )
  .reduce(
    (total: number, contract: any) =>
      total + (contract.agreedPrice || 0),
    0
  );

setTotalEarnings(earnings);
      }

    } catch (error) {
      console.error("Contract fetch error:", error);
    }
  };

  fetchContracts();
}, []);

  const stats = [
    {
      title: t('farmerStats.activeContracts'),
      value: activeContracts.toString(),
      description: t('farmerStats.currentlyRunning'),
      color: 'bg-green-50',
      icon: FileText,
      iconColor: 'text-green-600',
    },
    {
      title: t('farmerStats.completedContracts'),
      value: completedContracts.toString(),
      description: t('farmerStats.successfullyDelivered'),
      color: 'bg-orange-50',
      icon: CheckCircle2,
      iconColor: 'text-orange-600',
    },
    {
      title: t('farmerStats.totalEarnings'),
      value: `₹${totalEarnings.toLocaleString()}`,
      description: t('farmerStats.lifetimeIncome'),
      color: 'bg-blue-50',
      icon: Wallet,
      iconColor: 'text-blue-600',
    },
    {
      title: t('farmerStats.buyerRating'),
      value: 'N/A',
      description: t('farmerStats.basedOnReviews'),
      color: 'bg-yellow-50',
      icon: Star,
      iconColor: 'text-yellow-600',
    },
    {
      title: t('farmerStats.connectedBuyers'),
      value: '0',
      description: t('farmerStats.trustedPartners'),
      color: 'bg-purple-50',
      icon: Users,
      iconColor: 'text-purple-600',
    },
  ]

  return (
    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">
      {stats.map((item, index) => {
        const Icon = item.icon

        return (
          <div
            key={index}
            className="
              rounded-2xl
              border
              bg-white
              p-4
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              sm:p-5
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {item.title}
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {item.value}
                </h2>

                <p className="mt-2 text-xs text-gray-400">
                  {item.description}
                </p>
              </div>

              <div className={`${item.color} rounded-xl p-3`}>
                <Icon
                  className={item.iconColor}
                  size={30}
                />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}