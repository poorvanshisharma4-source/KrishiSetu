'use client';

import React, { createContext, useContext, useState } from 'react';

const AICopilotContext = createContext({
  isOpen: false,
  openCopilot: () => {},
  closeCopilot: () => {},
});

export function AICopilotProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AICopilotContext.Provider 
      value={{ 
        isOpen, 
        openCopilot: () => setIsOpen(true), 
        closeCopilot: () => setIsOpen(false) 
      }}
    >
      {children}
    </AICopilotContext.Provider>
  );
}

export const useAICopilot = () => useContext(AICopilotContext);