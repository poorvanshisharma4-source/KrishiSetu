// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   X, Sparkles, Send, Mic, Image as ImageIcon, Leaf, TrendingUp, 
//   CloudSun, Bug, Landmark, HelpCircle, Users, Truck, BarChart3, 
//   FileText, ShoppingBag, Calendar, CheckCircle, ArrowRight
// } from 'lucide-react';

// interface AICopilotPanelProps {
//   isOpen: boolean;
//   onClose: () => void;
//   userRole: 'farmer' | 'buyer';
// }

// export default function AICopilotPanel({ isOpen, onClose, userRole }: AICopilotPanelProps) {
//   const [query, setQuery] = useState('');

//   // Suggested Questions based on roles
//   const suggestions = {
//     farmer: [
//       { text: 'Best crop for this season', icon: Leaf },
//       { text: 'Demand prediction', icon: TrendingUp },
//       { text: 'Weather forecast', icon: CloudSun },
//       { text: 'Pest detection alert', icon: Bug },
//       { text: 'Government schemes', icon: Landmark },
//     ],
//     buyer: [
//       { text: 'Find best farmers', icon: Users },
//       { text: 'Track logistics path', icon: Truck },
//       { text: 'Market price prediction', icon: BarChart3 },
//       { text: 'Explain current contract', icon: FileText },
//       { text: 'Procurement planning', icon: ShoppingBag },
//     ]
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop Overlay */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
//           />

//           {/* Sliding Panel */}
//           <motion.div
//             initial={{ x: '100%' }}
//             animate={{ x: 0 }}
//             exit={{ x: '100%' }}
//             transition={{ type: 'spring', damping: 25, stiffness: 200 }}
//             className="fixed right-0 top-0 h-screen w-full max-w-md bg-[#F5F0E6] shadow-2xl z-50 flex flex-col border-l border-[#E5DCCB]"
//           >
//             {/* Header */}
//             <div className="p-6 bg-white border-b border-[#E5DCCB] flex items-center justify-between">
//               <div className="flex items-center gap-2.5">
//                 <div className="w-9 h-9 bg-[#2E7D32]/10 rounded-xl flex items-center justify-center text-[#2E7D32]">
//                   <Sparkles className="w-5 h-5 fill-current" />
//                 </div>
//                 <div>
//                   <h2 className="text-lg font-bold text-gray-900 flex items-center gap-1.5">
//                     KrishiSetu AI Copilot
//                   </h2>
//                   <p className="text-xs text-gray-500 font-medium">
//                     Your Smart Farming & Procurement Assistant
//                   </p>
//                 </div>
//               </div>
//               <button 
//                 onClick={onClose} 
//                 className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600 transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Scrollable Assistant Body */}
//             <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              
//               {/* Contextual Active Role Badge */}
//               <div className="bg-white border border-[#E5DCCB] px-4 py-2.5 rounded-xl flex items-center justify-between shadow-sm">
//                 <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Active Workspace</span>
//                 <span className="text-xs font-bold bg-[#2E7D32]/10 text-[#2E7D32] px-2.5 py-1 rounded-full capitalize">
//                   {userRole} Mode
//                 </span>
//               </div>

//               {/* Dynamic Simulated AI Response Card */}
//               <div className="space-y-4">
//                 <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Latest Insight</span>
                
//                 {userRole === 'farmer' ? (
//                   /* Farmer Insights Card */
//                   <div className="bg-white border border-[#E5DCCB] rounded-2xl p-5 shadow-sm space-y-4">
//                     <div className="flex items-start justify-between">
//                       <div className="flex items-center gap-2 text-sm font-bold text-[#2E7D32]">
//                         <TrendingUp className="w-4 h-4" /> AI Recommendation
//                       </div>
//                       <span className="text-xs font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md flex items-center gap-1">
//                         96% Match
//                       </span>
//                     </div>
//                     <p className="text-gray-700 text-sm leading-relaxed">
//                       Soybean demand is expected to increase by <strong className="text-gray-900 font-semibold">18%</strong> in your district over the next 45 days. Local soil reports indicate optimal moisture.
//                     </p>
//                     <div className="pt-2 flex gap-2">
//                       <button className="flex-1 bg-[#2E7D32] text-white text-xs font-bold py-2.5 px-4 rounded-xl hover:bg-[#25632A] transition-all flex items-center justify-center gap-1.5">
//                         View Buyers <ArrowRight className="w-3.5 h-3.5" />
//                       </button>
//                       <button className="bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-bold py-2.5 px-4 border border-gray-200 rounded-xl transition-all">
//                         Market Analysis
//                       </button>
//                     </div>
//                   </div>
//                 ) : (
//                   /* Buyer Insights Card */
//                   <div className="bg-white border border-[#E5DCCB] rounded-2xl p-5 shadow-sm space-y-4">
//                     <div className="flex items-start justify-between">
//                       <div className="flex items-center gap-2 text-sm font-bold text-[#2E7D32]">
//                         <Truck className="w-4 h-4" /> Logistics Optimizer
//                       </div>
//                       <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
//                         AI Recommended
//                       </span>
//                     </div>
//                     <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl space-y-2">
//                       <div className="flex justify-between text-xs text-gray-500">
//                         <span>Partner: <strong>Green Logistics</strong></span>
//                         <span className="text-emerald-700 font-bold">ETA: 18 Hours</span>
//                       </div>
//                       <div className="text-sm font-bold text-gray-800">Estimated Cost: ₹4,200</div>
//                     </div>
//                     <div className="pt-1 flex gap-2">
//                       <button className="flex-1 bg-[#2E7D32] text-white text-xs font-bold py-2.5 px-4 rounded-xl hover:bg-[#25632A] transition-all flex items-center justify-center gap-1.5">
//                         Book Transport Now <CheckCircle className="w-3.5 h-3.5" />
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Suggestions Quick Chips */}
//               <div className="space-y-3">
//                 <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Suggested Actions</span>
//                 <div className="flex flex-wrap gap-2">
//                   {suggestions[userRole].map((chip, idx) => {
//                     const Icon = chip.icon;
//                     return (
//                       <button
//                         key={idx}
//                         onClick={() => setQuery(chip.text)}
//                         className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-[#E5DCCB] hover:border-gray-300 px-3 py-2 rounded-xl text-xs font-medium text-gray-700 shadow-xs transition-all text-left"
//                       >
//                         <Icon className="w-3.5 h-3.5 text-[#2E7D32]" />
//                         {chip.text}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
              
//             </div>

//             {/* Input Form Footer */}
//             <div className="p-4 bg-white border-t border-[#E5DCCB]">
//               <div className="relative bg-[#F5F0E6] rounded-2xl p-2 border border-[#E5DCCB] focus-within:border-[#2E7D32] focus-within:ring-1 focus-within:ring-[#2E7D32] transition-all">
//                 <textarea
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   placeholder="Ask anything (e.g. 'Predict demand' or 'Market price')"
//                   rows={2}
//                   className="w-full bg-transparent border-0 outline-none resize-none text-sm text-gray-800 placeholder-gray-400 px-2 pt-1"
//                 />
//                 <div className="flex items-center justify-between pt-2 px-1">
//                   <div className="flex items-center gap-1.5">
//                     <button className="p-1.5 text-gray-400 hover:text-[#2E7D32] hover:bg-white/50 rounded-lg transition-colors">
//                       <Mic className="w-4 h-4" />
//                     </button>
//                     <button className="p-1.5 text-gray-400 hover:text-[#2E7D32] hover:bg-white/50 rounded-lg transition-colors">
//                       <ImageIcon className="w-4 h-4" />
//                     </button>
//                   </div>
//                   <button 
//                     disabled={!query.trim()}
//                     className="bg-[#2E7D32] disabled:bg-gray-300 text-white p-2 rounded-xl hover:bg-[#25632A] transition-all"
//                   >
//                     <Send className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Sparkles, Brain, TrendingUp, CloudRain, AlertTriangle, 
  Truck, FileText, Users, ArrowRight, Languages, ShieldCheck, HelpCircle, UserCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

interface AICopilotPanelProps {
  isOpen: boolean;
  onClose: () => void;
  userRole: 'farmer' | 'buyer';
}

export default function AICopilotPanel({ isOpen, onClose, userRole }: AICopilotPanelProps) {
  const pathname = usePathname();
  const [inputMessage, setInputMessage] = useState('');
  
  // URL path detect karke AI automatically apna mode aur memory set karega
  const isBuyerRoute = pathname.includes('/buyer');
  const isDashboard = pathname.includes('/dashboard');
  const isContractPage = pathname.includes('/contracts');
  const isPostRequirement = pathname.includes('/post-requirement');
  
  const currentMode = isBuyerRoute ? 'buyer' : 'farmer';

  // Sample prompts toggle according to route context
  const getSamplePrompts = () => {
    if (currentMode === 'buyer') {
      if (isPostRequirement) return ["Suggested market price for Nagpur?", "Analyze delivery risk for Tomato suppliers", "Find alternative suppliers"];
      if (isContractPage) return ["Summarize contract penalty clauses", "Verify farmer trust metrics", "Check contract timelines"];
      return ["Find best farmers for 5 tons onion", "Show market pricing trends", "Predict logistics delay risks"];
    } else {
      if (isContractPage) return ["Explain contract in simple terms", "Translate buyer requirement to Hindi", "Is the payment secured by escrow?"];
      return ["Which crop should I grow this season?", "Show pest alert details", "Book shared logistics truck"];
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 400 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed right-0 top-0 h-screen w-full sm:w-[420px] bg-[#FAF8F5] border-l border-[#E5DCCB] shadow-2xl z-50 flex flex-col font-sans"
        >
          {/* Header */}
          <div className="p-4 bg-white border-b border-[#E5DCCB] flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-xl ${currentMode === 'buyer' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-gray-900 flex items-center gap-1.5">
                  KrishiSetu AI <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
                </h2>
                <p className="text-xs text-gray-500 capitalize font-medium">Active Assistant: {currentMode} Mode</p>
              </div>
            </div>
            <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-400 hover:text-gray-700">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Context Banner */}
          <div className={`px-4 py-2 text-xs flex items-center gap-2 ${currentMode === 'buyer' ? 'bg-amber-50 text-amber-800' : 'bg-green-50 text-green-800'}`}>
            <UserCheck className="w-3.5 h-3.5 flex-shrink-0" />
            <span>
              {isContractPage && "📄 Smart Contract Stage Detected. Context loaded."}
              {isPostRequirement && "📈 Live Requirement Analysis Active."}
              {!isContractPage && !isPostRequirement && isDashboard && `🎯 Personalized ${currentMode === 'buyer' ? 'Krati' : 'Indore Farmer'} memory loaded.`}
              {!isDashboard && !isContractPage && !isPostRequirement && "🌾 Page context synced dynamically."}
            </span>
          </div>

          {/* Scrollable Intelligence Workspace */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            
            {/* Dynamic Card 1: Context Recommendation Engine */}
            <div className="bg-white rounded-xl border border-[#E5DCCB] p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">AI Recommendation</span>
                <span className="text-xs bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded-full">
                  Confidence: {currentMode === 'buyer' ? '94%' : '96%'}
                </span>
              </div>
              
              {currentMode === 'buyer' ? (
                // Buyer Recommendations
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-gray-900">Procurement & Sourcing Alert</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Found <strong className="text-gray-900">12 verified farmers</strong> near your target hub meeting the trust threshold. Delivery success predictability model scores at <span className="text-green-600 font-semibold">96%</span>.
                  </p>
                  <div className="pt-1 flex gap-2 text-[11px] text-gray-500">
                    <span className="bg-gray-100 px-2 py-0.5 rounded">Risk: Low (2%)</span>
                    <span className="bg-gray-100 px-2 py-0.5 rounded">Est. Cost: ₹8.6L</span>
                  </div>
                </div>
              ) : (
                // Farmer Recommendations
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-gray-900">Kharif Strategy: Soybean Demand Up</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Market demand vectors for Soybean shifted <span className="text-green-600 font-semibold">+18%</span>. Soil mapping registers Black Soil parameters as highly compatible for high yield output.
                  </p>
                  <div className="pt-1 flex gap-2 text-[11px] text-gray-500">
                    <span className="bg-gray-100 px-2 py-0.5 rounded">Location: Indore</span>
                    <span className="bg-gray-100 px-2 py-0.5 rounded">Soil Check: Ideal</span>
                  </div>
                </div>
              )}
            </div>

            {/* Dynamic Card 2: Quick Insights Matrices */}
            <div className="bg-white rounded-xl border border-[#E5DCCB] p-4 shadow-sm space-y-3">
              <span className="text-xs font-bold text-gray-400 tracking-wider uppercase block">Quick Decision Matrix</span>
              <div className="grid grid-cols-2 gap-2.5">
                {currentMode === 'buyer' ? (
                  <>
                    <div className="p-2.5 bg-amber-50/50 rounded-lg border border-amber-100">
                      <TrendingUp className="w-4 h-4 text-amber-600 mb-1" />
                      <div className="text-[11px] text-gray-500">Tomato Trend</div>
                      <div className="text-xs font-bold text-gray-900">↑ 12% Price Spark</div>
                    </div>
                    <div className="p-2.5 bg-red-50/50 rounded-lg border border-red-100">
                      <AlertTriangle className="w-4 h-4 text-red-600 mb-1" />
                      <div className="text-[11px] text-gray-500">Delivery Risk</div>
                      <div className="text-xs font-bold text-gray-900">Low Late Chance</div>
                    </div>
                    <div className="p-2.5 bg-blue-50/50 rounded-lg border border-blue-100">
                      <Truck className="w-4 h-4 text-blue-600 mb-1" />
                      <div className="text-[11px] text-gray-500">Logistics Routed</div>
                      <div className="text-xs font-bold text-gray-900">4 nearest hubs</div>
                    </div>
                    <div className="p-2.5 bg-green-50/50 rounded-lg border border-green-100">
                      <ShieldCheck className="w-4 h-4 text-green-600 mb-1" />
                      <div className="text-[11px] text-gray-500">Avg Farmer Trust</div>
                      <div className="text-xs font-bold text-gray-900">4.8 / 5.0 Rating</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-2.5 bg-green-50/50 rounded-lg border border-green-100">
                      <TrendingUp className="w-4 h-4 text-green-600 mb-1" />
                      <div className="text-[11px] text-gray-500">Market Demand</div>
                      <div className="text-xs font-bold text-gray-900">Tomato / Soybean ↑</div>
                    </div>
                    <div className="p-2.5 bg-blue-50/50 rounded-lg border border-blue-100">
                      <CloudRain className="w-4 h-4 text-blue-600 mb-1" />
                      <div className="text-[11px] text-gray-500">Weather Forecast</div>
                      <div className="text-xs font-bold text-gray-900">Rain in 2 days</div>
                    </div>
                    <div className="p-2.5 bg-orange-50/50 rounded-lg border border-orange-100">
                      <AlertTriangle className="w-4 h-4 text-orange-600 mb-1" />
                      <div className="text-[11px] text-gray-500">Pest Alert System</div>
                      <div className="text-xs font-bold text-gray-900">Cotton risk high</div>
                    </div>
                    <div className="p-2.5 bg-purple-50/50 rounded-lg border border-purple-100">
                      <Truck className="w-4 h-4 text-purple-600 mb-1" />
                      <div className="text-[11px] text-gray-500">Shared Logistics</div>
                      <div className="text-xs font-bold text-gray-900">Save up to 40%</div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Dynamic Card 3: Contextual Smart Action Buttons */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-gray-400 tracking-wider uppercase block">Contextual Actions</span>
              <div className="grid grid-cols-2 gap-2">
                {currentMode === 'buyer' ? (
                  <>
                    <Button variant="outline" className="justify-start text-left h-auto py-2.5 px-3 text-xs border-[#E5DCCB] hover:bg-amber-50">
                      <Users className="w-3.5 h-3.5 mr-2 text-amber-600 flex-shrink-0" />
                      Find Best Farmers
                    </Button>
                    <Button variant="outline" className="justify-start text-left h-auto py-2.5 px-3 text-xs border-[#E5DCCB] hover:bg-amber-50">
                      <TrendingUp className="w-3.5 h-3.5 mr-2 text-amber-600 flex-shrink-0" />
                      Market Fair Price
                    </Button>
                    <Button variant="outline" className="justify-start text-left h-auto py-2.5 px-3 text-xs border-[#E5DCCB] hover:bg-amber-50">
                      <Truck className="w-3.5 h-3.5 mr-2 text-amber-600 flex-shrink-0" />
                      Arrange Transport
                    </Button>
                    <Button variant="outline" className="justify-start text-left h-auto py-2.5 px-3 text-xs border-[#E5DCCB] hover:bg-amber-50">
                      <FileText className="w-3.5 h-3.5 mr-2 text-amber-600 flex-shrink-0" />
                      Summarize Contract
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" className="justify-start text-left h-auto py-2.5 px-3 text-xs border-[#E5DCCB] hover:bg-green-50">
                      <Brain className="w-3.5 h-3.5 mr-2 text-green-600 flex-shrink-0" />
                      Predict Demand
                    </Button>
                    <Button variant="outline" className="justify-start text-left h-auto py-2.5 px-3 text-xs border-[#E5DCCB] hover:bg-green-50">
                      <CloudRain className="w-3.5 h-3.5 mr-2 text-green-600 flex-shrink-0" />
                      Harvest Weather
                    </Button>
                    <Button variant="outline" className="justify-start text-left h-auto py-2.5 px-3 text-xs border-[#E5DCCB] hover:bg-green-50">
                      <Truck className="w-3.5 h-3.5 mr-2 text-green-600 flex-shrink-0" />
                      Shared Trucking
                    </Button>
                    <Button variant="outline" className="justify-start text-left h-auto py-2.5 px-3 text-xs border-[#E5DCCB] hover:bg-green-50">
                      <FileText className="w-3.5 h-3.5 mr-2 text-green-600 flex-shrink-0" />
                      Explain Contract
                    </Button>
                  </>
                )}
              </div>
            </div>

            {/* Translation & Multilingual Component Teaser (USP Feature) */}
            <div className="bg-gradient-to-r from-slate-50 to-indigo-50 border border-slate-200 rounded-xl p-3 flex items-start gap-3">
              <Languages className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-indigo-900 tracking-wide uppercase block">AI Automated Translation Engine</span>
                <p className="text-[11px] text-slate-600 leading-normal">
                  {currentMode === 'buyer' 
                    ? 'Inbound farmer updates translated: "Kal dispatch karunga" → "I will dispatch tomorrow."'
                    : 'Outbound agreements translated to native scripts automatically for clear understanding.'}
                </p>
              </div>
            </div>
          </div>

          {/* AI Communication Footer & Input Panel */}
          <div className="p-4 bg-white border-t border-[#E5DCCB] space-y-3 shadow-lg">
            {/* Suggested Context Actions Trigger Box */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5" /> Sample Queries For This Stage
              </span>
              <div className="flex flex-col gap-1">
                {getSamplePrompts().map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setInputMessage(prompt)}
                    className="text-left text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100 transition-colors truncate"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Interactive Input Frame */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="text"
                placeholder={`Ask anything regarding this ${currentMode === 'buyer' ? 'procurement' : 'crop cultivation'} stage...`}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 bg-gray-50 border border-[#E5DCCB] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gray-400 placeholder:text-gray-400 text-gray-900"
              />
              <Button size="icon" className={`rounded-xl h-9 w-9 flex-shrink-0 ${currentMode === 'buyer' ? 'bg-amber-600 hover:bg-amber-700' : 'bg-green-700 hover:bg-green-800'}`}>
                <ArrowRight className="w-4 h-4 text-white" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}