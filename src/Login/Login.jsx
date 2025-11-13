import { useState } from "react"; // แก้ไขตามคำแนะนำเดิม
import users from "../data/user.jsx";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const checkUserType = (username) => {
    const user = users[username.toLowerCase()];
    return user ? user.type : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const user = users[username.toLowerCase()];
      if (user && user.password === password) {
        alert(`เข้าสู่ระบบสำเร็จ!\nสวัสดี ${user.fullName}\nประเภท: ${user.type === 'admin' ? 'ผู้ดูแลระบบ' : 'ผู้ใช้งานทั่วไป'}`);
        if (onLogin) onLogin(username, user.type);
      } else {
        setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      }
      setIsLoading(false);
    }, 1000);
  };

  const currentUserType = username ? checkUserType(username) : null;

  // ------------------------------------------------------------------
  // ส่วนที่เปลี่ยน: การตกแต่งด้วย Tailwind CSS (เพื่อให้ตรงกับภาพ)
  // ------------------------------------------------------------------

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
      {/* โลโก้ TechJob ทางซ้าย */}
      <div className="hidden lg:flex flex-col items-center mr-20">
        <h1 className="text-6xl font-normal text-gray-800">
          Tech
          <span className="text-white bg-blue-400 rounded-full h-16 w-16 flex items-center justify-center ml-2 inline-block shadow-lg">
            Job
          </span>
        </h1>
      </div>

      {/* กล่องฟอร์ม Login */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-10 border-t-8 border-blue-400">

        {/* ส่วนปุ่มสลับ Admin/User (ใช้สำหรับแสดง UserType ที่ค้นพบ) */}
        {/* ส่วนปุ่มสลับ Admin/User */}
        <div className="flex bg-blue-50 p-1 rounded-full mb-8">
          {/* Admin Button */}
          <div className={`w-1/2 py-2 text-sm font-semibold transition text-center
              ${currentUserType === 'admin'
              ? 'bg-blue-400 text-white shadow-md rounded-l-full'
              : 'text-gray-600 rounded-l-full'
            }`}>
            Admin
          </div>
          {/* User Button */}
          <div className={`w-1/2 py-2 text-sm font-semibold transition text-center
              ${currentUserType !== 'admin' && currentUserType !== null
              ? 'bg-blue-400 text-white shadow-md rounded-r-full'
              : 'text-gray-600 rounded-r-full'
            }`}>
            User
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-gray-800">
            เข้าสู่ระบบ TechJob
          </h2>
        </div>

        {/* แสดง Error message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm mb-6">
            {error}
          </div>
        )}

        <div className="space-y-6">
          {/* Input Username (เปลี่ยนจาก ชื่อผู้ใช้ เป็น Email) */}
          <div>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition placeholder-gray-500"
              placeholder="Email"
              disabled={isLoading}
              autoComplete="username"
            />
          </div>

          {/* Input Password */}
          <div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
              className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition placeholder-gray-500"
              placeholder="password"
              disabled={isLoading}
              autoComplete="current-password"
            />
          </div>

          {/* ปุ่ม Login */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full text-white py-2 rounded-lg font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed bg-blue-200 hover:bg-blue-500 text-gray-700 border border-gray-300 shadow-sm`}
          >
            {isLoading ? "กำลังเข้าสู่ระบบ..." : "Login"}
          </button>
        </div>

        {/* ส่วนที่ไม่ได้แสดงในภาพ แต่เก็บไว้เพื่อใช้งานได้ */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            ยังไม่มีบัญชี?{" "}
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              สมัครสมาชิก
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;