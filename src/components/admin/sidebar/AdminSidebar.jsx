import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUsers, FaChartPie, FaSignOutAlt } from "react-icons/fa";

function AdminSidebar() {
  const links = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <FaChartPie /> },
    { name: "Users", path: "/admin/users", icon: <FaUsers /> },
  ];

  return (
    <aside className="h-screen w-64 bg-white border-r border-slate-200 shadow-lg flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 border-b border-slate-200">
        <img src="/Favicon.svg" alt="Logo" className="w-8 h-8" />
        <span className="ml-2 text-lg font-bold text-slate-800">Admin</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4">
        <ul className="flex flex-col gap-2">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? "bg-slate-800 text-white shadow-md"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                  }`
                }
              >
                <span className="text-lg">{link.icon}</span>
                <span className="text-sm font-medium">{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-slate-200">
        <Link to={"/"}>
          <button className="flex items-center gap-3 w-full px-4 py-2 text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-all">
            <FaSignOutAlt className="text-lg" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </Link>
      </div>
    </aside>
  );
}

export default AdminSidebar;
