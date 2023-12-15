import { NavLink } from 'react-router-dom';
import '../styles/Footer.scss';
import logo from '../assets/kasa-logo.png';

function Footer() {  
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