import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/mgc.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {

     const [sticky, setSticky] = useState(false);

      useEffect(()=> {
           window.addEventListener('scroll', ()=>{
             window.scrollY > 50 ? setSticky(true) : setSticky(false);
           })
      }, []);

      const [mobileMenu, setMobileMenu] = useState(false);
      const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
      }

  return (
    <nav className={`container ${sticky? 'dark-nav' : '' }`}>
       <img src={logo} alt="Logo" className='logo' />
      
         <ul className={mobileMenu?'':'hide-mobile-menu'} >
  <li>
    <Link to="hero" smooth={true} offset={0} duration={500}>
      Home
    </Link>
  </li>
  <li>
    <Link to="projects-wrapper" smooth={true} offset={-260} duration={500}>
      Projects
    </Link>
  </li>
  <li>
    <Link to="about-section" smooth={true} offset={-135} duration={500}>
      About us
    </Link>
  </li>
  <li>
    <Link to="team-section" smooth={true} offset={-170} duration={500}>
      Our Team
    </Link>
  </li>
  <li>
    <Link to="our-services" smooth={true} offset={-120} duration={500}>
      Services
    </Link>
  </li>
  <li>
    <Link to="contact" smooth={true} offset={-240} duration={500}>
      <button className="btn">Contact us</button>
    </Link>
  </li>
</ul>
 <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
