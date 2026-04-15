import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MainLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-100/80">
      <Navbar />
      <main className="w-full flex-1 px-4 py-8 sm:px-6 lg:mx-auto lg:max-w-7xl lg:px-8 lg:py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
