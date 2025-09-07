import React from "react";

function UserHeader({ user }) {
  if (!user) return null;

  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 shadow-md bg-white h-[80px]">
      <div className="flex items-center gap-3">
        {user.profileImage ? (
          <img
            src={user.profileImage}
            alt={user.userName}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-200"
          />
        ) : (
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-300 text-slate-700 font-semibold text-lg ring-2 ring-slate-200">
            {user.userName?.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <h1 className="text-base font-medium text-slate-800">
            {user.userName}
          </h1>
          <p className="text-xs text-slate-500">
            {user.isActive === "1" ? "Online" : "Offline"}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-slate-500">
        <button className="hover:text-slate-700 transition font-black">
          ⋮
        </button>
      </div>
    </div>
  );
}

export default UserHeader;
