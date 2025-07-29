import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Title from './components/Title/title'
import About from './components/About/About'
import OurServices from './components/ourservices/ourservices'
import OurTeam from './components/ourteam/ourteam'
import Contact from './components/contact/contact'
import Footer from './components/Footer/footer'

const App = () => {
  return (
    <div>   
      <Navbar/>
      <Hero/>
      <div className="container">
         <Title subTitle='Delivering impact across Ethiopia' title='Our Projects'/>
         <Projects/>
         <About/>
         <OurTeam/>
         <OurServices/>
         <Title subTitle='Get in touch' title='Contact Us'/>
         <Contact />
      </div>
      <Footer /> {/* This is now outside of the container */}
    </div>
  )
}

export default App
