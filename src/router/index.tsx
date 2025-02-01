import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../pages/app/App'
import { MyButton } from '../pages/MyButton'
import { ErrorFallback } from '../components/ErrorFallback'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorBoundaryComponent from '../pages/ErrorExample/error'

export const AsterRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route
          path="/button"
          element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => console.log('Error boundary reset!')}
            >
              <MyButton title="I will throw an error on click" />
            </ErrorBoundary>
          }
        />
        <Route path="/" element={<ErrorBoundaryComponent />} />
      </Routes>
    </BrowserRouter>
  )
}
