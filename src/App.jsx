import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./Login/Login.jsx";
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

        <Route element={<UserLayout />}>
          <Route
            path="/user"
            element={
              isAuthenticated && userType === 'user' ?
                <UserDashboard />
                : <Navigate to="/login" replace />
            }
          />
          <Route path="calendar" element={<UserCalendar />} />
          <Route path="notification" element={<UserNotification />} />
          <Route path="work-worksheet" element={<UserWorkSheet />} />

        </Route>

        <Route element={<AdminLayout />}>
          <Route path="work" element={<AdminWork />} />
          <Route path="record" element={<AdminRecord />} />
          <Route path="setting" element={<AdminSetting />} />
          <Route path="account" element={<AdminAccount />} />
          <Route
            path="/admin"
            element={
              isAuthenticated && userType === 'admin' ?
                <AdminDashboard />
                : <Navigate to="/login" replace />
            }
          />
        </Route>

        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}