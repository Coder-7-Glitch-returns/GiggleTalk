import React from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import UserSidebar from "../components/main/sidebar/UserSidebar";

function UserLayout() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex w-full h-screen">
      {/* ----- Sidebar ----- */}
      <UserSidebar />
      {/* ----- Chat Area ----- */}
      <div
        className={`
          ${id ? "" : "hidden"}
          w-full
        `}
      >
        {id && (
          <div className="lg:hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 shadow-sm bg-white">
              <button
                onClick={() => navigate("/main")}
                className="text-slate-600 hover:text-slate-900 text-xl"
              >
                ←
              </button>
              <span className="text-lg font-medium">Chat</span>
            </div>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
}

export default UserLayout;
