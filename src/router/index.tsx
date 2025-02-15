import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../pages/home/App'
import Identity from '../pages/identity'
import Input from '../pages/input'
import Output from '../pages/output'
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
            <Route path="" element={<App />} />
            <Route path="input" element={<Input />} />
            <Route path="output" element={<Output />} />
            <Route path="identity" element={<Identity />}>
              <Route path="verification" element={<Verification />}>
                <Route path="complete" element={<Complete />} />
              </Route>
            </Route>
          </Routes>
        </IdentityProvider>

      </ErrorBoundary>
    </BrowserRouter>
  )
}
