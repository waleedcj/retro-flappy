// PersonalBestContext.tsx
import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';

interface PersonalBestContextType {
  personalBest: number;
  setPersonalBest: React.Dispatch<React.SetStateAction<number>>;
}

const PersonalBestContext = createContext<PersonalBestContextType | undefined>(undefined);

export const PersonalBestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [personalBest, setPersonalBest] = useState<number>(() => {
    const storedBest = localStorage.getItem('personalBest');
    return storedBest ? parseInt(storedBest, 10) : 0;
  });

  // Sync with localStorage whenever personalBest changes
  useEffect(() => {
    localStorage.setItem('personalBest', personalBest.toString());
  }, [personalBest]);

  return (
    <PersonalBestContext.Provider value={{ personalBest, setPersonalBest }}>
      {children}
    </PersonalBestContext.Provider>
  );
};

// Custom hook for consuming the context
export const usePersonalBest = (): PersonalBestContextType => {
  const context = useContext(PersonalBestContext);
  if (context === undefined) {
    throw new Error('usePersonalBest must be used within a PersonalBestProvider');
  }
  return context;
};
