import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const AppNavbar = () => {
    const location = useLocation()
    const [activeMenu, setActiveMenu] = useState(location.pathname)
    
    useEffect(() => {
        setActiveMenu(location.pathname)
    }, [location.pathname])
    
    return (
        <div className="border-1" style={{width: '14rem', backgroundColor: 'black', position: 'fixed', height: '100vh'  }}>
            
            
            <div className="d-flex align-items-center">
                <Link to="/setting">
                    <button className="btn btn-outline-primary m-2 rounded-5">1</button>
                </Link>
                <span className='text-light'>DATA</span>
            </div>

            <p className='mt-2 text-light mx-4'>Main Menu</p>
            
            <Link to="/admin">
                <button
                    className={`btn mb-2 w-100 ${activeMenu === '/admin' ? 'btn-light' : 'text-light'}`}
                    onClick={() => setActiveMenu('/admin')}
                >
                    DashBoard
                </button>
            </Link>
            <Link to="/work">
                <button 
                    className={`btn mb-2 w-100 ${activeMenu === '/work' ? 'btn-light' : 'text-light'}`}
                    onClick={() => setActiveMenu('/work')}
                >
                    งาน
                </button>
            </Link>
            
            
            <Link to="/record">
                <button 
                    className={`btn mb-2 w-100 ${activeMenu === '/record' ? 'btn-light' : 'text-light'}`}
                    onClick={() => setActiveMenu('/record')}
                >
                    ประวัติงาน
                </button>
            </Link>
            
            <Link to="/account">
                <button 
                    className={`btn mb-2 w-100 ${activeMenu === '/account' ? 'btn-light' : 'text-light'}`}
                    onClick={() => setActiveMenu('/account')}
                >
                    จัดการบัญชี
                </button>
            </Link>
            
            <Link to="/setting">
                <button 
                    className={`btn  ${activeMenu === '/setting' ? 'btn-light' : 'text-light'}`} style={{ position: 'absolute', bottom: '0.2rem', left: '0.3rem' }}
                    onClick={() => setActiveMenu('/setting')}
                >
                    <i className="bi bi-gear"></i>
                </button>
            </Link>
        </div>
    )
}

export default AppNavbar