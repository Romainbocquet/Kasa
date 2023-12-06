import { NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/Header.scss';
import logo from '../assets/kasa-logo.png';

function Header() {
  const location = useLocation();

  useEffect(() => {
    document.title = `Kasa - ${location.pathname === '/' ? 'Accueil' : 'About'}`;
  }, [location.pathname]);
  
  return (
    
      <div className='header'>
        <img src={logo} alt="Logo Kasa" />
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