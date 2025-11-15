import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Login from "./Login/Login.jsx";
import UserDashboard from "./User/UserDashborad.jsx";
import AdminDashboard from "./Admin/AdminDashboard.jsx";

import AdminLayout from "./layouts/AdminLayout.jsx";
import AdminRecord from "./Admin/AdminRecord.jsx";
import AdminSetting from "./Admin/AdminSetting.jsx";
import AdminWork from "./Admin/AdminWork.jsx";
import AdminAccount from "./Admin/AdminAccount.jsx";

import UserLayout from "./layouts/UserLayout.jsx";
import UserCalendar from "./User/UserCalendar.jsx";
import UserNotification from "./User/UserNotification.jsx";
import UserWorkSheet from "./User/UserWorkSheet.jsx";

import "./App.css";

// ---------------------- Protected Route -----------------------
const ProtectedRoute = ({ children, allowedRole, currentRole, token }) => {
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // ไม่ให้เข้า role ผิด เช่น user พยายามเข้า /admin
  if (allowedRole && allowedRole !== currentRole) {
    return <Navigate to={currentRole === "admin" ? "/admin" : "/user"} replace />;
  }

  return children;
};

// ---------------------- Main APP ------------------------------
export default function App() {

  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const handleLogin = (userRole) => {
    setRole(userRole);
    setToken("valid");
  };

  return (
    <Router>
      <Routes>

        {/* ---------------- Login ---------------- */}
        <Route
          path="/login"
          element={
            token
              ? <Navigate to={role === "admin" ? "/admin" : "/user"} replace />
              : <Login onLogin={handleLogin} />
          }
        />

        {/* ---------------- USER ---------------- */}
        <Route
          path="/"
          element={
            <ProtectedRoute token={token} currentRole={role} allowedRole="user">
              <UserLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/user" replace />} />
          <Route path="user" element={<UserDashboard />} />
          <Route path="calendar" element={<UserCalendar />} />
          <Route path="notification" element={<UserNotification />} />
          <Route path="work-worksheet" element={<UserWorkSheet />} />
        </Route>

        {/* ---------------- ADMIN ---------------- */}
        <Route
          path="/"
          element={
            <ProtectedRoute token={token} currentRole={role} allowedRole="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/admin" replace />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="work" element={<AdminWork />} />
          <Route path="record" element={<AdminRecord />} />
          <Route path="setting" element={<AdminSetting />} />
          <Route path="account" element={<AdminAccount />} />
        </Route>

        {/* ---------------- DEFAULT REDIRECT ---------------- */}
        <Route
          path="*"
          element={
            token
              ? <Navigate to={role === "admin" ? "/admin" : "/user"} replace />
              : <Navigate to="/login" replace />
          }
        />

      </Routes>
    </Router>
  );
}
