'use client'

import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  MapPin,
  Sprout,
  Star,
  Tractor,
  MessageSquare,
  FileText
} from 'lucide-react'


const farmers = [
  {
    id: 1,
    name: "Ramesh Kumar",
    crop: "Wheat Farmer",
    land: "8 Acres",
    location: "Indore, MP",
    trust: "4.9",
    contractId: "CON-BUY-7892"
  },
  {
    id: 2,
    name: "Mohan Patel",
    crop: "Tomato Farmer",
    land: "6 Acres",
    location: "Dewas, MP",
    trust: "4.8",
    contractId: "CON-BUY-7891"
  },
  {
    id: 3,
    name: "Ajay Singh",
    crop: "Vegetable Farmer",
    land: "5 Acres",
    location: "Ujjain, MP",
    trust: "4.7",
    contractId: "CON-BUY-7890"
  }
]


export default function ConnectedFarmersPage(){

  const router = useRouter()


  return(
    <div className="min-h-screen bg-[#F5F0E6] p-6">

      <div className="max-w-6xl mx-auto">


        {/* Back */}
        <button
          onClick={()=>router.back()}
          className="flex items-center gap-2 text-green-700 mb-6"
        >
          <ArrowLeft size={20}/>
          Back to Dashboard
        </button>



        {/* Header */}
        <div className="bg-white rounded-2xl shadow p-6 mb-6">

          <h1 className="text-2xl font-bold text-gray-800">
            Connected Farmers
          </h1>

          <p className="text-gray-600 mt-1">
            Manage farmers connected through KrishiSetu contracts.
          </p>

        </div>



        {/* Farmer Cards */}

        <div className="grid md:grid-cols-3 gap-6">

        {farmers.map((farmer)=>(

          <div
            key={farmer.id}
            className="bg-white rounded-2xl shadow p-6"
          >

            <div className="flex justify-between items-center mb-4">

              <h2 className="text-xl font-bold text-gray-800">
                {farmer.name}
              </h2>

              <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Verified
              </div>

            </div>


            <div className="space-y-3 text-gray-600">


              <p className="flex gap-2 items-center">
                <Sprout size={18}/>
                {farmer.crop}
              </p>


              <p className="flex gap-2 items-center">
                <Tractor size={18}/>
                {farmer.land}
              </p>


              <p className="flex gap-2 items-center">
                <MapPin size={18}/>
                {farmer.location}
              </p>


              <p className="flex gap-2 items-center">
                <Star size={18}/>
                Trust Score: {farmer.trust}
              </p>


            </div>



            <div className="flex gap-3 mt-6">

             <button
  onClick={()=>router.push(`/buyer/contracts/${farmer.contractId}`)}
  className="flex-1 bg-green-700 text-white py-2 rounded-xl flex items-center justify-center gap-2"
>
  <FileText size={16}/>
  Contract
</button>


              <button
  onClick={() =>
    router.push(
      `/buyer/messages?farmer=${encodeURIComponent(farmer.name)}`
    )
  }
  className="flex-1 bg-blue-600 text-white py-2 rounded-xl flex items-center justify-center gap-2"
>
  <MessageSquare size={16}/>
  Message
</button>

            </div>


          </div>

        ))}

        </div>


      </div>

    </div>
  )

}