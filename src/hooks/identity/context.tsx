import { createContext } from 'react'

export interface IdentityContextType {
  email: string | undefined
  setEmail: (email: string) => void
}

export const IdentityContext = createContext<IdentityContextType>(
  {
    email: undefined,
    setEmail: () => {
      throw new Error('setIdentity must be implemented')
    },
  },
)
