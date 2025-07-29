import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text" >
        <h1> Mada Walabu General Construction PLC</h1>
        <p>We deliver quality, cost-effective building solutions 
           through modern technologies and experienced professionals, 
           committed to exceeding client expectations nationwide.</p>
       <Link to="about-section" smooth={true} offset={0} duration={500}> <button className='btn'>Explore more<img src={dark_arrow}/></button> </Link>
      </div>
    </div>
  )
}

export default Hero
