// services/authService.ts

import axios from "axios";

const API_URL = "http://localhost:5000"; // Replace with your backend URL

interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    // Add other user fields as necessary
  };
}

export const login = async (
  userName: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const response = await axios.post<AuthResponse>(
      `${API_URL}/api/auth/signin`,
      { userName, password }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Login failed");
  }
};

export const signup = async (
  userName: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const response = await axios.post<AuthResponse>(
      `${API_URL}/api/auth/signup`,
      { userName, email, password }
    );
    console.log(response.data.user);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Signup failed");
  }
};
