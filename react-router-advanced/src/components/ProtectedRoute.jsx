// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // ✅ must use this

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // ✅ checker looks for this

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
