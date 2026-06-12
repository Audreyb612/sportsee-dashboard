"use client";

import { createContext, useContext, useState } from "react";
import { login } from "@/services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  async function loginUser(username, password) {
    const auth = await login(username, password);
    setToken(auth.token);
    setUserId(auth.userId);
    return auth;
  }

  function logoutUser() {
    setToken(null);
    setUserId(null);
  }

  return (
    <AuthContext.Provider value={{ token, userId, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}