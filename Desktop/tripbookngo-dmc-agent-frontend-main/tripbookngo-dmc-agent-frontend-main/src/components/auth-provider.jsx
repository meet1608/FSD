import { Navigate, Outlet } from "react-router-dom";

export default function AuthProvider() {
  const user = JSON.parse(localStorage.getItem("user"));

  // If a user exists in localStorage, allow access; otherwise, redirect to login
  return user ? <Outlet /> : <Navigate to="/" replace />;
}
