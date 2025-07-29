import React, { useEffect } from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="hero">
      <div className="overlay"></div>
      <div className="hero-text" data-aos="fade-up">
        <h1>Mada Walabu General Construction PLC</h1>
        <p>
          We deliver quality, cost-effective building solutions 
          through modern technologies and experienced professionals, 
          committed to exceeding client expectations nationwide.
        </p>
        <Link to="about-section" smooth={true} offset={-50} duration={500}>
          <button className="btn">
            Explore More <img src={dark_arrow} alt="arrow icon" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
