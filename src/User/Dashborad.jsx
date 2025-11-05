import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-blue-600">User Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">ระบบสำหรับผู้ใช้งานทั่วไป</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
        
        <p className="mt-4 text-lg">Welcome, <span className="font-semibold">{user?.email}</span></p>
        <p className="text-sm text-blue-600 mt-2">Role: <span className="font-medium uppercase">{user?.role}</span></p>
        
        {/* User Content */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">โปรไฟล์ของฉัน</h3>
            <p className="text-gray-600">ดูและแก้ไขข้อมูลส่วนตัว</p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg border-2 border-green-200">
            <h3 className="text-xl font-semibold text-green-700 mb-2">กิจกรรมของฉัน</h3>
            <p className="text-gray-600">ดูประวัติและกิจกรรมการใช้งาน</p>
          </div>
          <div className="p-6 bg-yellow-50 rounded-lg border-2 border-yellow-200">
            <h3 className="text-xl font-semibold text-yellow-700 mb-2">การแจ้งเตือน</h3>
            <p className="text-gray-600">ดูข้อความและการแจ้งเตือนต่างๆ</p>
          </div>
          <div className="p-6 bg-pink-50 rounded-lg border-2 border-pink-200">
            <h3 className="text-xl font-semibold text-pink-700 mb-2">ความช่วยเหลือ</h3>
            <p className="text-gray-600">คำถามที่พบบ่อยและการติดต่อ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;