import React, { useState } from "react";
import Signup from "./../../components/authentication/Signup";
import Login from "./../../components/authentication/Login";

function Authentication() {
  const [isToggle, setIsToggle] = useState("signup");
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="min-w-md bg-white shadow-lg rounded-lg p-3">
        {/* ----- Logo ----- */}
        <div className="flex items-center justify-center text-3xl font-semibold mb-3.5">
          <img src="/Favicon.svg" alt="IMG" className="w-9 h-9" />
          iggleTalk
        </div>
        {/* ----- NavTabs ----- */}
        <div className="bg-slate-200 w-full rounded-md flex items-center justify-center p-1">
          <button
            className={`w-full text-center p-3 rounded-md transition-all ${
              isToggle === "signup"
                ? "bg-white text-slate-500 shadow-md"
                : "bg-transparent hover:text-slate-500"
            }`}
            onClick={() => setIsToggle("signup")}
          >
            Signup
          </button>
          <button
            className={`w-full text-center p-3 rounded-md transition-all ${
              isToggle === "login"
                ? "bg-white text-slate-500 shadow-md"
                : "bg-transparent hover:text-slate-500"
            }`}
            onClick={() => setIsToggle("login")}
          >
            Login
          </button>
        </div>
        {/* ----- Title ----- */}
        <h1 className="text-center mt-3 text-2xl font-medium">
          {isToggle === "signup" ? "Create Your Account" : "Welcome Back!"}
        </h1>
        {/* ----- Forms ----- */}
        {isToggle === "signup" ? <Signup /> : <Login />}
      </div>
    </div>
  );
}

export default Authentication;
