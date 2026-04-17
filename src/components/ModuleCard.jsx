// function ModuleCard({ name }) {
//   return (
//     <article className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md">
//       <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-600 ring-1 ring-slate-200/80 transition group-hover:bg-slate-900 group-hover:text-white group-hover:ring-slate-900">
//         <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
//           />
//         </svg>
//       </div>
//       <h3 className="text-[15px] font-semibold leading-snug text-slate-900">{name}</h3>
//       <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
//         Placeholder module — add routes and content under this section&apos;s folder.
//       </p>
//       <span className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Coming soon</span>
//     </article>
//   )
// }

// export default ModuleCard
import { useNavigate } from "react-router-dom";

function ModuleCard({ name, path }) {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => path && navigate(path)}
      className="group cursor-pointer flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-600 ring-1 ring-slate-200/80 transition group-hover:bg-slate-900 group-hover:text-white group-hover:ring-slate-900">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      </div>

      <h3 className="text-[15px] font-semibold text-slate-900">{name}</h3>

      <p className="mt-2 text-sm text-slate-500">
        Click to open module
      </p>
    </article>
  );
}

export default ModuleCard;