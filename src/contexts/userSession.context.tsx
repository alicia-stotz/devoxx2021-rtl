import React from 'react';

interface UserSessionContextProps {
  dollar: number;

  setDollar: (remaningDollar: number) => void;
}

export const UserSessionContext = React.createContext<UserSessionContextProps>({
  dollar: 2000,

  setDollar: (_remaningDollar: number) => { /* */ }
});

export const UserSessionProvider: React.FC = ({ children }) => {
  const [dollar, setDollar] = React.useState<number>(2000);

  return (
    <UserSessionContext.Provider value={{
      dollar,
      setDollar
    }}>
      {children}
    </UserSessionContext.Provider>
  )
}