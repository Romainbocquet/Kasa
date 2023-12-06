// import { NavLink, useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
import banner from '../assets/banner.png';
import '../styles/Banner.scss';


function Banner() {  
  return (
    <div className='banner'>
      <img src={banner} alt="" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;