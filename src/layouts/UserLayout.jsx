import React, { useState } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import FriendsComponent from "../components/main/TabContents/FriendsComponent";
import IconSidebar from "../components/main/IconSidebar/IconSidebar";
import SearchComponent from "../components/main/TabContents/SearchComponent";

function UserLayout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("friends");

  // Tab content logic
  const renderContent = () => {
    switch (activeTab) {
      case "search":
        return <SearchComponent />;
      case "friends":
        return <FriendsComponent />;
      default:
        return null;
    }
  };

  return (
    <div className="flex w-full h-screen">
      {/* ----- Icon Sidebar ----- */}
      <IconSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* ----- Tab Content (Desktop) ----- */}
      <div className="hidden md:block md:w-72 lg:w-80 border-r border-slate-200 bg-white shadow-sm">
        {renderContent()}
      </div>

      {/* ----- Tab Content (Mobile Overlay) ----- */}
      <div
        className={`fixed inset-y-0 left-16 w-64 bg-white border-r border-slate-200 shadow-lg z-20 transform transition-transform duration-300
          md:hidden
        ${id ? "-translate-x-full" : "translate-x-0"}`}
      >
        {renderContent()}
      </div>

      {/* ----- Chat Area ----- */}
      <div
        className={`${id ? "flex-1 flex flex-col" : "hidden md:flex flex-1"}`}
      >
        {id && (
          <div className="md:hidden flex items-center gap-3 px-4 py-3 border-b border-slate-200 shadow-sm bg-white">
            <button
              onClick={() => navigate("/main")}
              className="text-slate-600 hover:text-slate-900 text-xl"
            >
              ←
            </button>
            <span className="text-lg font-medium">Chat</span>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
}

export default UserLayout;
