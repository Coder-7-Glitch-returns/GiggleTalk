import react from "react";
import { FaPlus, FaSearch, FaUserFriends } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

export default function IconSidebar({ activeTab, setActiveTab }) {
  const tabs = [
    { name: "search", icon: <FaSearch /> },
    { name: "friends", icon: <FaUserFriends /> },
  ];

  return (
    <div className="w-16 bg-white border-r border-slate-200 shadow-md flex flex-col items-center py-6 gap-6">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => setActiveTab(tab.name)}
          className={`p-3 rounded-xl text-xl transition-all duration-300
            ${
              activeTab === tab.name
                ? "bg-slate-800 text-white shadow-md"
                : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
            }`}
        >
          {tab.icon}
        </button>
      ))}
      <Link to={"/profile/"} className="mt-auto">
        <img
          src="/profile1.jpeg"
          alt="IMG"
          className="rounded-full w-13 h-13 hover:ring-2 hover:ring-slate-400 transition-all object-cover"
        />
      </Link>
    </div>
  );
}
