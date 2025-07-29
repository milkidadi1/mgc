import React from 'react';
import './ourteam.css';
import team1 from '../../assets/user-1.png';
import team2 from '../../assets/user-2.png';
import team3 from '../../assets/user-3.png';
import { FaUserTie, FaEnvelope } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Tolessa Moti',
    role: 'Founder & CEO',
    img: team1,
    contact: 'tolessa@example.com',
  },
  {
    name: 'Person2',
    role: 'General Manager',
    img: team2,
    contact: 'person2@example.com',
  },
  {
    name: 'Person3',
    role: 'Project Manager',
    img: team3,
    contact: 'person3@example.com',
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role"><FaUserTie /> {member.role}</p>
            <p className="team-contact">
              <FaEnvelope /> <a href={`mailto:${member.contact}`}>{member.contact}</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
