import { useContext } from 'react'
import { IdentityContext } from './context'

// Context を利用するための Hook
export const useIdentity = () => {
  const context = useContext(IdentityContext)
  if (!context) {
    throw new Error('useIdentity must be used within an IdentityProvider')
  }
  return context
}
