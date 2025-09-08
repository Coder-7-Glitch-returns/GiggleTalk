import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

function SearchComponent() {
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
  const inputRef = useRef(null);

  // Filter users by search query
  const filteredUsers = mockUsers.filter((user) =>
    user.userName.toLowerCase().includes(query.toLowerCase()),
  );

  // Handle user click → set input & focus
  const handleUserClick = (name) => {
    setQuery(name);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* ----- Search Bar ----- */}
      <div className="relative px-3 py-2">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search users..."
          className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
        {query && (
          <button
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-slate-800 text-white p-2 rounded-lg hover:bg-slate-700 transition"
            onClick={() => alert(`Add: ${query}`)}
          >
            <FaPlus size={14} />
          </button>
        )}
      </div>

      {/* ----- User Results ----- */}
      <div className="flex-1 overflow-y-auto px-3">
        <ul className="flex flex-col gap-2">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <li
                key={user.id}
                onClick={() => handleUserClick(user.userName)}
                className="flex items-center gap-3 px-3 py-2 border border-slate-200 rounded-xl 
                   hover:shadow-md hover:border-slate-300 transition-all duration-200 cursor-pointer"
              >
                {/* Profile Image or Initial */}
                {user.profileImage ? (
                  <img
                    src={user.profileImage}
                    alt={user.userName}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-200"
                  />
                ) : (
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-300 
                          text-slate-700 font-semibold ring-2 ring-slate-200"
                  >
                    {user.userName.charAt(0).toUpperCase()}
                  </div>
                )}

                {/* User Info */}
                <div className="flex flex-col">
                  <h1 className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                    {user.userName}
                  </h1>
                  <p className="text-xs text-slate-500">
                    {user.isActive === "1" ? "Online" : "Offline"}
                  </p>
                </div>
              </li>
            ))
          ) : (
            <li className="text-sm text-slate-500 text-center py-2">
              No users found.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default SearchComponent;
