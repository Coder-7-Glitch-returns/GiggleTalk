import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpOtpVerify() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const userOTP = localStorage.getItem("otp");
  const navigate = useNavigate();

  const handleOtpVerify = (e) => {
    e.preventDefault();
    setMessage("");
    setMessageType("");

    // ----- Basic Validation -----
    if (!otp) {
      setMessage("OTP is required");
      setMessageType("error");
      return;
    }

    if (otp !== userOTP) {
      setMessage("OTP does not match");
      setMessageType("error");
      return; // stop here if OTP is wrong
    }

    // ----- Success -----
    setMessage("OTP has been verified");
    setMessageType("success");
    localStorage.removeItem("otp");

    setTimeout(() => {
      navigate("/main/");
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

        <form onSubmit={handleOtpVerify}>
          {/* ----- OTP ----- */}
          <div>
            <label
              className="text-sm font-medium mb-1 text-gray-500"
              htmlFor="OTP"
            >
              OTP
            </label>
            <input
              type="text"
              name="OTP"
              id="OTP"
              className="form-input"
              placeholder="Enter your OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>

          {/* ----- Submit Button ----- */}
          <button
            type="submit"
            className="w-full bg-slate-600 hover:bg-slate-700 text-white font-medium py-3 rounded-lg transition-all shadow-md mt-3"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpOtpVerify;
