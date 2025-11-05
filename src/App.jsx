import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./Login/Login.jsx";
import UserDashboard from "./User/UserDashborad.jsx";
import AdminDashboard from "./Admin/AdminDashboard.jsx";
import "./App.css";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);

  const handleLogin = (username, type) => {
    setIsAuthenticated(true);
    setUserType(type);
  };

  return (
    <Router basename="login">
      <Routes>
        <Route 
          path="/login" 
          element={
            isAuthenticated ? 
              <Navigate to={userType === 'admin' ? '/admin' : '/user'} replace /> 
              : <LoginPage onLogin={handleLogin} />
          } 
        />
        
        <Route 
          path="/user" 
          element={
            isAuthenticated && userType === 'user' ? 
              <UserDashboard /> 
              : <Navigate to="/login" replace />
          } 
        />
        
        <Route 
          path="/admin" 
          element={
            isAuthenticated && userType === 'admin' ? 
              <AdminDashboard /> 
              : <Navigate to="/login" replace />
          } 
        />
        
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}