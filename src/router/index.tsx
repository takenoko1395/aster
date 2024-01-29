import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../pages/app/App'
import { MyButton } from '../pages/MyButton'

export const AsterRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route
          path="/button"
          element={(
            <MyButton title="I will throw an error on click" />
          )}
        />
      </Routes>
    </BrowserRouter>
  )
}
