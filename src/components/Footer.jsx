function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-slate-200 bg-white">
      <div className="flex flex-col gap-3 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:mx-auto lg:max-w-7xl lg:px-8">
        <p className="font-medium text-slate-600">© {new Date().getFullYear()} DripRide Admin</p>
        <p className="text-slate-400">Static interface — API integration ready</p>
      </div>
    </footer>
  )
}

export default Footer
