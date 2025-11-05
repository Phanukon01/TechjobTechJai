import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ setUser }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // ฟังก์ชันตรวจสอบ email และกำหนด role
  const getRoleFromEmail = (email) => {
    // ตรวจสอบว่าเป็น email ที่ลงท้ายด้วย @admin.com หรือไม่
    if (email.toLowerCase().endsWith('@admin.com')) {
      return 'admin';
    }
    // email ปกติจะเป็น user
    return 'user';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (form.email.trim() === "" || form.password.trim() === "") {
      alert("กรุณากรอกอีเมลและรหัสผ่าน");
      return;
    }

    // ตรวจสอบรูปแบบ email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("รูปแบบอีเมลไม่ถูกต้อง");
      return;
    }

    // กำหนด role จาก email
    const role = getRoleFromEmail(form.email);

    // สมมุติ login ผ่าน
    setUser({ email: form.email, role });
    
    // แจ้งเตือนและไปหน้าที่เหมาะสม
    if (role === 'admin') {
      alert(`Login สำเร็จในฐานะ Admin\nEmail: ${form.email}`);
      navigate("/admin");
    } else {
      alert(`Login สำเร็จในฐานะ User\nEmail: ${form.email}`);
      navigate("/user");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
        {/* Logo/Title */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-3xl font-bold">S</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500 mt-2">Sign in to your account</p>
        </div>

        {/* Info Box */}
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>ℹ️ คำแนะนำ:</strong>
          </p>
          <ul className="text-xs text-blue-700 mt-2 space-y-1">
            <li>• Email ที่ลงท้ายด้วย <strong>@admin.com</strong> = Admin</li>
            <li>• Email อื่นๆ = User</li>
          </ul>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@domain.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition shadow-lg"
          >
            Sign In
          </button>
        </form>

        {/* Example accounts */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-600 font-semibold mb-2">ตัวอย่าง Email:</p>
          <div className="space-y-1 text-xs text-gray-500">
            <p>• admin@admin.com (Admin)</p>
            <p>• john@gmail.com (User)</p>
            <p>• mary@yahoo.com (User)</p>
          </div>
        </div>
      </div>
    </div>
  );
}