// ErrorBoundaryComponent.tsx
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '../../components/ErrorFallback'

// エラーハンドリングが必要なコンポーネント
const ErrorProneComponent = () => {
  throw new Error('An error occurred!')
  // このコンポーネント内で発生したエラーは ErrorBoundary にキャッチされます
}

const ErrorBoundaryComponent: React.FC = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => console.log('Error boundary reset!')}
    >
      <ErrorProneComponent />
    </ErrorBoundary>
  )
}

export default ErrorBoundaryComponent
