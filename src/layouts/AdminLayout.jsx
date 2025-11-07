import React from 'react';
import { Outlet } from 'react-router-dom';
import AppFooter from "../Menu/AppFooter"
import AppHeader from "../Menu/AppHeader"
import AppNavbar from "../Menu/AppNavbar"



const AdminLayout = () => {
  
  return (
        <div className="d-flex mx-auto " style={{width: '100%', height: '100vh'}}>
            {/* <AppHeader /> */}
            <AppNavbar />
            <Outlet />
            {/* <AppFooter /> */}
        </div>
  );
}

export default AdminLayout;
