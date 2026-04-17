// import { Navigate, Route, Routes } from 'react-router-dom'
// import MainLayout from './layout/MainLayout'
// import LoginPage from './pages/auth/LoginPage'
// import SignupPage from './pages/auth/SignupPage'
// import CEOLeadershipPage from './pages/ceo-leadership/CEOLeadershipPage'
// import OperationsSupportPage from './pages/operations-support/OperationsSupportPage'
// import MarketingPage from './pages/marketing/MarketingPage'
// import TechProductPage from './pages/tech-product/TechProductPage'

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/ceo-leadership" replace />} />
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/signup" element={<SignupPage />} />

//       <Route element={<MainLayout />}>
//         <Route path="/ceo-leadership" element={<CEOLeadershipPage />} />
//         <Route path="/operations-support" element={<OperationsSupportPage />} />
//         <Route path="/marketing" element={<MarketingPage />} />
//         <Route path="/tech-product" element={<TechProductPage />} />
//       </Route>
//     </Routes>
//   )
// }

// export default App
//edit 1
// import { Navigate, Route, Routes } from 'react-router-dom'
// import MainLayout from './layout/MainLayout'
// import LoginPage from './pages/auth/LoginPage'
// import SignupPage from './pages/auth/SignupPage'
// import CEOLeadershipPage from './pages/ceo-leadership/CEOLeadershipPage'
// import OperationsSupportPage from './pages/operations-support/OperationsSupportPage'
// import MarketingPage from './pages/marketing/MarketingPage'
// import TechProductPage from './pages/tech-product/TechProductPage'

// // ✅ ADD THIS TEMP DASHBOARD
// // function Dashboard() {
// //   return <div className="p-6 text-xl">Dashboard Page</div>
// // }
// import DashboardPage from './pages/dashboard/DashboardPage'

// function App() {
//   return (
//     <Routes>
//       {/* redirect root → dashboard instead */}
//       {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
    
//       <Route path="/dashboard" element={<DashboardPage />} />
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/signup" element={<SignupPage />} />

//       {/* MAIN LAYOUT */}
//       <Route element={<MainLayout />}>

//         {/* ✅ ADD THIS */}
//         <Route path="/dashboard" element={<Dashboard />} />

//         <Route path="/ceo-leadership" element={<CEOLeadershipPage />} />
//         <Route path="/operations-support" element={<OperationsSupportPage />} />
//         <Route path="/marketing" element={<MarketingPage />} />
//         <Route path="/tech-product" element={<TechProductPage />} />

//       </Route>
//     </Routes>
//   )
// }

// export default App
//edit 2 - remove temp dashboard and redirect root to dashboard
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import CEOLeadershipPage from './pages/ceo-leadership/CEOLeadershipPage'
import OperationsSupportPage from './pages/operations-support/OperationsSupportPage'
import MarketingPage from './pages/marketing/MarketingPage'
import TechProductPage from './pages/tech-product/TechProductPage'
import DashboardPage from './pages/dashboard/DashboardPage'
import RevenuePage from './pages/ceo-leadership/RevenuePage'
import LiveMapPage from './pages/ceo-leadership/LiveMapPage'
import AppSettingsPage from './pages/ceo-leadership/AppSettingsPage'
import AdminUsersPage from './pages/ceo-leadership/AdminUsersPage'
import RiderProfilePage from './pages/operations-support/RiderProfilePage'
import CaptainProfilePage from './pages/operations-support/CaptainProfilePage'
import RideDetailPage from './pages/operations-support/RideDetailPage'
import PaymentsPage from './pages/operations-support/PaymentsPage'
import DocumentVerificationPage from './pages/operations-support/DocumentVerificationPage'
import SupportTicketsPage from './pages/operations-support/SupportTicketsPage'
import SafetyAlertsPage from './pages/operations-support/SafetyAlertsPage'
import ScheduledRidesPage from './pages/operations-support/ScheduledRidesPage'
import CitySettingsPage from './pages/operations-support/CitySettingsPage'
import RefundRequestsPage from './pages/operations-support/RefundRequestsPage'
import ReviewsPage from './pages/operations-support/ReviewsPage'
import OnboardingPage from './pages/operations-support/OnboardingPage'

function App() {
  return (
    <Routes>

      {/* redirect root → dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* auth pages (no layout) */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* MAIN LAYOUT */}
      <Route element={<MainLayout />}>

        {/* ✅ ONLY ONE dashboard route (inside layout) */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/revenue" element={<RevenuePage />} />
        <Route path="/ceo-leadership" element={<CEOLeadershipPage />} />
        <Route path="/operations-support" element={<OperationsSupportPage />} />
        <Route path="/marketing" element={<MarketingPage />} />
        <Route path="/tech-product" element={<TechProductPage />} />
        <Route path="/live-map" element={<LiveMapPage />} />
        <Route path="/app-settings" element={<AppSettingsPage />} />
        <Route path="/admin-users" element={<AdminUsersPage />} />
        <Route path="/rider-profile" element={<RiderProfilePage />} />
        <Route path="/captain-profile" element={<CaptainProfilePage />} />
        <Route path="/ride-detail" element={<RideDetailPage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/document-approval" element={<DocumentVerificationPage />} />
        <Route path="/support-tickets" element={<SupportTicketsPage />} />
        <Route path="/safety" element={<SafetyAlertsPage />} />
        <Route path="/scheduled-rides" element={<ScheduledRidesPage />} />
        <Route path="/city-settings" element={<CitySettingsPage />} />
        <Route path="/refund-requests" element={<RefundRequestsPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />

      </Route>

    </Routes>
  )
}

export default App
