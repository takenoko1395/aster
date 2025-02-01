import './App.css'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '../../components/ErrorFallback'
import { MyButton } from '../MyButton'

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => console.log('Reset!')}
      onError={() => console.log('２！！！')}
    >
      <div className="App">
        <header className="App-header">
          <img src="/logo.svg" className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <MyButton title={'I will throw an error on click'} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ErrorBoundary>
  )
}

export default App
