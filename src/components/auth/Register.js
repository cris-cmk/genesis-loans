import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";  // Import Firebase auth instance
import { useNavigate } from "react-router-dom"; 

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility
  const navigate = useNavigate(); // Initialize the navigate function
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      // Create a new user with email and password
      await createUserWithEmailAndPassword(auth, email, password);

      // Handle successful registration here, like redirecting the user
      console.log("Registration successful!");
      
      localStorage.setItem("username", email);
      navigate("/dashboard"); // Navigate to dashboard on successful login
      alert("Logged In Successfully")
    } catch (err) {
      setError(err.message); // Display Firebase error message
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Genesis Global Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Genesis Global
        </h1>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Register</h2>

        {/* Error Message */}
        {error && (
          <div className="text-red-500 text-sm text-center mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister}>
          {/* Full Name Field */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700" htmlFor="fullName">
              Full Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg shadow-sm mt-1">
              <span className="pl-3 text-gray-500">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="pl-10 block w-full px-4 py-2 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>
          </div>

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                type={showPassword ? "text" : "password"} // Toggle between password and text
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 block w-full px-4 py-2 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 cursor-pointer"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg shadow-sm mt-1">
              <span className="pl-3 text-gray-500">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type={showConfirmPassword ? "text" : "password"} // Toggle between password and text
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="pl-10 block w-full px-4 py-2 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm your password"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 cursor-pointer"
              >
                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition duration-200"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
