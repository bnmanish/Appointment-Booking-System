import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isLoggedIn = localStorage.getItem("token");

  return isLoggedIn ? <>{children}</> : <Navigate to="/" replace />;
}

export default ProtectedRoute;