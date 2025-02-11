import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../pages/home/App'
import Identity from '../pages/identity'
import Input from '../pages/input'
import Verification from '../pages/identity/verification'
import Complete from '../pages/identity/verification/complete'
import Header from '../components/Header'
import { IdentityProvider } from '../hooks/identity/provider'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '../components/error/ErrorFallback'

export const AsterRouter = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          console.log('Error boundary reset!')
        }}
        onError={() => console.log('Fallback Dayo')}
      >
        <IdentityProvider>
          <Header />
          <Routes>
            <Route path="/home" element={<App />} />
            <Route path="/input" element={<Input />} />
            <Route path="/identity" element={<Identity />} />
            <Route path="/identity/verification" element={<Verification />} />
            <Route path="/identity/verification/complete" element={<Complete />} />
          </Routes>
        </IdentityProvider>

      </ErrorBoundary>
    </BrowserRouter>
  )
}
