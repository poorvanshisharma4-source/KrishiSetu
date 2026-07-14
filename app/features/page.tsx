"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Handshake, 
  FileText, 
  ShieldCheck, 
  Sprout, 
  BarChart3, 
  Truck, 
  Sparkles 
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const features = [
  {
    icon: TrendingUp,
    title: "Demand-Driven Farming",
    desc: "Farmers grow crops based on real market demand to reduce loss and uncertainty.",
  },
  {
    icon: Handshake,
    title: "Direct Farmer-Buyer Connection",
    desc: "Eliminate middlemen and connect farmers directly with verified buyers.",
  },
  {
    icon: FileText,
    title: "Smart Digital Contracts",
    desc: "Transparent agreements between farmers and buyers with clear terms.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Reputation System",
    desc: "Badges and ratings based on successful transactions and reliability.",
  },
  {
    icon: Sprout,
    title: "Smart Farming Guidance",
    desc: "AI-based suggestions for crops, irrigation, and pest control.",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    desc: "Live demand and price trends to maximize farmer profit.",
  },
  {
    icon: Truck,
    title: "Integrated Transport Facility",
    desc: "Hassle-free logistics support and vehicle tracking to safely deliver crops directly from farm to buyer.",
  },
  {
    icon: Sparkles,
    title: "AI Match Score",
    desc: "Smart matching algorithms that rank potential buyers and farmers based on price, quality, and location.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-beige-200">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-4">
          Powerful Features for Modern Farming
        </h1>
        <p className="text-center text-gray-600 mb-12">
          KrishiSetu empowers farmers with AI, transparency and direct market access.
        </p>

        {/* 
          Yahan flex wrap aur justify-center use kiya hai taaki responsive grid 
          bhi bana rahe aur aakhiri row ke extra items automatically middle mein align ho jayein.
        */}
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-200 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col"
            >
              <f.icon className="w-10 h-10 text-green-700 mb-3" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}