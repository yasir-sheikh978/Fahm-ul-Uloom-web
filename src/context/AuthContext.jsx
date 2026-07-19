import React, { createContext, useContext, useState } from "react";
import { API_BASE } from "../config/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // sessionStorage: login lasts only for the current browser session —
  // closing the browser/tab requires the admin to log in again.
  const [token, setToken] = useState(() => sessionStorage.getItem("admin_token"));

  const login = async (email, password) => {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Login failed");
    sessionStorage.setItem("admin_token", data.token);
    setToken(data.token);
  };

  const logout = () => {
    sessionStorage.removeItem("admin_token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, isLoggedIn: !!token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
