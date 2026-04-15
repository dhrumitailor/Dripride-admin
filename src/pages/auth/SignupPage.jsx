import { Link, useNavigate } from 'react-router-dom'

function SignupPage() {
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
        <span className="ml-auto text-xs font-medium text-slate-400 sm:text-sm">
          <Link to="/login" className="text-white hover:text-indigo-200">
            Sign in
          </Link>
        </span>
      </div>

      <div className="grid min-h-[calc(100vh-3rem)] w-full flex-1 grid-cols-1 lg:min-h-[calc(100vh-3.5rem)] lg:grid-cols-2">
        <div className="relative order-2 flex min-h-[220px] w-full flex-col justify-center px-6 py-10 sm:min-h-[280px] sm:px-10 lg:order-1 lg:min-h-0 lg:px-14 xl:px-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-700" />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M32 0h32v32H32V0zm0 32h32v32H32V32zM0 32h32v32H0V32zm0-32h32v32H0V0z' fill='%23ffffff' fill-opacity='0.06' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent lg:bg-gradient-to-r" />
          <div className="relative max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/90">Onboarding</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl xl:text-5xl">Create your admin profile</h1>
            <p className="mt-4 text-base leading-relaxed text-emerald-100/90 sm:text-lg">
              One account for the full-width admin experience. Hook up registration to your API later without redesigning this flow.
            </p>
          </div>
        </div>

        <div className="order-1 flex w-full items-center justify-center bg-white px-6 py-12 sm:px-10 lg:order-2 lg:px-14 xl:px-24">
          <div className="w-full max-w-md lg:max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Create account</h2>
            <p className="mt-2 text-sm text-slate-600">Enter your details to request access.</p>

            <form className="mt-10 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="signup-name">
                  Full name
                </label>
                <input
                  id="signup-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="signup-email">
                  Work email
                </label>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="signup-password">
                  Password
                </label>
                <input
                  id="signup-password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
                  placeholder="Create a strong password"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-slate-900 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Create account
              </button>
            </form>

            <p className="mt-10 border-t border-slate-100 pt-8 text-center text-sm text-slate-600">
              Already have access?{' '}
              <Link to="/login" className="font-semibold text-emerald-700 hover:text-emerald-600">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
