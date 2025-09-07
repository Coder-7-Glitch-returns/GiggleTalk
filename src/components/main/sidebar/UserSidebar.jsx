import React from "react";
import { NavLink, useParams } from "react-router-dom";

function UserSidebar() {
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
  return (
    <div
      className={`bg-white h-screen lg:w-[20%] w-full border-r border-slate-200 shadow-md ${
        id ? "hidden lg:flex" : ""
      }`}
    >
      <div className="w-full">
        {/* ----- Logo ----- */}
        <div className="flex items-center justify-center gap-2 text-2xl font-bold px-3 py-4">
          <img src="/Favicon.svg" alt="Logo" className="w-8 h-8" />
          <span className="text-slate-800">iggleTalk</span>
        </div>
        {/* ----- Divider ----- */}
        <hr className="border border-slate-200 my-3.5" />

        {/* ----- Users List ----- */}
        <nav className="px-3 overflow-y-auto">
          <ul className="flex flex-col gap-2">
            {mockUsers.map((data) => (
              <NavLink
                to={`/main/${data.id}`}
                key={data.id}
                className={({ isActive }) =>
                  `group px-3 py-2 flex items-center gap-3 border rounded-xl transition-all duration-200 cursor-pointer 
                ${
                  isActive
                    ? "bg-slate-100 border-slate-300 shadow-sm"
                    : "border-slate-200 hover:shadow-md hover:border-slate-300"
                }`
                }
              >
                {/* ----- Profile Image or Initial ----- */}
                <div className="relative">
                  {data.profileImage ? (
                    <img
                      src={data.profileImage}
                      alt={data.userName}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-200 group-hover:ring-slate-300 transition"
                    />
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-300 text-slate-700 font-semibold text-lg ring-2 ring-slate-200 group-hover:ring-slate-300 transition">
                      {data.userName?.charAt(0).toUpperCase()}
                    </div>
                  )}

                  {/* ----- Active Status Dot ----- */}
                  <span
                    className={`absolute bottom-0 right-0 block w-3 h-3 rounded-full ring-2 ring-white ${
                      data.isActive === "1" ? "bg-green-500" : "bg-gray-400"
                    }`}
                  ></span>
                </div>

                {/* ----- User Info ----- */}
                <div className="flex flex-col">
                  <h1 className="text-base font-medium text-slate-700 group-hover:text-slate-900">
                    {data.userName}
                  </h1>
                  <p className="text-xs text-slate-500">
                    {data.isActive === "1" ? "Online" : "Offline"}
                  </p>
                </div>
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default UserSidebar;
