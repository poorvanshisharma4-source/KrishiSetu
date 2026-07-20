'use client';

import FarmerProfilePage from '@/components/FarmerProfilePage';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function ProfilePage() {
  const router = useRouter();

  {/* Back Interactive Trigger */}
      <button
        onClick={()=>router.back()}
        className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-all font-bold text-sm outline-none"
      >
        <ArrowLeft size={16}/>
        Back
      </button>
  return <FarmerProfilePage />;
}
