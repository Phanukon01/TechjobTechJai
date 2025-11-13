


import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts'

// ข้อมูลตัวอย่างสำหรับแสดงในแผนภูมิ
const data = [
  { name: 'ม.ค.', sales: 4000, uv: 2400, amt: 2400 },
  { name: 'ก.พ.', sales: 3000, uv: 1398, amt: 2210 },
  { name: 'มี.ค.', sales: 6800, uv: 9800, amt: 2290 },
  { name: 'เม.ย.', sales: 2780, uv: 3908, amt: 2000 },
  { name: 'พ.ค.', sales: 5890, uv: 4800, amt: 2181 },
  { name: 'มิ.ย.', sales: 2390, uv: 3800, amt: 2500 },
  { name: 'ก.ค.', sales: 7490, uv: 4300, amt: 2100 },
]

const UserDashboard = () => {

  return (
  <div className='p-4' style={{ width: '95%', height: '80vh' }}>
    <h1>User Dashboard</h1>
    <div style={{width:'50%', height:'50vh'}}>
    <h3>ระดับการทำงานสำเร็จ</h3>
      {/* ภาชนะที่ปรับขนาดได้ (Responsive Container) เพื่อให้แผนภูมิปรับตามหน้าจอ */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* เส้นตารางหลังแผนภูมิ */}
          <CartesianGrid strokeDasharray="3 3" />
          
          {/* แกน X: แสดงชื่อเดือน */}
          <XAxis dataKey="name" />
          
          {/* แกน Y: แสดงค่าตัวเลขยอดขาย */}
          <YAxis />
          
          {/* Tooltip: แสดงข้อมูลเมื่อเอาเมาส์ไปชี้ */}
          <Tooltip />
          
          {/* Legend: คำอธิบายสีของแท่ง */}
          <Legend />
          
          {/* Bar: แท่งแผนภูมิจริง ๆ (แสดงค่าจาก dataKey="sales") */}
          <Bar dataKey="sales" fill="#" name="ยอดขาย (Sales)" />
        </BarChart>
      </ResponsiveContainer>
      </div>
  </div>
  )
}

export default UserDashboard