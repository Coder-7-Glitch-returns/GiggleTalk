import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

function AdminHeader() {
  return (
    <header className="w-full bg-white border-b border-slate-200 shadow-sm px-6 py-4 flex items-center justify-between">
      {/* Left Side - Logo / Title */}
      <div className="flex items-center gap-3">
        <img src="/Favicon.svg" alt="Logo" className="w-8 h-8" />
        <h1 className="text-xl font-semibold text-slate-800">
          Admin Dashboard
        </h1>
      </div>

      {/* Right Side - Actions */}
      <div className="flex items-center gap-5">
        {/* Notifications */}
        <button className="relative text-slate-500 hover:text-slate-700 transition">
          <FaBell className="text-xl" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <FaUserCircle className="text-3xl text-slate-600" />
          <span className="text-sm font-medium text-slate-700">Admin</span>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
