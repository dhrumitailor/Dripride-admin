import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import CEOLeadershipPage from './pages/ceo-leadership/CEOLeadershipPage'
import OperationsSupportPage from './pages/operations-support/OperationsSupportPage'
import MarketingPage from './pages/marketing/MarketingPage'
import TechProductPage from './pages/tech-product/TechProductPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/ceo-leadership" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route element={<MainLayout />}>
        <Route path="/ceo-leadership" element={<CEOLeadershipPage />} />
        <Route path="/operations-support" element={<OperationsSupportPage />} />
        <Route path="/marketing" element={<MarketingPage />} />
        <Route path="/tech-product" element={<TechProductPage />} />
      </Route>
    </Routes>
  )
}

export default App
