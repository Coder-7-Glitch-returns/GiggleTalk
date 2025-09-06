import React, { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setMessageType("");

    // ----- Basic Validation -----
    if (!newPassword || !confirmNewPassword) {
      setMessage("All fields are required.");
      setMessageType("error");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setMessage("Passwords do not match.");
      setMessageType("error");
      return;
    }
    if (newPassword.length < 6) {
      setMessage("Password must be exactly 6 characters long.");
      setMessageType("error");
      return;
    }

    // ----- API Simulation -----
    setMessage("Password reset successfully.");
    setMessageType("success");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="min-w-md bg-white shadow-lg rounded-lg p-5 w-96">
        {/* ----- Logo ----- */}
        <div className="flex items-center justify-center text-3xl font-semibold mb-5">
          <img src="/Favicon.svg" alt="IMG" className="w-9 h-9 mr-2" />
          iggleTalk
        </div>

        {/* ----- Messages ----- */}
        {message && (
          <div
            className={`p-3 mt-3 rounded-md mb-3 text-center font-medium ${
              messageType === "error"
                ? "bg-red-50 text-red-600"
                : "bg-green-50 text-green-600"
            }`}
          >
            {message}
          </div>
        )}

        {/* ----- Form ----- */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* New Password */}
          <div className="relative">
            <label
              className="text-sm font-medium mb-1 text-gray-500"
              htmlFor="newPassword"
            >
              New Password
            </label>
            <input
              type={showNewPassword ? "text" : "password"}
              name="newPassword"
              id="newPassword"
              className="form-input w-full"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute top-[40px] right-3 text-xl hover:text-gray-600 transition-colors"
            >
              {showNewPassword ? <LuEyeClosed /> : <LuEye />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label
              className="text-sm font-medium mb-1 text-gray-500"
              htmlFor="confirmNewPassword"
            >
              Confirm Password
            </label>
            <input
              type={showConfirmNewPassword ? "text" : "password"}
              name="confirmNewPassword"
              id="confirmNewPassword"
              className="form-input w-full"
              placeholder="Confirm your new password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
              className="absolute top-[40px] right-3 text-xl hover:text-gray-600 transition-colors"
            >
              {showConfirmNewPassword ? <LuEyeClosed /> : <LuEye />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-slate-600 hover:bg-slate-700 text-white font-medium py-3 rounded-lg transition-all shadow-md"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
