import React, { createContext, useContext, useEffect, useState } from 'react';

const ApiStatusContext = createContext();

export const ApiStatusProvider = ({ children }) => {
  const [isOnline, setIsOnline] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        const response = await fetch('http://0.0.0.0:8000/health');
        if (response.ok) {
          const data = await response.json();
          if (data.status === 'ok') {
            setIsOnline(true);
          }
        }
      } catch (error) {
        console.error('Failed to fetch API status:', error);
        setIsOnline(false);
      } finally {
        setLoading(false);
      }
    };

    checkApiStatus();
  }, []);

  return (
    <ApiStatusContext.Provider value={{ isOnline, loading }}>
      {children}
    </ApiStatusContext.Provider>
  );
};

export const useApiStatus = () => {
  return useContext(ApiStatusContext);
};
