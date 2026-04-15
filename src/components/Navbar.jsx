import { Link, NavLink, useNavigate } from 'react-router-dom'

const navItems = [
  { to: '/ceo-leadership', label: 'CEO / Leadership' },
  { to: '/operations-support', label: 'Operations & Support' },
  { to: '/marketing', label: 'Marketing' },
  { to: '/tech-product', label: 'Tech / Product' },
]

function Navbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login', { replace: true })
  }

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200/90 bg-white shadow-sm">
      <div className="flex h-14 w-full max-w-[1920px] items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:mx-auto lg:px-8">
        <Link
          to="/ceo-leadership"
          className="flex shrink-0 items-center gap-2.5 rounded-md outline-none ring-slate-900 focus-visible:ring-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-[11px] font-bold tracking-tight text-white">
            DR
          </span>
          <span className="hidden min-[380px]:flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-slate-900">DripRide</span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Admin</span>
          </span>
        </Link>

        <nav
          className="scrollbar-none flex min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto sm:gap-1"
          aria-label="Main sections"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              title={item.label}
              className={({ isActive }) =>
                `shrink-0 whitespace-nowrap rounded-md px-2.5 py-2 text-xs font-medium transition sm:px-3 sm:text-sm ${
                  isActive
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center border-l border-slate-200 pl-3 sm:pl-4">
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 sm:gap-2 sm:px-3 sm:text-sm"
          >
            <svg className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M18 9l3 3m0 0l-3 3m3-3H9"
              />
            </svg>
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
