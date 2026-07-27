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
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/components/LanguageContext";

export default function FeaturesPage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: TrendingUp,
      title: t("features.demandDrivenFarming.title"),
      desc: t("features.demandDrivenFarming.description"),
    },
    {
      icon: Handshake,
      title: t("features.directConnection.title"),
      desc: t("features.directConnection.description"),
    },
    {
      icon: FileText,
      title: t("features.digitalContracts.title"),
      desc: t("features.digitalContracts.description"),
    },
    {
      icon: ShieldCheck,
      title: t("features.trustSystem.title"),
      desc: t("features.trustSystem.description"),
    },
    {
      icon: Sprout,
      title: t("features.smartFarming.title"),
      desc: t("features.smartFarming.description"),
    },
    {
      icon: BarChart3,
      title: t("features.marketIntelligence.title"),
      desc: t("features.marketIntelligence.description"),
    },
    {
      icon: Truck,
      title: t("features.transport.title"),
      desc: t("features.transport.description"),
    },
    {
      icon: Sparkles,
      title: t("features.aiMatch.title"),
      desc: t("features.aiMatch.description"),
    },
  ];

  return (
    <div className="min-h-screen bg-beige-200">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-4">
          {t("features.title")}
        </h1>

        <p className="text-center text-gray-600 mb-12">
          {t("features.subtitle")}
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-200 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col"
            >
              <feature.icon className="w-10 h-10 text-green-700 mb-3" />

              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-600">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}