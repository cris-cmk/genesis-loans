import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("username", email);
      navigate("/dashboard"); // Navigate to dashboard on successful login
    } catch (err) {
      setError("Invalid credentials!"); // Display error if login fails
    }
    setLoading(false);
  };

  const register = () => {
    alert("USE THE FOLLOWING CREDENTIALS FOR TESTING USRNAME : cmk@gmail.com PASSWORD : cmk@gmail.com")
  };



  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Genesis Savings and Loans</h1>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Login</h2>

        {error && <div className="text-red-500 text-sm text-center mb-4">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-4 relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
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

          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg shadow-sm mt-1">
              <span className="pl-3 text-gray-500">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 block w-full px-4 py-2 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition duration-200"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600" onClick={register}>
          Don’t have an account?{" "}
          <a href="/" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
