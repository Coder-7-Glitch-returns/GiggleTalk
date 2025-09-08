import React, { useState } from "react";
import {
  FaUsers,
  FaUserShield,
  FaBan,
  FaCircle,
  FaEdit,
  FaTrash,
  FaLock,
} from "react-icons/fa";

function AdminDashboard() {
  const [mockUsers, setMockUsers] = useState([
    {
      id: 1,
      userName: "Muhammad Ahad",
      email: "ahad@example.com",
      role: "admin",
      isBlocked: false,
      isActive: true,
    },
    {
      id: 2,
      userName: "Shahbaz Junior",
      email: "shahbaz@example.com",
      role: "user",
      isBlocked: false,
      isActive: false,
    },
    {
      id: 3,
      userName: "John Doe",
      email: "john@example.com",
      role: "user",
      isBlocked: true,
      isActive: false,
    },
    {
      id: 4,
      userName: "Faheem Shafique",
      email: "faheem@example.com",
      role: "user",
      isBlocked: false,
      isActive: true,
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [popupType, setPopupType] = useState(null); // edit | block | delete

  // ----- Handle Update -----
  const handleUpdateUser = (e) => {
    e.preventDefault();
    setMockUsers((prev) =>
      prev.map((u) => (u.id === selectedUser.id ? selectedUser : u)),
    );
    setPopupType(null);
  };

  // ----- Stats -----
  const totalUsers = mockUsers.length;
  const admins = mockUsers.filter((u) => u.role === "admin").length;
  const blockedUsers = mockUsers.filter((u) => u.isBlocked).length;
  const onlineUsers = mockUsers.filter((u) => u.isActive).length;

  return (
    <div className="p-6 space-y-8">
      {/* ===== Summary Cards ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <FaUsers className="text-3xl text-blue-500" />
          <div>
            <p className="text-sm text-slate-500">Users</p>
            <h2 className="text-xl font-bold">{totalUsers}</h2>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <FaUserShield className="text-3xl text-green-500" />
          <div>
            <p className="text-sm text-slate-500">Admins</p>
            <h2 className="text-xl font-bold">{admins}</h2>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <FaBan className="text-3xl text-red-500" />
          <div>
            <p className="text-sm text-slate-500">Blocked</p>
            <h2 className="text-xl font-bold">{blockedUsers}</h2>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <FaCircle className="text-3xl text-green-400" />
          <div>
            <p className="text-sm text-slate-500">Online</p>
            <h2 className="text-xl font-bold">{onlineUsers}</h2>
          </div>
        </div>
      </div>

      {/* ===== Users Table ===== */}
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-left text-slate-600">
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">User Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Blocked</th>
              <th className="px-4 py-3">Active</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.slice(0, 4).map((user, index) => (
              <tr
                key={index + 1}
                className={`${
                  index !== mockUsers.slice(0, 4).length - 1
                    ? "border-b border-slate-200"
                    : ""
                }`}
              >
                <td className="px-4 py-3">{user.id}</td>
                <td className="px-4 py-3">{user.userName}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">
                  {user.isBlocked ? (
                    <span className="text-red-600 font-medium">Yes</span>
                  ) : (
                    <span className="text-green-600 font-medium">No</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  {user.isActive ? (
                    <span className="text-green-600 font-medium">Online</span>
                  ) : (
                    <span className="text-gray-500 font-medium">Offline</span>
                  )}
                </td>
                <td className="px-4 py-3 flex gap-3">
                  <button
                    onClick={() => {
                      setSelectedUser(user);
                      setPopupType("edit");
                    }}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedUser(user);
                      setPopupType("block");
                    }}
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    <FaLock />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedUser(user);
                      setPopupType("delete");
                    }}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== Popups ===== */}
      {popupType === "edit" && selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Edit User</h2>
            <form onSubmit={handleUpdateUser} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={selectedUser.userName}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      userName: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={selectedUser.email}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, email: e.target.value })
                  }
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Role</label>
                <select
                  value={selectedUser.role}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, role: e.target.value })
                  }
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedUser.isBlocked}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        isBlocked: e.target.checked,
                      })
                    }
                  />
                  Blocked
                </label>
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setPopupType(null)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {popupType === "block" && selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm text-center">
            <h2 className="text-lg font-semibold mb-4">Block User</h2>
            <p>Are you sure you want to block {selectedUser.userName}?</p>
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => setPopupType(null)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setMockUsers((prev) =>
                    prev.map((u) =>
                      u.id === selectedUser.id ? { ...u, isBlocked: true } : u,
                    ),
                  );
                  setPopupType(null);
                }}
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg"
              >
                Block
              </button>
            </div>
          </div>
        </div>
      )}

      {popupType === "delete" && selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm text-center">
            <h2 className="text-lg font-semibold mb-4">Delete User</h2>
            <p>Are you sure you want to delete {selectedUser.userName}?</p>
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => setPopupType(null)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setMockUsers((prev) =>
                    prev.filter((u) => u.id !== selectedUser.id),
                  );
                  setPopupType(null);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
