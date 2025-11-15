import { useState, useCallback, useMemo } from "react";
// Assuming this is the correct path and file structure for your user data
import { users } from "../data/user.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

// --- Helper function (Placeholder for your user data check) ---
// This function mimics the logic needed in the JSX to determine the current role
// based on the entered username, *before* login is attempted.
const checkUserType = (username) => {
  const foundUser = users.find((u) => u.user === username);
  return foundUser ? foundUser.role : null;
};
// ----------------------------------------------------------------

function Login({ onLogin }) {
  // 1. Updated State: Use 'username' and 'password' directly,
  // and add 'isLoading' which is used in the JSX.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // 'role', 'user', 'pass', 'form' state variables from original code are removed/replaced
  // as they are inconsistent or unused.

  // 2. Derive User Type for UI: Use useMemo for efficiency.
  const currentUserType = useMemo(() => {
    return username.trim() ? checkUserType(username) : null;
  }, [username]);

  // 3. Refined handleSubmit function
  const handleSubmit = useCallback(
    (e) => {
      // Prevent default form submission behavior if this were inside a <form>
      if (e) e.preventDefault(); 
      
      // Basic input validation
      if (!username || !password) {
        setError("กรุณากรอกอีเมลและรหัสผ่าน");
        return;
      }
      
      setError("");
      setIsLoading(true);

      // Simulate an async operation (like an API call)
      setTimeout(() => {
        const found = users.find(
          (u) => u.user === username && u.pass === password
        );

        if (!found) {
          setError("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
          setIsLoading(false);
          return;
        }

        // Successfully logged in
        onLogin(found.role);
        setIsLoading(false);
      }, 500); // Simulate network latency
    },
    [username, password, onLogin]
  );

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
      {/* Wrapped content in a form for semantic correctness, using onSubmit */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-10 border-t-8 border-blue-400"
      >
        {/* ส่วนปุ่มสลับ Admin/User (ใช้สำหรับแสดง UserType ที่ค้นพบ) */}
        <div className="flex bg-blue-50 p-1 rounded-full mb-8">
          {/* Admin Button - Highlights if username is found and is 'admin' */}
          <div
            className={`w-1/2 py-2 text-sm font-semibold transition text-center
              ${
                currentUserType === "admin"
                  ? "bg-blue-400 text-white shadow-md rounded-l-full"
                  : "text-gray-600 rounded-l-full"
              }`}
          >
            Admin
          </div>
          {/* User Button - Highlights if username is found and is NOT 'admin' */}
          <div
            className={`w-1/2 py-2 text-sm font-semibold transition text-center
              ${
                currentUserType && currentUserType !== "admin"
                  ? "bg-blue-400 text-white shadow-md rounded-r-full"
                  : "text-gray-600 rounded-r-full"
              }`}
          >
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
          {/* Input Username (Email) - Now correctly using 'username' state */}
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

          {/* Input Password - Now correctly using 'password' state */}
          <div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // onKeyDown for Enter key submission is now handled by the <form> onSubmit
              className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition placeholder-gray-500"
              placeholder="password"
              disabled={isLoading}
              autoComplete="current-password"
            />
          </div>

          {/* ปุ่ม Login - Using type="submit" for form handling */}
          <button
            type="submit" // Key change: Use type="submit" to trigger form's onSubmit
            disabled={isLoading}
            className={`w-full text-white py-2 rounded-lg font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed 
                ${
                  isLoading
                    ? "bg-blue-400 text-white" // Keep blue while loading
                    : "bg-blue-500 hover:bg-blue-600 shadow-md"
                }`}
          >
            {isLoading ? "กำลังเข้าสู่ระบบ..." : "Login"}
          </button>
        </div>

        {/* ส่วนที่ไม่ได้แสดงในภาพ แต่เก็บไว้เพื่อใช้งานได้ */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            ยังไม่มีบัญชี?{" "}
            <button
              type="button"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              สมัครสมาชิก
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;