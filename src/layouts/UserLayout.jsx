

import React from 'react';
import { Outlet } from 'react-router-dom';
import UserNavbar from "../Menu/UserNavbar"
const UserLayout = () => {
    return (
        <div className="d-flex mx-auto " style={{width: '100%', height: '100vh'}}>
            {/* <AppHeader /> */}
            <UserNavbar />
            <Outlet />
            {/* <AppFooter /> */}
        </div>

    )
}     
export default UserLayout;        
