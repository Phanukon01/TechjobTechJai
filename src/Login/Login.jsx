import { useState } from "react";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // ข้อมูล User ตัวอย่าง (ในระบบจริงให้เรียก API)
  const users = {
    // User ทั่วไป
    "user": { password: "user123", type: "user", fullName: "ผู้ใช้งานทั่วไป" },
    "john": { password: "john123", type: "user", fullName: "John Doe" },
    "alice": { password: "alice123", type: "user", fullName: "Alice Smith" },
    
    // Admin
    "admin": { password: "admin123", type: "admin", fullName: "ผู้ดูแลระบบ" },
    "superadmin": { password: "super123", type: "admin", fullName: "Super Admin" },
  };

  const checkUserType = (username) => {
    const user = users[username.toLowerCase()];
    return user ? user.type : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    // Validation
    if (!username || !password) {
      setError("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const user = users[username.toLowerCase()];
      
      if (user && user.password === password) {
        alert(`เข้าสู่ระบบสำเร็จ!\nสวัสดี ${user.fullName}\nประเภท: ${user.type === 'admin' ? 'ผู้ดูแลระบบ' : 'ผู้ใช้งานทั่วไป'}`);
        
        // ส่งข้อมูลกลับไปยัง App component
        if (onLogin) {
          onLogin(username, user.type);
        }
      } else {
        setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      }
      
      setIsLoading(false);
    }, 1000);
  };

  // ตรวจสอบประเภทจากชื่อผู้ใช้ที่กรอก
  const currentUserType = username ? checkUserType(username) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            เข้าสู่ระบบ
          </h2>
          <p className="text-gray-600">
            กรุณากรอกชื่อผู้ใช้และรหัสผ่าน
          </p>
        </div>

        {/* แสดงประเภทผู้ใช้ที่ตรวจพบ */}
        {currentUserType && (
          <div className={`mb-4 p-3 rounded-lg border-2 ${
            currentUserType === 'admin' 
              ? 'bg-purple-50 border-purple-300 text-purple-700'
              : 'bg-blue-50 border-blue-300 text-blue-700'
          }`}>
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              {currentUserType === 'admin' ? '👨‍💼' : '👤'}
              <span>
                ตรวจพบ: {currentUserType === 'admin' ? 'ผู้ดูแลระบบ' : 'ผู้ใช้งานทั่วไป'}
              </span>
            </div>
          </div>
        )}

        <div className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              ชื่อผู้ใช้
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="username"
              disabled={isLoading}
              autoComplete="username"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              รหัสผ่าน
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="••••••••"
              disabled={isLoading}
              autoComplete="current-password"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="ml-2 text-sm text-gray-600">จดจำฉัน</span>
            </label>
            <button className="text-sm text-blue-600 hover:text-blue-700">
              ลืมรหัสผ่าน?
            </button>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full text-white py-3 rounded-lg font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed ${
              currentUserType === "admin"
                ? "bg-purple-600 hover:bg-purple-700 focus:ring-purple-500"
                : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
            }`}
          >
            {isLoading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            ยังไม่มีบัญชี?{" "}
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              สมัครสมาชิก
            </button>
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center mb-3 font-medium">
            👥 ข้อมูลทดลอง:
          </p>
          <div className="space-y-2">
            <div className="bg-blue-50 p-3 rounded text-xs">
              <p className="font-medium text-blue-700 mb-2">👤 ผู้ใช้งานทั่วไป:</p>
              <div className="space-y-1 text-blue-600">
                <p>• user / user123</p>
                <p>• john / john123</p>
                <p>• alice / alice123</p>
              </div>
            </div>
            <div className="bg-purple-50 p-3 rounded text-xs">
              <p className="font-medium text-purple-700 mb-2">👨‍💼 ผู้ดูแลระบบ:</p>
              <div className="space-y-1 text-purple-600">
                <p>• admin / admin123</p>
                <p>• superadmin / super123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;