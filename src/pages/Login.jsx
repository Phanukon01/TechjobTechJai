import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ setUser }) {
  const [role, setRole] = useState("user"); // user | admin
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.username.trim() === "" || form.password.trim() === "") {
      alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
      return;
    }

    // สมมุติ login ผ่าน
    setUser({ username: form.username, role });
    alert(`Login สำเร็จในฐานะ ${role}`);

    // ไปหน้า Dashboard
    navigate("/AdminDashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        {/* Toggle User/Admin */}
        <div className="flex mb-6">
          <button
            onClick={() => setRole("user")}
            className={`flex-1 py-2 rounded-l-2xl font-semibold transition 
              ${role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}
          >
            User
          </button>
          <button
            onClick={() => setRole("admin")}
            className={`flex-1 py-2 rounded-r-2xl font-semibold transition 
              ${role === "admin" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}
          >
            Admin
          </button>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          {role === "user" ? "User Login" : "Admin Login"}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder={role === "user" ? "Enter your username" : "Enter admin ID"}
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
