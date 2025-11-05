import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
        <p className="mt-4 text-lg">Welcome, <span className="font-semibold">{user?.username}</span></p>
        <p className="text-sm text-blue-600 mt-2">Role: <span className="font-medium">{user?.role}</span></p>
        
        {/* เนื้อหาเพิ่มเติมของ Dashboard */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Dashboard Content</h2>
          <p className="text-gray-600">
            {user?.role === 'admin' 
              ? 'คุณมีสิทธิ์ผู้ดูแลระบบ - สามารถจัดการข้อมูลทั้งหมดได้'
              : 'คุณเข้าสู่ระบบในฐานะผู้ใช้ทั่วไป'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;