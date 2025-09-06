import axios from "axios";
import React, { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  // ----- Input Handler -----
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ----- Form Submit -----
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setMessageType("");

    const { fullName, email, password } = formData;

    // ----- Basic Validation -----
    if (!fullName || !email || !password || !confirmPassword) {
      setMessage("All fields are required");
      setMessageType("error");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      setMessageType("error");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long");
      setMessageType("error");
      setLoading(false);
      return;
    }

    // ----- API Simulation -----
    setTimeout(() => {
      console.log("Form Data:", formData);

      // Reset form
      setFormData({ fullName: "", email: "", password: "" });
      setConfirmPassword("");
      setLoading(false);

      // Navigate
      navigate("/account-otp");
    }, 3000);
  };

  return (
    <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
      {/* ----- Message ----- */}
      {message && (
        <div
          className={`p-3 text-center text-lg font-medium rounded-md ${
            messageType === "error"
              ? "bg-red-50 text-red-600"
              : "bg-green-50 text-green-600"
          }`}
        >
          {message}
        </div>
      )}

      {/* ----- Full Name ----- */}
      <div>
        <label
          className="text-sm font-medium mb-1 text-gray-500"
          htmlFor="fullName"
        >
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          className="form-input"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleInputChange}
        />
      </div>

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
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      {/* ----- Password ----- */}
      <div className="relative">
        <label
          className="text-sm font-medium mb-1 text-gray-500"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          className="form-input"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-[40px] right-3 text-xl hover:text-gray-600 transition-colors"
        >
          {showPassword ? <LuEyeClosed /> : <LuEye />}
        </button>
      </div>

      {/* ----- Confirm Password ----- */}
      <div className="relative">
        <label
          className="text-sm font-medium mb-1 text-gray-500"
          htmlFor="confirmPassword"
        >
          Confirm Password
        </label>
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          id="confirmPassword"
          className="form-input"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute top-[40px] right-3 text-xl hover:text-gray-600 transition-colors"
        >
          {showConfirmPassword ? <LuEyeClosed /> : <LuEye />}
        </button>
      </div>

      {/* ----- Submit Button ----- */}
      <button
        type="submit"
        className="w-full bg-slate-600 hover:bg-slate-700 text-white font-medium py-3 rounded-lg transition-all shadow-md"
      >
        {loading ? "Creating Account..." : "Create Account"}
      </button>
    </form>
  );
}

export default Signup;
