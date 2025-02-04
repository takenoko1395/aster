import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../pages/home/App'
import Identity from '../pages/identity'
import Header from '../components/Header'

export const AsterRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/identity" element={<Identity />} />
      </Routes>
    </BrowserRouter>
  )
}
