import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, ShoppingCart, DollarSign, ArrowUp, ArrowDown } from 'lucide-react';
import React, { useState } from 'react';

const AdminDashboard = () => {
  const [timeRange, setTimeRange] = useState('7days');

  // ข้อมูลสำหรับกราฟเส้น - ยอดขายรายวัน
  const salesData = [
    { date: '01/11', sales: 4200, orders: 24 },
    { date: '02/11', sales: 3800, orders: 21 },
    { date: '03/11', sales: 5100, orders: 28 },
    { date: '04/11', sales: 4600, orders: 25 },
    { date: '05/11', sales: 6200, orders: 32 },
    { date: '06/11', sales: 5800, orders: 30 },
    { date: '07/11', sales: 7100, orders: 38 },
  ];

  // ข้อมูลสำหรับกราฟแท่ง - ยอดขายตามหมวดหมู่
  const categoryData = [
    { category: 'อิเล็กทรอนิกส์', value: 12500 },
    { category: 'แฟชั่น', value: 8900 },
    { category: 'อาหาร', value: 6700 },
    { category: 'บ้าน', value: 5200 },
    { category: 'กีฬา', value: 4100 },
  ];

  // ข้อมูลสำหรับกราฟวงกลม
  const customerData = [
    { name: 'ลูกค้าใหม่', value: 35 },
    { name: 'ลูกค้าเก่า', value: 65 },
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
  const PIE_COLORS = ['#3b82f6', '#10b981'];

  const stats = [
    {
      title: 'ร่ายได้รวม',
      value: '฿47,250',
      change: '+12.5%',
      isPositive: true,
      icon: DollarSign,
      bgColor: 'bg-primary',
    },
    {
      title: 'จำนวนงาน',
      value: '198',
      change: '+8.2%',
      isPositive: true,
      icon: ShoppingCart,
      bgColor: 'bg-success',
    },

  ];

  return (
    <div className="p-4" style={{ width: '100%', minHeight: '100vh', marginLeft: '14rem' }}>
      {/* Header */}
      <div className="mb-4">
        <h1 className="fs-2 fw-bold">Admin Dashboard</h1>
        <p className="text-muted">ภาพรวมข้อมูลธุรกิจของคุณ</p>
      </div>

      {/* Time Range Selector */}
      <div className="mb-4">
        <div className="btn-group" role="group">
          <button
            type="button"
            className={`btn ${timeRange === '7days' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setTimeRange('7days')}
          >
            7 วัน
          </button>
          <button
            type="button"
            className={`btn ${timeRange === '30days' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setTimeRange('30days')}
          >
            30 วัน
          </button>
          <button
            type="button"
            className={`btn ${timeRange === '90days' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setTimeRange('90days')}
          >
            90 วัน
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-3 mb-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="col-12 col-md-6 col-lg-3 w-50">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className={`${stat.bgColor} text-white p-3 rounded`}>
                      <Icon size={24} />
                    </div>
                    <div className={`fw-bold ${stat.isPositive ? 'text-success' : 'text-danger'}`}>
                      {stat.isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                      {stat.change}
                    </div>
                  </div>
                  <h6 className="text-muted mb-1">{stat.title}</h6>
                  <h3 className="fw-bold mb-0">{stat.value}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row 1 */}
      <div className="row g-3 mb-4">
        {/* Line Chart */}
        <div className="col-12 col-lg-6 w-100">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-3">ยอดขายรายวัน</h5>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="#0d6efd" strokeWidth={2} name="ยอดขาย (฿)" />
                  <Line type="monotone" dataKey="orders" stroke="#198754" strokeWidth={2} name="จำนวนออเดอร์" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-3">
        
      </div>

    </div>
  );
};

export default AdminDashboard;