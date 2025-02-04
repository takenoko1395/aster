import './App.css'
import { ErrorBoundary } from 'react-error-boundary'
import { MyButton } from '../MyButton'
import { Redirect } from '../../components/error/Redirect'

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={Redirect}
      onReset={() => console.log('Reset!')}
      onError={() => console.log('')}
    >
      <div className="App">
        <header className="App-header">
          <img src="/logo.svg" className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <MyButton title="I will throw an error on click" />
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
