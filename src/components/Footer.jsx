import { NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/Footer.scss';
import logo from '../assets/kasa-logo.png';

function Footer() {
const location = useLocation();

  useEffect(() => {
    document.title = `Kasa - ${location.pathname === '/' ? 'Accueil' : 'About'}`;
  }, [location.pathname]);
  
  return (
      <div className='footer'>
        <nav>
            <NavLink to="/">
              <img src={logo} alt="Logo Kasa" />
            </NavLink>
        </nav>
        <span>© 2020 Kasa. All rights reserved</span>
      </div>
  );
}

export default Footer;