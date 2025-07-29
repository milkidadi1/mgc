import React, { useState } from 'react';
import './About.css';
import {
  FaBuilding,
  FaHardHat,
  FaCogs,
  FaUserTie,
  FaProjectDiagram,
  FaAward,
  FaHandsHelping,
  FaDraftingCompass,
  FaTools,
} from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import Shagar from '../../assets/shaggar.png';
import Sidama from '../../assets/sidama.png';
import MT from '../../assets/MT.png';
import ORT from '../../assets/ORT.png';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  if (inView && !startCount) setStartCount(true);

  return (
    <section className="about-section">
      <h2 className="about-main-title">About Us</h2>

      <div className="about-horizontal">
        <div className="about-card">
          <FaBuilding className="about-icon" />
          <div>
            <h3 className="about-heading">Company Background</h3>
            <p className="about-paragraph">
              Mada Walabu General Construction PLC (MWGC) is a Grade Three (GC-3) contractor recognized by the Federal Construction Authority and Grade Four (GC-4) by the Oromia Construction Authority. Originally established in 2004 E.C. as Mada Welabu Construction Enterprise, it was rebranded in 2010 E.C.
            </p>
          </div>
        </div>

        <div className="about-card">
          <FaHardHat className="about-icon" />
          <div>
            <h3 className="about-heading">Professional Expertise</h3>
            <p className="about-paragraph">
              With over a decade of experience, MWGC has emerged as a competitive and trusted firm in Ethiopia's construction sector. We specialize in delivering complex, high-quality infrastructure with a team of highly technical and disciplined professionals.
            </p>
          </div>
        </div>

        <div className="about-card">
          <FaCogs className="about-icon" />
          <div>
            <h3 className="about-heading">Principles</h3>
            <p className="about-paragraph">
              We are driven by a mission to become one of the country’s leading construction firms—leveraging cost-effective and modern technologies to exceed our clients’ expectations. At the core of our operations are our core principles: client satisfaction, trusted human capital, and efficient resource deployment.
            </p>
          </div>
        </div>

        <div className="about-card">
          <FaHandsHelping className="about-icon" />
          <div>
            <h3 className="about-heading">Community Commitment</h3>
            <p className="about-paragraph">
              Beyond business, we are committed to positively impacting the communities we serve. MWGC invests in local development and empowers youth through employment and training programs aligned with our corporate social responsibility values.
            </p>
          </div>
        </div>
      </div>

      <div className="company-status" ref={ref}>
        <h3 className="status-title">Company Status</h3>
        <div className="status-cards">
          <div className="status-item">
            <FaUserTie className="status-icon" />
            <p className="status-value">
              {startCount && <CountUp end={20} duration={2} />}+
            </p>
            <p className="status-label">Employees</p>
          </div>

          <div className="status-item">
            <FaProjectDiagram className="status-icon" />
            <p className="status-value">
              {startCount && <CountUp end={30} duration={2} />}+
            </p>
            <p className="status-label">Completed Projects</p>
          </div>

          <div className="status-item">
            <FaAward className="status-icon" />
            <p className="status-value">
              {startCount && <CountUp end={12} duration={2} />}
            </p>
            <p className="status-label">Years of Experience</p>
          </div>
        </div>
      </div>

      <section className="trusted-section">
        <div className="trusted-bar-content">
          <div className="trusted-partner-text">
            <p>
              MWGC'S<br />
              <strong>Trusted Partners</strong>
            </p>
          </div>
          <div className="trusted-vertical-line"></div>
          <div className="trusted-scroll-container">
            <div className="trusted-logos">
              <img src={Shagar} alt="Shagar" />
              <img src={Sidama} alt="Sidama" />
              <img src={MT} alt="Ministry of Transport" />
              <img src={ORT} alt="Roads and Transport" />
            </div>
          </div>
        </div>
      </section>

      <section className="mvv-section">
        <h2 className="mvv-title">Who We Are</h2>
        <div className="mvv-cards">
          <div className="mvv-card">
            <FaHardHat className="mvv-icon" />
            <h3>Our Mission</h3>
            <p>
              To build long-term relationships with our clients through integrity,
              performance, and value, while consistently delivering high-quality
              construction solutions that exceed expectations.
            </p>
          </div>
          <div className="mvv-card">
            <FaDraftingCompass className="mvv-icon" />
            <h3>Our Vision</h3>
            <p>
              To be a recognized and respected leader in Ethiopia’s construction
              industry and the preferred choice for public and private sector clients.
            </p>
          </div>
          <div className="mvv-card">
            <FaTools className="mvv-icon" />
            <h3>Our Core Values</h3>
            <ul>
              <li><strong>Customer First:</strong> We prioritize client needs.</li>
              <li><strong>Accountable:</strong> We deliver on our promises.</li>
              <li><strong>Operational Excellence:</strong> We ensure quality and speed.</li>
              <li><strong>Skilled Teams:</strong> We train and trust our people.</li>
              <li><strong>Growth Culture:</strong> We support team development.</li>

            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
