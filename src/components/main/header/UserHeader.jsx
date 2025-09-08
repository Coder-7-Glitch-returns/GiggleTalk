import React, { useState, useEffect, useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

function UserHeader({ user }) {
  if (!user) return null;
  const { id } = user;
  const [isDropdown, setIsDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

      {/* Right side: dropdown */}
      <div className="flex items-center gap-2 relative" ref={dropdownRef}>
        <button
          className="hover:text-slate-700 transition-colors text-xl text-slate-500"
          onClick={() => setIsDropdown((prev) => !prev)}
        >
          <BsThreeDotsVertical />
        </button>

        {isDropdown && (
          <div className="absolute top-[48px] right-2 w-56 bg-white shadow-lg rounded-xl z-20 p-2 border border-slate-200">
            <ul className="flex flex-col gap-2">
              <Link to={`/profile/${id}`}>
                <li className="flex items-center gap-3 text-base font-medium text-slate-600 hover:text-slate-800 transition-colors hover:bg-slate-100 px-4 py-2 rounded-lg cursor-pointer">
                  <FaUserCircle className="text-xl text-slate-500" />
                  <span>Profile</span>
                </li>
              </Link>
              <Link>
                <li className="flex items-center gap-3 text-base font-medium text-slate-600 hover:text-slate-800 transition-colors hover:bg-slate-100 px-4 py-2 rounded-lg cursor-pointer">
                  <FaRegTrashCan className="text-xl text-slate-500" />
                  <span>Delete</span>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserHeader;
