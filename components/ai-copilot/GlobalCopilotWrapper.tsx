'use client';

import AICopilotPanel from './AICopilotPanel';
import { useAICopilot } from './AICopilotContext';

export default function GlobalCopilotWrapper() {
  const { isOpen, closeCopilot } = useAICopilot();
  return (
    <AICopilotPanel 
      isOpen={isOpen} 
      onClose={closeCopilot} 
      userRole="farmer" 
    />
  );
}