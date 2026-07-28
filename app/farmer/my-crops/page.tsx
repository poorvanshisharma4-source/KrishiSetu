// 'use client'

// import { useState } from 'react'
// import { CropsHeader } from "../../../components/crops-header"
// import { CropCard } from "../../../components/crop-card"
// import { AddCropModal } from "../../../components/add-crop-modal"
// import { Navbar } from "../../../components/navbar"
// import { Footer } from "../../../components/footer"
// import { FarmerSidebar } from "@/components/FarmerSidebar"

// interface Crop {
//   id: string
//   name: string
//   areaSize: number
//   harvestDate: string
//   growthPercentage: number
//   healthStatus: 'Healthy' | 'Excellent' | 'Needs Attention'
// }

// const SAMPLE_CROPS: Crop[] = [
//   { id: '1', name: 'Organic Tomatoes', areaSize: 2.5, harvestDate: 'August 2024', growthPercentage: 65, healthStatus: 'Healthy' },
//   { id: '2', name: 'Basmati Rice', areaSize: 5.0, harvestDate: 'October 2024', growthPercentage: 45, healthStatus: 'Excellent' },
//   { id: '3', name: 'Wheat', areaSize: 3.2, harvestDate: 'April 2024', growthPercentage: 85, healthStatus: 'Healthy' },
//   { id: '4', name: 'Lettuce', areaSize: 1.8, harvestDate: 'June 2024', growthPercentage: 30, healthStatus: 'Needs Attention' },
// ]

// // Next.js standard pages must have default function exports
// export default function MyCropsPage() {
//   const [crops, setCrops] = useState<Crop[]>(SAMPLE_CROPS)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')

//   const filteredCrops = crops.filter((crop) =>
//     crop.name.toLowerCase().includes(searchQuery.toLowerCase())
//   )

//   // Synchronized callback data types mapping with our modal component
//   const handleAddCrop = (cropData: {
//     name: string
//     areaSize: number
//     harvestDate: string
//     growthPercentage: number
//     healthStatus: 'Healthy' | 'Excellent' | 'Needs Attention'
//   }) => {
//     const newCrop: Crop = {
//       id: String(crops.length + 1),
//       name: cropData.name,
//       areaSize: cropData.areaSize,
//       harvestDate: cropData.harvestDate,
//       growthPercentage: 10, // Newly added starts at 10%
//       healthStatus: 'Healthy',
//     }

//     setCrops([...crops, newCrop])
//     setIsModalOpen(false)
//   }

//   return (
//     <div className="min-h-screen bg-[#F5F0E6]">
//       <Navbar />

//       <div className="flex flex-col lg:flex-row gap-6">
//   <FarmerSidebar />

//   <div className="flex-1">
//     {
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Header Section */}
//         <CropsHeader
//           searchQuery={searchQuery}
//           onSearchChange={setSearchQuery}
//           onAddClick={() => setIsModalOpen(true)}
//         />

//         {/* Crops Grid */}
//         {filteredCrops.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredCrops.map((crop) => (
//               <CropCard
//   key={crop.id}
//   name={crop.name}
//   areaSize={crop.areaSize}
//   harvestDate={crop.harvestDate}
//   growthPercentage={crop.growthPercentage}
//   healthStatus={crop.healthStatus}
// />

//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-16 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
//             <p className="text-gray-500 text-lg mb-4">
//               {searchQuery
//                 ? 'No crops found matching your search.'
//                 : 'No crops added yet. Start by adding your first crop!'}
//             </p>
//             {!searchQuery && (
//               <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="px-6 py-2.5 rounded-xl text-white font-semibold text-sm transition-all transform hover:-translate-y-0.5 shadow-md bg-[#2E7D32] hover:bg-[#1b4d1e]"
//               >
//                 Add Your First Crop
//               </button>
//             )}
//           </div>
//         )}
//       </main>
//     }
//   </div>
// </div>
//       {/* Add Crop Modal */}
//       <AddCropModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onAddCrop={handleAddCrop}
//       />
      
//       <Footer />
//     </div>
//   )
// }

// 'use client'

// import { useState } from 'react'
// import { CropsHeader } from "../../../components/crops-header"
// import { CropCard } from "../../../components/crop-card"
// import { AddCropModal } from "../../../components/add-crop-modal"

// interface Crop {
//   id: string
//   name: string
//   areaSize: number
//   harvestDate: string
//   growthPercentage: number
//   healthStatus: 'Healthy' | 'Excellent' | 'Needs Attention'
// }

// const SAMPLE_CROPS: Crop[] = [
//   { id: '1', name: 'Organic Tomatoes', areaSize: 2.5, harvestDate: 'August 2024', growthPercentage: 65, healthStatus: 'Healthy' },
//   { id: '2', name: 'Basmati Rice', areaSize: 5.0, harvestDate: 'October 2024', growthPercentage: 45, healthStatus: 'Excellent' },
//   { id: '3', name: 'Wheat', areaSize: 3.2, harvestDate: 'April 2024', growthPercentage: 85, healthStatus: 'Healthy' },
//   { id: '4', name: 'Lettuce', areaSize: 1.8, harvestDate: 'June 2024', growthPercentage: 30, healthStatus: 'Needs Attention' },
// ]

// export default function MyCropsPage() {
//   const [crops, setCrops] = useState<Crop[]>(SAMPLE_CROPS)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')

//   const filteredCrops = crops.filter((crop) =>
//     crop.name.toLowerCase().includes(searchQuery.toLowerCase())
//   )

//   const handleAddCrop = (cropData: {
//     name: string
//     areaSize: number
//     harvestDate: string
//     growthPercentage: number
//     healthStatus: 'Healthy' | 'Excellent' | 'Needs Attention'
//   }) => {
//     const newCrop: Crop = {
//       id: String(crops.length + 1),
//       name: cropData.name,
//       areaSize: cropData.areaSize,
//       harvestDate: cropData.harvestDate,
//       growthPercentage: 10,
//       healthStatus: 'Healthy',
//     }

//     setCrops([...crops, newCrop])
//     setIsModalOpen(false)
//   }

//   return (
//     <div className="space-y-6">
//       {/* Crops Interactive Header Area */}
//       <div className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm">
//         <CropsHeader
//           searchQuery={searchQuery}
//           onSearchChange={setSearchQuery}
//           onAddClick={() => setIsModalOpen(true)}
//         />
//       </div>

//       {/* Crops Display Matrix */}
//       {filteredCrops.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredCrops.map((crop) => (
//             <CropCard
//               key={crop.id}
//               name={crop.name}
//               areaSize={crop.areaSize}
//               harvestDate={crop.harvestDate}
//               growthPercentage={crop.growthPercentage}
//               healthStatus={crop.healthStatus}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-16 bg-white rounded-2xl p-6 border border-gray-200/60 shadow-sm">
//           <p className="text-gray-500 text-base font-medium mb-4">
//             {searchQuery
//               ? 'No crops found matching your search term.'
//               : 'No crops registered yet. Get started by cataloging your first harvest!'}
//           </p>
//           {!searchQuery && (
//             <button
//               onClick={() => setIsModalOpen(true)}
//               className="px-6 py-2.5 rounded-xl text-white font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-sm bg-emerald-600 hover:bg-emerald-700"
//             >
//               Add Your First Crop
//             </button>
//           )}
//         </div>
//       )}

//       {/* Add Crop Modal overlay */}
//       <AddCropModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onAddCrop={handleAddCrop}
//       />
//     </div>
//   )
// }

// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import { ArrowLeft } from 'lucide-react'
// import { CropsHeader } from "../../../components/crops-header"
// import { CropCard } from "../../../components/crop-card"
// import { AddCropModal } from "../../../components/add-crop-modal"

// interface Crop {
//   id: string
//   name: string
//   areaSize: number
//   harvestDate: string
//   growthPercentage: number
//   healthStatus: 'Healthy' | 'Excellent' | 'Needs Attention'
// }

// const SAMPLE_CROPS: Crop[] = [
//   { id: '1', name: 'Organic Tomatoes', areaSize: 2.5, harvestDate: 'August 2024', growthPercentage: 65, healthStatus: 'Healthy' },
//   { id: '2', name: 'Basmati Rice', areaSize: 5.0, harvestDate: 'October 2024', growthPercentage: 45, healthStatus: 'Excellent' },
//   { id: '3', name: 'Wheat', areaSize: 3.2, harvestDate: 'April 2024', growthPercentage: 85, healthStatus: 'Healthy' },
//   { id: '4', name: 'Lettuce', areaSize: 1.8, harvestDate: 'June 2024', growthPercentage: 30, healthStatus: 'Needs Attention' },
// ]

// export default function MyCropsPage() {
//   const [crops, setCrops] = useState<Crop[]>(SAMPLE_CROPS)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')

//   const filteredCrops = crops.filter((crop) =>
//     crop.name.toLowerCase().includes(searchQuery.toLowerCase())
//   )

//   const handleAddCrop = (cropData: {
//     name: string
//     areaSize: number
//     harvestDate: string
//     growthPercentage: number
//     healthStatus: 'Healthy' | 'Excellent' | 'Needs Attention'
//   }) => {
//     const newCrop: Crop = {
//       id: String(crops.length + 1),
//       name: cropData.name,
//       areaSize: cropData.areaSize,
//       harvestDate: cropData.harvestDate,
//       growthPercentage: 10,
//       healthStatus: 'Healthy',
//     }

//     setCrops([...crops, newCrop])
//     setIsModalOpen(false)
//   }

//   return (
//     /* YAHAN CHANGES KIYE HAIN: max-w-7xl aur mx-auto lagaya hai content ko smetne ke liye */
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
     

//       <div className="space-y-6">
//         {/* Crops Interactive Header Area */}
//         <div className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm">
//           <CropsHeader
//             searchQuery={searchQuery}
//             onSearchChange={setSearchQuery}
//             onAddClick={() => setIsModalOpen(true)}
//           />
//         </div>

//         {/* Crops Display Matrix */}
//         {filteredCrops.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredCrops.map((crop) => (
//               <CropCard
//                 key={crop.id}
//                 name={crop.name}
//                 areaSize={crop.areaSize}
//                 harvestDate={crop.harvestDate}
//                 growthPercentage={crop.growthPercentage}
//                 healthStatus={crop.healthStatus}
//               />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-16 bg-white rounded-2xl p-6 border border-gray-200/60 shadow-sm">
//             <p className="text-gray-500 text-base font-medium mb-4">
//               {searchQuery
//                 ? 'No crops found matching your search term.'
//                 : 'No crops registered yet. Get started by cataloging your first harvest!'}
//             </p>
//             {!searchQuery && (
//               <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="px-6 py-2.5 rounded-xl text-white font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-sm bg-emerald-600 hover:bg-emerald-700"
//               >
//                 Add Your First Crop
//               </button>
//             )}
//           </div>
//         )}

//         {/* Add Crop Modal overlay */}
//         <AddCropModal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           onAddCrop={handleAddCrop}
//         />
//       </div>
//     </div>
//   )
// }

'use client'

import { useState, useEffect, useCallback } from 'react'
import { Loader2, AlertCircle, RefreshCw } from 'lucide-react'
import api from '@/lib/api'
import { CropsHeader } from "@/components/crops-header"
import { CropCard } from "@/components/crop-card"
import { AddCropModal } from "@/components/add-crop-modal"
import { useLanguage } from '@/components/LanguageContext'

interface Crop {
  id: string
  name: string
  areaSize: number
  harvestDate: string
  growthPercentage: number
  healthStatus: 'Healthy' | 'Excellent' | 'Needs Attention'
}

export default function MyCropsPage() {
  const { t } = useLanguage()
  const [crops, setCrops] = useState<Crop[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const fetchCrops = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await api.get('/crops')
      
      if (response && response.success) {
        const rawData = Array.isArray(response.data) ? response.data : []
        const formattedCrops: Crop[] = rawData.map((item: any) => ({
          id: item._id || item.id,
          name: item.name || 'Unnamed Crop',
          areaSize: Number(item.areaSize || 0),
          harvestDate: item.harvestDate 
            ? new Date(item.harvestDate).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })
            : 'Upcoming',
          growthPercentage: item.growthPercentage || 0,
          healthStatus: item.healthStatus || 'Healthy'
        }))
        setCrops(formattedCrops)
      } else {
        throw new Error('Unexpected response format from server')
      }
    } catch (err: any) {
      console.error('Error fetching crops:', err)
      setError(err.message || 'Failed to load crops. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCrops()
  }, [fetchCrops])

  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAddCrop = async (cropData: {
    name: string
    areaSize: number
    harvestDate: string
  }) => {
    try {
      const response = await api.post('/crops', {
        name: cropData.name,
        areaSize: cropData.areaSize,
        harvestDate: cropData.harvestDate,
      })
      
      if (response.success) {
        await fetchCrops()
        setIsModalOpen(false)
      }
    } catch (err: any) {
      console.error('Error adding crop:', err)
      throw err 
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-3">
            <AlertCircle size={20} className="shrink-0" />
            <p className="text-sm font-medium flex-1">{error}</p>
            <button 
              onClick={() => fetchCrops()}
              className="p-1 hover:bg-red-100 rounded-full transition-colors"
              title="Retry"
            >
              <RefreshCw size={18} />
            </button>
          </div>
        )}

        {/* Crops Header Area */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm">
          <CropsHeader
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onAddClick={() => setIsModalOpen(true)}
          />
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 bg-white rounded-2xl border border-gray-200/60 shadow-sm">
            <Loader2 className="animate-spin text-emerald-600 mb-4" size={40} />
            <p className="text-gray-500 font-medium">
              {t('myCrops.loading') || 'Loading your harvests...'}
            </p>
          </div>
        ) : filteredCrops.length > 0 ? (
          /* Crops Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCrops.map((crop) => (
              <CropCard
                key={crop.id}
                name={crop.name}
                areaSize={crop.areaSize}
                harvestDate={crop.harvestDate}
                growthPercentage={crop.growthPercentage}
                healthStatus={crop.healthStatus}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-white rounded-2xl p-6 border border-gray-200/60 shadow-sm">
            <p className="text-gray-500 text-base font-medium mb-4">
              {searchQuery
                ? (t('myCrops.noSearchResult') || 'No crops found matching your search term.')
                : (t('myCrops.noCrops') || 'No crops registered yet. Get started by cataloging your first harvest!')}
            </p>
            {!searchQuery && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2.5 rounded-xl text-white font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-sm bg-emerald-600 hover:bg-emerald-700"
              >
                {t('myCrops.addFirstCrop') || 'Add Your First Crop'}
              </button>
            )}
          </div>
        )}

        {/* Add Crop Modal */}
        <AddCropModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddCrop={handleAddCrop}
        />
      </div>
    </div>
  )
}

