import React from 'react'
import ReactDOM from 'react-dom/client'
import { AsterRouter } from './router'
import './index.css'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './components/error/ErrorFallback'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => console.log('Error boundary reset!')}
      onError={() => console.log('Fallback Dayo')}
    >
      <AsterRouter />
    </ErrorBoundary>
  </React.StrictMode>,
)
