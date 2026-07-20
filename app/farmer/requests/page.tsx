// 'use client'

// import { useState, useEffect } from 'react'
// import {
//   ArrowLeft,
//   CheckCircle,
//   XCircle,
//   MapPin,
//   Sprout,
//   Building2,
//   Package
// } from 'lucide-react'
// import { useRouter } from 'next/navigation'
// // 🧭 Import the shared sidebar component
// import { FarmerSidebar } from '@/components/FarmerSidebar'
// // 🌐 Import the global navigation bar component
// import { Navbar } from '@/components/navbar'

// export default function FarmerRequestsPage(){
//   const router = useRouter()
//   const [requestList, setRequestList] = useState<any[]>([])

//   useEffect(() => {
//     const savedRequests = JSON.parse(
//       localStorage.getItem("buyerRequests") || "[]"
//     )
//     setRequestList(savedRequests)
//   }, [])

//   const updateRequest = (id:number, status:string)=>{
//     setRequestList((prev)=>{
//       const updatedRequests = prev.map((req)=>
//         req.id === id ? { ...req, status } : req
//       )

//       // Save request status
//       localStorage.setItem("buyerRequests", JSON.stringify(updatedRequests))

//       // Create contract after Accept
//       if(status === "Accepted"){
//         console.count("Accept clicked");
//         const acceptedRequest = updatedRequests.find((req)=> req.id === id)

//         if(acceptedRequest){
//           const newContract = {
//             id: `CON-BUY-${Date.now()}`,
//             farmerName: "Ramesh Kumar",
//             region: acceptedRequest.deliveryLocation || "Indore, MP",
//             cropType: acceptedRequest.crop,
//             lockedVolume: acceptedRequest.quantity,
//             pricePerKg: "₹30",
//             totalSettlementValue: "₹150000",
//             status: "pending_signature",
//             statusLabel: "Awaiting Farmer Sign"
//           }

//           const oldContracts = JSON.parse(
//             localStorage.getItem("contracts") || "[]"
//           )

//           localStorage.setItem(
//             "contracts",
//             JSON.stringify([...oldContracts, newContract])
//           )
//           alert("Creating Contract...")
//           alert("Contract Created Successfully")
//         }
//       }
//       return updatedRequests
//     })
//   }

//   return(
//     // 🟢 FIXED: Parent container set to flex-col to keep global Navbar on top seamlessly
//     <div className="flex flex-col min-h-screen bg-[#F5F0E6] text-black">
      
//       {/* 🌐 Global Header Navigation Bar Component */}
//       <Navbar />

//       {/* Main workspace layer containing sidebar and request content */}
//       <div className="flex flex-1">
//         {/* 🧭 Universal shared sidebar remains locked here */}
//         <FarmerSidebar />

//         {/* 🚀 Central workspace view routing panel */}
//         <main className="flex-1 p-6 overflow-y-auto">
//           <div className="max-w-5xl mx-auto">

//             {/* Back Button */}
//             <button
//               onClick={()=>router.back()}
//               className="flex items-center gap-2 text-green-700 mb-6 hover:underline font-bold text-sm"
//             >
//               <ArrowLeft size={18}/>
//               Back
//             </button>

//             {/* Header Title Section */}
//             <div className="bg-white rounded-2xl shadow p-6 mb-6 border border-gray-100">
//               <h1 className="text-2xl font-bold text-gray-800">
//                 Incoming Buyer Requests
//               </h1>
//               <p className="text-sm text-gray-500 mt-1">
//                 Review and manage contract farming requests from buyers.
//               </p>
//             </div>

//             {/* Responsive Cards Grid Container Row */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {requestList.map((request)=>(
//                 <div
//                   key={request.id}
//                   className="bg-white rounded-2xl shadow p-6 border border-gray-100 flex flex-col justify-between"
//                 >
//                   <div>
//                     <div className="flex justify-between items-center mb-4">
//                       <h2 className="text-lg font-bold text-gray-800">
//                         {request.buyerName}
//                       </h2>
//                       <span
//                         className={`px-3 py-1 rounded-full text-xs font-bold
//                         ${
//                           request.status === "Accepted"
//                           ? "bg-green-100 text-green-700"
//                           : request.status === "Rejected"
//                           ? "bg-red-100 text-red-700"
//                           : "bg-yellow-100 text-yellow-700"
//                         }`}
//                       >
//                         {request.status}
//                       </span>
//                     </div>

//                     <div className="space-y-3 text-sm text-gray-600 font-semibold">
//                       <p className="flex items-center gap-2"><Sprout size={16} className="text-green-600" /> Crop: {request.crop}</p>
//                       <p className="flex items-center gap-2"><Package size={16} className="text-amber-600" /> Quantity: {request.quantity}</p>
//                       <p className="flex items-center gap-2"><MapPin size={16} className="text-blue-600" /> {request.deliveryLocation}</p>
//                       <p className="flex items-center gap-2"><Building2 size={16} className="text-purple-600" /> Buyer Request</p>
//                     </div>
//                   </div>

//                   {request.status === "Pending" && (
//                     <div className="flex gap-3 mt-6">
//                       <button
//                         onClick={()=>updateRequest(request.id,"Accepted")}
//                         className="flex-1 bg-green-700 text-white py-2.5 rounded-xl hover:bg-green-800 flex items-center justify-center gap-2 text-xs font-bold shadow-md transition-all"
//                       >
//                         <CheckCircle size={16}/> Accept
//                       </button>
//                       <button
//                         onClick={()=>updateRequest(request.id,"Rejected")}
//                         className="flex-1 bg-red-600 text-white py-2.5 rounded-xl hover:bg-red-700 flex items-center justify-center gap-2 text-xs font-bold shadow-md transition-all"
//                       >
//                         <XCircle size={16}/> Reject
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }

'use client'

import { useState, useEffect } from 'react'
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  MapPin,
  Sprout,
  Building2,
  Package
} from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function FarmerRequestsPage(){
  const router = useRouter()
  const [requestList, setRequestList] = useState<any[]>([])

  useEffect(() => {
    const savedRequests = JSON.parse(
      localStorage.getItem("buyerRequests") || "[]"
    )
    setRequestList(savedRequests)
  }, [])

  const updateRequest = (id: number, status: string)=>{
    setRequestList((prev)=>{
      const updatedRequests = prev.map((req)=>
        req.id === id ? { ...req, status } : req
      )

      localStorage.setItem("buyerRequests", JSON.stringify(updatedRequests))

      if(status === "Accepted"){
        console.count("Accept clicked");
        const acceptedRequest = updatedRequests.find((req)=> req.id === id)

        if(acceptedRequest){
          const newContract = {
            id: `CON-BUY-${Date.now()}`,
            farmerName: "Ramesh Kumar",
            region: acceptedRequest.deliveryLocation || "Indore, MP",
            cropType: acceptedRequest.crop,
            lockedVolume: acceptedRequest.quantity,
            pricePerKg: "₹30",
            totalSettlementValue: "₹150000",
            status: "pending_signature",
            statusLabel: "Awaiting Farmer Sign"
          }

          const oldContracts = JSON.parse(
            localStorage.getItem("contracts") || "[]"
          )

          localStorage.setItem(
            "contracts",
            JSON.stringify([...oldContracts, newContract])
          )
          alert("Creating Contract...")
          alert("Contract Created Successfully")
        }
      }
      return updatedRequests
    })
  }

  return(
    <div className="space-y-6">
    

      {/* Header Context Banner */}
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200/60">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">
          Incoming Buyer Requests
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Review and manage contract farming requests from certified buyers.
        </p>
      </div>

      {/* Requests Dynamic Matrix Grid */}
      {requestList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {requestList.map((request)=>(
            <div
              key={request.id}
              className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200/60 flex flex-col justify-between transition-all hover:shadow-md"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-lg font-black text-gray-900 tracking-tight">
                    {request.buyerName}
                  </h2>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                      request.status === "Accepted"
                      ? "bg-green-50 text-green-700 border-green-200"
                      : request.status === "Rejected"
                      ? "bg-red-50 text-red-700 border-red-200"
                      : "bg-amber-50 text-amber-700 border-amber-200"
                    }`}
                  >
                    {request.status}
                  </span>
                </div>

                <div className="space-y-3 text-sm text-gray-700 font-semibold">
                  <p className="flex items-center gap-2.5">
                    <Sprout size={16} className="text-emerald-600" /> 
                    <span className="text-gray-400 font-normal">Crop:</span> {request.crop}
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Package size={16} className="text-amber-600" /> 
                    <span className="text-gray-400 font-normal">Quantity:</span> {request.quantity}
                  </p>
                  <p className="flex items-center gap-2.5">
                    <MapPin size={16} className="text-blue-600" /> 
                    <span className="text-gray-400 font-normal">Location:</span> {request.deliveryLocation}
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Building2 size={16} className="text-purple-600" /> 
                    <span className="text-gray-400 font-normal">Type:</span> Buyer Request
                  </p>
                </div>
              </div>

              {request.status === "Pending" && (
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={()=>updateRequest(request.id,"Accepted")}
                    className="flex-1 bg-emerald-600 text-white py-2.5 rounded-xl hover:bg-emerald-700 flex items-center justify-center gap-2 text-xs font-bold shadow-sm transition-all transform hover:-translate-y-0.5"
                  >
                    <CheckCircle size={15}/> Accept
                  </button>
                  <button
                    onClick={()=>updateRequest(request.id,"Rejected")}
                    className="flex-1 bg-red-600 text-white py-2.5 rounded-xl hover:bg-red-700 flex items-center justify-center gap-2 text-xs font-bold shadow-sm transition-all transform hover:-translate-y-0.5"
                  >
                    <XCircle size={15}/> Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl p-6 border border-gray-200/60 shadow-sm">
          <p className="text-gray-500 text-base font-medium">
            No incoming buyer requests available at the moment.
          </p>
        </div>
      )}
    </div>
  )
}