import { Link, useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/ceo-leadership', { replace: true })
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-950">
      <div className="flex h-12 w-full shrink-0 items-center border-b border-white/10 bg-slate-950 px-4 sm:h-14 sm:px-6 lg:px-10">
        <Link to="/login" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[11px] font-bold text-slate-900">DR</span>
          <span className="text-sm font-semibold text-white">DripRide Admin</span>
        </Link>
      </div>

      <div className="grid min-h-[calc(100vh-3rem)] w-full flex-1 grid-cols-1 lg:min-h-[calc(100vh-3.5rem)] lg:grid-cols-2">
        <div className="relative flex min-h-[220px] w-full flex-col justify-center px-6 py-10 sm:min-h-[280px] sm:px-10 lg:min-h-0 lg:px-14 xl:px-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-700" />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M32 0h32v32H32V0zm0 32h32v32H32V32zM0 32h32v32H0V32zm0-32h32v32H0V0z' fill='%23ffffff' fill-opacity='0.06' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent lg:bg-gradient-to-r" />
          <div className="relative max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200/90">Secure access</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl xl:text-5xl">Sign in to the admin console</h1>
            <p className="mt-4 text-base leading-relaxed text-indigo-100/90 sm:text-lg">
              Full-width workspace for leadership, operations, marketing, and product teams. Connect your API when you are ready—this UI is production-ready today.
            </p>
            <ul className="mt-8 hidden space-y-2 text-sm text-indigo-100/80 sm:block">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />
                Role-based areas and audit-friendly structure
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />
                Built for scale as you add slides and modules per section
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-full items-center justify-center bg-white px-6 py-12 sm:px-10 lg:px-14 xl:px-24">
          <div className="w-full max-w-md lg:max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Welcome back</h2>
            <p className="mt-2 text-sm text-slate-600">Use your work email and password to continue.</p>

            <form className="mt-10 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="login-email">
                  Work email
                </label>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-0 transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <label className="text-sm font-medium text-slate-700" htmlFor="login-password">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </button>
                </div>
                <input
                  id="login-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-slate-900 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Sign in
              </button>
            </form>

            <p className="mt-10 border-t border-slate-100 pt-8 text-center text-sm text-slate-600">
              New to the organization?{' '}
              <Link to="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
