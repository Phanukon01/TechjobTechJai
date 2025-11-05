import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-purple-600">Admin Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">ระบบจัดการผู้ดูแลระบบ</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
        
        <p className="mt-4 text-lg">Welcome, <span className="font-semibold">{user?.email}</span></p>
        <p className="text-sm text-purple-600 mt-2">Role: <span className="font-medium uppercase">{user?.role}</span></p>
        
        {/* Admin Content */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-purple-50 rounded-lg border-2 border-purple-200">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">จัดการผู้ใช้</h3>
            <p className="text-gray-600">ดูและจัดการข้อมูลผู้ใช้ทั้งหมด</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">รายงาน</h3>
            <p className="text-gray-600">ดูรายงานและสถิติของระบบ</p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg border-2 border-green-200">
            <h3 className="text-xl font-semibold text-green-700 mb-2">ตั้งค่า</h3>
            <p className="text-gray-600">ตั้งค่าระบบและการแจ้งเตือน</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;