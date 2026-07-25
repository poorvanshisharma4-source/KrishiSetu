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

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import api from '@/lib/api'
import { CropsHeader } from "../../../components/crops-header"
import { CropCard } from "../../../components/crop-card"
import { AddCropModal } from "../../../components/add-crop-modal"

interface Crop {
  id: string
  name: string
  areaSize: number
  harvestDate: string
  growthPercentage: number
  healthStatus: 'Healthy' | 'Excellent' | 'Needs Attention'
}

export default function MyCropsPage() {
  const [crops, setCrops] = useState<Crop[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // 1. Fetch Crops from Backend
  const fetchCrops = async () => {
    try {
      setLoading(true)
      const response = await api.get('/crops')
      const data = response?.data ?? []

      // Normalize Backend Data to UI Format
      const formattedCrops: Crop[] = (Array.isArray(data) ? data : []).map((item: any) => ({
        id: item._id || item.id,
        name: item.name || item.cropName || 'Unnamed Crop',
        areaSize: Number(item.areaSize || item.quantity || 0),
        harvestDate: item.harvestDate || 'Upcoming',
        growthPercentage: Number(item.growthPercentage || 50),
        healthStatus: item.healthStatus || 'Healthy',
      }))

      setCrops(formattedCrops)
      setError(null)
    } catch (err: any) {
      console.error('Error fetching farmer crops:', err)
      setError(err?.message || 'Failed to load crops.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCrops()
  }, [])

  // 2. Search Filter
  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // 3. Add Crop Handler (API Post Request)
  const handleAddCrop = async (cropData: {
    name: string
    areaSize: number
    harvestDate: string
    growthPercentage?: number
    healthStatus?: 'Healthy' | 'Excellent' | 'Needs Attention'
  }) => {
    try {
      // Post new crop data to backend
      await api.post('/crops', {
        name: cropData.name,
        areaSize: cropData.areaSize,
        harvestDate: cropData.harvestDate,
        growthPercentage: cropData.growthPercentage || 10,
        healthStatus: cropData.healthStatus || 'Healthy',
      })

      // Re-fetch crops after successful creation
      await fetchCrops()
      setIsModalOpen(false)
    } catch (err: any) {
      console.error('Error adding new crop:', err)
      alert(err?.message || 'Failed to add crop. Please try again.')
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        {/* Error Alert */}
        {error && (
          <div className="rounded-xl bg-red-100 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Crops Interactive Header Area */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm">
          <CropsHeader
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onAddClick={() => setIsModalOpen(true)}
          />
        </div>

        {/* Crops Display Matrix */}
        {loading ? (
          <div className="text-center py-16 bg-white rounded-2xl p-6 border border-gray-200/60 shadow-sm">
            <p className="text-gray-500 text-base font-medium">Loading your crops...</p>
          </div>
        ) : filteredCrops.length > 0 ? (
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
          <div className="text-center py-16 bg-white rounded-2xl p-6 border border-gray-200/60 shadow-sm">
            <p className="text-gray-500 text-base font-medium mb-4">
              {searchQuery
                ? 'No crops found matching your search term.'
                : 'No crops registered yet. Get started by cataloging your first harvest!'}
            </p>
            {!searchQuery && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2.5 rounded-xl text-white font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-sm bg-emerald-600 hover:bg-emerald-700"
              >
                Add Your First Crop
              </button>
            )}
          </div>
        )}

        {/* Add Crop Modal overlay */}
        <AddCropModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddCrop={handleAddCrop}
        />
      </div>
    </div>
  )
}
