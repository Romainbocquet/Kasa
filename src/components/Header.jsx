import { NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/Header.scss';
import logo from '../assets/kasa-logo.png';

function Header() {
    const location = useLocation();
  
    useEffect(() => {
      if (location.pathname === '/') {
        document.title = 'Kasa - Accueil';
      } else if (location.pathname.includes('/accommodation')) {
        document.title = 'Kasa - Accomodation';
      } else if (location.pathname.includes('/about')) {
        document.title = 'Kasa - About';
      } else {
        document.title = 'Kasa - 404';
      }
    }, [location.pathname]);

  return (
    
      <div className='header'>
        <NavLink to="/">
          <img src={logo} alt="Logo Kasa" />
        </NavLink>
        <nav>
            <NavLink to="/">
                Accueil
            </NavLink>
            <NavLink to="/about">
                About
            </NavLink>
        </nav>
        </div>
  );
}

export default Header;