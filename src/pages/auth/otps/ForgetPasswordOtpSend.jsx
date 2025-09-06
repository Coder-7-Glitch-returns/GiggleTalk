import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgetPasswordOtpSend() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  const handleOtpSend = (e) => {
    e.preventDefault();
    setMessage("");
    setMessageType("");

    // ----- Basic Validation -----
    if (!email) {
      setMessage("Email is required");
      setMessageType("error");
      return;
    }

    // ----- OTP Simulation -----
    const generatedOtp = "123456";
    localStorage.setItem("otp", generatedOtp);

    setMessage("OTP has been sent");
    setMessageType("success");

    setTimeout(() => {
      navigate("/forget-verify");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white min-w-md rounded-lg shadow-lg p-3">
        {/* ----- Logo ----- */}
        <div className="flex items-center justify-center text-3xl font-semibold mb-3.5">
          <img src="/Favicon.svg" alt="IMG" />
          iggleTalk
        </div>

        {/* ----- Alert Message ----- */}
        {message && (
          <div
            className={`p-3 mt-3 rounded-md text-center text-lg font-medium ${
              messageType === "success"
                ? "bg-green-50 text-green-600"
                : "bg-red-50 text-red-600"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleOtpSend}>
          {/* ----- Email ----- */}
          <div>
            <label
              className="text-sm font-medium mb-1 text-gray-500"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* ----- Submit Button ----- */}
          <button
            type="submit"
            className="w-full bg-slate-600 hover:bg-slate-700 text-white font-medium py-3 rounded-lg transition-all shadow-md mt-3"
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPasswordOtpSend;
