import { NavLink } from "react-router-dom";

const menu = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "CEO Leadership", path: "/ceo-leadership" },
  { name: "Operations", path: "/operations-support" },
  { name: "Marketing", path: "/marketing" },
  { name: "Tech / Product", path: "/tech-product" },
  { name: "Revenue", path: "/revenue" },
  { name: "Live Map", path: "/live-map" },
  { name: "App Settings", path: "/app-settings" },
  { name: "Admin Users", path: "/admin-users" },
];

export default function Sidebar() {
  return (
    // <div className="h-full w-64 bg-slate-900 text-white flex flex-col p-4">
      <div className="h-full w-64 bg-slate-900 text-white flex flex-col p-4">
      {/* Logo / Title */}
      <h1 className="text-xl font-bold mb-6">dripride Admin</h1>

      {/* Menu */}
      <nav className="flex flex-col gap-2">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm transition ${
                isActive
                  ? "bg-white text-slate-900 font-semibold"
                  : "text-slate-300 hover:bg-slate-800"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

    </div>
  );
}