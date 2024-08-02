// context/AuthContext.tsx

import React, { createContext, useState, useContext, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  username: string; // Add the username field
  // Add other user fields as necessary
}

interface AuthResponse {
  token: string;
  user: User;
  username: string; // Ensure the username is included
}

interface AuthContextType {
  auth: AuthResponse | null;
  login: (data: AuthResponse) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<AuthResponse | null>(null);

  const login = (data: AuthResponse) => {
    setAuth(data);
    // Optionally save auth data to localStorage/sessionStorage
    localStorage.setItem("token", data.token);
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("token");
    // Optionally remove auth data from localStorage/sessionStorage
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
