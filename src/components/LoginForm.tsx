import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { login } from "../services/authService";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";

const LoginForm: React.FC = () => {
  const [userName, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login: contextLogin } = useAuth();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const authResponse = await login(userName, password);
      contextLogin(authResponse);
      router.push("/"); // Redirect to the home page
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto p-4 bg-white shadow-md rounded"
    >
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Username:
        </label>
        <input
          type="username"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
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
        Login
      </button>
    </form>
  );
};

export default LoginForm;
