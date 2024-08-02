import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true); // Toggle between login and signup

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-8">
      {isLogin ? <LoginForm /> : <SignUpForm />}
      <button
        onClick={() => setIsLogin(!isLogin)}
        className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        {isLogin ? "Switch to Signup" : "Switch to Login"}
      </button>
    </div>
  );
};

export default AuthForm;
