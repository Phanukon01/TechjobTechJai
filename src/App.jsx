import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="login" element={<LoginPage setUser={setUser} />} />
        <Route path="dashboard" element={<Dashboard user={user} />} />
      </Routes>
    </Router>
  );
}
