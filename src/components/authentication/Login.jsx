import React, { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  // ----- Form Submit -----
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setMessageType("");

    // ----- Basic Validation -----
    if (!formData.email || !formData.password) {
      setMessage("All fields are required");
      setMessageType("error");
      setLoading(false);
      return;
    }

    // ----- API Simulation -----
    setTimeout(() => {
      setMessage("User logged in successfully");
      setMessageType("success");
      console.log("FormData: ", formData);

      // reset form
      setFormData({ email: "", password: "" });
      setLoading(false);
    }, 3000);
  };

  // ----- Input Handler -----
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
      {/* ----- Alerts ----- */}
      {message && (
        <div
          className={`text-center p-3 text-lg font-medium rounded-md ${
            messageType === "success"
              ? "bg-green-50 text-green-600"
              : "bg-red-50 text-red-600"
          }`}
        >
          {message}
        </div>
      )}

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
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-[40px] right-3 text-xl hover:text-gray-600 transition-colors"
        >
          {showPassword ? <LuEyeClosed /> : <LuEye />}
        </button>
      </div>

      {/* ----- Forget Password ----- */}
      <div className="text-end hover:underline">
        <Link to="/forget-otp">Forget Password?</Link>
      </div>

      {/* ----- Submit Button ----- */}
      <button
        type="submit"
        className="w-full bg-slate-600 hover:bg-slate-700 text-white font-medium py-3 rounded-lg transition-all shadow-md"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

export default Login;
