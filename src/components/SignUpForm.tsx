import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { signup } from "../services/authService";

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [userName, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { login: contextLogin } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(""); // Reset error message on new attempt
    setSuccess(""); // Reset success message on new attempt

    try {
      const authResponse = await signup(userName, email, password);
      setSuccess("Successfully registered");
      contextLogin(authResponse);

      // Reset form fields
      setEmail("");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Signup failed:", error);
      setError("Signup failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto p-4 bg-white shadow-md rounded"
    >
      {error && <span className="text-red-500 font-bold">{error}</span>}
      {success && <span className="text-green-500 font-bold">{success}</span>}
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Username:
        </label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Password:
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Signup
      </button>
    </form>
  );
};

export default SignUpForm;
