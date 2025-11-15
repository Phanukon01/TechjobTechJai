// --- User Data (จาก user.jsx) ---
// ข้อมูลผู้ใช้ที่กำหนดไว้
export const users = [
  // ผู้ใช้งานทั่วไป
  { user: 'user', pass: 'pass', role: 'user', token: 'user-token-123', type: 'user' },
  // ผู้ดูแลระบบ
  { user: 'admin', pass: 'admin', role: 'admin', token: 'admin-token-456', type: 'admin' },
];


// /**
//  * ฟังก์ชันสำหรับตรวจสอบข้อมูลผู้ใช้
//  * @param {string} user - ชื่อผู้ใช้
//  * @param {string} pass - รหัสผ่าน
//  * @returns {object|null} - คืนค่าข้อมูลผู้ใช้ (role, token, type) หรือ null ถ้าไม่พบ
//  */
// export function verifyUser(user, pass) {
//   const userFound = users.find((u) => {
//     return u.user === user && u.pass === pass;
//   });

//   // คืนค่าข้อมูลผู้ใช้ { role, token, type } หรือ null
//   return userFound ? { role: userFound.role, token: userFound.token, type: userFound.type }
//     : null;
// }