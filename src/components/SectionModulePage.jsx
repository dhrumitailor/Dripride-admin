// import ModuleCard from './ModuleCard'

// const accentStyles = {
//   indigo: 'from-slate-900 via-indigo-900 to-indigo-600',
//   emerald: 'from-slate-900 via-emerald-900 to-teal-600',
//   rose: 'from-slate-900 via-rose-900 to-orange-600',
//   cyan: 'from-slate-900 via-cyan-900 to-blue-600',
// }

// function SectionModulePage({ title, subtitle, modules, accent = 'indigo' }) {
//   const gradient = accentStyles[accent] ?? accentStyles.indigo

//   return (
//     <div className="space-y-8">
//       <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br p-8 text-white shadow-lg sm:p-10 ${gradient}`}>
//         <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
//         <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-black/20 blur-2xl" />
//         <div className="relative">
//           <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Workspace</p>
//           <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
//           <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/90 sm:text-base">{subtitle}</p>
//         </div>
//       </div>

//       <div>
//         <div className="mb-5 flex items-end justify-between gap-4 border-b border-slate-200 pb-3">
//           <h2 className="text-lg font-semibold text-slate-900">Modules</h2>
//           <span className="text-xs font-medium uppercase tracking-wider text-slate-400">{modules.length} areas</span>
//         </div>
//         {/* <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"> */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//           {modules.map((module) => (
//             <ModuleCard key={module} name={module} />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SectionModulePage
//edit 1 - add accent prop and styles
//edit 2 - update to use module objects with name + path, and pass accent prop to style header gradient
import ModuleCard from './ModuleCard'



const accentStyles = {

  indigo: 'from-slate-900 via-indigo-900 to-indigo-600',

  emerald: 'from-slate-900 via-emerald-900 to-teal-600',

  rose: 'from-slate-900 via-rose-900 to-orange-600',

  cyan: 'from-slate-900 via-cyan-900 to-blue-600',

}



function SectionModulePage({ title, subtitle, modules, accent = 'indigo' }) {

  const gradient = accentStyles[accent] ?? accentStyles.indigo



  return (

    <div className="space-y-8">

      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br p-8 text-white shadow-lg sm:p-10 ${gradient}`}>

        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-black/20 blur-2xl" />

        <div className="relative">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Workspace</p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/90 sm:text-base">{subtitle}</p>

        </div>

      </div>



      <div>

        <div className="mb-5 flex items-end justify-between gap-4 border-b border-slate-200 pb-3">

          <h2 className="text-lg font-semibold text-slate-900">Modules</h2>

          <span className="text-xs font-medium uppercase tracking-wider text-slate-400">{modules.length} areas</span>

        </div>



        {/* ✅ FIXED GRID */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">

          {/* {modules.map((module) => (

            <ModuleCard key={module} name={module} />

          ))} */}

          {modules.map((module) => (

         <ModuleCard key={module.name} name={module.name} path={module.path} />

         ))}

        </div>

      </div>

    </div>

  )

}



export default SectionModulePage





