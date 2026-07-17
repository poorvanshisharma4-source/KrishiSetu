// 'use client';

// import React from 'react';
// import { Sparkles } from 'lucide-react';

// interface AICopilotToggleProps {
//   onClick: () => void;
// }

// export function AICopilotToggle({ onClick }: AICopilotToggleProps) {
//   return (
//     <button
//       onClick={onClick}
//       className="inline-flex items-center gap-1.5 bg-[#2E7D32] hover:bg-[#25632A] text-white font-bold text-sm px-4 py-2 rounded-xl transition-all shadow-sm hover:shadow-md border border-emerald-700/30"
//     >
//       <Sparkles className="w-4 h-4 animate-pulse fill-current text-amber-300" />
//       <span>🤖 KrishiSetu AI</span>
//     </button>
//   );
// }

'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface AICopilotToggleProps {
  onClick: () => void;
}

export function AICopilotToggle({ onClick }: AICopilotToggleProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className="relative overflow-hidden inline-flex items-center gap-2 bg-[#2E7D32] hover:bg-[#25632A] text-white font-bold text-sm px-4 py-2 rounded-xl transition-all shadow-[0_0_15px_rgba(46,125,50,0.2)] hover:shadow-[0_0_25px_rgba(46,125,50,0.45)] border border-emerald-600/50 group"
    >
      {/* 🌟 Animated Shimmer Overlay (Left to Right Light Streak) */}
      <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />

      {/* 🚀 Interactive Sparkle Icon */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 3,
          ease: "easeInOut"
        }}
        className="relative z-10"
      >
        <Sparkles className="w-4 h-4 text-white" />
      </motion.div>

      {/* 📝 Button Text */}
      <span className="relative z-10 tracking-wide text-shadow-sm select-none">
        KrishiSetu AI
      </span>

      {/* 🟢 Pulse Notification Indicator Dot */}
      <span className="relative flex h-2 w-2 ml-0.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300"></span>
      </span>
    </motion.button>
  );
}