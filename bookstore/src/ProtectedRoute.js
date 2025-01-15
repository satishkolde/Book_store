import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole }) => {
  const isAuthenticated = localStorage.getItem("id") !== null;
  const userRole = localStorage.getItem("role");

  // Check if the user is authenticated and has the required role
  if (isAuthenticated && (!requiredRole || userRole === requiredRole)) {
    return children;
  }

  // Redirect to the login page if not authenticated or role mismatch
  return <Navigate to="/auth" />;
};

export default ProtectedRoute;
