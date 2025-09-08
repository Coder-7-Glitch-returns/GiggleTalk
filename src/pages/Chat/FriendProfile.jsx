import React from "react";
import { Link, useParams } from "react-router-dom";

function FriendProfile() {
  const { id } = useParams();

  const mockUsers = [
    {
      id: 1,
      userName: "Muhammad Ahad",
      email: "ahad@example.com",
      isActive: "1",
      profileImage: "/profile1.jpeg",
    },
    {
      id: 2,
      userName: "Shahbaz Junior",
      email: "shahbaz@example.com",
      isActive: "0",
      profileImage: "",
    },
    {
      id: 3,
      userName: "John Doe",
      email: "john@example.com",
      isActive: "1",
      profileImage: "/profile1.jpeg",
    },
    {
      id: 4,
      userName: "Faheem Shafique",
      email: "faheem@example.com",
      isActive: "0",
      profileImage: "",
    },
  ];

  const user = mockUsers.find((u) => u.id === parseInt(id));

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen text-slate-600">
        User not found
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-slate-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 flex flex-col items-center">
        {/* Profile Image */}
        {user.profileImage ? (
          <img
            src={user.profileImage}
            alt={user.userName}
            className="w-28 h-28 rounded-full object-cover ring-4 ring-slate-200"
          />
        ) : (
          <div className="w-28 h-28 flex items-center justify-center rounded-full bg-slate-300 text-slate-700 font-bold text-3xl ring-4 ring-slate-200">
            {user.userName.charAt(0).toUpperCase()}
          </div>
        )}

        {/* User Info */}
        <h1 className="mt-4 text-2xl font-semibold text-slate-800">
          {user.userName}
        </h1>
        <p className="text-sm text-slate-500">{user.email}</p>

        {/* Status */}
        <div className="mt-3 flex items-center gap-2">
          <span
            className={`w-3 h-3 rounded-full ${
              user.isActive === "1" ? "bg-green-500" : "bg-gray-400"
            }`}
          ></span>
          <span
            className={`text-sm font-medium ${
              user.isActive === "1" ? "text-green-600" : "text-gray-500"
            }`}
          >
            {user.isActive === "1" ? "Online" : "Offline"}
          </span>
        </div>

        {/* Divider */}
        <hr className="w-full my-5 border-slate-200" />

        {/* Extra Info */}
        <div className="w-full flex flex-col gap-3 text-slate-700">
          <div className="flex justify-between">
            <span className="font-medium">Full Name</span>
            <span>{user.userName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Email</span>
            <span>{user.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Status</span>
            <span>
              {user.isActive === "1" ? "Currently Active" : "Currently Offline"}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-4">
          <Link to={`/main/${user.id}`}>
            <button className="px-5 py-2 rounded-lg bg-slate-800 text-white shadow hover:bg-slate-700 transition">
              Message
            </button>
          </Link>
          <Link to={"/main/"}>
            <button className="px-5 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FriendProfile;
