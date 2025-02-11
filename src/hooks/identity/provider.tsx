import React, { ReactNode, useState } from 'react'
import { IdentityContext } from './context'

// Provider コンポーネント
export const IdentityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [email, setEmailContext] = useState<string>()

  const setEmail = (email: string) => {
    setEmailContext(email)
  }

  return (
    <IdentityContext.Provider value={
      {
        email,
        setEmail,
      }
    }
    >
      {children}
    </IdentityContext.Provider>
  )
}
