import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = false; // change to true if logged in
  return isAuthenticated ? children : <Navigate to="/" />;
}
