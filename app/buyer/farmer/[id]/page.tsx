'use client'

import { useParams, useRouter } from 'next/navigation'
import {
  ArrowLeft,
  MapPin,
  Tractor,
  Droplets,
  Sprout,
  Star,
  CheckCircle
} from 'lucide-react'


const farmers = [
  {
    id: 1,
    name: "Ramesh Kumar",
    land: "8 Acres",
    water: "Available",
    yield: "6500 kg",
    trust: "4.9",
    location: "Indore, MP",
    crop: "Wheat Farmer"
  },
  {
    id: 2,
    name: "Mohan Patel",
    land: "6 Acres",
    water: "Available",
    yield: "5400 kg",
    trust: "4.8",
    location: "Dewas, MP",
    crop: "Wheat Farmer"
  },
  {
    id: 3,
    name: "Ajay Singh",
    land: "5 Acres",
    water: "Medium",
    yield: "5000 kg",
    trust: "4.7",
    location: "Ujjain, MP",
    crop: "Wheat Farmer"
  }
]


export default function FarmerProfilePage(){

  const router = useRouter()
  const params = useParams()

  const farmer = farmers.find(
    (item)=> item.id.toString() === params.id
  )


  if(!farmer){
    return (
      <div className="p-10">
        Farmer not found
      </div>
    )
  }


  return(
    <div className="min-h-screen bg-[#F5F0E6] p-6">

      <div className="max-w-4xl mx-auto">


        <button
          onClick={()=>router.back()}
          className="flex items-center gap-2 text-green-700 mb-6"
        >
          <ArrowLeft size={20}/>
          Back
        </button>


        <div className="bg-white rounded-2xl shadow p-8">


          <div className="flex items-center justify-between">

            <div>
              <h1 className="text-3xl font-bold">
                {farmer.name}
              </h1>

              <p className="text-gray-500 mt-1">
                {farmer.crop}
              </p>
            </div>


            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold">
              Verified Farmer
            </div>

          </div>



          <div className="grid md:grid-cols-2 gap-5 mt-8">


            <div className="flex gap-3">
              <Tractor className="text-green-700"/>
              <p>Land: {farmer.land}</p>
            </div>


            <div className="flex gap-3">
              <Droplets className="text-green-700"/>
              <p>Water: {farmer.water}</p>
            </div>


            <div className="flex gap-3">
              <Sprout className="text-green-700"/>
              <p>Expected Yield: {farmer.yield}</p>
            </div>


            <div className="flex gap-3">
              <Star className="text-green-700"/>
              <p>Trust Score: {farmer.trust}</p>
            </div>


            <div className="flex gap-3">
              <MapPin className="text-green-700"/>
              <p>{farmer.location}</p>
            </div>


          </div>



          <button
            onClick={()=>router.push(`/buyer/request?farmer=${farmer.id}`)}
            className="mt-8 w-full bg-green-700 text-white py-3 rounded-xl flex items-center justify-center gap-2"
          >
            <CheckCircle size={18}/>
            Send Requirement Request
          </button>


        </div>


      </div>

    </div>
  )
}