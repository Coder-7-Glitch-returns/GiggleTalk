import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function FriendsComponent() {
  const mockUsers = [
    {
      id: 1,
      userName: "Muhammad Ahad",
      isActive: "1",
      profileImage: "/profile1.jpeg",
    },
    {
      id: 2,
      userName: "Shahbaz Junior",
      isActive: "0",
      profileImage: "",
    },
    {
      id: 3,
      userName: "John Doe",
      isActive: "1",
      profileImage: "/profile1.jpeg",
    },
    {
      id: 4,
      userName: "Faheem Shafique",
      isActive: "0",
      profileImage: "",
    },
  ];

  const { id } = useParams();
  const [query, setQuery] = useState("");

  // Filter users
  const filteredUsers = mockUsers.filter((user) =>
    user.userName.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div
      className={`bg-white h-screen border-r border-slate-200 shadow-md md:w-72 lg:w-80 flex-col
      ${id ? "hidden lg:flex" : ""}`}
    >
      <div className="w-full">
        {/* ----- Logo ----- */}
        <div className="flex items-center justify-center gap-2 text-xl md:text-2xl font-bold px-3 py-3 md:py-4">
          <img
            src="/Favicon.svg"
            alt="Logo"
            className="w-6 h-6 md:w-8 md:h-8"
          />
          <span className="text-slate-800">iggleTalk</span>
        </div>

        {/* ----- Divider ----- */}
        <hr className="border border-slate-200 my-2 md:my-3.5" />

        {/* ----- Search Bar ----- */}
        <div className="px-3 mb-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search friends..."
            className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-400"
          />
        </div>

        {/* ----- Users List ----- */}
        <nav className="px-2 md:px-3 overflow-y-auto">
          <ul className="flex flex-col gap-2">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((data) => (
                <NavLink
                  to={`/main/${data.id}`}
                  key={data.id}
                  className={({ isActive }) =>
                    `group px-2 md:px-3 py-2 flex items-center gap-3 border rounded-xl transition-all duration-200 cursor-pointer 
                    ${
                      isActive
                        ? "bg-slate-100 border-slate-300 shadow-sm"
                        : "border-slate-200 hover:shadow-md hover:border-slate-300"
                    }`
                  }
                >
                  {/* Profile Image or Initial */}
                  <div className="relative">
                    {data.profileImage ? (
                      <img
                        src={data.profileImage}
                        alt={data.userName}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-slate-200 group-hover:ring-slate-300 transition"
                      />
                    ) : (
                      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-slate-300 text-slate-700 font-semibold text-base md:text-lg ring-2 ring-slate-200 group-hover:ring-slate-300 transition">
                        {data.userName?.charAt(0).toUpperCase()}
                      </div>
                    )}
                    {/* Active Status Dot */}
                    <span
                      className={`absolute bottom-0 right-0 block w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ring-2 ring-white ${
                        data.isActive === "1" ? "bg-green-500" : "bg-gray-400"
                      }`}
                    ></span>
                  </div>

                  {/* User Info */}
                  <div className="flex flex-col">
                    <h1 className="text-sm md:text-base font-medium text-slate-700 group-hover:text-slate-900">
                      {data.userName}
                    </h1>
                    <p className="text-xs text-slate-500">
                      {data.isActive === "1" ? "Online" : "Offline"}
                    </p>
                  </div>
                </NavLink>
              ))
            ) : (
              <p className="text-slate-500 text-sm px-3 text-center">No friends found</p>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default FriendsComponent;
