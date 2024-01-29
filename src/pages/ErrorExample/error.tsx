// ErrorBoundaryComponent.tsx
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

// エラーが発生した際に表示するエラーメッセージ
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundary: () => void }) => {
  return (
    <div>
      <h2>Something went wrong:</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

// エラーハンドリングが必要なコンポーネント
const ErrorProneComponent = () => {
  throw new Error('An error occurred!')
  // このコンポーネント内で発生したエラーは ErrorBoundary にキャッチされます
}

const ErrorBoundaryComponent: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => console.log('Error boundary reset!')}>
      <ErrorProneComponent />
    </ErrorBoundary>
  )
}

export default ErrorBoundaryComponent
