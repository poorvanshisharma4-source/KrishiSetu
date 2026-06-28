'use client'

import CropRequirementForm from "@/components/crop-requirement-form"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PostRequirementPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E6]">
      <Navbar />
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <CropRequirementForm />
      </main>
      <Footer />
    </div>
  )
}