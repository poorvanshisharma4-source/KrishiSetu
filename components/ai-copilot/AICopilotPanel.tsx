'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Sparkles, Send, Mic, Image as ImageIcon, Leaf, TrendingUp, 
  CloudSun, Bug, Landmark, HelpCircle, Users, Truck, BarChart3, 
  FileText, ShoppingBag, Calendar, CheckCircle, ArrowRight
} from 'lucide-react';

interface AICopilotPanelProps {
  isOpen: boolean;
  onClose: () => void;
  userRole: 'farmer' | 'buyer';
}

export default function AICopilotPanel({ isOpen, onClose, userRole }: AICopilotPanelProps) {
  const [query, setQuery] = useState('');

  // Suggested Questions based on roles
  const suggestions = {
    farmer: [
      { text: 'Best crop for this season', icon: Leaf },
      { text: 'Demand prediction', icon: TrendingUp },
      { text: 'Weather forecast', icon: CloudSun },
      { text: 'Pest detection alert', icon: Bug },
      { text: 'Government schemes', icon: Landmark },
    ],
    buyer: [
      { text: 'Find best farmers', icon: Users },
      { text: 'Track logistics path', icon: Truck },
      { text: 'Market price prediction', icon: BarChart3 },
      { text: 'Explain current contract', icon: FileText },
      { text: 'Procurement planning', icon: ShoppingBag },
    ]
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-full max-w-md bg-[#F5F0E6] shadow-2xl z-50 flex flex-col border-l border-[#E5DCCB]"
          >
            {/* Header */}
            <div className="p-6 bg-white border-b border-[#E5DCCB] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-[#2E7D32]/10 rounded-xl flex items-center justify-center text-[#2E7D32]">
                  <Sparkles className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1.5">
                    KrishiSetu AI Copilot
                  </h2>
                  <p className="text-xs text-gray-500 font-medium">
                    Your Smart Farming & Procurement Assistant
                  </p>
                </div>
              </div>
              <button 
                onClick={onClose} 
                className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Assistant Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              
              {/* Contextual Active Role Badge */}
              <div className="bg-white border border-[#E5DCCB] px-4 py-2.5 rounded-xl flex items-center justify-between shadow-sm">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Active Workspace</span>
                <span className="text-xs font-bold bg-[#2E7D32]/10 text-[#2E7D32] px-2.5 py-1 rounded-full capitalize">
                  {userRole} Mode
                </span>
              </div>

              {/* Dynamic Simulated AI Response Card */}
              <div className="space-y-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Latest Insight</span>
                
                {userRole === 'farmer' ? (
                  /* Farmer Insights Card */
                  <div className="bg-white border border-[#E5DCCB] rounded-2xl p-5 shadow-sm space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#2E7D32]">
                        <TrendingUp className="w-4 h-4" /> AI Recommendation
                      </div>
                      <span className="text-xs font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md flex items-center gap-1">
                        96% Match
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Soybean demand is expected to increase by <strong className="text-gray-900 font-semibold">18%</strong> in your district over the next 45 days. Local soil reports indicate optimal moisture.
                    </p>
                    <div className="pt-2 flex gap-2">
                      <button className="flex-1 bg-[#2E7D32] text-white text-xs font-bold py-2.5 px-4 rounded-xl hover:bg-[#25632A] transition-all flex items-center justify-center gap-1.5">
                        View Buyers <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <button className="bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-bold py-2.5 px-4 border border-gray-200 rounded-xl transition-all">
                        Market Analysis
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Buyer Insights Card */
                  <div className="bg-white border border-[#E5DCCB] rounded-2xl p-5 shadow-sm space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#2E7D32]">
                        <Truck className="w-4 h-4" /> Logistics Optimizer
                      </div>
                      <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
                        AI Recommended
                      </span>
                    </div>
                    <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl space-y-2">
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Partner: <strong>Green Logistics</strong></span>
                        <span className="text-emerald-700 font-bold">ETA: 18 Hours</span>
                      </div>
                      <div className="text-sm font-bold text-gray-800">Estimated Cost: ₹4,200</div>
                    </div>
                    <div className="pt-1 flex gap-2">
                      <button className="flex-1 bg-[#2E7D32] text-white text-xs font-bold py-2.5 px-4 rounded-xl hover:bg-[#25632A] transition-all flex items-center justify-center gap-1.5">
                        Book Transport Now <CheckCircle className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Suggestions Quick Chips */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Suggested Actions</span>
                <div className="flex flex-wrap gap-2">
                  {suggestions[userRole].map((chip, idx) => {
                    const Icon = chip.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => setQuery(chip.text)}
                        className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-[#E5DCCB] hover:border-gray-300 px-3 py-2 rounded-xl text-xs font-medium text-gray-700 shadow-xs transition-all text-left"
                      >
                        <Icon className="w-3.5 h-3.5 text-[#2E7D32]" />
                        {chip.text}
                      </button>
                    );
                  })}
                </div>
              </div>
              
            </div>

            {/* Input Form Footer */}
            <div className="p-4 bg-white border-t border-[#E5DCCB]">
              <div className="relative bg-[#F5F0E6] rounded-2xl p-2 border border-[#E5DCCB] focus-within:border-[#2E7D32] focus-within:ring-1 focus-within:ring-[#2E7D32] transition-all">
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask anything (e.g. 'Predict demand' or 'Market price')"
                  rows={2}
                  className="w-full bg-transparent border-0 outline-none resize-none text-sm text-gray-800 placeholder-gray-400 px-2 pt-1"
                />
                <div className="flex items-center justify-between pt-2 px-1">
                  <div className="flex items-center gap-1.5">
                    <button className="p-1.5 text-gray-400 hover:text-[#2E7D32] hover:bg-white/50 rounded-lg transition-colors">
                      <Mic className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-[#2E7D32] hover:bg-white/50 rounded-lg transition-colors">
                      <ImageIcon className="w-4 h-4" />
                    </button>
                  </div>
                  <button 
                    disabled={!query.trim()}
                    className="bg-[#2E7D32] disabled:bg-gray-300 text-white p-2 rounded-xl hover:bg-[#25632A] transition-all"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}