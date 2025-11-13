



import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const UserNavbar = () => {
    const location = useLocation()
    const [activeMenu, setActiveMenu] = useState(location.pathname)

    useEffect(() => {
        setActiveMenu(location.pathname)
    }, [location.pathname])

    return (
        <div>
        <div class="p-4 bg-black text-white" style={{ width: '14rem', height: '100vh' }}>
            <div className='p-2 mt-2 text-light mx-4 border-1 '>
                login
            </div>
            <p>เมนูหลัก</p>
            <Link to="/user">
                <button
                    className={`btn mb-2 w-100 ${activeMenu === '/user' ? 'btn-light' : 'text-light'}`}
                    onClick={() => setActiveMenu('/user')}
                >
                    DashBoard
                </button>
            </Link>
            <Link to="/calendar">
                <button
                    className={`btn mb-2 w-100 ${activeMenu === '/user' ? 'btn-light' : 'text-light'}`}
                    onClick={() => setActiveMenu('/calendar')}
                >
                    Calendar
                </button>
            </Link>
            <Link to="/work-worksheet">
            <button className={`btn mb-2 w-100 ${activeMenu === '/user' ? 'btn-light' : 'text-light'}`}>
                Work sheet
            </button>
            </Link>
        </div>
        <Link to="/notification">
            <button className='position-absolute top-0 end-0 p-2' onClick={() => setActiveMenu('/notification')}>Notification<i className='bi bi-bell'></i></button>
        </Link>
        </div>
    )
}

export default UserNavbar