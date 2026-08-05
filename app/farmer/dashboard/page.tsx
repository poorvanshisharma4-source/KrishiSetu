'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import { FarmerSidebar } from "@/components/FarmerSidebar"; 
import { useLanguage } from '@/components/LanguageContext';
import { 
  FileText, 
  Sprout, 
  Coins, 
  ShieldCheck, 
  UserPlus,
  PlusCircle,
  Eye,
  Brain,
  MessageSquare,
  Loader2
} from "lucide-react";

interface DashboardStats {
  totalContracts: number;
  activeCropsCount: number;
  expectedRevenue: number;
  newRequestsCount: number;
  userName: string;
}

interface CropItem {
  id: string;
  name: string;
  area: string;
  harvestDate: string;
  status: string;
}

export default function FarmerDashboardPage() {
  const router = useRouter();
  const { t } = useLanguage();
  
  const [loading, setLoading] = useState<boolean>(true);
  const [stats, setStats] = useState<DashboardStats>({
    totalContracts: 0,
    activeCropsCount: 0,
    expectedRevenue: 0,
    newRequestsCount: 0,
    userName: 'Farmer',
  });
  const [activeCrops, setActiveCrops] = useState<CropItem[]>([]);

  useEffect(() => {
    let isMounted = true;

    const fetchDashboardData = async () => {
      try {
        setLoading(true);

        // Fetch User Profile, Contracts, Crops, and Requests simultaneously
        const [contractsRes, cropsRes, requestsRes] = await Promise.allSettled([
          api.get('/contracts'),
          api.get('/crops'),
          api.get('/requests'),
        ]);

        if (!isMounted) return;

        let contractsCount = 0;
        let revenueSum = 0;
        if (contractsRes.status === 'fulfilled' && contractsRes.value.data?.success) {
          const contractsData = contractsRes.value.data.data || [];
          contractsCount = contractsData.length;
          
          // Calculate expected revenue from active/agreed contracts
          revenueSum = contractsData.reduce((acc: number, curr: any) => {
            const price = Number(curr.agreedPrice || 0);
            const qty = Number(curr.quantity || 0);
            return acc + (price * qty);
          }, 0);
        }

        let cropsList: CropItem[] = [];
        if (cropsRes.status === 'fulfilled' && cropsRes.value.data?.success) {
          const cropsData = cropsRes.value.data.data || [];
          cropsList = cropsData.slice(0, 3).map((crop: any) => ({
            id: crop._id || crop.id,
            name: crop.cropName || 'Crop',
            area: crop.quantity ? `${crop.quantity} ${crop.unit || 'kg'}` : 'N/A',
            harvestDate: crop.expectedHarvestDate 
              ? new Date(crop.expectedHarvestDate).toLocaleDateString()
              : 'N/A',
            status: crop.status || 'Active',
          }));
        }

        let pendingRequestsCount = 0;
        if (requestsRes.status === 'fulfilled' && requestsRes.value.data?.success) {
          const requestsData = requestsRes.value.data.data || [];
          pendingRequestsCount = requestsData.filter((r: any) => r.status === 'pending').length;
        }

        // Retrieve user name from localStorage if available
        const storedUser = localStorage.getItem('user');
        let farmerName = 'Farmer';
        if (storedUser) {
          try {
            const parsed = JSON.parse(storedUser);
            if (parsed.name) farmerName = parsed.name;
          } catch (e) {
            // ignore JSON parse error
          }
        }

        setStats({
          totalContracts: contractsCount,
          activeCropsCount: cropsList.length,
          expectedRevenue: revenueSum,
          newRequestsCount: pendingRequestsCount,
          userName: farmerName,
        });

        setActiveCrops(cropsList);

      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchDashboardData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      
      {/* SIDEBAR */}
      <div className="lg:w-64 flex-shrink-0">
        <FarmerSidebar />
      </div>

      {/* DASHBOARD CONTENT MATRIX */}
      <div className="flex-1 space-y-6 min-w-0">
        
        {/* Welcome Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
  {t("farmer.welcome")}, {stats.userName}!
</h1>
          
          <p className="text-xs sm:text-sm font-semibold text-gray-500 mt-1">
            {t("farmer.description")}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3.5">
            <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
              <FileText size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate">{t("farmer.totalContracts")}</p>
              <p className="text-lg font-black text-gray-900 leading-tight">
                {loading ? <Loader2 size={16} className="animate-spin text-gray-400 mt-1" /> : stats.totalContracts}
              </p>
              <span className="text-[10px] font-bold text-emerald-600 block mt-0.5 truncate">{t("farmer.activeAgreements")}</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3.5">
            <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
              <Sprout size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate">{t("farmer.activeCrops")}</p>
              <p className="text-lg font-black text-gray-900 leading-tight">
                {loading ? <Loader2 size={16} className="animate-spin text-gray-400 mt-1" /> : stats.activeCropsCount}
              </p>
              <span className="text-[10px] font-bold text-emerald-600 block mt-0.5 truncate">{t("farmer.listedInMarket")}</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3.5">
            <div className="p-2.5 bg-amber-50 rounded-xl text-amber-600 shrink-0">
              <Coins size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate">{t("farmer.expectedRevenue")}</p>
              <p className="text-lg font-black text-gray-900 leading-tight">
                {loading ? <Loader2 size={16} className="animate-spin text-gray-400 mt-1" /> : `₹${stats.expectedRevenue.toLocaleString('en-IN')}`}
              </p>
              <span className="text-[10px] font-bold text-amber-600 block mt-0.5 truncate">{t("farmer.fromContracts")}</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3.5">
            <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600 shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate">{t("farmer.trustScore")}</p>
              <p className="text-lg font-black text-gray-900 leading-tight">4.8</p>
              <span className="text-[10px] font-bold text-blue-600 block mt-0.5 truncate">{t("farmer.verifiedFarmer")}</span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3.5">
            <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
              <UserPlus size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate">{t("farmer.pendingRequests")}</p>
              <p className="text-lg font-black text-gray-900 leading-tight">
                {loading ? <Loader2 size={16} className="animate-spin text-gray-400 mt-1" /> : stats.newRequestsCount}
              </p>
              <span className="text-[10px] font-bold text-emerald-600 block mt-0.5 truncate">{t("farmer.awaitingApproval")}</span>
            </div>
          </div>

        </div>

        {/* Quick Actions Wrapper */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-base font-black text-gray-900 mb-4">
  {t("farmer.quickActions")}
</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <button 
              onClick={() => router.push('/farmer/my-crops')}
              className="flex flex-col items-center justify-center p-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-sm gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <PlusCircle size={20} /> {t("farmer.addCrop")}
            </button>

            <button 
              onClick={() => router.push('/farmer/contracts')}
              className="flex flex-col items-center justify-center p-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl font-bold text-sm gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <Eye size={20} /> {t("farmer.viewContracts")}
            </button>

            <button 
              onClick={() => router.push('/farmer/ai')}
              className="flex flex-col items-center justify-center p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold text-sm gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <Brain size={20} /> {t("farmer.aiRecommendations")}
            </button>

            <button 
              onClick={() => router.push('/farmer/messages')}
              className="flex flex-col items-center justify-center p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-sm gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <MessageSquare size={20} /> {t("farmer.messages")}
            </button>

          </div>
        </div>

        {/* My Active Crops List */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-base font-black text-gray-900 mb-4">
  {t("farmer.myActiveCrops")}
</h3>
          
          {loading ? (
            <div className="flex items-center justify-center py-6">
              <Loader2 className="h-6 w-6 animate-spin text-emerald-600" />
            </div>
          ) : activeCrops.length > 0 ? (
            <div className="space-y-3">
              {activeCrops.map((crop) => (
                <div key={crop.id} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{crop.name}</p>
                    <p className="text-xs text-gray-400 font-medium mt-0.5">
                      {crop.area} • {t("farmer.expectedHarvest")}: {crop.harvestDate}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-xs font-bold text-emerald-700">
                    {crop.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-sm text-gray-500 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              {t("farmer.noCrops")}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}