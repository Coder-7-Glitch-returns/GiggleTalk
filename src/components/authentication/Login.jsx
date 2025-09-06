import React, { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // FormSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setMessageType("");

    // ----- Basic Validation -----
    if (!formData.email || !formData.password) {
      setMessage("All Fields are required");
      setMessageType("error");
      setLoading(false);
      return;
    }

    // ----- API Simulation -----
    setTimeout(() => {
      setMessage("User Logined Successfully");
      setMessageType("success");
      console.log("FormData: ", formData);
      setFormData({
        fullName: "",
        email: "",
        password: "",
      });
      setConfirmPassword("");
      setLoading(false);
    }, 3000);
  };

  // ----- Input Handler -----
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
      {messageType === "success" && (
        <div className="bg-green-50 text-center p-3 text-lg text-green-600 font-medium rounded-md">
          {message}
        </div>
      )}
      {messageType === "error" && (
        <div className="bg-red-50 text-center p-3 text-lg text-red-600 font-medium rounded-md">
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
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-[40px] right-3 text-xl hover:text-gray-600 transition-colors"
        >
          {showPassword ? <LuEyeClosed /> : <LuEye />}
        </button>
      </div>
      <div className="text-end hover:underline">
        <Link to={"/forget-otp"}>Forget Password</Link>
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
