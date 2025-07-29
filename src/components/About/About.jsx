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
        {[
          {
            icon: <FaBuilding className="about-icon" />,
            title: 'Company Background',
            text:
              'Mada Walabu General Construction PLC is a Grade Three (GC-3) contractor certified by the Federal Construction Authority and Grade Four (GC-4) in Oromia. Originally founded in 2004 E.C. as Mada Welabu Construction Enterprise, it evolved to its current form in 2010 E.C.',
          },
          {
            icon: <FaHardHat className="about-icon" />,
            title: 'Professional Expertise',
            text:
              'Over a decade of expertise has made MWGC a competitive force in Ethiopia’s construction sector. We specialize in delivering high-quality infrastructure through highly technical and disciplined professionals.',
          },
          {
            icon: <FaCogs className="about-icon" />,
            title: 'Principles',
            text:
              'Our work is guided by principles of integrity, client satisfaction, and efficient resource utilization. We leverage modern technologies to exceed expectations and deliver consistent results.',
          },
          {
            icon: <FaHandsHelping className="about-icon" />,
            title: 'Community Commitment',
            text:
              'We invest in community development and youth employment. Corporate social responsibility is embedded in our values, aiming for long-term positive impact.',
          },
        ].map((item, index) => (
          <div className="about-card" key={index}>
            {item.icon}
            <div>
              <h3 className="about-heading">{item.title}</h3>
              <p className="about-paragraph">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="company-status" ref={ref}>
        <h3 className="status-title">Company Status</h3>
        <div className="status-cards">
          <div className="status-item">
            <FaUserTie className="status-icon" />
            <p className="status-value">{startCount && <CountUp end={20} duration={2} />}+</p>
            <p className="status-label">Employees</p>
          </div>
          <div className="status-item">
            <FaProjectDiagram className="status-icon" />
            <p className="status-value">{startCount && <CountUp end={30} duration={2} />}+</p>
            <p className="status-label">Completed Projects</p>
          </div>
          <div className="status-item">
            <FaAward className="status-icon" />
            <p className="status-value">{startCount && <CountUp end={12} duration={2} />}</p>
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
              {[Shagar, Sidama, MT, ORT].map((img, idx) => (
                <img key={idx} src={img} alt={`partner-${idx}`} />
              ))}
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
              To build lasting relationships with our clients by delivering high-quality,
              cost-effective solutions through integrity, performance, and value.
            </p>
          </div>
          <div className="mvv-card">
            <FaDraftingCompass className="mvv-icon" />
            <h3>Our Vision</h3>
            <p>
              To become a nationally recognized and trusted construction partner for both
              public and private clients, known for excellence and innovation.
            </p>
          </div>
          <div className="mvv-card">
            <FaTools className="mvv-icon" />
            <h3>Our Core Values</h3>
            <ul>
              <li><strong>Customer First:</strong> We prioritize our clients.</li>
              <li><strong>Accountability:</strong> We honor our commitments.</li>
              <li><strong>Operational Excellence:</strong> We deliver with quality and speed.</li>
              <li><strong>Skilled Teams:</strong> We train and trust our people.</li>
              <li><strong>Growth Culture:</strong> We invest in future leaders.</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
