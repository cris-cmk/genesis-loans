import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-300 rounded-full blur-lg opacity-70"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-300 rounded-full blur-lg opacity-70"></div>

        {/* Genesis Global Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Genesis Savings and Loans
        </h1>
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Login</h2>
        <form>
          {/* Email Field */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg shadow-sm mt-1">
              <span className="pl-3 text-gray-500">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="email"
                id="email"
                className="pl-10 block w-full px-4 py-2 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg shadow-sm mt-1">
              <span className="pl-3 text-gray-500">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                id="password"
                className="pl-10 block w-full px-4 py-2 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition duration-200"
          >
            <FontAwesomeIcon icon={faLock} />
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
