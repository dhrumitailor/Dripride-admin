// import { Outlet } from 'react-router-dom'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// function MainLayout() {
//   return (
//     <div className="flex min-h-screen w-full flex-col bg-slate-100/80">
//       <Navbar />
//       <main className="w-full flex-1 px-4 py-8 sm:px-6 lg:mx-auto lg:max-w-7xl lg:px-8 lg:py-10">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   )
// }

// export default MainLayout
//initial edit - add sidebar and remove navbar/footer
// import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar";

// export default function MainLayout() {
//   return (
//     <div className="flex min-h-screen bg-slate-100">

//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <Outlet />
//       </div>

//     </div>
//   );
// }
//edit 2- hamburger menu and responsive sidebar
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* ✅ Mobile Sidebar (overlay) */}
      {open && (
        <div className="fixed inset-0 z-40 flex">
          
          {/* Sidebar */}
          <div className="w-64 bg-slate-900 text-white">
            <Sidebar />
          </div>

          {/* Overlay */}
          <div
            className="flex-1 bg-black/40"
            onClick={() => setOpen(false)}
          />
        </div>
      )}

      {/* ✅ Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1">

        {/* 🔥 Topbar (Hamburger) */}
        <div className="flex items-center justify-between bg-white p-4 shadow md:hidden">
          
          <button onClick={() => setOpen(true)}>
            ☰
          </button>

          <h1 className="font-semibold">dripride Admin</h1>

          <div />
        </div>

        <div className="p-4 md:p-6">
          <Outlet />
        </div>

      </div>
    </div>
  );
}