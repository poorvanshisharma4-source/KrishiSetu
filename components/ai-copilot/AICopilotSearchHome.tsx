'use client';

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface AICopilotSearchHomeProps {
  onActivate: () => void;
}

export default function AICopilotSearchHome({ onActivate }: AICopilotSearchHomeProps) {
  return (
    <div className="bg-white border border-[#E5DCCB] rounded-2xl p-6 shadow-xs max-w-4xl mx-auto my-4">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-4 h-4 text-[#F59E0B]" />
        <h3 className="text-sm font-bold text-gray-800">Ask KrishiSetu AI</h3>
      </div>
      <div 
        onClick={onActivate}
        className="flex items-center justify-between bg-[#F5F0E6] border border-[#E5DCCB] hover:border-[#2E7D32] px-4 py-3 rounded-xl cursor-pointer text-gray-400 text-sm transition-all shadow-inner"
      >
        <span>Type command (e.g., "Need 500 kg organic tomatoes" or "Predict crop demand")...</span>
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#2E7D32] bg-white px-2.5 py-1 rounded-lg border border-[#E5DCCB]">
          Open Copilot <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}