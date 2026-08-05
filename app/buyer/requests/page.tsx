'use client'

import React, { useEffect, useState } from 'react'
import api from '@/lib/api'

export default function FarmerRequestsPage() {

  const [requests, setRequests] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const fetchRequests = async () => {
    try {
      const response = await api.get('/requests')

      console.log("REQUEST DATA:", response.data)

      setRequests(response.data || [])

    } catch (error) {
      console.log("Request fetch error:", error)
    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    fetchRequests()
  }, [])



  const handleAccept = async (id:string) => {

    try {

      await api.put(`/requests/${id}/accept`)

      alert("Request accepted")

      fetchRequests()

    } catch(error){

      console.log(error)

    }

  }



  const handleReject = async (id:string) => {

    try {

      await api.put(`/requests/${id}/reject`)

      alert("Request rejected")

      fetchRequests()

    } catch(error){

      console.log(error)

    }

  }



  return (

    <div className="p-6">

      <h1 className="mb-6 text-3xl font-bold">
        Farmer Requests
      </h1>


      {loading ? (

        <p>Loading requests...</p>

      ) : requests.length === 0 ? (

        <p className="text-gray-500">
          No farmer requests found
        </p>

      ) : (

        <div className="space-y-5">


          {requests.map((request)=>(

            <div
              key={request._id}
              className="rounded-xl bg-white p-6 shadow"
            >

              <h2 className="text-xl font-bold">
                {request.farmer?.name || "Farmer"}
              </h2>


              <p className="mt-2">
                Crop: {request.requirement?.cropName}
              </p>


              <p>
                Quantity: {request.requirement?.quantity}
              </p>


              <p>
                Message: {request.message || "No message"}
              </p>



              <div className="mt-5 flex gap-3">

                <button
                  onClick={()=>handleAccept(request._id)}
                  className="rounded-lg bg-green-600 px-5 py-2 text-white"
                >
                  Accept
                </button>


                <button
                  onClick={()=>handleReject(request._id)}
                  className="rounded-lg bg-red-600 px-5 py-2 text-white"
                >
                  Reject
                </button>


              </div>


            </div>


          ))}


        </div>

      )}


    </div>

  )

}